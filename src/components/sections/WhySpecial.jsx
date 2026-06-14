"use client";

import { motion } from "motion/react";
import H2 from "@/components/ui/typography/H2";
import Paragraph from "@/components/ui/typography/Paragraph";
import MainButton from "@/components/ui/buttons/MainButton";
import { FaShoppingCart } from "react-icons/fa";
import Star from "@/components/decorations/Star";
import Image from "next/image";

const features = [
  {
    icon: (
      <Image
        src="/heart.webp"
        alt="Nosztalgia"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    title: "Nosztalgia, ami hazavisz",
    desc: "Felidézi a gyerekkori olvasási élményedet — de modernbe öltöztetve.",
    accent: "",
  },
  {
    icon: (
      <Image
        src="/fun.webp"
        alt="Humor"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    title: "Intelligens humor",
    desc: "Nem erőltetett, hanem okos, szellemes – olyan, amilyen a Te generációd humora.",
    accent: "text-sunshine-hover",
  },
  {
    icon: (
      <Image
        src="/paint.webp"
        alt="Vizuális"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    title: "Vizuális emlékezet",
    desc: "Megidézi Réber László rajzait, de modern, friss grafikával tiszteleg előtte.",
    accent: "text-sky-hover",
  },
  {
    icon: (
      <Image
        src="/chip.webp"
        alt="21. század"
        width={60}
        height={60}
        className="object-contain"
      />
    ),
    title: "21. századi köntös",
    desc: "Megtartja, ami örök és emberi — de a mai pörgős életünkön keresztül mutatja be.",
    accent: "text-ink",
  },
];

export default function WhySpecial() {
  return (
    <section
      id="miert-kulonleges"
      className="relative bg-cream px-6 py-20 lg:px-8 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <Image src="/spacer.webp" alt="Díszítő elem" width={140} height={20} className="mx-auto mb-8 object-contain" />
          <H2 className="mb-6">
            Miért <span className="text-coral">különleges</span>?
          </H2>
          <Paragraph className="max-w-2xl mx-auto" color="text-ink/70">
            Az érem két oldala című könyv csupán megidézi gyerekkorunk kedvenc
            írónőjének írásait, tiszteleg előtte, de új, modern köntösbe
            helyezi. Megtartja azt, ami örök és emberi, vagyis azt az emberi
            tulajdonságunkat, hogy szeretjük, ha nekünk van igazunk - de mindezt
            a mai, modern, pörgős életünkön keresztül mutatja be, intelligens
            humorral fűszerezve.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-ink/5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.accent} text-2xl mb-5`}
              >
                {item.icon}
              </div>
              <h3 className="font-nunito font-bold text-lg text-ink mb-2">
                {item.title}
              </h3>
              <p
                className="font-inter text-text-muted leading-relaxed"
                style={{ fontSize: "var(--type-small)" }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <MainButton href="#vasarlas" iconBefore={<FaShoppingCart />}>
            Megveszem az E-bookot!
          </MainButton>
        </motion.div>
      </div>
    </section>
  );
}
