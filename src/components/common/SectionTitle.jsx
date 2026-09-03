export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">

      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.3em] uppercase ${
            light
              ? "text-[#ff93b3]"
              : "text-[#caa229]"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-3 ${
          light
            ? "text-white"
            : "text-[#ae2831]"
        }`}
      >
        {title}
      </h2>

      <div className="w-16 h-px bg-[#caa229] mx-auto mt-5" />

      {description && (
        <p
          className={`mt-6 text-sm md:text-base leading-7 ${
            light
              ? "text-white/70"
              : "text-[#24151a]/65"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}