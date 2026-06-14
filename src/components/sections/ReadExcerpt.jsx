"use client";

import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import MainButton from "@/components/ui/buttons/MainButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import Image from "next/image";
import { FaBookOpen, FaArrowRight, FaShoppingCart } from "react-icons/fa";

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
          <Image src="/spacer.webp" alt="Díszítő elem" width={140} height={20} className="mx-auto mb-8 object-contain" />
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
            height={640}
            size="stretch"
            minWidth={300}
            maxWidth={400}
            minHeight={450}
            maxHeight={700}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            className="flip-book shadow-2xl"
          >
            {/* Page 1 - Cover */}
            <div className="page bg-coral border-r border-coral/80 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.1)]">
              <div className="relative w-full h-full">
                <Image
                  src="/az-erme-ket-oldala-cover.webp"
                  alt="Az érem két oldala"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Page 2 - Left inner (A side) */}
            <div className="page bg-cream border-l border-ink/10 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-8 md:p-10">
                <div className="font-nunito font-bold text-coral text-xl mb-6 border-b border-coral/20 pb-2">Az egyik oldal...</div>
                <p className="text-sm md:text-xs font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Ennek most egész jó az íze... banános-csokis. A tiéd milyen? Uhh, a múltkor én is kipróbáltam a vaniliásat, de nekem nem jött be. Mindegy az a lényeg, ami benne van, már ha tényleg felszívódik!
                </p>
                <p className="text-sm md:text-xs font-inter text-ink/80 leading-relaxed text-justify">
                  Te, láttad az Ildit most pilatesen, hogy néz ki? Csak messziről? Én pont mellette tornáztam, de szinte már rá sem lehet ismerni! Annyi töltést rakatott be, hogy teljesen eltűntek a vonásai és felpüffedt az arca! És a szája...?! Mint egy felfújt gumikacsáé! Az óra előtt beszélgettem vele egy kicsit, amíg ide nem értél, de hallod! Alig mozog az arca! Semmi mimika, csak egy kifejezéstelen plasztik arc. Műszempilla, tetovált szemöldök – szerintem semmi nem maradt már meg abból, ami a sajátja volt. Fél éve a melle, most meg az arca! De tudod Ági, én azt látom, hogy ha valaki elkezdi a plasztikázást, nem tudja abbahagyni. A kolleganőm is! Két éve elment egy kis botoxra, mert nagyon erős volt a szemöldöke közötti ránc – tényleg komorrá tette az arcát – és megcsináltatta. Még dicsértük is, hogy milyen szép diszkrét lett, jól áll neki. De utána jött a homloka, meg a szeme körüli ráncok, meg a szája és most már ott tart, hogy havonta járkál valamilyen plasztikára. Legutóbb a foltjait lézereztette le az arcán, nem is jött dolgozni egy hétig a hegek miatt. Teljesen rákattant. Nem bír leállni.
                </p>
                <div className="mt-auto text-center text-ink/40 text-sm">1</div>
              </div>
            </div>

            {/* Page 3 - Right inner (A side continued) */}
            <div className="page bg-cream border-r border-ink/10 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-8 md:p-10">
                <p className="text-sm md:text-xs font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  De, várj csak! Az Ildi fiatalabb nálunk, nem? Igen, szerintem is, olyan 8 évvel biztos fiatalabb. A fia is jóval az enyém alatt jár, még alsós szerintem. Szoktam látni a sulinál, amikor felveszi. Nem lehet több 38-39 évesnél. Még biztos nincs negyven. És negyven alatt már plasztikáztat?? Igen, én is hallom, hogy huszonéves lányok töltetik fel az arcukat, meg a szájukat, meg tolják már a botoxot is ezerrel. Épp a kozmetikusom mesélte legutóbb, hogy egyre több fiatal vendégének van már valamilyen plasztikája.
                </p>
                <p className="text-sm md:text-xs font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Hát, Ágikám én sem értem. És nem azért, mert dicsekedni akarnék, de én teljesen meg vagyok elégedve a bőrömmel, pedig elmúltam már negyven. Szerintem a rendszeres arcápolás, a jó gének, meg az, hogy nem dohányzom, nagyon jó alapot adnak a bőrömnek. Persze, eljárok én is kozmetikushoz, meg van egy jó éjszakai krémem, de ez bőven megteszi. Most nem? Neked sincs semmi szégyenkezni valód Ági, gyönyörű a bőröd!
                </p>
                <p className="text-sm md:text-xs font-inter text-ink/80 leading-relaxed text-justify">
                  Jó, hát nyilván nem vagyunk már húsz évesek, de miért is akarnánk úgy kinézni? Ez a szerencsétlen Ildi is – majd legközelebb nézd meg közelebbről! – hát normális, hogy Kylie Jenner-t csináltat magából?
                </p>
                <div className="mt-auto text-center text-ink/40 text-sm">2</div>
              </div>
            </div>

            {/* Page 4 - Left inner (B side) */}
            <div className="page bg-cream border-l border-ink/10 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-8 md:p-10">
                <div className="font-nunito font-bold text-coral text-xl mb-6 border-b border-coral/20 pb-2">A másik oldal...</div>
                <p className="text-sm md:text-xs font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Elfáradtál Ági? Én most egész jól bírtam, csak a hasizom gyakorlatoknál éreztem, hogy már vége lehetne. Megiszunk egy turmixot? Legalább dumálunk kicsit, rég találkoztunk. Igen, nekem most kimaradt néhány hét.
                </p>
                <p className="text-sm md:text-xs font-inter text-ink/80 leading-relaxed text-justify">
                  Hogy milyen kipihentnek tűnök? És mennyire ki vannak simulva a vonásaim? De aranyos vagy, hogy ezt mondod Ágikám! Jól is érzem magam a bőrömben! Nem, nem voltam szabin. Hát jó, neked elmondom, de maradjon köztünk, még Karesz sem tudja... Naa, hát volt egy kis botoxom, meg egy pici feltöltésem pár hete, azért nem jöttem tornázni mostanában. Jaj, nem dehogyis, semmi komoly, tényleg csak egy kevés botox a homlokomba, meg egy ici-pici feltöltés az arccsontomhoz. Tényleg csak annyi, ami a korom miatt már szükséges volt. Mert hát azt tudod, hogy ezekből az anyagokból egyre kevesebb marad a bőrünkben, ahogy telnek az évek és időnként pótolni kell. A kozmetikusom szerint is teljesen természetes ez ebben a korban és a bőröm szinte itta, olyan nagy szüksége volt rá!
                </p>
                <div className="mt-auto text-center text-ink/40 text-sm">3</div>
              </div>
            </div>

            {/* Page 5 - Right inner (B side continued) */}
            <div className="page bg-cream border-r border-ink/10 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-8 md:p-10">
                <p className="text-sm md:text-xs font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Hogy megváltozott a tekintetem? Hát jó, oda is tettünk egy keveset, de igazán csak próbaképp. Hogy meg sem mozdul az arcom miközben beszélek? Ugyan már Ágikám, ne túlozz! Ezt csak beképzeled most, hogy mondtam, mi történt. De, hallod, el sem tudod képzelni mennyi bókot kaptam az elmúlt időszakban! Fiatal férfiak fordulnak meg utánam az utcán! Szinte újjászülettem! Egy egészen új arc néz vissza rám a tükörből! Neked is ki kéne próbálnod! Persze, hogy gyönyörű a bőröd! Jól nézel ki, de hát tudod, mi van negyven felett... nem árt egy kis rásegítés!
                </p>
                <p className="text-sm md:text-xs font-inter text-ink/80 leading-relaxed text-justify">
                  Plasztikarc – plasztikarc, ezt azért nem mondanám! A kisimultság és a frissesség még nem tesz plasztikká! Miért ne élhetnénk ezekkel a csodálatos, új kozmetikai lehetőségekkel? Tudod mennyit fejlődött a szépségipar az utóbbi években? Persze, régen, nagyanyáink idejében mindez még nem volt ilyen könnyen elérhető, természetes is, hogy nem foglalkoztak vele. Nem is tudtak mást tenni, mint elfogadni a korukat és végignézni, ahogy szépen lassan megöregednek és teljesen tönkremegy a bőrük. De nekünk már egészen más lehetőségeink vannak!
                </p>
                <div className="mt-auto text-center text-ink/40 text-sm">4</div>
              </div>
            </div>

            {/* Page 6 - Back cover */}
            <div className="page bg-coral border-l border-coral/80 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col justify-center items-center h-full w-full p-8 text-white">
                <h3 className="font-nunito font-bold text-3xl mb-4 text-center">Tetszett az ízelítő?</h3>
                <p className="font-inter text-white/80 italic text-center mb-8">Fedezd fel a többi hétköznapi, mégis zseniális szituációt is!</p>
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
          <MainButton iconBefore={<FaShoppingCart />} href="#vasarlas">
            Megveszem az E-bookot!
          </MainButton>
        </motion.div>
      </div>
    </section>
  );
}
