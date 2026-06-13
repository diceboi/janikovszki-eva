"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import Star from "@/components/decorations/Star";
import Doodle from "@/components/decorations/Doodle";

export default function Story() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="sztori" className="relative bg-cream overflow-clip">
      {/* Decorative elements */}
      <div className="absolute top-12 right-12 opacity-25 hidden lg:block z-0">
        <Star color="var(--coral)" size={44} />
      </div>
      <div className="absolute bottom-16 left-8 opacity-20 hidden lg:block z-0">
        <Doodle color="var(--sunshine)" size={52} variant="spiral" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10 pt-20 lg:pt-28 pb-8 px-6 lg:px-8">
        <div className="text-center">
          <H2 className="mb-4">
            Miről szól a <span className="text-coral">könyv</span>?
          </H2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-20 lg:pb-32 relative z-10 flex flex-col md:flex-row items-start gap-12 lg:gap-16">
        {/* Left side: Sticky Images */}
        <div className="md:w-1/2 w-full sticky top-24 md:top-[20vh] z-20 flex items-center justify-center self-start md:mt-12">
          <div className="w-full aspect-square max-w-md mx-auto relative">
            <AnimatePresence mode="wait">
              {activeIndex === 0 && (
                <motion.div
                  key="img-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full absolute inset-0"
                >
                  {/* Bemondó - bal oldalról bukkan elő */}
                  <motion.div
                    className="absolute top-1/4 -left-8 md:-left-30 w-32 h-32 md:w-80 md:h-80 z-0"
                    initial={{ x: 80, rotate: 0, opacity: 0 }}
                    animate={{ x: 0, rotate: -12, opacity: 1 }}
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
                    className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-36 h-36 md:w-48 md:h-48 z-0 rotate-45"
                    initial={{ scale: 0.5, opacity: 0, rotate: 10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Image
                      src="/kisz-zaszlo.png"
                      alt="KISZ zászló"
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Fő kép */}
                  <motion.div
                    className="relative z-10 w-full h-full"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src="/a-lemez-ket-oldala.webp"
                      alt="A lemez két oldala"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </motion.div>
              )}

              {activeIndex === 1 && (
                <motion.div
                  key="img-1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full absolute inset-0"
                >
                  <motion.div
                    className="relative z-10 w-full h-full"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src="/ai.webp"
                      alt="AI technológia"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </motion.div>
              )}

              {activeIndex === 2 && (
                <motion.div
                  key="img-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full absolute inset-0"
                >
                  <motion.div
                    className="relative z-10 w-full h-full"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src="/metro.webp"
                      alt="Metró"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right side: Scrolling Text Sections */}
        <div className="md:w-1/2 w-full flex flex-col space-y-16 md:space-y-0">
          {/* Section 1 */}
          <motion.div
            onViewportEnter={() => setActiveIndex(0)}
            viewport={{ margin: "-30% 0px -30% 0px", amount: "some" }}
            className="md:min-h-[100vh] flex flex-col justify-center pt-8 md:pt-0"
          >
            <Paragraph className="max-w-xl" color="text-ink/80">
              Közel 50 éve jelent meg Janikovszky Éva: A lemez két oldala című
              könyve, amiben ezt az örök emberi sajátosságunkat mutatja be.
              Akkor még szocializmus volt, Kádár-korszak, termelői értekezletek,
              Télapó-ünnepélyek, KST pénzek és KISZ építőtáborok határozták meg
              a mindennapokat – sokunknak ma már ezek a dolgok nem sokat
              mondanak.
            </Paragraph>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            onViewportEnter={() => setActiveIndex(1)}
            viewport={{ margin: "-30% 0px -30% 0px", amount: "some" }}
            className="md:min-h-[100vh] flex flex-col justify-center pt-16 md:pt-0"
          >
            <Paragraph className="max-w-xl mb-8" color="text-ink/80">
              A világ azóta nagyot fordult: az AI korában élünk. A technológiai
              változások és a digitalizáció életünk mindennapi részévé váltak.
            </Paragraph>

            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-sunshine/20 max-w-xl">
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

          {/* Section 3 */}
          <motion.div
            onViewportEnter={() => setActiveIndex(2)}
            viewport={{ margin: "-30% 0px -30% 0px", amount: "some" }}
            className="md:min-h-[100vh] flex flex-col justify-center pt-16 md:pt-0"
          >
            <Paragraph className="max-w-xl" color="text-ink/80">
              Az érem két oldala című könyv olyan hétköznapi, emberi
              helyzetekről szól, amivel nap, mint nap találkozunk: halljuk őket
              a metrón, amíg munkába megyünk, vagy a fodrászunknál, miközben a
              hajunk készül, vagy akár a játszótéren a többi anyukától. De ezek
              a történetek már a 21. századról szólnak és már nem olyan
              dilemmákról, hogy miképp lehet melegen tartani a túrógombócot,
              hanem hogy lehet-e Chat GPT-t használni a matek leckéhez?
            </Paragraph>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
