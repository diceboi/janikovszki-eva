"use client";

import { motion } from "motion/react";

export default function H1({
  color = "text-ink",
  weight = "font-extrabold",
  className = "",
  animate = true,
  as = "h1",
  children,
}) {
  const Component = animate ? motion.h1 : as;
  const animationProps = animate
    ? {
        initial: { y: 24, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, type: "spring", bounce: 0.3 },
      }
    : {};

  return (
    <Component
      style={{ fontSize: "var(--type-h1)" }}
      className={`font-nunito leading-[1.08] tracking-tight ${color} ${weight} ${className}`}
      {...animationProps}
    >
      {children}
    </Component>
  );
}
