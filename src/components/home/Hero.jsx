

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  // =====================================================
  // HERO IMAGES
  // =====================================================

  const heroImages = [
    "/images/hero/hero-main.jpg",
    "/images/hero/hero-main (2).png",
   
    "/images/hero/hero-main-4.png",
     "/images/hero/hero-main-3.png",
    
  ];

  // =====================================================
  // AUTOMATIC IMAGE CHANGE
  // =====================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#3b1025] pt-8 sm:pt-10 lg:pt-12">

      {/* =====================================================
          HERO BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 z-0">

        <AnimatePresence mode="sync">

          <motion.img
            key={heroImages[currentImage]}
            src={heroImages[currentImage]}
            alt="Women World Beauty"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[68%_center]
              sm:object-[70%_center]
              lg:object-[72%_center]
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          />

        </AnimatePresence>


        {/* =================================================
            DARK ROYAL PINK OVERLAY
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#2d071b]/75
            via-[#4a0d2c]/25
            to-transparent
          "
        />


        {/* =================================================
            MOBILE READABILITY OVERLAY
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#2d071b]/15
            via-transparent
            to-[#2d071b]/75
            lg:hidden
          "
        />

      </div>


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          max-w-[1500px]
          items-center
          px-6
          py-24
          sm:px-10
          lg:min-h-[760px]
          lg:px-16
          lg:py-28
        "
      >

        <motion.div
          className="
            w-full
            max-w-xl
            lg:max-w-[600px]
          "
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >

          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >

            <span className="h-px w-10 bg-[#e4c878]" />

            <span
              className="
                text-xs
                font-semibold
                tracking-[0.18em]
                text-[#f7d98a]
                sm:text-sm
              "
            >
              BEAUTY • LUXURY • CONFIDENCE
            </span>

          </motion.div>


          {/* =================================================
              HEADING
          ================================================== */}

          <motion.h1
            className="
              font-display
              text-5xl
              font-medium
              leading-[0.9]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: "easeOut",
            }}
          >

            Discover Your

            <span
              className="
                block
                text-[#f21b70]
                drop-shadow-[0_4px_15px_rgba(0,0,0,0.15)]
              "
            >
              True Beauty
            </span>

          </motion.h1>


          {/* =================================================
              GOLD LINE
          ================================================== */}

          <motion.div
            className="my-7 flex items-center gap-3"
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
          >

            <div className="h-[2px] w-24 bg-[#d4af37]" />

            <Sparkles
              size={18}
              className="text-[#f3d477]"
            />

            <div className="h-[2px] w-12 bg-[#d4af37]" />

          </motion.div>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            className="
              max-w-xl
              text-sm
              leading-7
              text-white/90
              sm:text-base
              lg:text-lg
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
          >
            Where elegance meets expertise. We bring out
            the most beautiful version of you with premium.
            
          </motion.p>


          {/* =================================================
              BUTTONS
          ================================================== */}

          <motion.div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
          >

            {/* =================================================
                BOOK APPOINTMENT
            ================================================== */}

            <button
              onClick={() => navigate("/book-services")}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#e4c878]
                bg-[#c2185b]
                px-7
                py-4
                text-sm
                font-semibold
                tracking-wide
                text-white
                shadow-[0_10px_30px_rgba(194,24,91,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#e91e63]
                hover:shadow-[0_15px_35px_rgba(194,24,91,0.45)]
              "
            >

              BOOK APPOINTMENT

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </button>


            {/* =================================================
                EXPLORE SERVICES
            ================================================== */}

            <button
              onClick={() => navigate("/services")}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/70
                bg-white/10
                px-7
                py-4
                text-sm
                font-semibold
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#e4c878]
                hover:bg-[#c2185b]
              "
            >

              EXPLORE SERVICES

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </button>

          </motion.div>


          {/* =================================================
              FEATURES
          ================================================== */}

          <motion.div
            className="
              mt-10
              flex
              flex-wrap
              gap-6
              sm:gap-8
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.2,
            }}
          >

            <Feature
              icon={<Crown size={18} />}
              title="Premium"
              subtitle="Services"
            />

            <Feature
              icon={<Sparkles size={18} />}
              title="Natural"
              subtitle="Products"
            />

            <Feature
              icon={<Star size={18} />}
              title="Happy"
              subtitle="Clients"
            />

          </motion.div>

        </motion.div>

      </div>


      {/* =====================================================
          IMAGE INDICATORS
          Small luxury dots
      ====================================================== */}

      <div
        className="
          absolute
          bottom-20
          right-8
          z-30
          flex
          gap-2
          lg:right-12
        "
      >

        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`
              h-2
              rounded-full
              transition-all
              duration-500
              ${
                currentImage === index
                  ? "w-8 bg-[#e4c878]"
                  : "w-2 bg-white/60"
              }
            `}
            aria-label={`Show hero image ${index + 1}`}
          />
        ))}

      </div>


      {/* =====================================================
          BOTTOM WAVE
      ====================================================== */}

      <motion.div
        className="
          absolute
          bottom-0
          left-0
          z-30
          w-full
        "
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >

        <svg
          viewBox="0 0 1440 130"
          className="
            h-[65px]
            w-full
            sm:h-[85px]
            lg:h-[100px]
          "
          preserveAspectRatio="none"
        >

          {/* GOLD WAVE */}

          <motion.path
            d="
              M0 86
              C300 146 500 21 720 66
              C950 116 1150 16 1440 71
            "
            fill="none"
            stroke="#e4c878"
            strokeWidth="3"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />


          {/* PINK WAVE */}

          <motion.path
            d="
              M0 92
              C300 149 500 29 720 74
              C950 124 1150 24 1440 79
              L1440 130
              L0 130
              Z
            "
            fill="#c2185b"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          />

        </svg>

      </motion.div>

    </section>
  );
}


/* =========================================================
   FEATURE COMPONENT
========================================================= */

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3">

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#e4c878]
          bg-[#c2185b]
          text-white
          shadow-lg
          shadow-[#c2185b]/30
        "
      >
        {icon}
      </div>

      <div>

        <p
          className="
            text-xs
            font-semibold
            text-white
            sm:text-sm
          "
        >
          {title}
        </p>

        <p
          className="
            text-[10px]
            text-white/70
            sm:text-xs
          "
        >
          {subtitle}
        </p>

      </div>

    </div>
  );
}