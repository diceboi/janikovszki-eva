"use client";

import { motion } from "motion/react";

export default function Doodle({ color = "var(--sky)", size = 48, className = "", variant = "spiral" }) {
  const paths = {
    spiral: "M24 4C12 4 4 12 4 24C4 30 8 36 14 40C18 42 22 44 28 44C36 44 44 36 44 28",
    loop: "M4 24C4 12 14 4 24 4C34 4 44 12 44 20C44 28 36 32 28 28C20 24 20 16 28 12C36 8 44 12 44 24",
    zigzag: "M4 20L12 8L20 24L28 8L36 24L44 12",
    heart: "M24 40C24 40 4 28 4 16C4 8 10 4 16 4C20 4 22 6 24 10C26 6 28 4 32 4C38 4 44 8 44 16C44 28 24 40 24 40Z",
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 0.6, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <path
        d={paths[variant] || paths.spiral}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={variant === "heart" ? color : "none"}
        fillOpacity={variant === "heart" ? 0.15 : 0}
      />
    </motion.svg>
  );
}
