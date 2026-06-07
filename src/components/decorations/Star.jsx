"use client";

import { motion } from "motion/react";

export default function Star({ color = "var(--sunshine)", size = 32, className = "", animate = true }) {
  const Wrapper = animate ? motion.svg : "svg";
  const animationProps = animate
    ? {
        initial: { rotate: 0, scale: 0 },
        whileInView: { rotate: 360, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, type: "spring", bounce: 0.5 },
      }
    : {};

  return (
    <Wrapper
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...animationProps}
    >
      <path
        d="M16 2L19.5 11.5L29 12L22 18.5L24 28L16 23L8 28L10 18.5L3 12L12.5 11.5L16 2Z"
        fill={color}
        stroke={color}
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </Wrapper>
  );
}
