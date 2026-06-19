"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import H3 from "@/components/ui/typography/H3";
import Paragraph from "@/components/ui/typography/Paragraph";
import MainButton from "@/components/ui/buttons/MainButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import Image from "next/image";
import { FaBookOpen, FaArrowRight, FaShoppingCart } from "react-icons/fa";

import HTMLFlipBook from "react-pageflip";

const tocData = [
  { title: "Foreword", page: "iv", isSub: false },
  { title: "Copyright", page: "iv", isSub: true },
  { title: "ELŐSZÓ", page: "1", isSub: false },
  { title: "Kinek a gyereke?", page: "3", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "3", isSub: true },
  { title: "Kinek a gyereke?", page: "7", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "7", isSub: true },
  { title: "Anya, lánya, unokája", page: "11", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "11", isSub: true },
  { title: "Anya, lánya, unokája", page: "14", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "14", isSub: true },
  { title: "Autós dilemma", page: "17", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "17", isSub: true },
  { title: "Autós dilemma", page: "20", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "20", isSub: true },
  { title: "Matek házi és egy kis AI", page: "24", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "24", isSub: true },
  { title: "Matek házi és egy kis AI", page: "28", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "28", isSub: true },
  { title: "Símánia", page: "31", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "31", isSub: true },
  { title: "Símánia", page: "35", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "35", isSub: true },
  { title: "Z generáció az iroda küszöbén", page: "38", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "38", isSub: true },
  { title: "Z generáció az iroda küszöbén", page: "42", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "42", isSub: true },
  { title: "Esküvő mindenáron?", page: "46", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "46", isSub: true },
  { title: "Esküvő mindenáron?", page: "49", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "49", isSub: true },
  { title: "A nevelés csődje", page: "53", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "53", isSub: true },
  { title: "A nevelés csődje", page: "57", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "57", isSub: true },
  { title: "Digi detox és burnout", page: "61", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "61", isSub: true },
  { title: "Digi detox és burnout", page: "65", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "65", isSub: true },
  { title: "Botoxxal szebb az élet?", page: "68", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "68", isSub: true },
  { title: "Botoxxal szebb az élet?", page: "71", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "71", isSub: true },
  { title: "Shopping őrület", page: "74", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "74", isSub: true },
  { title: "Shopping őrület", page: "77", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "77", isSub: true },
  { title: "Randi kérdés és GenZ szleng", page: "80", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "80", isSub: true },
  { title: "Randi kérdés és GenZ szleng", page: "84", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "84", isSub: true },
  { title: "Üres fészek", page: "87", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "87", isSub: true },
  { title: "Üres fészek", page: "90", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "90", isSub: true },
  { title: "Hova tovább?", page: "93", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "93", isSub: true },
  { title: "Hova tovább?", page: "97", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "97", isSub: true },
  { title: "Legyünk zöldek, de ennyire?", page: "100", isSub: false },
  { title: "AZ ÉREM EGYIK OLDALA", page: "100", isSub: true },
  { title: "Legyünk zöldek, de ennyire?", page: "103", isSub: false },
  { title: "AZ ÉREM MÁSIK OLDALA", page: "103", isSub: true },
  { title: "A CoreHeedről", page: "106", isSub: false },
  { title: "About the Author", page: "108", isSub: false },
];

const tocPages = [
  tocData.slice(0, 17),
  tocData.slice(17, 34),
  tocData.slice(34, 51),
  tocData.slice(51),
];

const TocItem = ({ title, page, isSub }) => (
  <div className={`flex justify-between items-baseline mb-[3px] ${isSub ? 'pl-4 text-[10px] md:text-[11px] text-ink/70 italic' : 'text-[11px] md:text-xs font-semibold text-ink/80'}`}>
    <span className="truncate pr-2">{title}</span>
    <span className="shrink-0">{page}</span>
  </div>
);

export const desktopExcerptPages = [
  {
    content: (
      <>
        <div className="font-nunito font-bold text-coral text-xl mb-4 md:mb-6 border-b border-coral/20 pb-2">
          Az egyik oldal...
        </div>
        <p className="text-sm md:text-xs lg:text-sm font-bold font-inter text-ink/80 leading-relaxed mb-4 text-justify italic">
          Anya, lánya, unokája
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify italic">
          Az érem egyik oldalán a kissé frusztrált anyuka egy hétköznap reggel, mikor a 14 éves lánya egy szál müzli szelettel a kezében akar elindulni az iskolába.
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Lili, ugye nem azzal az egy szem müzli szelettel akarsz elmenni, mikor nem is reggeliztél és csak délután 3-kor végzel a suliban? Ezt akarod enni egész nap?? Mi az, hogy még egy alma is van nálad?
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Tényleg azt hiszed, hogy egy alma meg egy müzli szelet fedezi egy fejlődésben lévő szervezet energia szükségletét? Mikor direkt készítettem neked chia magos zabkását, mert azt mondtad, hogy annak magas a rosttartalma és azt megeszed. Hogy abban sok a kalória és így is felszedtél 1 kilót a hétvégén?
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Ne szórakozz velem Lili! Én erre nem érek rá kora reggel… Te jó ég, mindjárt fél 8! Már megint a legnagyobb dugóban kell bevezetnem a városba! Figyelj rám Lili, ne legyen a hűtőben a zabkása, mire hazaérek! Nem vagyok hajlandó több ételt kidobni miattad…
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          A legutóbb is ki kellett dobnom a szendvicsedet, pedig teljes kiőrlésű barna kenyérből készült és mégis ott aszalódott napokig, mert hozzá sem nyúltál. És mi a gond azzal, hogy sajt is volt benne? Első osztályú, házi készítésű sajt volt, a biopiacon vettem! Abban aztán sem adalékanyag, sem színezék nem volt és nagyon egészséges a tejtermék fogyasztása ebben a korban, igazán megehetted volna!
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          De hol a slusszkulcsom? Már másodjára pakolom ki a táskám, de nincs ott… hová tehettem? Jut eszembe Lili! Az ebéded abban a kis üvegtálban van lefedve a hűtőben alul, ne felejtsd el megenni, ha hazaértél! Hogyhogy mi lesz ebédre? Amit kértél – fitness ebéd: rántott csirkemell rizzsel és brokkolival.
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Hogy te csak magában gondoltad a csirkemellet és nem panírozva? Hogy nem eszel semmi bundásat? Igen?? Nem pár hete toltatok be fejenként egy teljes csirkés kosarat Hannával a KFC-ben? Szerinted nekem nincs jobb dolgom, mint munka után a konyhában állni és pepecselni a panírozással, meg a sütéssel? Még most is olajszagú a hajam!
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Lili! Hozzád beszélek! Nehogy ott legyen a rántott hús a hűtőben, ha hazajövök! Dehogy hizlal! A színtiszta csirkemell? Jó, hát van rajta egy kis panír, de szinte csak leheletnyi. Lili! Az őrületbe kergetsz ezzel a fogyókúrával! Ezt már nem lehet követni…
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Végre! Megvan a kulcsom! a kabátzsebemben volt… De hát én nem is értem Lilikém, mire ez a nagy fogyókúra? Amikor olyan csinos vagy! Nincs rajtad egy deka felesleg sem és amúgy is még növésben vagy. Hát miért kell így koplaltatnod magad? Hogy a Kata dereka sokkal vékonyabb, láttad az Instáján? És szerinted nem filterezte meg? Na jó, keresek neked egy pszichológust, ez lesz az első dolgom, ha beértem az irodába! Miért kell neked a Katához hasonlítgatnod magad?
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Az anyja is kétszer volt már zsírleszíváson, mit vársz a lányától? Tényleg őt kell utánoznod? Meg amúgy is bele akarsz férni az új farmeredbe? Lili, nem mondtam már ott az üzletben, hogy nem vagyok hajlandó XS-es farmert venni neked? Minek egy számmal kisebbet venni, mint ami a méreted?
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Hát nem elég szűk neked az S-es? Mi az, hogy te jobban tudod mi áll jól neked? És az én véleményem már nem is számít? Mégiscsak az anyád vagyok… én aztán igazán jól ismerlek és tudhatnád, hogy csak a legjobbat akarom neked!
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Más gyerek örülne, ha az anyja ennyit törődne vele és azzal fárasztaná magát, hogy a kedvenc ételeit főzze! Te meg csak a szádat húzod, meg a válladat vonogatod, hogy nem vagy éhes, meg nem kívánod és csak piszkálod az ételt, hogy még nézni is rossz!
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Én nem is tudom, mit csinálnál, ha nem lenne egy ilyen szerencsétlen, ostoba anyád, aki folyton csak azt nézi, hogy mivel tehetne neked jót?
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <div className="font-nunito font-bold text-coral text-xl mb-4 md:mb-6 border-b border-coral/20 pb-2">
          A másik oldal...
        </div>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify italic">
          Az érem másik oldalán ugyanaz az anyuka, most gyermeki szerepben a saját édesanyjával, mikor munkából hazatérve nagy sütésfőzés közben találja őt a konyhában.
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Anya! Hát te meg mit csinálsz itt a konyhában? Nem úgy volt, hogy csak holnap jössz át? Hogy lemondta a fodrászod és ha már úgyis itt voltál a szomszédban, beugrottál összedobni nekünk egy meleg vacsorát?
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          És akkor már gyorsan be is vásároltál? Ez nagyon kedves tőled anya, de erre semmi szükség – épp tegnap vásároltam be. Hogy üres volt a hűtő? Már, hogy lett volna üres anya? Mikor még a biopiacon is voltam… Hogy nincs nálunk soha rendes étel csak nyulaknak való csemege? Az a sok zöldség, meg müzli, meg saláta? Hogy ezzel nem lehet etetni egy családot?
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Anya, hallottál már a rostban gazdag táplálkozásról? Meg a napi háromszori zöldség és gyümölcs bevitelről? Igen, anya én is tudom, hogy Lili szervezete még fejlődésben van és szüksége van a rendes táplálkozásra, éppen ezért… Te jó ég anya! Csak nem állsz neki még bundás kenyeret is sütni?
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          A kolbászos bableves mellé?? Vacsorára?! De anya, ki fogja ezt mind megenni? Tudod mennyi szénhidrát van ebben? Csak a bundáskenyér hány kalória? Igen anya, kalória! – van, aki odafigyel erre, ha nem tudnád. Nem mondtam már neked ezerszer, hogy mi nem eszünk ilyesmit vacsorára? Sőt, egyáltalán nem eszünk ilyen zsírban tocsogós ételeket? Jó, akkor étolajban…
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Most miért kell ezen megsértődni, anya? Hogy te csak nekem akartál segíteni, hogy időnként rendes étel is legyen az asztalon a gyereknek? És lett volna jobb dolgod is, mint itt állni a forró serpenyő mellett? Szeretnélek megnyugtatni anya, hogy Lilinek mindig van rendes étel az asztalon és abszolút kiegyensúlyozottan eszik.
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Már, hogy lenne válogatós, anya? Mikor bármit főzök, mindig elfogy. Hogy legutóbb is ott állt a rántott hús egy hétig a hűtőben? Jó, hát az tényleg megmaradt, de túl sokat csináltam, annyit igazán nem bírt volna megenni.
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Hogy alig eszik? Hidd el nekem anya, hogy Lili teljesen normálisan eszik, éppen annyit, mint a vele egyidős lányok. Én kimondottan örülök, hogy nem az a falánk, nassolós fajta… hova vezetne az, ha egyfolytában tömné magát valamivel? Nem, Lili nagyon jól tudja mire van szüksége a szervezetének, napközben egy kis gyümölcs meg zabkása, ebédet pedig mindig rendesen eszik itthon.
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Hát ez meg mi? Mi ez a doboz rétes a hűtőben? Hogy nem lehetett elmenni mellette, mert akkor sütötték és még meleg volt?
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Most mondjam el neked anya, hogy mi lett azzal a temérdek krémessel, amit legutóbb hoztál a névnapomra? Igen, tudom, hogy gyerekkoromban az volt a kedvencem és csak meg akartál lepni, de 6 krémest anya?? Tényleg azt akarod, hogy százkilós legyek nyárra? Mikor most jön a fürdőruha szezon?
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          És már ki is néztem magamnak egy nagyon cuki kétrészest – abba bele kell férnem! Mi az, hogy túl sokat foglalkozom az alakommal? Hogy az én koromban már más prioritások is vannak, mint a külső? És hogy ennyi idősen már ne legyenek olyan nagy elvárásaim magammal szemben? Micsoda?? Na köszönöm szépen, anya! Ez igazán jól esett…!
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Most mit pakolsz még mindig ki a szatyrodból? Zsemlét? Nem kértelek már milliószor, hogy ne hozz ennyi péksüteményt, mert csak megszárad és ki kell dobni? Tudod, hogy én nem eszem ilyesmit… Hogy nem lehet követni az étkezési szokásaimat? Hát olyan nehéz megjegyezni, hogy nem eszem semmi fehér lisztből készült ételt? És cukor helyett is inkább természetes édesítőszereket használok?
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          És húsból is csak olyat eszem, ami garantáltan GMO mentes? Most mit forgatod a szemed? Hogy megőrjítelek a diétámmal? Már ne is haragudj anya, de többet tudok az egészséges táplálkozásról, mint te és csak jobban tudom, hogy mi a jó nekem?
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Én tudom anya, hogy te csak jót akarsz, de… hogy mit csinálnék, ha nem lenne egy ilyen önfeláldozó, bolond anyám, akinek folyton csak azon jár az esze, hogy mivel szerezhetne örömet a lányának?
        </p>
      </>
    )
  }
];

export const mobileExcerptPages = [
  {
    content: (
      <>
        <div className="font-nunito font-bold text-coral text-xl mb-4 md:mb-6 border-b border-coral/20 pb-2">
          Az egyik oldal...
        </div>
        <p className="text-sm md:text-xs lg:text-sm font-bold font-inter text-ink/80 leading-relaxed mb-4 text-justify italic">
          Anya, lánya, unokája
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify italic">
          Az érem egyik oldalán a kissé frusztrált anyuka egy hétköznap reggel, mikor a 14 éves lánya egy szál müzli szelettel a kezében akar elindulni az iskolába.
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Lili, ugye nem azzal az egy szem müzli szelettel akarsz elmenni, mikor nem is reggeliztél és csak délután 3-kor végzel a suliban? Ezt akarod enni egész nap?? Mi az, hogy még egy alma is van nálad?
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Tényleg azt hiszed, hogy egy alma meg egy müzli szelet fedezi egy fejlődésben lévő szervezet energia szükségletét? Mikor direkt készítettem neked chia magos zabkását, mert azt mondtad, hogy annak magas a rosttartalma és azt megeszed. Hogy abban sok a kalória és így is felszedtél 1 kilót a hétvégén?
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Ne szórakozz velem Lili! Én erre nem érek rá kora reggel… Te jó ég, mindjárt fél 8! Már megint a legnagyobb dugóban kell bevezetnem a városba! Figyelj rám Lili, ne legyen a hűtőben a zabkása, mire hazaérek! Nem vagyok hajlandó több ételt kidobni miattad…
        </p>
      </>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        A legutóbb is ki kellett dobnom a szendvicsedet, pedig teljes kiőrlésű barna kenyérből készült és mégis ott aszalódott napokig, mert hozzá sem nyúltál. És mi a gond azzal, hogy sajt is volt benne? Első osztályú, házi készítésű sajt volt, a biopiacon vettem! Abban aztán sem adalékanyag, sem színezék nem volt és nagyon egészséges a tejtermék fogyasztása ebben a korban, igazán megehetted volna!
      </p>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        De hol a slusszkulcsom? Már másodjára pakolom ki a táskám, de nincs ott… hová tehettem? Jut eszembe Lili! Az ebéded abban a kis üvegtálban van lefedve a hűtőben alul, ne felejtsd el megenni, ha hazaértél! Hogyhogy mi lesz ebédre? Amit kértél – fitness ebéd: rántott csirkemell rizzsel és brokkolival.
      </p>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Hogy te csak magában gondoltad a csirkemellet és nem panírozva? Hogy nem eszel semmi bundásat? Igen?? Nem pár hete toltatok be fejenként egy teljes csirkés kosarat Hannával a KFC-ben? Szerinted nekem nincs jobb dolgom, mint munka után a konyhában állni és pepecselni a panírozással, meg a sütéssel? Még most is olajszagú a hajam!
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Lili! Hozzád beszélek! Nehogy ott legyen a rántott hús a hűtőben, ha hazajövök! Dehogy hizlal! A színtiszta csirkemell? Jó, hát van rajta egy kis panír, de szinte csak leheletnyi. Lili! Az őrületbe kergetsz ezzel a fogyókúrával! Ezt már nem lehet követni…
        </p>
      </>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        Végre! Megvan a kulcsom! a kabátzsebemben volt… De hát én nem is értem Lilikém, mire ez a nagy fogyókúra? Amikor olyan csinos vagy! Nincs rajtad egy deka felesleg sem és amúgy is még növésben vagy. Hát miért kell így koplaltatnod magad? Hogy a Kata dereka sokkal vékonyabb, láttad az Instáján? És szerinted nem filterezte meg? Na jó, keresek neked egy pszichológust, ez lesz az első dolgom, ha beértem az irodába! Miért kell neked a Katához hasonlítgatnod magad?
      </p>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        Az anyja is kétszer volt már zsírleszíváson, mit vársz a lányától? Tényleg őt kell utánoznod? Meg amúgy is bele akarsz férni az új farmeredbe? Lili, nem mondtam már ott az üzletben, hogy nem vagyok hajlandó XS-es farmert venni neked? Minek egy számmal kisebbet venni, mint ami a méreted?
      </p>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Hát nem elég szűk neked az S-es? Mi az, hogy te jobban tudod mi áll jól neked? És az én véleményem már nem is számít? Mégiscsak az anyád vagyok… én aztán igazán jól ismerlek és tudhatnád, hogy csak a legjobbat akarom neked!
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Más gyerek örülne, ha az anyja ennyit törődne vele és azzal fárasztaná magát, hogy a kedvenc ételeit főzze! Te meg csak a szádat húzod, meg a válladat vonogatod, hogy nem vagy éhes, meg nem kívánod és csak piszkálod az ételt, hogy még nézni is rossz!
        </p>
      </>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        Én nem is tudom, mit csinálnál, ha nem lenne egy ilyen szerencsétlen, ostoba anyád, aki folyton csak azt nézi, hogy mivel tehetne neked jót?
      </p>
    )
  },
  {
    content: (
      <>
        <div className="font-nunito font-bold text-coral text-xl mb-4 md:mb-6 border-b border-coral/20 pb-2">
          A másik oldal...
        </div>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify italic">
          Az érem másik oldalán ugyanaz az anyuka, most gyermeki szerepben a saját édesanyjával, mikor munkából hazatérve nagy sütésfőzés közben találja őt a konyhában.
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Anya! Hát te meg mit csinálsz itt a konyhában? Nem úgy volt, hogy csak holnap jössz át? Hogy lemondta a fodrászod és ha már úgyis itt voltál a szomszédban, beugrottál összedobni nekünk egy meleg vacsorát?
        </p>
      </>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        És akkor már gyorsan be is vásároltál? Ez nagyon kedves tőled anya, de erre semmi szükség – épp tegnap vásároltam be. Hogy üres volt a hűtő? Már, hogy lett volna üres anya? Mikor még a biopiacon is voltam… Hogy nincs nálunk soha rendes étel csak nyulaknak való csemege? Az a sok zöldség, meg müzli, meg saláta? Hogy ezzel nem lehet etetni egy családot?
      </p>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        Anya, hallottál már a rostban gazdag táplálkozásról? Meg a napi háromszori zöldség és gyümölcs bevitelről? Igen, anya én is tudom, hogy Lili szervezete még fejlődésben van és szüksége van a rendes táplálkozásra, éppen ezért… Te jó ég anya! Csak nem állsz neki még bundás kenyeret is sütni?
      </p>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        A kolbászos bableves mellé?? Vacsorára?! De anya, ki fogja ezt mind megenni? Tudod mennyi szénhidrát van ebben? Csak a bundáskenyér hány kalória? Igen anya, kalória! – van, aki odafigyel erre, ha nem tudnád. Nem mondtam már neked ezerszer, hogy mi nem eszünk ilyesmit vacsorára? Sőt, egyáltalán nem eszünk ilyen zsírban tocsogós ételeket? Jó, akkor étolajban…
      </p>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Most miért kell ezen megsértődni, anya? Hogy te csak nekem akartál segíteni, hogy időnként rendes étel is legyen az asztalon a gyereknek? És lett volna jobb dolgod is, mint itt állni a forró serpenyő mellett? Szeretnélek megnyugtatni anya, hogy Lilinek mindig van rendes étel az asztalon és abszolút kiegyensúlyozottan eszik.
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Már, hogy lenne válogatós, anya? Mikor bármit főzök, mindig elfogy. Hogy legutóbb is ott állt a rántott hús egy hétig a hűtőben? Jó, hát az tényleg megmaradt, de túl sokat csináltam, annyit igazán nem bírt volna megenni.
        </p>
      </>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          Hogy alig eszik? Hidd el nekem anya, hogy Lili teljesen normálisan eszik, éppen annyit, mint a vele egyidős lányok. Én kimondottan örülök, hogy nem az a falánk, nassolós fajta… hova vezetne az, ha egyfolytában tömné magát valamivel? Nem, Lili nagyon jól tudja mire van szüksége a szervezetének, napközben egy kis gyümölcs meg zabkása, ebédet pedig mindig rendesen eszik itthon.
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Hát ez meg mi? Mi ez a doboz rétes a hűtőben? Hogy nem lehetett elmenni mellette, mert akkor sütötték és még meleg volt?
        </p>
      </>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        Most mondjam el neked anya, hogy mi lett azzal a temérdek krémessel, amit legutóbb hoztál a névnapomra? Igen, tudom, hogy gyerekkoromban az volt a kedvencem és csak meg akartál lepni, de 6 krémest anya?? Tényleg azt akarod, hogy százkilós legyek nyárra? Mikor most jön a fürdőruha szezon?
      </p>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        És már ki is néztem magamnak egy nagyon cuki kétrészest – abba bele kell férnem! Mi az, hogy túl sokat foglalkozom az alakommal? Hogy az én koromban már más prioritások is vannak, mint a külső? És hogy ennyi idősen már ne legyenek olyan nagy elvárásaim magammal szemben? Micsoda?? Na köszönöm szépen, anya! Ez igazán jól esett…!
      </p>
    )
  },
  {
    content: (
      <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
        Most mit pakolsz még mindig ki a szatyrodból? Zsemlét? Nem kértelek már milliószor, hogy ne hozz ennyi péksüteményt, mert csak megszárad és ki kell dobni? Tudod, hogy én nem eszem ilyesmit… Hogy nem lehet követni az étkezési szokásaimat? Hát olyan nehéz megjegyezni, hogy nem eszem semmi fehér lisztből készült ételt? És cukor helyett is inkább természetes édesítőszereket használok?
      </p>
    )
  },
  {
    content: (
      <>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed mb-4 text-justify">
          És húsból is csak olyat eszem, ami garantáltan GMO mentes? Most mit forgatod a szemed? Hogy megőrjítelek a diétámmal? Már ne is haragudj anya, de többet tudok az egészséges táplálkozásról, mint te és csak jobban tudom, hogy mi a jó nekem?
        </p>
        <p className="text-sm md:text-xs lg:text-sm font-inter text-ink/80 leading-relaxed text-justify">
          Én tudom anya, hogy te csak jót akarsz, de… hogy mit csinálnék, ha nem lenne egy ilyen önfeláldozó, bolond anyám, akinek folyton csak azon jár az esze, hogy mivel szerezhetne örömet a lányának?
        </p>
      </>
    )
  }
];

export default function ReadExcerpt() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activePages = mounted && isMobile ? mobileExcerptPages : desktopExcerptPages;

  // Render flipbook children safely as an array to avoid passing null/false to HTMLFlipBook
  const flipbookChildren = [];
  
  // 1. Front Cover
  flipbookChildren.push(
    <div key="cover-front" className="page bg-coral border-r border-coral/80 overflow-hidden shadow-[inset_-5px_0_10px_rgba(0,0,0,0.1)]">
      <div className="relative w-full h-full">
        <Image
          src="/az-erme-ket-oldala-cover.webp"
          alt="Az érem két oldala"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );

  // 2. Excerpt Pages
  activePages.forEach((page, idx) => {
    const isLeft = idx % 2 === 0;
    flipbookChildren.push(
      <div key={`excerpt-page-${idx}`} className={`page bg-cream overflow-hidden ${isLeft ? 'border-l border-ink/10 shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]' : 'border-r border-ink/10 shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]'}`}>
        <div className="flex flex-col h-full w-full p-6 md:p-8">
          {page.content}
          <div className="mt-auto pt-2 text-center text-ink/40 text-sm">{idx + 1}</div>
        </div>
      </div>
    );
  });

  // 3. TOC Pages
  tocPages.forEach((items, pageIndex) => {
    const isLeft = pageIndex % 2 === 0;
    flipbookChildren.push(
      <div key={`toc-page-${pageIndex}`} className={`page bg-cream overflow-hidden ${isLeft ? 'border-l border-ink/10 shadow-[inset_5px_0_10px_rgba(0,0,0,0.05)]' : 'border-r border-ink/10 shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]'}`}>
        <div className="flex flex-col h-full w-full p-6 md:p-8">
          {pageIndex === 0 && (
            <div className="font-nunito font-bold text-coral text-xl mb-4 md:mb-6 border-b border-coral/20 pb-2 text-center">
              Tartalom
            </div>
          )}
          <div className={`${pageIndex > 0 ? 'pt-2' : ''} flex-1`}>
            {items.map((item, idx) => (
              <TocItem key={`toc-item-${pageIndex}-${idx}`} {...item} />
            ))}
          </div>
          <div className="mt-auto pt-2 text-center text-ink/40 text-sm">{activePages.length + 1 + pageIndex}</div>
        </div>
      </div>
    );
  });

  // 4. Blank page to ensure total count is even (including back cover)
  // flipbookChildren.length is currently Front Cover + Excerpts + TOC.
  // Adding Back Cover makes it flipbookChildren.length + 1.
  if ((flipbookChildren.length + 1) % 2 !== 0) {
    flipbookChildren.push(
      <div key="blank-page" className="page bg-cream border-r border-ink/10 shadow-[inset_-5px_0_10px_rgba(0,0,0,0.05)]"></div>
    );
  }

  // 5. Back Cover
  flipbookChildren.push(
    <div key="cover-back" className="page bg-coral border-l border-coral/80 overflow-hidden shadow-[inset_5px_0_10px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col justify-center items-center h-full w-full p-8 text-white">
        <h3 className="font-nunito font-bold text-3xl mb-4 text-center">
          Tetszett az ízelítő?
        </h3>
        <p className="font-inter text-white/80 italic text-center mb-8">
          Fedezd fel a többi hétköznapi de mégis zseniális szituációt is!
        </p>
      </div>
    </div>
  );

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
            key={mounted && isMobile ? 'mobile' : 'desktop'}
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
            usePortrait={true}
            className="flip-book shadow-2xl"
          >
            {flipbookChildren}
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
