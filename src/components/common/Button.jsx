import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  variant = "primary",
}) {
  const styles =
    variant === "primary"
      ? "bg-[#ae2831] text-white hover:bg-[#8f2029]"
      : "border border-[#caa229] text-[#ae2831] hover:bg-[#caa229] hover:text-white";

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase transition duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}