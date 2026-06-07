"use client";

export default function Span({
  color = "text-ink",
  weight = "font-normal",
  className = "",
  children,
}) {
  return (
    <span
      style={{ fontSize: "var(--type-body)" }}
      className={`font-inter ${color} ${weight} ${className}`}
    >
      {children}
    </span>
  );
}
