"use client";

import { motion } from "motion/react";

export default function Paragraph({
  color = "text-ink",
  weight = "font-normal",
  className = "",
  animate = true,
  children,
}) {
  const Component = animate ? motion.p : "p";
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 8 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
      }
    : {};

  return (
    <Component
      style={{ fontSize: "var(--type-body)" }}
      className={`font-inter leading-relaxed ${color} ${weight} ${className}`}
      {...animationProps}
    >
      {children}
    </Component>
  );
}
