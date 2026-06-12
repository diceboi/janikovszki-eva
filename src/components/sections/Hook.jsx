"use client";

import { motion } from "motion/react";
import Image from "next/image";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import Squiggle from "@/components/decorations/Squiggle";

export default function Hook() {
  return (
    <section
      id="hook"
      className="relative bg-cream px-6 py-20 lg:px-8 lg:py-28 min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-3xl text-center">
        <H2 color="text-ink" className="mb-8">
          Észrevetted már <span className="text-coral">magadon</span>?
        </H2>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Férfi arc - bal felül */}
          <motion.div
            className="absolute -top-60 -left-4 md:-top-40 md:-left-40 lg:-left-60 w-32 h-32 md:w-40 md:h-40 z-0 pointer-events-none"
            initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            whileInView={{ clipPath: "circle(100% at 50% 50%)", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut", delay: 0 }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ y: [0, -24, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <Image
                src="/ferfiarc.webp"
                alt="Férfi arc"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          <div className="relative z-10">
            <Paragraph className="max-w-2xl mx-auto mb-6" color="text-ink/80">
              Észrevetted már magadon vagy a környezetedben valakin, hogy
              ugyanarról a dologról homlokegyenest másképp beszélünk a
              kontextustól, vagy a beszédpartnerünktől függően?
            </Paragraph>

            <Paragraph
              className="max-w-2xl mx-auto"
              color="text-ink/80"
              weight="font-medium"
            >
              És mindkét esetben meg vagyunk győződve az igazunkról?
            </Paragraph>
          </div>

          {/* Női arc - jobb alul */}
          <motion.div
            className="absolute -bottom-40 -right-4 md:-bottom-40 md:-right-20 lg:-right-40 w-32 h-32 md:w-40 md:h-40 z-0 pointer-events-none"
            initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
            whileInView={{ clipPath: "circle(100% at 50% 50%)", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut", delay: 0 }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.3,
              }}
            >
              <Image
                src="/noiarc.webp"
                alt="Női arc"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
