"use client";

import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import MainButton from "@/components/ui/buttons/MainButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import Squiggle from "@/components/decorations/Squiggle";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";

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

        {/* Two-sided card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-3xl mx-auto mb-12"
        >
          {/* Side A */}
          <div className="bg-cream rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-8 lg:p-10 border-2 border-coral/15 border-r-0 md:border-r-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-coral text-white font-nunito font-bold text-lg">
                A
              </span>
              <span className="font-nunito font-bold text-ink">Az egyik oldal</span>
            </div>
            <p className="text-sm font-inter text-text-muted leading-relaxed italic">
              &ldquo;Természetesen megmondom a véleményemet. Hiszen aki hallgat, az beleegyezik...&rdquo;
            </p>
          </div>

          {/* Side B */}
          <div className="bg-sky/8 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none p-8 lg:p-10 border-2 border-sky/15 border-l-0 md:border-l-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-sky text-white font-nunito font-bold text-lg">
                B
              </span>
              <span className="font-nunito font-bold text-ink">A másik oldal</span>
            </div>
            <p className="text-sm font-inter text-text-muted leading-relaxed italic">
              &ldquo;Természetesen nem szólok semmit. Hiszen ami a szívemet nyomja, azt úgyse értené meg senki...&rdquo;
            </p>
          </div>
        </motion.div>

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
