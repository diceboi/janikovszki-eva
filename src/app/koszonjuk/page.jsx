import Stripe from "stripe";
import { FaFilePdf, FaBook, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function KoszonjukPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const session_id = resolvedSearchParams?.session_id;

  if (!session_id) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-cream text-ink">
        <div className="text-center p-8 max-w-xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-ink/60 hover:text-coral transition-colors mb-6 font-medium text-sm hover:underline">
            <FaArrowLeft size={12} />
            Vissza a főoldalra
          </Link>
          <h1 className="text-3xl font-bold mb-4 font-nunito">Hiba történt</h1>
          <p className="text-lg text-ink/70 font-inter">
            A keresett oldal nem található vagy hiányzik a vásárlási azonosító.
          </p>
        </div>
      </div>
    );
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch (error) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-cream text-ink">
        <div className="text-center p-8 max-w-xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-ink/60 hover:text-coral transition-colors mb-6 font-medium text-sm hover:underline">
            <FaArrowLeft size={12} />
            Vissza a főoldalra
          </Link>
          <h1 className="text-3xl font-bold mb-4 font-nunito">Hiba történt</h1>
          <p className="text-lg text-ink/70 font-inter">
            Nem található érvényes vásárlás.
          </p>
        </div>
      </div>
    );
  }

  if (session.payment_status !== "paid") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-cream text-ink">
        <div className="text-center p-8 max-w-xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-ink/60 hover:text-coral transition-colors mb-6 font-medium text-sm hover:underline">
            <FaArrowLeft size={12} />
            Vissza a főoldalra
          </Link>
          <h1 className="text-3xl font-bold mb-4 font-nunito">Sikertelen fizetés</h1>
          <p className="text-lg text-ink/70 font-inter">
            Nem található érvényes vásárlás vagy a fizetés még nem teljesült.
          </p>
        </div>
      </div>
    );
  }

  const customerEmail = session.customer_details?.email;

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream text-ink pt-24 pb-16 px-4">
      <div className="bg-white border border-ink/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-3xl p-10 max-w-2xl w-full text-center">
        <div className="flex justify-center w-full mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-ink/60 hover:text-coral transition-colors font-medium text-sm hover:underline">
            <FaArrowLeft size={12} />
            Vissza a főoldalra
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-6 font-nunito text-coral">
          Köszönjük a vásárlást!
        </h1>

        {customerEmail && (
          <p className="font-inter text-ink/80 mb-8">
            Sikeres tranzakció a következő e-mail címmel: <br />
            <span className="font-bold text-ink text-lg">
              {customerEmail}
            </span>
          </p>
        )}

        <div className="bg-sunshine/10 rounded-2xl p-8 border border-sunshine/20">
          <p className="text-lg text-ink font-bold mb-6 font-nunito">
            A digitális e-book fájlok (PDF és EPUB) letölthetők:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`/api/download?session_id=${session_id}&type=pdf`}
              className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral/90 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300"
            >
              <FaFilePdf size={20} />
              Letöltés (PDF)
            </a>
            
            <a
              href={`/api/download?session_id=${session_id}&type=epub`}
              className="inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky/90 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300"
            >
              <FaBook size={20} />
              Letöltés (EPUB)
            </a>
          </div>

          <p className="text-sm text-ink/70 mt-6 border-t border-ink/10 pt-6">
            <strong>Tipp:</strong> Ha később szeretnéd letölteni a könyveket, bármikor megteheted a <a href="/letoltes" className="text-coral hover:underline font-bold">Letöltés</a> oldalon az e-mail címed megadásával. Ezt az oldalt is javasoljuk elmenteni!
          </p>
        </div>
      </div>
    </div>
  );
}
