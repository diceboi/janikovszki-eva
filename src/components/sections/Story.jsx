"use client";

import { motion } from "motion/react";
import Image from "next/image";
import MainButton from "@/components/ui/buttons/MainButton";
import { FaBookOpen } from "react-icons/fa";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";

export default function Story() {
  return (
    <section
      id="sztori"
      className="relative bg-cream overflow-clip py-20 lg:py-28 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <Image src="/spacer-v2.webp" alt="Díszítő elem" width={140} height={20} className="mx-auto mb-8 object-contain" />
          <H2>
            Miről szól a <span className="text-coral">könyv</span>?
          </H2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="md:w-1/2 w-full aspect-square max-w-md mx-auto relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="relative z-10 w-full h-full">
              <Image
                src="/metro.webp"
                alt="Metró"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Paragraph color="text-ink/80">
              Az érem két oldala című könyv olyan hétköznapi, emberi
              helyzetekről szól, amivel nap, mint nap találkozunk: halljuk őket
              a metrón, amíg munkába megyünk, vagy a fodrászunknál, miközben a
              hajunk készül, vagy akár a játszótéren a többi anyukától. De ezek
              a történetek már a 21. századról szólnak és már nem olyan
              dilemmákról, hogy miképp lehet melegen tartani a túrógombócot,
              hanem hogy lehet-e Chat GPT-t használni a matek leckéhez?
            </Paragraph>
            <div className="mt-8">
              <MainButton href="#beleolvasok" iconAfter={<FaBookOpen />}>
                Beleolvasok a könyvbe!
              </MainButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
