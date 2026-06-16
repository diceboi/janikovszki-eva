"use client";

import { motion } from "motion/react";
import Image from "next/image";
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

      <div className="mx-auto max-w-5xl text-center relative z-10">
        <Image src="/spacer-v2.webp" alt="Díszítő elem" width={140} height={20} className="mx-auto mb-8 object-contain" />
        <H2 className="mb-8">
          Kinek szól ez a <span className="text-coral">könyv</span>?
        </H2>

        {/* Képes rész */}
        <div className="relative w-full max-w-4xl mx-auto mb-16 aspect-square md:aspect-[2/1] flex items-center justify-center mt-8">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full h-full md:w-3/4 md:h-full"
          >
            <Image
              src="/generacio.webp"
              alt="Generációk"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>


        </div>

        <Handwritten
          as="p"
          className="mb-4 block"
          color="text-coral"
        >
          Ez Janikovszky világa... csak velünk együtt felnőtt!
        </Handwritten>

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
          className="max-w-2xl mx-auto my-20"
        >
          <Handwritten
            as="p"
            animate={false}
            className="block text-xl md:text-2xl text-center"
            color="text-ink"
          >
            Ez a könyv nektek szól,
          </Handwritten>
          <Handwritten
            as="p"
            animate={false}
            className="block text-3xl lg:text-4xl"
            color="text-coral"
          >
            kedves X és Y generáció!
          </Handwritten>
        </motion.div>

        {/* Generation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto mt-12">
          {[
            {
              gen: "X Generáció",
              desc: "Kazettán hallgattuk a zenét, de ma már Spotify-on",
              images: [
                { src: "/kazetta.webp", alt: "Kazetta", w: "w-20 h-20 md:w-24 md:h-24", animY: [0, -8, 0], duration: 4.5, delay: 0 },
                { src: "/spotify.webp", alt: "Spotify", w: "w-16 h-16 md:w-20 md:h-20", animY: [0, 10, 0], duration: 5, delay: 1 }
              ]
            },
            {
              gen: "Y Generáció",
              desc: "Az MSN-en nőttünk fel, de ma már Teams-en meetingelünk",
              images: [
                { src: "/msn.webp", alt: "MSN", w: "w-20 h-20 md:w-24 md:h-24", animY: [0, -10, 0], duration: 4.8, delay: 0.5 },
                { src: "/teams.webp", alt: "Teams", w: "w-20 h-20 md:w-24 md:h-24", animY: [0, 8, 0], duration: 5.2, delay: 1.5 }
              ]
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col h-full border border-blush/20"
            >
              {/* Floating images inside the card */}
              <div className="flex items-center justify-between mb-8 h-24 px-2">
                {item.images.map((img, i) => (
                  <motion.div
                    key={i}
                    className={`relative ${img.w} z-10 pointer-events-none`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                  >
                    <motion.div
                      className="relative w-full h-full"
                      animate={{ y: img.animY }}
                      transition={{ duration: img.duration, repeat: Infinity, ease: "easeInOut", delay: img.delay }}
                    >
                      <Image src={img.src} alt={img.alt} fill className="object-contain drop-shadow-sm" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Text Content */}
              <div className="mt-auto">
                <Handwritten
                  as="p"
                  animate={false}
                  className="block text-3xl lg:text-4xl mb-2"
                  color="text-ink"
                >
                  {item.gen}
                </Handwritten>
                <p className="text-sm md:text-base font-inter text-text-muted">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
