"use client";

import { useState } from "react";
import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import MainButton from "@/components/ui/buttons/MainButton";
import Star from "@/components/decorations/Star";
import { FaShoppingCart, FaSpinner } from "react-icons/fa";

export default function Purchase() {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_STRIPE_EBOOK_PRICE_ID || "price_placeholder",
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Hiba történt. Kérlek próbáld újra!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="vasarlas"
      className="relative bg-ink px-6 py-20 lg:px-8 lg:py-28 overflow-hidden"
    >
      {/* Gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,107,107,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Floating decorations */}
      <div className="absolute top-16 right-20 opacity-40 hidden md:block">
        <Star color="var(--sunshine)" size={36} />
      </div>
      <div className="absolute bottom-16 left-20 opacity-30 hidden md:block">
        <Star color="var(--coral)" size={28} />
      </div>

      <div className="mx-auto max-w-3xl text-center relative z-10">
        <H2 color="text-white" className="mb-6">
          Megveszem az{" "}
          <span className="text-coral">E-bookot</span>!
        </H2>

        <Paragraph color="text-white/70" className="mb-10 max-w-2xl mx-auto">
          Fedezd fel az érem mindkét oldalát! Digitális formátumban, azonnal
          letölthető a vásárlás után.
        </Paragraph>

        {/* Price card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 max-w-md mx-auto mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star color="var(--sunshine)" size={20} animate={false} />
            <span className="font-inter text-white/50 text-sm uppercase tracking-wider">
              E-book
            </span>
            <Star color="var(--sunshine)" size={20} animate={false} />
          </div>

          <h3 className="font-nunito font-extrabold text-5xl text-white mb-2">
            2 990 Ft
          </h3>
          <p className="font-inter text-white/40 text-sm mb-8">
            PDF + EPUB formátum
          </p>

          <ul className="space-y-3 text-left mb-8">
            {[
              "Azonnali letöltés a vásárlás után",
              "PDF és EPUB formátum",
              "Bárhol, bármikor olvasható",
              "Tökéletes ajándéknak is",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 font-inter text-white/70 text-sm"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-coral/20 flex items-center justify-center text-coral text-xs">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <MainButton
            onClick={handlePurchase}
            color="bg-coral"
            hoverColor="hover:bg-coral-hover"
            iconBefore={loading ? <FaSpinner className="animate-spin" /> : <FaShoppingCart />}
            className="w-full justify-center"
          >
            {loading ? "Átirányítás..." : "Megveszem az E-bookot!"}
          </MainButton>
        </motion.div>

        <p className="font-inter text-white/30 text-xs">
          Biztonságos fizetés a Stripe rendszerén keresztül. 🔒
        </p>
      </div>
    </section>
  );
}
