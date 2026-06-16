"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "motion/react";
import Image from "next/image";
import H2 from "@/components/ui/typography/H2";
import Doodle from "@/components/decorations/Doodle";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Olvasás közben állandóan bólogatni kellett, annyira ismerős volt minden jelenet. Fantasztikus!",
    author: "Kriszti, 38",
    role: "Két gyermek anyukája",
  },
  {
    text: "Végre egy könyv, ami a mi korosztályunknak szól! Witty, intelligens humor, ami elgondolkodtat.",
    author: "Péter, 42",
    role: "Marketing menedzser",
  },
  {
    text: "A gyerekkorom óta nem nevettem ennyit olvasás közben. A kedvenc írőnőm szelleme él és virul!",
    author: "Eszter, 35",
    role: "Tanárnő",
  },
];

export default function Testimonials() {
  return (
    <section
      id="velemenyek"
      className="relative bg-lavender/15 px-6 py-20 lg:px-8 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <Image src="/spacer-v2.webp" alt="Díszítő elem" width={140} height={20} className="mx-auto mb-8 object-contain" />
          <H2 className="mb-4">
            Olvasói <span className="text-coral">ajánlások</span>
          </H2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-lavender/10 h-full flex flex-col">
                  <FaQuoteLeft className="text-coral/30 text-2xl mb-4" />
                  <p
                    className="font-inter text-ink/80 leading-relaxed flex-1 mb-6"
                    style={{ fontSize: "var(--type-small)" }}
                  >
                    {item.text}
                  </p>
                  <div className="border-t border-lavender/20 pt-4">
                    <p className="font-nunito font-bold text-ink text-sm">
                      {item.author}
                    </p>
                    <p className="font-inter text-text-muted text-xs">
                      {item.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
