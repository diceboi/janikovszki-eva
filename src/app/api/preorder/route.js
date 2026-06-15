import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const PREORDERS_FILE = join(process.cwd(), "private", "preorders.json");

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Érvénytelen email cím." },
        { status: 400 }
      );
    }

    // 1. Send to Google Sheets if configured
    if (process.env.GOOGLE_SHEET_WEBAPP_URL) {
      try {
        const sheetRes = await fetch(process.env.GOOGLE_SHEET_WEBAPP_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        
        const contentType = sheetRes.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const sheetData = await sheetRes.json();
          if (sheetData.success) {
            console.log(`Új előrendelés a Google Sheetbe: ${email}`);
            return Response.json({ message: sheetData.message });
          } else {
            console.error("Google Sheet error:", sheetData.error);
          }
        } else {
          const text = await sheetRes.text();
          console.error("Google Sheet nem JSON-t adott vissza (valószínűleg jogosultsági hiba). Válasz eleje:", text.substring(0, 100));
        }
      } catch (err) {
        console.error("Failed to send to Google Sheets:", err.message);
      }
    }

    // 2. Fallback: Save to local JSON file
    let preorders = [];
    try {
      const data = await readFile(PREORDERS_FILE, "utf-8");
      preorders = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start fresh
    }

    if (preorders.some((p) => p.email === email)) {
      return Response.json({ message: "Már feliratkoztál!" });
    }

    preorders.push({
      email,
      timestamp: new Date().toISOString(),
    });

    const { mkdir } = await import("fs/promises");
    await mkdir(join(process.cwd(), "private"), { recursive: true });
    await writeFile(PREORDERS_FILE, JSON.stringify(preorders, null, 2));

    console.log(`Új előrendelés mentve lokálisan: ${email}`);
    return Response.json({ message: "Sikeres feliratkozás!" });
  } catch (err) {
    console.error("Preorder error:", err.message);
    return Response.json(
      { error: "Hiba történt a feliratkozás során." },
      { status: 500 }
    );
  }
}
