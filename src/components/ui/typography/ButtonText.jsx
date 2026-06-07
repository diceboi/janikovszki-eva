"use client";

export default function ButtonText({
  color = "text-white",
  weight = "font-bold",
  className = "",
  children,
}) {
  return (
    <span
      style={{ fontSize: "var(--type-btn)" }}
      className={`font-nunito ${color} ${weight} ${className}`}
    >
      {children}
    </span>
  );
}
