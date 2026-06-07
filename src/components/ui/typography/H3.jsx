"use client";

import { motion } from "motion/react";

export default function H3({
  color = "text-ink",
  weight = "font-bold",
  className = "",
  animate = true,
  children,
}) {
  const Component = animate ? motion.h3 : "h3";
  const animationProps = animate
    ? {
        initial: { y: 16, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, type: "spring", bounce: 0.3, delay: 0.1 },
      }
    : {};

  return (
    <Component
      style={{ fontSize: "var(--type-h3)" }}
      className={`font-nunito leading-[1.2] tracking-tight ${color} ${weight} ${className}`}
      {...animationProps}
    >
      {children}
    </Component>
  );
}
