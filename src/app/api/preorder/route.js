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

    // Read existing preorders
    let preorders = [];
    try {
      const data = await readFile(PREORDERS_FILE, "utf-8");
      preorders = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start fresh
    }

    // Check if email already exists
    if (preorders.some((p) => p.email === email)) {
      return Response.json({ message: "Már feliratkoztál!" });
    }

    // Add new preorder
    preorders.push({
      email,
      timestamp: new Date().toISOString(),
    });

    // Ensure directory exists and save
    const { mkdir } = await import("fs/promises");
    await mkdir(join(process.cwd(), "private"), { recursive: true });
    await writeFile(PREORDERS_FILE, JSON.stringify(preorders, null, 2));

    console.log(`Új előrendelés: ${email}`);

    return Response.json({ message: "Sikeres feliratkozás!" });
  } catch (err) {
    console.error("Preorder error:", err.message);
    return Response.json(
      { error: "Hiba történt a feliratkozás során." },
      { status: 500 }
    );
  }
}
