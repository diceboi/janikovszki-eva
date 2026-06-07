"use client";

import { motion } from "motion/react";

export default function Handwritten({
  color = "text-coral",
  weight = "font-bold",
  className = "",
  animate = true,
  as = "span",
  children,
}) {
  const Tag = animate ? motion[as] || motion.span : as;
  const animationProps = animate
    ? {
        initial: { opacity: 0, rotate: -2, scale: 0.95 },
        whileInView: { opacity: 1, rotate: 0, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, type: "spring", bounce: 0.4, delay: 0.2 },
      }
    : {};

  return (
    <Tag
      style={{ fontSize: "var(--type-handwritten)" }}
      className={`font-caveat ${color} ${weight} ${className}`}
      {...animationProps}
    >
      {children}
    </Tag>
  );
}
