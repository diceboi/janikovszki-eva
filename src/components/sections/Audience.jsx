"use client";

import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import Handwritten from "@/components/ui/typography/Handwritten";
import MainButton from "@/components/ui/buttons/MainButton";
import { FaArrowRight } from "react-icons/fa";

export default function Audience() {
  return (
    <section id="kinek-szol" className="relative bg-blush/40 px-6 py-20 lg:px-8 lg:py-28 overflow-hidden">
      {/* Soft gradient accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(circle,rgba(110,198,255,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-4xl text-center">
        <Handwritten
          as="p"
          className="mb-4 block"
          color="text-coral"
        >
          Ez Janikovszky világa... csak velünk együtt felnőtt!
        </Handwritten>

        <H2 className="mb-8">
          Kinek szól ez a <span className="text-coral">könyv</span>?
        </H2>

        <Paragraph className="max-w-3xl mx-auto mb-6" color="text-ink/80">
          A Janikovszky-generáció időközben felnőtt. Még emlékszünk nagymamáink lekváros
          buktájára, de már chia magos zabkását készítünk a gyerekeinknek reggelire. Talán
          még vissza tudjuk idézni a kisdobosok 6 pontját, de sokkal inkább a fejünkben van,
          hogy mit promptoltunk tegnap a munkánk során.
        </Paragraph>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] max-w-2xl mx-auto mb-10"
        >
          <H2 animate={false} className="!text-2xl lg:!text-3xl mb-2" color="text-coral">
            Ez a könyv nektek szól,
          </H2>
          <Handwritten
            as="p"
            animate={false}
            className="block text-3xl lg:text-4xl"
            color="text-ink"
          >
            kedves X és Y generáció!
          </Handwritten>
        </motion.div>

        {/* Generation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            {
              emoji: "📼",
              gen: "X Generáció",
              desc: "Kazettán hallgattuk a zenét, de ma már Spotify-on",
              color: "border-sky",
            },
            {
              emoji: "📱",
              gen: "Y Generáció",
              desc: "Az MSN-en nőttünk fel, de ma már Teams-en meetingelünk",
              color: "border-coral",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-2xl p-6 border-t-4 ${item.color} shadow-md`}
            >
              <span className="text-4xl mb-3 block">{item.emoji}</span>
              <h4 className="font-nunito font-bold text-lg text-ink mb-1">{item.gen}</h4>
              <p className="text-sm font-inter text-text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
