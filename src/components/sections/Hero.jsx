"use client";

import Image from "next/image";
import { motion } from "motion/react";
import H1 from "@/components/ui/typography/H1";
import Handwritten from "@/components/ui/typography/Handwritten";
import Paragraph from "@/components/ui/typography/Paragraph";
import MainButton from "@/components/ui/buttons/MainButton";
import Star from "@/components/decorations/Star";
import Doodle from "@/components/decorations/Doodle";
import { FaBookOpen } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream px-6 py-20 lg:px-8 lg:py-0"
    >
      <Image
        src="/konyv-borito-mockup-sotet.png"
        alt="Az érem két oldala — borítókép"
        width={1920}
        height={900}
        priority
        className="absolute lg:top-1/2 top-1/6 lg:-right-1/5 -right-1/2 -translate-y-1/2 lg:-translate-x-0 -translate-x-1/2 z-10 rotate-2 hover:rotate-0 transition-transform duration-500"
      />

      {/* Soft gradient blob */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,217,61,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,107,107,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl w-full lg:mt-0 mt-42">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <H1 className="mb-6">
              Az érem <span className="text-coral">két</span> oldala
            </H1>

            <Handwritten as="p" className="mb-6 block" color="text-text-muted">
              „Janikovszky Éva emlékére,<br></br> a születésének 100.
              évfordulóján"
            </Handwritten>

            <Paragraph
              className="mb-8 max-w-xl mx-auto lg:mx-0"
              color="text-ink/80"
            >
              A világ a feje tetejére fordult, de van, ami nem változik: a
              mindennapi, emberi helyzeteink.
            </Paragraph>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MainButton href="#beleolvasok" iconAfter={<FaBookOpen />}>
                Beleolvasok!
              </MainButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-inter text-text-muted">
          Görgess lejjebb
        </span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-ink/20 flex justify-center pt-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-coral" />
        </motion.div>
      </motion.div>
    </section>
  );
}
