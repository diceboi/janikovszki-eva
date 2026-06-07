"use client";

import { motion } from "motion/react";
import ButtonText from "../typography/ButtonText";

export default function SecondaryButton({
  color = "bg-transparent",
  hoverColor = "hover:bg-sunshine/10",
  textColor = "text-ink",
  iconBefore = null,
  iconAfter = null,
  borderColor = "border-ink/20",
  borderHoverColor = "hover:border-coral",
  href = null,
  onClick = null,
  className = "",
  children,
}) {
  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2.5
    ${color} ${textColor} ${borderColor}
    border-2 rounded-full
    px-7 py-3.5
    ${hoverColor} ${borderHoverColor}
    hover:-translate-y-0.5
    active:translate-y-0
    transition-all duration-300 ease-out
    cursor-pointer
    ${className}
  `.trim();

  const content = (
    <>
      {iconBefore && (
        <span className="text-base transition-transform duration-300 group-hover:-translate-x-0.5">
          {iconBefore}
        </span>
      )}
      <ButtonText color={textColor}>{children}</ButtonText>
      {iconAfter && (
        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
          {iconAfter}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
