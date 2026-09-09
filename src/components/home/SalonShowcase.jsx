import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const salonImages = [
  "/images/salon/salon-1.jpg",
  "/images/salon/salon-2.jpg",
  "/images/salon/salon-3.jpg",
  "/images/salon/salon-4.jpg",
  "/images/salon/salon-5.jpg",
];

export default function SalonShowcase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % salonImages.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-10 md:py-14 bg-[#fff7f9] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#e91e63]/10 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#c9a227]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-7"
        >
          <p
            className="
              text-[#c2185b]
              text-[10px]
              uppercase
              tracking-[0.3em]
              font-semibold
            "
          >
            Our Beauty Space
          </p>

          <h2
            className="
              font-display
              text-3xl
              sm:text-4xl
              md:text-5xl
              text-[#3d071d]
              mt-2
            "
          >
            Our Salon{" "}
            <span className="text-[#c2185b] italic">
              Women`s World
            </span>
          </h2>

          <div className="w-12 h-px bg-[#c9a227] mx-auto mt-4" />

          <p className="text-sm text-[#765963] mt-4 max-w-xl mx-auto">
            Step into an elegant space designed to make every beauty
            experience special.
          </p>
        </motion.div>

        {/* ================= IMAGE SLIDER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
  duration: 0.45,
  ease: "easeInOut",
}}
          className="
            relative
            mx-auto
            w-full
            max-w-5xl
            h-[230px]
            sm:h-[300px]
            md:h-[390px]
            lg:h-[450px]
          "
        >
          {/* Outer Frame */}
          <div
            className="
              relative
              w-full
              h-full
              overflow-hidden
              rounded-2xl
              border
              border-[#e4c878]/60
              shadow-[0_20px_50px_rgba(59,32,40,0.16)]
              bg-[#3d071d]
            "
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={current}
                src={salonImages[current]}
                alt={`Women World Salon ${current + 1}`}
                initial={{
                  y: "100%",
                  opacity: 0,
                }}
                animate={{
                  y: "0%",
                  opacity: 1,
                }}
                exit={{
                  y: "-100%",
                  opacity: 0,
                }}
                transition={{
  duration: 0.45,
  ease: "easeInOut",
}}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />
            </AnimatePresence>

            {/* Subtle Image Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#3d071d]/45
                via-transparent
                to-transparent
                pointer-events-none
              "
            />

            {/* Gold Corner Decoration */}
            <div
              className="
                absolute
                top-5
                left-5
                w-12
                h-12
                border-l
                border-t
                border-[#e4c878]
                pointer-events-none
              "
            />

            <div
              className="
                absolute
                bottom-5
                right-5
                w-12
                h-12
                border-r
                border-b
                border-[#e4c878]
                pointer-events-none
              "
            />

            {/* Image Counter */}
            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                px-4
                py-2
                rounded-full
                bg-[#3d071d]/75
                backdrop-blur-sm
                border
                border-[#e4c878]/60
                text-white
                text-[10px]
                tracking-[0.2em]
                z-10
              "
            >
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(salonImages.length).padStart(2, "0")}
            </div>
          </div>
        </motion.div>

        {/* Slider Indicators */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {salonImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Show salon image ${index + 1}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "w-8 bg-[#c2185b]"
                    : "w-2 bg-[#d9b8c0]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}