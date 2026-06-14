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

  const handlePreorder = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/preorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Preorder error:", err);
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
              >
                {submitting ? "Küldés..." : "Előrendelem!"}
              </MainButton>
            </form>
          )}

          <p className="font-inter text-text-muted/60 text-xs mt-4">
            Várható megjelenés: 2026. november
          </p>
        </motion.div>
      </div>

      {/* Footer credits */}
      <div className="mt-20 text-center border-t border-ink/5 pt-8">
        <p className="font-inter text-text-muted/40 text-xs">
          © {new Date().getFullYear()} Az érem két oldala. Minden jog
          fenntartva.
        </p>
      </div>
    </section>
  );
}
