export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 90"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MediaPump"
      className={className}
    >
      <polygon points="14,13 14,58 56,35.5" fill="#00C2A8" />
      <polyline
        points="14,35.5 18,35.5 25,20 33,51 40,25 47,35.5"
        fill="none"
        stroke="#E9EDF2"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="47,34.2 47,36.8 56,35.5" fill="#E9EDF2" />

      <g transform="translate(0,4.6) scale(1,0.9)">
        <text
          x="57"
          y="46"
          fontFamily="var(--font-heading), Geist, Manrope, sans-serif"
          fontWeight={700}
          fontSize={34}
          letterSpacing="-0.5"
        >
          <tspan fill="#E9EDF2">edia </tspan>
          <tspan fill="#00C2A8">Pump</tspan>
        </text>
      </g>
    </svg>
  );
}
