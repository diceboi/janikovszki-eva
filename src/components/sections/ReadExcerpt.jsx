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
          <Image
            src="/spacer-v2.webp"
            alt="Díszítő elem"
            width={140}
            height={20}
            className="mx-auto mb-8 object-contain"
          />
        </div>

        <H2 className="mb-6">
          Olvasd el az érem <span className="text-coral">egyik oldalát</span>!
        </H2>

        <Paragraph className="max-w-2xl mx-auto mb-10" color="text-ink/80">
          Merülj el egy részletben és fedezd fel hogyan néz ki ugyanaz az
          ismerős élethelyzet - kétféle szemszögből.
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

            {/* Page 2 - Left inner */}
            <div className="page bg-cream border-l border-ink/10 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <div className="font-nunito font-bold text-coral text-xl mb-4 md:mb-6 border-b border-coral/20 pb-2">
                  Az egyik oldal...
                </div>
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify italic">
                  Az érem egyik oldalán a kissé frusztrált anyuka egy hétköznap reggel, mikor a 14 éves lánya egy szál müzli szelettel a kezében akar elindulni az iskolába.
                </p>
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
                  Lili, ugye nem azzal az egy szem müzli szelettel akarsz elmenni, mikor nem is reggeliztél és csak délután 3-kor végzel a suliban? Ezt akarod enni egész nap?? Mi az, hogy még egy alma is van nálad? Tényleg azt hiszed, hogy egy alma meg egy müzli szelet fedezi egy fejlődésben lévő szervezet energia szükségletét? Mikor direkt készítettem neked chia magos zabkását, mert azt mondtad, hogy annak magas a rosttartalma és azt megeszed. Hogy abban sok a kalória és így is felszedtél 1 kilót a hétvégén?
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">1</div>
              </div>
            </div>

            {/* Page 3 - Right inner */}
            <div className="page bg-cream border-r border-ink/10 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Ne szórakozz velem Lili! Én erre nem érek rá kora reggel… Te jó ég, mindjárt fél 8! Már megint a legnagyobb dugóban kell bevezetnem a városba! Figyelj rám Lili, ne legyen a hűtőben a zabkása, mire hazaérek! Nem vagyok hajlandó több ételt kidobni miattad… a legutóbb is ki kellett dobnom a szendvicsedet, pedig teljes kiőrlésű barna kenyérből készült és mégis ott aszalódott napokig, mert hozzá sem nyúltál. És mi a gond azzal, hogy sajt is volt benne? Első osztályú, házi készítésű sajt volt, a biopiacon vettem! Abban aztán sem adalékanyag, sem színezék nem volt és nagyon egészséges a tejtermék fogyasztása ebben a korban, igazán megehetted volna!
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">2</div>
              </div>
            </div>

            {/* Page 4 - Left inner */}
            <div className="page bg-cream border-l border-ink/10 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  De hol a slusszkulcsom? Már másodjára pakolom ki a táskám, de nincs ott… hová tehettem? Jut eszembe Lili! Az ebéded abban a kis üvegtálban van lefedve a hűtőben alul, ne felejtsd el megenni, ha hazaértél! Hogyhogy mi lesz ebédre? Amit kértél – fitness ebéd: rántott csirkemell rizzsel és brokkolival. Hogy te csak magában gondoltad a csirkemellet és nem panírozva? Hogy nem eszel semmi bundásat? Igen?? Nem pár hete toltatok be fejenként egy teljes csirkés kosarat Hannával a KFC-ben? Szerinted nekem nincs jobb dolgom, mint munka után a konyhában állni és pepecselni a panírozással, meg a sütéssel? Még most is olajszagú a hajam!
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">3</div>
              </div>
            </div>

            {/* Page 5 - Right inner */}
            <div className="page bg-cream border-r border-ink/10 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Lili! Hozzád beszélek! Nehogy ott legyen a rántott hús a hűtőben, ha hazajövök! Dehogy hizlal! A színtiszta csirkemell? Jó, hát van rajta egy kis panír, de szinte csak leheletnyi. Lili! Az őrületbe kergetsz ezzel a fogyókúrával! Ezt már nem lehet követni…
                </p>
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Végre! Megvan a kulcsom! a kabátzsebemben volt… De hát én nem is értem Lilikém, mire ez a nagy fogyókúra? Amikor olyan csinos vagy! Nincs rajtad egy deka felesleg sem és amúgy is még növésben vagy. Hát miért kell így koplaltatnod magad? Hogy a Kata dereka sokkal vékonyabb, láttad az Instáján? És szerinted nem filterezte meg? Na jó, keresek neked egy pszichológust, ez lesz az első dolgom, ha beértem az irodába! Miért kell neked a Katához hasonlítgatnod magad?
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">4</div>
              </div>
            </div>

            {/* Page 6 - Left inner */}
            <div className="page bg-cream border-l border-ink/10 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Az anyja is kétszer volt már zsírleszíváson, mit vársz a lányától? Tényleg őt kell utánoznod? Meg amúgy is bele akarsz férni az új farmeredbe? Lili, nem mondtam már ott az üzletben, hogy nem vagyok hajlandó XS-es farmert venni neked? Minek egy számmal kisebbet venni, mint ami a méreted? Hát nem elég szűk neked az S-es? Mi az, hogy te jobban tudod mi áll jól neked? És az én véleményem már nem is számít? Mégiscsak az anyád vagyok… én aztán igazán jól ismerlek és tudhatnád, hogy csak a legjobbat akarom neked!
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">5</div>
              </div>
            </div>

            {/* Page 7 - Right inner */}
            <div className="page bg-cream border-r border-ink/10 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Más gyerek örülne, ha az anyja ennyit törődne vele és azzal fárasztaná magát, hogy a kedvenc ételeit főzze! Te meg csak a szádat húzod, meg a válladat vonogatod, hogy nem vagy éhes, meg nem kívánod és csak piszkálod az ételt, hogy még nézni is rossz! Én nem is tudom, mit csinálnál, ha nem lenne egy ilyen szerencsétlen, ostoba anyád, aki folyton csak azt nézi, hogy mivel tehetne neked jót?
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">6</div>
              </div>
            </div>

            {/* Page 8 - Left inner (B side) */}
            <div className="page bg-cream border-l border-ink/10 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <div className="font-nunito font-bold text-coral text-xl mb-4 md:mb-6 border-b border-coral/20 pb-2">
                  A másik oldal...
                </div>
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify italic">
                  Az érem másik oldalán ugyanaz az anyuka, most gyermeki szerepben a saját édesanyjával, mikor munkából hazatérve nagy sütésfőzés közben találja őt a konyhában.
                </p>
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
                  Anya! Hát te meg mit csinálsz itt a konyhában? Nem úgy volt, hogy csak holnap jössz át? Hogy lemondta a fodrászod és ha már úgyis itt voltál a szomszédban, beugrottál összedobni nekünk egy meleg vacsorát? És akkor már gyorsan be is vásároltál? Ez nagyon kedves tőled anya, de erre semmi szükség – épp tegnap vásároltam be. Hogy üres volt a hűtő? Már, hogy lett volna üres anya? Mikor még a biopiacon is voltam… Hogy nincs nálunk soha rendes étel csak nyulaknak való csemege? Az a sok zöldség, meg müzli, meg saláta? Hogy ezzel nem lehet etetni egy családot?
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">7</div>
              </div>
            </div>

            {/* Page 9 - Right inner */}
            <div className="page bg-cream border-r border-ink/10 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Anya, hallottál már a rostban gazdag táplálkozásról? Meg a napi háromszori zöldség és gyümölcs bevitelről? Igen, anya én is tudom, hogy Lili szervezete még fejlődésben van és szüksége van a rendes táplálkozásra, éppen ezért… Te jó ég anya! Csak nem állsz neki még bundás kenyeret is sütni? A kolbászos bableves mellé?? Vacsorára?! De anya, ki fogja ezt mind megenni? Tudod mennyi szénhidrát van ebben? Csak a bundáskenyér hány kalória? Igen anya, kalória! – van, aki odafigyel erre, ha nem tudnád. Nem mondtam már neked ezerszer, hogy mi nem eszünk ilyesmit vacsorára? Sőt, egyáltalán nem eszünk ilyen zsírban tocsogós ételeket? Jó, akkor étolajban…
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">8</div>
              </div>
            </div>

            {/* Page 10 - Left inner */}
            <div className="page bg-cream border-l border-ink/10 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Most miért kell ezen megsértődni, anya? Hogy te csak nekem akartál segíteni, hogy időnként rendes étel is legyen az asztalon a gyereknek? És lett volna jobb dolgod is, mint itt állni a forró serpenyő mellett? Szeretnélek megnyugtatni anya, hogy Lilinek mindig van rendes étel az asztalon és abszolút kiegyensúlyozottan eszik. Már, hogy lenne válogatós, anya? Mikor bármit főzök, mindig elfogy. Hogy legutóbb is ott állt a rántott hús egy hétig a hűtőben? Jó, hát az tényleg megmaradt, de túl sokat csináltam, annyit igazán nem bírt volna megenni.
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">9</div>
              </div>
            </div>

            {/* Page 11 - Right inner */}
            <div className="page bg-cream border-r border-ink/10 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Hogy alig eszik? Hidd el nekem anya, hogy Lili teljesen normálisan eszik, éppen annyit, mint a vele egyidős lányok. Én kimondottan örülök, hogy nem az a falánk, nassolós fajta… hova vezetne az, ha egyfolytában tömné magát valamivel? Nem, Lili nagyon jól tudja mire van szüksége a szervezetének, napközben egy kis gyümölcs meg zabkása, ebédet pedig mindig rendesen eszik itthon.
                </p>
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Hát ez meg mi? Mi ez a doboz rétes a hűtőben? Hogy nem lehetett elmenni mellette, mert akkor sütötték és még meleg volt?
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">10</div>
              </div>
            </div>

            {/* Page 12 - Left inner */}
            <div className="page bg-cream border-l border-ink/10 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Most mondjam el neked anya, hogy mi lett azzal a temérdek krémessel, amit legutóbb hoztál a névnapomra? Igen, tudom, hogy gyerekkoromban az volt a kedvencem és csak meg akartál lepni, de 6 krémest anya?? Tényleg azt akarod, hogy százkilós legyek nyárra? Mikor most jön a fürdőruha szezon? És már ki is néztem magamnak egy nagyon cuki kétrészest – abba bele kell férnem! Mi az, hogy túl sokat foglalkozom az alakommal? Hogy az én koromban már más prioritások is vannak, mint a külső? És hogy ennyi idősen már ne legyenek olyan nagy elvárásaim magammal szemben? Micsoda?? Na köszönöm szépen, anya! Ez igazán jól esett…!
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">11</div>
              </div>
            </div>

            {/* Page 13 - Right inner */}
            <div className="page bg-cream border-r border-ink/10 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col h-full w-full p-6 md:p-8">
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
                  Most mit pakolsz még mindig ki a szatyrodból? Zsemlét? Nem kértelek már milliószor, hogy ne hozz ennyi péksüteményt, mert csak megszárad és ki kell dobni? Tudod, hogy én nem eszem ilyesmit… Hogy nem lehet követni az étkezési szokásaimat? Hát olyan nehéz megjegyezni, hogy nem eszem semmi fehér lisztből készült ételt? És cukor helyett is inkább természetes édesítőszereket használok? És húsból is csak olyat eszem, ami garantáltan GMO mentes? Most mit forgatod a szemed? Hogy megőrjítelek a diétámmal? Már ne is haragudj anya, de többet tudok az egészséges táplálkozásról, mint te és csak jobban tudom, hogy mi a jó nekem?
                </p>
                <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
                  Én tudom anya, hogy te csak jót akarsz, de… hogy mit csinálnék, ha nem lenne egy ilyen önfeláldozó, bolond anyám, akinek folyton csak azon jár az esze, hogy mivel szerezhetne örömet a lányának?
                </p>
                <div className="mt-auto pt-2 text-center text-ink/40 text-sm">12</div>
              </div>
            </div>

            {/* Page 6 - Back cover */}
            <div className="page bg-coral border-l border-coral/80 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col justify-center items-center h-full w-full p-8 text-white">
                <h3 className="font-nunito font-bold text-3xl mb-4 text-center">
                  Tetszett az ízelítő?
                </h3>
                <p className="font-inter text-white/80 italic text-center mb-8">
                  Fedezd fel a többi hétköznapi de mégis zseniális szituációt is!
                </p>
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
            megveszem az e-book-ot
          </MainButton>
        </motion.div>
      </div>
    </section>
  );
}
