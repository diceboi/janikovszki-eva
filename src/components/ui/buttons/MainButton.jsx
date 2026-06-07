"use client";

import { motion } from "motion/react";
import ButtonText from "../typography/ButtonText";

export default function MainButton({
  color = "bg-coral",
  hoverColor = "hover:bg-coral-hover",
  textColor = "text-white",
  iconBefore = null,
  iconAfter = null,
  borderColor = "border-transparent",
  borderHoverColor = "hover:border-coral-hover",
  href = null,
  onClick = null,
  className = "",
  children,
}) {
  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2.5
    ${color} ${textColor} ${borderColor}
    border-2 rounded-full
    px-8 py-4
    shadow-[0_4px_14px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]
    ${hoverColor} ${borderHoverColor}
    hover:shadow-[0_6px_20px_rgba(0,0,0,0.15),0_2px_6px_rgba(0,0,0,0.1)]
    hover:-translate-y-0.5
    active:translate-y-0 active:shadow-[0_2px_8px_rgba(0,0,0,0.1)]
    transition-all duration-300 ease-out
    cursor-pointer
    ${className}
  `.trim();

  const content = (
    <>
      {iconBefore && (
        <span className="text-lg transition-transform duration-300 group-hover:-translate-x-0.5">
          {iconBefore}
        </span>
      )}
      <ButtonText color={textColor}>{children}</ButtonText>
      {iconAfter && (
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
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
