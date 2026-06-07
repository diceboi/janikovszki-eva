"use client";

export default function Squiggle({ color = "var(--coral)", className = "", width = 120 }) {
  return (
    <svg
      width={width}
      height={width * 0.2}
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 12C10 4 18 20 26 12C34 4 42 20 50 12C58 4 66 20 74 12C82 4 90 20 98 12C106 4 114 20 118 14"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
