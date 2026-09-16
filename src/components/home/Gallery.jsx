

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

import SectionTitle from "../common/SectionTitle";

import { gallery } from "../../data/gallery";

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const totalImages = gallery.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalImages);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + totalImages) % totalImages);
  };

  if (!gallery || gallery.length === 0) {
    return null;
  }

  /*
    Desktop:
    Show 3 images at a time.

    Mobile:
    Show only 1 image at a time.
  */

  const visibleImages = [
    gallery[current % totalImages],
    gallery[(current + 1) % totalImages],
    gallery[(current + 2) % totalImages],
  ];

  return (
    <section className="relative py-14 md:py-20 bg-[#fff7f9] overflow-hidden">

      {/* Decorative background */}
      <div
        className="
          absolute
          -top-20
          -left-20
          w-64
          h-64
          rounded-full
          bg-[#e91e63]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-20
          -right-20
          w-72
          h-72
          rounded-full
          bg-[#e4c878]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <SectionTitle
            eyebrow="Inside Radiant Glow"
            title="A Glimpse of Beauty"
            description="Explore moments from our world of elegance."
          />
        </motion.div>

        {/* Gallery area */}
        <div className="relative mt-10 md:mt-12">

          {/* Previous Button */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous images"
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              -translate-x-1/2
              z-20
              w-11
              h-11
              md:w-12
              md:h-12
              rounded-full
              bg-[#3d071d]
              border
              border-[#e4c878]
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              hover:bg-[#c2185b]
              hover:text-[#e4c878]
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* Images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-4
              "
            >

              {/* MOBILE */}
              <div className="md:hidden">
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    aspect-square
                    overflow-hidden
                    rounded-xl
                    bg-[#fce8ee]
                    border
                    border-[#e4c878]/50
                    shadow-[0_8px_25px_rgba(59,32,40,0.08)]
                    hover:shadow-[0_18px_40px_rgba(194,24,91,0.18)]
                    transition-shadow
                    duration-500
                  "
                >
                  <img
                    src={gallery[current % totalImages].image}
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-110
                    "
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </motion.div>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:contents">
                {visibleImages.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${current}-${index}`}
                    whileHover={{
                      y: -8,
                      scale: 1.025,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      aspect-square
                      overflow-hidden
                      rounded-xl
                      bg-[#fce8ee]
                      border
                      border-[#e4c878]/50
                      shadow-[0_8px_25px_rgba(59,32,40,0.08)]
                      hover:shadow-[0_18px_40px_rgba(194,24,91,0.18)]
                      transition-shadow
                      duration-500
                    "
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-110
                      "
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next images"
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              translate-x-1/2
              z-20
              w-11
              h-11
              md:w-12
              md:h-12
              rounded-full
              bg-[#3d071d]
              border
              border-[#e4c878]
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              hover:bg-[#c2185b]
              hover:text-[#e4c878]
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <ChevronRight size={22} />
          </button>

        </div>
      </div>
    </section>
  );
}

