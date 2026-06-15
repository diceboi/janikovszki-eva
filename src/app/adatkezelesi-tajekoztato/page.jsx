import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function AdatkezelesiTajekoztatoPage() {
  return (
    <main className="min-h-screen bg-cream py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-ink/5">
        <Link href="/" className="inline-flex items-center gap-2 text-coral hover:text-coral/80 font-inter mb-8 transition-colors">
          <FaArrowLeft /> Vissza a főoldalra
        </Link>
        
        <h1 className="font-nunito font-bold text-3xl md:text-4xl text-ink mb-8">Adatkezelési Tájékoztató</h1>
        
        <div className="space-y-6 font-inter text-ink/80 leading-relaxed text-sm md:text-base text-justify">
          <p>
            A <strong>Coreheed Consulting Kft.</strong>, mint adatkezelő, magára nézve kötelezőnek ismeri el jelen jogi közlemény tartalmát. Kötelezettséget vállal arra, hogy tevékenységével kapcsolatos minden adatkezelés megfelel a jelen tájékoztatóban és a hatályos nemzeti jogszabályokban, valamint az Európai Unió jogi aktusaiban meghatározott elvárásoknak.
          </p>

          <h2 className="font-nunito font-bold text-xl text-ink mt-8">1. Az adatkezelő adatai</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Név:</strong> Coreheed Consulting Kft.</li>
            <li><strong>Székhely:</strong> 2040 Budaörs, Ibolya utca 60.</li>
            <li><strong>Adószám:</strong> 32531813-1-13</li>
            <li><strong>Cégjegyzékszám:</strong> 13-09-233401</li>
            <li><strong>Mobil:</strong> +36 30 328 2517</li>
            <li><strong>E-mail:</strong> info@coreheed.hu</li>
          </ul>

          <h2 className="font-nunito font-bold text-xl text-ink mt-8">2. A kezelt személyes adatok köre</h2>
          <p>
            A weboldalon történő vásárlás (E-book) során az alábbi adatokat kezeljük a vásárlás teljesítése céljából:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Név</li>
            <li>E-mail cím</li>
            <li>Számlázási cím adatok</li>
          </ul>
          <p>
            A fizetés a Stripe rendszerén keresztül történik, így a bankkártya adatok közvetlenül a Stripe-hoz kerülnek, a Coreheed Consulting Kft. ezekhez nem fér hozzá és nem tárolja őket.
          </p>

          <h2 className="font-nunito font-bold text-xl text-ink mt-8">3. Az adatkezelés célja és jogalapja</h2>
          <p>
            <strong>Adatkezelés célja:</strong> A megrendelés teljesítése, a digitális tartalom elérésének biztosítása, számlázás, és a számviteli kötelezettségek teljesítése.
          </p>
          <p>
            <strong>Jogalapja:</strong> A szerződés teljesítése (GDPR 6. cikk (1) bek. b) pont), valamint a jogi kötelezettség teljesítése (GDPR 6. cikk (1) bek. c) pont) a számlázási adatok tekintetében.
          </p>

          <h2 className="font-nunito font-bold text-xl text-ink mt-8">4. Adatfeldolgozók</h2>
          <p>A szolgáltatás nyújtása során az alábbi adatfeldolgozókat vesszük igénybe:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Stripe, Inc.</strong> (Fizetés feldolgozása)</li>
            <li><strong>Vercel Inc.</strong> (Tárhelyszolgáltatás)</li>
          </ul>

          <h2 className="font-nunito font-bold text-xl text-ink mt-8">5. Érintettek jogai</h2>
          <p>
            Ön jogosult tájékoztatást kérni a személyes adatai kezeléséről, kérheti azok helyesbítését, törlését (kivéve a kötelező adatkezeléseket, pl. számlázás), vagy az adatkezelés korlátozását. Továbbá jogosult a felügyeleti hatósághoz (NAIH) fordulni panaszával.
          </p>
        </div>
      </div>
    </main>
  );
}
