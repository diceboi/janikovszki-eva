"use client";

import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import Squiggle from "@/components/decorations/Squiggle";

export default function Hook() {
  return (
    <section id="hook" className="relative bg-white px-6 py-20 lg:px-8 lg:py-28">
      {/* Top squiggle divider */}
      <div className="flex justify-center mb-12">
        <Squiggle color="var(--sunshine)" width={160} />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <H2 color="text-ink" className="mb-8">
          Észrevetted már{" "}
          <span className="text-coral">magadon</span>?
        </H2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paragraph className="max-w-2xl mx-auto mb-6" color="text-ink/80">
            Észrevetted már magadon vagy a környezetedben valakin, hogy ugyanarról
            a dologról homlokegyenest másképp beszélünk a kontextustól, vagy a
            beszédpartnerünktől függően?
          </Paragraph>

          <Paragraph
            className="max-w-2xl mx-auto"
            color="text-ink/80"
            weight="font-medium"
          >
            És mindkét esetben meg vagyunk győződve az igazunkról?
          </Paragraph>
        </motion.div>
      </div>

      {/* Bottom squiggle */}
      <div className="flex justify-center mt-12">
        <Squiggle color="var(--sky)" width={120} />
      </div>
    </section>
  );
}
