"use client";

import { useState } from "react";
import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import Handwritten from "@/components/ui/typography/Handwritten";
import MainButton from "@/components/ui/buttons/MainButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import Image from "next/image";
import Star from "@/components/decorations/Star";
import Doodle from "@/components/decorations/Doodle";
import { FaBookReader, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

export default function Closing() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handlePreorder = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/preorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Hiba történt a feliratkozás során.");
      }
    } catch (err) {
      console.error("Preorder error:", err);
      setErrorMsg("Hálózati hiba történt. Kérlek próbáld újra később.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="zaras"
      className="relative bg-cream px-6 py-20 lg:px-8 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <Image src="/spacer.webp" alt="Díszítő elem" width={140} height={20} className="mx-auto mb-8 object-contain" />

        <H2 className="mb-6">
          <span className="text-coral">Merülj el</span> az ismerős, mindennapi,
          mai élethelyzetekben
        </H2>

        <Paragraph className="max-w-2xl mx-auto mb-12" color="text-ink/80">
          ...és hagyd, hogy közben megérintsen a gyerekkorod olvasási élménye!
        </Paragraph>

        {/* Pre-order card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-sunshine/20 max-w-xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaCalendarAlt className="text-coral" />
            <Handwritten animate={false} color="text-coral" className="text-xl">
              Nyomtatott kiadás — 2026. november
            </Handwritten>
          </div>

          <h3 className="font-nunito font-bold text-xl text-ink mb-6">
            Csatlakozz az első olvasókhoz!
          </h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 py-4"
            >
              <FaCheckCircle className="text-mint text-4xl" />
              <p className="font-nunito font-bold text-ink">
                Köszönjük! Értesítünk, amint elérhető!
              </p>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-2">
              <form
                onSubmit={handlePreorder}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email címed"
                  className="flex-1 rounded-full border-2 border-ink/10 bg-cream px-6 py-3.5 font-inter text-ink placeholder:text-text-muted/50 focus:border-coral focus:outline-none focus:ring-4 focus:ring-coral/10 transition-all"
                />
                <MainButton
                  color="bg-coral"
                  hoverColor="hover:bg-coral-hover"
                  iconBefore={<FaBookReader />}
                  className="whitespace-nowrap"
                  disabled={submitting}
                >
                  {submitting ? "Küldés..." : "Előrendelem!"}
                </MainButton>
              </form>
              {errorMsg && (
                <p className="text-red-500 font-inter text-sm font-semibold mt-1">
                  {errorMsg}
                </p>
              )}
            </div>
          )}

          <p className="font-inter text-text-muted/60 text-xs mt-6">
            Várható megjelenés: 2026. november
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-ink/5 pt-12 pb-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
          
          {/* Impresszum */}
          <div>
            <h4 className="font-nunito font-bold text-ink mb-4">Impresszum</h4>
            <ul className="font-inter text-ink/60 text-sm space-y-2">
              <li><strong>Cégnév:</strong> Coreheed Consulting Kft.</li>
              <li><strong>Székhely:</strong> 2040 Budaörs, Ibolya utca 60.</li>
              <li><strong>Adószám:</strong> 32531813-1-13</li>
              <li><strong>Cégjegyzékszám:</strong> 13-09-233401</li>
              <li><strong>E-mail:</strong> <a href="mailto:info@coreheed.hu" className="hover:text-coral transition-colors">info@coreheed.hu</a></li>
            </ul>
          </div>

          {/* Jogi nyilatkozatok */}
          <div>
            <h4 className="font-nunito font-bold text-ink mb-4">Jogi információk</h4>
            <ul className="font-inter text-ink/60 text-sm space-y-2 flex flex-col">
              <li><a href="/aszf" className="hover:text-coral transition-colors underline underline-offset-2">Általános Szerződési Feltételek (ÁSZF)</a></li>
              <li><a href="/adatkezelesi-tajekoztato" className="hover:text-coral transition-colors underline underline-offset-2">Adatkezelési Tájékoztató</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-inter text-ink/40 text-xs">
            © {new Date().getFullYear()} Az érem két oldala. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </section>
  );
}
