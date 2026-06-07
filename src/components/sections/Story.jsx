"use client";

import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import Handwritten from "@/components/ui/typography/Handwritten";
import Star from "@/components/decorations/Star";
import Doodle from "@/components/decorations/Doodle";

export default function Story() {
  return (
    <section id="sztori" className="relative bg-cream px-6 py-20 lg:px-8 lg:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 right-12 opacity-25 hidden lg:block">
        <Star color="var(--coral)" size={44} />
      </div>
      <div className="absolute bottom-16 left-8 opacity-20 hidden lg:block">
        <Doodle color="var(--sunshine)" size={52} variant="spiral" />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <H2 className="mb-4">
            Miről szól a <span className="text-sky">könyv</span>?
          </H2>
        </div>

        <div className="space-y-6">
          <Paragraph className="max-w-3xl mx-auto" color="text-ink/80">
            Közel 50 éve jelent meg Janikovszky Éva: A lemez két oldala című könyve, amiben ezt
            az örök emberi sajátosságunkat mutatja be. Akkor még szocializmus volt, Kádár-korszak,
            termelői értekezletek, Télapó-ünnepélyek, KST pénzek és KISZ építőtáborok határozták meg
            a mindennapokat – sokunknak ma már ezek a dolgok nem sokat mondanak.
          </Paragraph>

          <Paragraph className="max-w-3xl mx-auto" color="text-ink/80">
            A világ azóta nagyot fordult: az AI korában élünk. A technológiai
            változások és a digitalizáció életünk mindennapi részévé váltak.
          </Paragraph>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-sunshine/20 max-w-3xl mx-auto"
          >
            <Paragraph className="text-center" color="text-ink" weight="font-medium">
              Mégis van, ami ebben a felgyorsult, bizonytalanná váló világunkban is örök
              és állandó marad: a mindennapos emberi helyzeteink és az az emberi sajátosságunk,
              hogy szeretjük, ha az érem mindkét oldalán a mi igazunk áll{" "}
              <span className="text-2xl">☺</span>
            </Paragraph>
          </motion.div>

          <Paragraph className="max-w-3xl mx-auto" color="text-ink/80">
            Az érem két oldala című könyv olyan hétköznapi, emberi helyzetekről szól,
            amivel nap, mint nap találkozunk: halljuk őket a metrón, amíg munkába megyünk,
            vagy a fodrászunknál, miközben a hajunk készül, vagy akár a játszótéren a többi
            anyukától. De ezek a történetek már a 21. századról szólnak és már nem olyan
            dilemmákról, hogy miképp lehet melegen tartani a túrógombócot, hanem hogy
            lehet-e Chat GPT-t használni a matek leckéhez?
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
