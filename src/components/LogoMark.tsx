type LogoVariant = "on-light" | "on-dark";

export function LogoMark({
  className = "",
  variant = "on-light",
}: {
  className?: string;
  variant?: LogoVariant;
}) {
  const moonClass = variant === "on-dark" ? "logoMoonOnDark" : "logoMoonOnLight";
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="logo-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bca" />
          <stop offset="100%" stopColor="#6b8f6e" />
        </linearGradient>
      </defs>
      <path
        d="M12 32 C12 14 6 10 6 10 C6 10 12 6 18 10 C24 14 26 22 26 32"
        stroke="currentColor"
        strokeWidth="1.5"
        className={moonClass}
      />
      <path
        d="M28 32 C28 14 34 10 34 10 C34 10 28 6 22 10 C16 14 14 22 14 32"
        stroke="currentColor"
        strokeWidth="1.5"
        className={moonClass}
      />
      <circle cx="20" cy="18" r="6" fill="url(#logo-glow)" opacity={0.55} />
      <path
        d="M20 12l1.8 4.2L26 17l-3.4 3 1 4.6L20 22.5l-3.6 2.1 1-4.6-3.4-3 4.2-.8L20 12z"
        fill={variant === "on-dark" ? "#9cb89e" : "#4a6348"}
        opacity={variant === "on-dark" ? 0.7 : 0.5}
      />
    </svg>
  );
}
