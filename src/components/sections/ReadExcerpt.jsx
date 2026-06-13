"use client";

import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import MainButton from "@/components/ui/buttons/MainButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import Squiggle from "@/components/decorations/Squiggle";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";

import HTMLFlipBook from "react-pageflip";

export default function ReadExcerpt() {
  return (
    <section
      id="beleolvasok"
      className="relative bg-white px-6 py-20 lg:px-8 lg:py-28 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,217,61,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <div className="flex justify-center mb-10">
          <Squiggle color="var(--coral)" width={140} />
        </div>

        <H2 className="mb-6">
          Olvasd el az érem{" "}
          <span className="text-coral">egyik oldalát</span>!
        </H2>

        <Paragraph className="max-w-2xl mx-auto mb-10" color="text-ink/80">
          Merülj bele egy részletbe, és fedezd fel, hogyan néz ki ugyanaz a
          helyzet a 21. században — kétféle szemszögből.
        </Paragraph>

        {/* Flippable Book */}
        <div className="max-w-[800px] mx-auto mb-16 flex justify-center relative z-10 perspective-1000">
          <HTMLFlipBook
            width={400}
            height={550}
            size="stretch"
            minWidth={300}
            maxWidth={400}
            minHeight={400}
            maxHeight={600}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            className="flip-book shadow-2xl"
          >
            {/* Page 1 - Cover */}
            <div className="page bg-coral border-r border-coral/80 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col justify-center items-center h-full w-full p-8 text-white">
                <h3 className="font-nunito font-bold text-3xl mb-4 text-center">Autós dilemma</h3>
                <p className="font-inter text-white/80 italic text-center">Olvass bele a könyvbe!</p>
                <div className="mt-8 opacity-50">
                  <FaBookOpen size={40} />
                </div>
              </div>
            </div>

            {/* Page 2 - Left inner (A side) */}
            <div className="page bg-cream border-l border-ink/10 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-8 md:p-10">
                <div className="font-nunito font-bold text-coral text-xl mb-6 border-b border-coral/20 pb-2">Az egyik oldal...</div>
                <p className="text-sm md:text-base font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Mit mondtál az előbb Máté? Úgy üvölt ez a sportközvetítő, hogy nem hallottam jól. Értem én, hogy gólt rúgott a Madrid 1 perccel a félidő előtt, de nem mindenki nekik szurkol… meg már amúgy sem tudják behozni ezt a kétgólos hátrányt. Na, várj egy kicsit, lehalkítom, már úgyis csak a reklám jön.
                </p>
                <p className="text-sm md:text-base font-inter text-ink/80 leading-relaxed text-justify">
                  Szóval, nem értettem jól az előbb, mit akarsz venni a félretett pénzedből? Egy 1,8-as Mazda MX5-öt? Hátsókerekes, vászontetős kabriót? Micsoda?? Na, várjál fiam, ehhez inkább leülök…
                </p>
                <div className="mt-auto text-center text-ink/40 text-sm">1</div>
              </div>
            </div>

            {/* Page 3 - Right inner (A side continued) */}
            <div className="page bg-cream border-r border-ink/10 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-8 md:p-10">
                <p className="text-sm md:text-base font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Anyád nem ért még haza? Jobb is… Hogy csak 12 éves? Tuti extra ajánlat? Hogy a Gabó csak neked adja ennyiért, mert a Dani haverja vagy? Na, szeretném én látni azt az extra ajánlatot…
                </p>
                <p className="text-sm md:text-base font-inter text-ink/80 leading-relaxed text-justify">
                  de egyáltalán, hogy a fenébe jutott az eszedbe, hogy 18 évesen autót vegyél magadnak?! Miért nem jó neked anyád kocsija? Megmondtuk, hogy bármikor használhatod, amikor neki nem kell, persze csak ésszel!
                </p>
                <div className="mt-auto text-center text-ink/40 text-sm">2</div>
              </div>
            </div>

            {/* Page 4 - Left inner (B side) */}
            <div className="page bg-[#f0f9ff] border-l border-ink/10 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-8 md:p-10">
                <div className="font-nunito font-bold text-sky text-xl mb-6 border-b border-sky/20 pb-2">A másik oldal...</div>
                <p className="text-sm md:text-base font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  De jó, hogy jössz szívem, már nem tudtam mi tarthat ennyi ideig a fodrásznál! Na, de hát ezért megérte! Nagyon jó lett az új frizurád! Komolyan mondom, legalább 10 évet letagadhatnál! Persze, nem mintha szükséged lenne rá… és milyen jól áll ez az új szín!
                </p>
                <p className="text-sm md:text-base font-inter text-ink/80 leading-relaxed text-justify">
                  Mi az, hogy máskor észre sem veszem, ha fodrásznál voltál? Én nem értelek szívem, hát már meg sem dicsérhetem a feleségem új frizuráját?
                </p>
                <div className="mt-auto text-center text-ink/40 text-sm">3</div>
              </div>
            </div>

            {/* Page 5 - Right inner (B side continued) */}
            <div className="page bg-[#f0f9ff] border-r border-ink/10 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-8 md:p-10">
                <p className="text-sm md:text-base font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Na, de várjál, nekem is van ám egy újdonságom a számodra! Nem, szívem nem hívtam még ki a szerelőt a mosogatógéphez… Megnézetni a kazánt? Hagyd már azt a kazánt, ki beszél most a kazánról??
                </p>
                <p className="text-sm md:text-base font-inter text-ink/80 leading-relaxed text-justify">
                  Nem titokzatoskodom édes szívem – na, hát arról van szó, hogy ma délután megvettük a fiaddal a kocsit! Kint parkol az utcán a ház előtt. Milyen kocsit? Hát, amiről hétvégén beszéltem neked...
                </p>
                <div className="mt-auto text-center text-ink/40 text-sm">4</div>
              </div>
            </div>

            {/* Page 6 - Back cover */}
            <div className="page bg-sky border-l border-sky/80 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col justify-center items-center h-full w-full p-8 text-white">
                <h3 className="font-nunito font-bold text-3xl mb-4 text-center">Tetszett az ízelítő?</h3>
                <p className="font-inter text-white/80 italic text-center mb-8">Fedezd fel a többi hétköznapi, mégis zseniális szituációt is!</p>
                <SecondaryButton
                  iconAfter={<FaArrowRight />}
                  borderColor="border-white/30"
                  borderHoverColor="hover:border-white"
                  hoverColor="hover:bg-white/10"
                  href="#vasarlas"
                  className="text-white"
                >
                  Vedd meg a könyvet!
                </SecondaryButton>
              </div>
            </div>
          </HTMLFlipBook>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MainButton iconBefore={<FaBookOpen />} href="#vasarlas">
            Olvasd el az érem egyik oldalát!
          </MainButton>
          <SecondaryButton
            iconAfter={<FaArrowRight />}
            borderColor="border-sky/30"
            borderHoverColor="hover:border-sky"
            hoverColor="hover:bg-sky/10"
            href="#vasarlas"
          >
            Fedezd fel a másik oldalát is!
          </SecondaryButton>
        </motion.div>
      </div>
    </section>
  );
}
