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
      className="relative bg-cream px-6 py-20 lg:px-8 lg:py-28 overflow-clip"
    >
      <div className="mx-auto max-w-3xl text-center mb-20 lg:mb-32 py-28 lg:pt-0">
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

      <div className="mx-auto max-w-6xl space-y-20 lg:space-y-32">
        {/* Section 1: Kép balra, szöveg jobbra */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="md:w-1/2 w-full aspect-square max-w-md mx-auto relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Bemondó - bal oldalról bukkan elő */}
            <motion.div
              className="absolute top-1/4 -left-8 md:-left-8 w-32 h-32 md:w-64 md:h-64 z-0"
              initial={{ x: 80, rotate: 0, opacity: 0 }}
              whileInView={{ x: 0, rotate: -12, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                bounce: 0.4,
              }}
            >
              <Image
                src="/bemondo.png"
                alt="Bemondó"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* KISZ zászló - jobb alsó sarok */}
            <motion.div
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-0 w-36 h-36 md:w-48 md:h-48 z-0 rotate-45"
              initial={{ scale: 0.5, opacity: 0, rotate: 10 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/kisz-zaszlo.png"
                alt="KISZ zászló"
                fill
                className="object-contain"
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
              Közel 50 éve jelent meg Janikovszky Éva: A lemez két oldala című
              könyve, amiben ezt az örök emberi sajátosságunkat mutatja be.
              Akkor még szocializmus volt, Kádár-korszak, termelői értekezletek,
              Télapó-ünnepélyek, KST pénzek és KISZ építőtáborok határozták meg
              a mindennapokat – sokunknak ma már ezek a dolgok nem sokat
              mondanak.
            </Paragraph>
          </motion.div>
        </div>

        {/* Section 2: Szöveg balra, kép jobbra */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-16">
          <motion.div
            className="md:w-1/2 w-full aspect-square max-w-md mx-auto relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="relative z-10 w-full h-full">
              <Image
                src="/ai.webp"
                alt="AI technológia"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Paragraph className="mb-8" color="text-ink/80">
              A világ azóta nagyot fordult: az AI korában élünk. A technológiai
              változások és a digitalizáció életünk mindennapi részévé váltak.
            </Paragraph>

            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-sunshine/20">
              <Paragraph
                color="text-ink"
                weight="font-medium"
                className="text-center md:text-left"
              >
                Mégis van, ami ebben a felgyorsult, bizonytalanná váló
                világunkban is örök és állandó marad: a mindennapos emberi
                helyzeteink és az az emberi sajátosságunk, hogy szeretjük, ha az
                érem mindkét oldalán a mi igazunk áll{" "}
                <span className="text-2xl inline-block align-middle ml-1">
                  ☺
                </span>
              </Paragraph>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
