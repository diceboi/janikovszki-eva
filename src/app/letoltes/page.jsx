"use client";

import { useState } from "react";
import { FaFilePdf, FaBook, FaEnvelope } from "react-icons/fa";

export default function LetoltesPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setVerifiedEmail(email);
      } else {
        setError(data.message || data.error || "Hiba történt az ellenőrzés során.");
      }
    } catch (err) {
      setError("Szerver hiba történt. Kérlek próbáld újra később.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream text-ink pt-24 pb-16 px-4">
      <div className="bg-white border border-ink/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-3xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 font-nunito text-coral">
          E-könyvek letöltése
        </h1>

        {!verifiedEmail ? (
          <>
            <p className="font-inter text-ink/80 mb-8">
              Kérlek, add meg azt az e-mail címet, amellyel a vásárlást végezted,
              hogy hozzáférj a letöltési linkekhez.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink/50">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="pelda@email.hu"
                  className="w-full pl-12 pr-4 py-4 bg-cream/50 border border-ink/20 rounded-xl focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                />
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-ink hover:bg-ink/90 text-white font-bold py-4 px-8 rounded-xl transition-colors disabled:opacity-70 flex justify-center"
              >
                {loading ? "Ellenőrzés folyamatban..." : "Letöltés indítása"}
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="bg-sunshine/10 rounded-2xl p-8 border border-sunshine/20">
              <p className="text-lg text-ink font-bold mb-2 font-nunito">
                Sikeres azonosítás!
              </p>
              <p className="text-ink/70 mb-6 font-inter">
                A következő e-mail címmel jogosult vagy a letöltésre: <br />
                <span className="font-bold text-ink">{verifiedEmail}</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href={`/api/download?email=${encodeURIComponent(verifiedEmail)}&type=pdf`}
                  className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral/90 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300"
                >
                  <FaFilePdf size={20} />
                  Letöltés (PDF)
                </a>

                <a
                  href={`/api/download?email=${encodeURIComponent(verifiedEmail)}&type=epub`}
                  className="inline-flex items-center justify-center gap-2 bg-sky hover:bg-sky/90 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300"
                >
                  <FaBook size={20} />
                  Letöltés (EPUB)
                </a>
              </div>
            </div>
            
            <button 
              onClick={() => {
                setVerifiedEmail(null);
                setEmail("");
              }}
              className="mt-8 text-ink/60 hover:text-coral underline text-sm font-medium transition-colors"
            >
              Másik e-mail címet adok meg
            </button>
          </>
        )}
      </div>
    </div>
  );
}
