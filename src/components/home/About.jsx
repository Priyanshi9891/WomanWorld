
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#3d071d]"
    >
      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/about/beauty.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* ================= DARK PINK OVERLAY ================= */}
      <div className="absolute inset-0 bg-[#3d071d]/45" />

      {/* ================= PINK GRADIENT ================= */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#3d071d]/95
          via-[#3d071d]/65
          to-[#c2185b]/20
        "
      />

      {/* ================= BOTTOM GRADIENT ================= */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-1/2
          bg-gradient-to-t
          from-[#3d071d]
          via-transparent
          to-transparent
        "
      />

      {/* ================= GOLD GLOW ================= */}
      <div
        className="
          absolute
          -left-32
          top-1/2
          h-96
          w-96
          -translate-y-1/2
          rounded-full
          bg-[#e4c878]/10
          blur-3xl
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >

            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-5 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#e4c878]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e4c878]">
                Our Story
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="
                font-display
                text-5xl
                font-medium
                leading-[0.95]
                text-white
                md:text-7xl
                lg:text-8xl
              "
            >
              A Celebration
              <br />

              <span className="italic text-[#f7c8d5]">
                of Every Woman
              </span>
            </motion.h2>

            {/* GOLD LINE */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-7 h-px bg-[#e4c878]"
            />

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-white/80
                md:text-base
                md:leading-8
              "
            >
              Women World is more than a beauty destination.
              It is a space where confidence, elegance and
              individuality come together.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-white/65
                md:text-base
                md:leading-8
              "
            >
              From beautiful bridal transformations to
              everyday self-care, every experience is crafted
              with expert artistry, premium products and
              personalized attention.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-9"
            >
              <Link
                to="/academic-about"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#e4c878]
                  bg-[#c2185b]/80
                  px-7
                  py-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-[#e4c878]
                  hover:text-[#3d071d]
                "
              >
                Discover Our Story
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ================= YEARS BADGE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="
          absolute
          bottom-10
          right-6
          z-10
          hidden
          border
          border-[#e4c878]/60
          bg-[#3d071d]/45
          px-7
          py-5
          text-center
          backdrop-blur-md
          md:block
          lg:right-12
        "
      >
        <p className="font-display text-4xl text-[#e4c878]">
          15+
        </p>

        <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/70">
          Years of Excellence
        </p>
      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          absolute
          bottom-8
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          md:flex
        "
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            size={16}
            className="text-[#e4c878]"
          />
        </motion.div>
      </motion.div>

      {/* ================= GOLD BOTTOM LINE ================= */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-[#e4c878] to-transparent" />
    </section>
  );
}

