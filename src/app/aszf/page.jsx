import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function AszfPage() {
  return (
    <main className="min-h-screen bg-cream py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-ink/5">
        <Link href="/" className="inline-flex items-center gap-2 text-coral hover:text-coral/80 font-inter mb-8 transition-colors">
          <FaArrowLeft /> Vissza a főoldalra
        </Link>
        
        <h1 className="font-nunito font-bold text-3xl md:text-4xl text-ink mb-8">Általános Szerződési Feltételek (ÁSZF)</h1>
        
        <div className="space-y-6 font-inter text-ink/80 leading-relaxed text-sm md:text-base text-justify">
          <p>
            Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) tartalmazzák a <strong>Coreheed Consulting Kft.</strong> (Székhely: 2040 Budaörs, Ibolya utca 60., Adószám: 32531813-1-13), mint Szolgáltató által üzemeltetett weboldalon történő digitális tartalom (E-book) vásárlására vonatkozó feltételeket.
          </p>

          <h2 className="font-nunito font-bold text-xl text-ink mt-8">1. A szerződés tárgya</h2>
          <p>
            A szerződés tárgya a weboldalon található "Az érem két oldala" című E-book digitális formátumú (PDF és EPUB) megvásárlása. A termék fizikai formátumban nem kerül kiszállításra.
          </p>

          <h2 className="font-nunito font-bold text-xl text-ink mt-8">2. Vásárlás és fizetés</h2>
          <p>
            A fizetés a Stripe biztonságos fizetési rendszerén keresztül történik bankkártyával. A vásárlás a sikeres fizetés visszaigazolásával tekinthető véglegesnek. A vételár kiegyenlítése után a vásárló hozzáférést kap a letöltési linkekhez.
          </p>

          <h2 className="font-nunito font-bold text-xl text-ink mt-8">3. Szállítás (Letöltés)</h2>
          <p>
            Mivel digitális tartalomról van szó, a "szállítás" a fájlok letöltésével valósul meg. A sikeres fizetést követően a rendszer automatikusan biztosítja a letöltési lehetőséget a köszönő oldalon, illetve e-mailben is kiküldésre kerülhet a számlával együtt.
          </p>

          <h2 className="font-nunito font-bold text-xl text-ink mt-8">4. Elállási jog</h2>
          <p>
            Felhívjuk figyelmét, hogy a 45/2014. (II. 26.) Korm. rendelet 29. § (1) bekezdés m) pontja alapján a fogyasztó <strong>nem gyakorolhatja elállási jogát</strong> a nem tárgyi adathordozón nyújtott digitális adattartalom tekintetében, ha a vállalkozás a fogyasztó kifejezett, előzetes beleegyezésével kezdte meg a teljesítést, és a fogyasztó e beleegyezésével egyidejűleg nyilatkozott annak tudomásul vételéről, hogy a teljesítés megkezdését követően elveszíti elállási jogát. A vásárlással Ön ezt kifejezetten elfogadja.
          </p>

          <h2 className="font-nunito font-bold text-xl text-ink mt-8">5. Szerzői jogok</h2>
          <p>
            A megvásárolt digitális E-book szerzői jogi védelem alatt áll. A Vásárló a terméket kizárólag saját, személyes célra használhatja fel. Tilos a termék részben vagy egészben történő másolása, terjesztése, nyilvános közzététele vagy bármilyen üzleti célú felhasználása a Szolgáltató előzetes írásbeli engedélye nélkül.
          </p>
        </div>
      </div>
    </main>
  );
}
