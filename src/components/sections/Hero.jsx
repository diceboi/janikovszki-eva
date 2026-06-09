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
      {/* Decorative background elements */}
      <div className="absolute top-10 left-8 opacity-40 hidden md:block">
        <Star color="var(--sunshine)" size={48} />
      </div>
      <div className="absolute top-32 right-16 opacity-30 hidden md:block">
        <Doodle color="var(--sky)" size={56} variant="spiral" />
      </div>
      <div className="absolute bottom-20 left-16 opacity-25 hidden lg:block">
        <Doodle color="var(--coral)" size={64} variant="loop" />
      </div>
      <div className="absolute bottom-32 right-8 opacity-35 hidden md:block">
        <Star color="var(--mint)" size={36} />
      </div>
      <div className="absolute top-1/2 left-1/3 opacity-20 hidden lg:block">
        <Doodle color="var(--lavender)" size={40} variant="heart" />
      </div>

      {/* Soft gradient blob */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,217,61,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,107,107,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Memorial badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-sunshine/20 px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              <span className="text-sm font-semibold text-ink/80 font-inter">
                Janikovszky Éva születésének 100. évfordulóján
              </span>
            </motion.div>

            <H1 className="mb-6">
              <span className="text-coral">Az érem</span>{" "}
              két oldala
            </H1>

            <Handwritten
              as="p"
              className="mb-6 block"
              color="text-text-muted"
            >
              „Janikovszky Éva emlékére, a születésének 100. évfordulóján"
            </Handwritten>

            <Paragraph className="mb-8 max-w-xl mx-auto lg:mx-0" color="text-ink/80">
              A világ a feje tetejére fordult, de van, ami nem változik: a
              mindennapi, emberi helyzeteink.
            </Paragraph>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MainButton
                href="#beleolvasok"
                iconAfter={<FaBookOpen />}
              >
                Beleolvasok!
              </MainButton>
            </motion.div>
          </div>

          {/* Book cover */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <div className="relative">
              {/* Shadow / glow behind book */}
              <div className="absolute inset-0 bg-coral/10 rounded-3xl blur-3xl scale-110" />
              <Image
                src="/janikovszki-eva-borito-szinezett.webp"
                alt="Az érem két oldala — borítókép"
                width={480}
                height={640}
                priority
                className="relative z-10 w-[280px] sm:w-[340px] lg:w-[420px] h-auto rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              {/* Floating star near book */}
              <div className="absolute -top-6 -right-6 z-20">
                <Star color="var(--sunshine)" size={40} />
              </div>
              <div className="absolute -bottom-4 -left-4 z-20">
                <Doodle color="var(--mint)" size={36} variant="zigzag" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-inter text-text-muted">Görgess lejjebb</span>
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
