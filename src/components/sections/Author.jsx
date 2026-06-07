"use client";

import Image from "next/image";
import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import Handwritten from "@/components/ui/typography/Handwritten";
import Squiggle from "@/components/decorations/Squiggle";
import Doodle from "@/components/decorations/Doodle";

export default function Author() {
  return (
    <section
      id="szerzo"
      className="relative bg-white px-6 py-20 lg:px-8 lg:py-28 overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-12 right-16 opacity-20 hidden lg:block">
        <Doodle color="var(--sunshine)" size={48} variant="loop" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Squiggle color="var(--mint)" width={100} className="mx-auto mb-8" />
          <H2 className="mb-4">
            A <span className="text-coral">szerzőről</span>
          </H2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Author image */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sunshine/15 rounded-3xl blur-2xl scale-105" />
              <Image
                src="/images/author.png"
                alt="Mézes-Lendvai Dorottya — szerző"
                width={380}
                height={450}
                className="relative z-10 w-[260px] lg:w-[340px] h-auto rounded-3xl shadow-lg object-cover"
              />
              <div className="absolute -top-4 -right-4 z-20">
                <Doodle color="var(--coral)" size={32} variant="heart" />
              </div>
            </div>
          </motion.div>

          {/* Author bio */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Handwritten
              as="p"
              className="mb-4 block"
              color="text-coral"
            >
              Mézes-Lendvai Dorottya
            </Handwritten>

            <Paragraph className="mb-4" color="text-ink/80">
              A könyv szerzője Mézes-Lendvai Dorottya, aki maga is „Janikovszky gyerekként"
              nőtt fel Budapesten. Nem hiányozhatott a könyvespolcáról egyik Janikovszky kötet
              sem és ezek voltak az első könyvek, amiket már egyedül is olvasni tudott.
            </Paragraph>

            <Paragraph className="mb-0" color="text-ink/80">
              Jelenleg egy tanácsadó cég szakmai vezetőjeként dolgozik, ahol a különböző
              generációk együttműködésének fejlesztésével foglalkozik vállalati környezetben,
              valamint business coachként gyakran találkozik olyan hasonló emberi helyzetekkel,
              amiket a kötetben is megjelenít.
            </Paragraph>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
