"use client";

import { motion } from "motion/react";
import H1 from "@/components/ui/typography/H1";
import Paragraph from "@/components/ui/typography/Paragraph";
import Handwritten from "@/components/ui/typography/Handwritten";
import MainButton from "@/components/ui/buttons/MainButton";
import Star from "@/components/decorations/Star";
import Doodle from "@/components/decorations/Doodle";
import { FaHome, FaBookOpen } from "react-icons/fa";

export default function KoszonjukPage() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-16 left-12 opacity-30">
        <Star color="var(--sunshine)" size={48} />
      </div>
      <div className="absolute bottom-20 right-16 opacity-25">
        <Star color="var(--coral)" size={36} />
      </div>
      <div className="absolute top-1/3 right-8 opacity-20">
        <Doodle color="var(--sky)" size={52} variant="heart" />
      </div>
      <div className="absolute bottom-1/4 left-8 opacity-20">
        <Doodle color="var(--mint)" size={44} variant="spiral" />
      </div>

      {/* Gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(125,219,163,0.12)_0%,transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="text-center max-w-xl relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring", bounce: 0.5 }}
          className="mb-8 text-7xl"
        >
          🎉
        </motion.div>

        <H1 className="mb-4" animate={false}>
          <span className="text-coral">Köszönjük</span> a vásárlást!
        </H1>

        <Handwritten
          as="p"
          className="block mb-6"
          animate={false}
          color="text-text-muted"
        >
          Jó olvasást kívánunk!
        </Handwritten>

        <Paragraph className="mb-10" animate={false} color="text-ink/70">
          A letöltési linket hamarosan megkapod e-mailben. Ha nem érkezik meg
          néhány percen belül, kérjük ellenőrizd a spam mappát is.
        </Paragraph>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MainButton href="/" iconBefore={<FaHome />}>
            Vissza a főoldalra
          </MainButton>
        </div>
      </motion.div>
    </main>
  );
}
