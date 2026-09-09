import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import { reviews } from "../../data/reviews";

export default function Reviews() {
  return (
    <section className="relative py-14 md:py-20 bg-[#3d071d] overflow-hidden">

      {/* =========================
          BACKGROUND GLOW
      ========================= */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-80
          h-80
          rounded-full
          bg-[#e91e63]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -right-32
          w-80
          h-80
          rounded-full
          bg-[#e4c878]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* =========================
            SECTION TITLE
        ========================= */}

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
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <SectionTitle
            eyebrow="Client Love"
            title="What Our Clients Say"
            description="Because the best compliment is a returning client."
            light
          />
        </motion.div>

        {/* =========================
            REVIEW CARDS
        ========================= */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4
          md:gap-5
          mt-9
          md:mt-12
        ">

          {reviews.slice(0, 3).map((review, index) => (

            <motion.div
              key={review.id}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -7,
              }}
              className="
                group
                relative
                bg-white/[0.07]
                border
                border-[#e4c878]/25
                rounded-2xl
                p-5
                sm:p-6
                backdrop-blur-sm
                hover:border-[#e4c878]/70
                hover:bg-white/[0.10]
                transition-all
                duration-500
                overflow-hidden
              "
            >

              {/* =========================
                  GOLD TOP LINE
              ========================= */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-[2px]
                  bg-gradient-to-r
                  from-transparent
                  via-[#e4c878]
                  to-transparent
                  opacity-70
                  group-hover:opacity-100
                  transition
                "
              />

              {/* =========================
                  QUOTE ICON
              ========================= */}

              <div
                className="
                  absolute
                  top-5
                  right-5
                  w-9
                  h-9
                  rounded-full
                  bg-[#c2185b]/20
                  border
                  border-[#e4c878]/30
                  flex
                  items-center
                  justify-center
                "
              >
                <Quote
                  size={16}
                  className="text-[#e4c878]"
                />
              </div>

              {/* =========================
                  STARS
              ========================= */}

              <div className="flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={14}
                    fill="#e4c878"
                    className="text-[#e4c878]"
                  />

                ))}

              </div>

              {/* =========================
                  REVIEW TEXT
              ========================= */}

              <p
                className="
                  font-display
                  text-xl
                  sm:text-2xl
                  text-white
                  leading-7
                  sm:leading-8
                  mt-5
                  pr-5
                "
              >
                “{review.text}”
              </p>

              {/* =========================
                  DIVIDER
              ========================= */}

              <div
                className="
                  w-10
                  h-px
                  bg-[#e4c878]
                  mt-5
                  group-hover:w-16
                  transition-all
                  duration-500
                "
              />

              {/* =========================
                  CLIENT INFO
              ========================= */}

              <div className="mt-4">

                <p
                  className="
                    text-sm
                    text-[#f7c8d5]
                    font-semibold
                  "
                >
                  {review.name}
                </p>

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#e4c878]/70
                    mt-1
                  "
                >
                  {review.service}
                </p>

              </div>

              {/* =========================
                  BOTTOM DECORATION
              ========================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-16
                  h-[2px]
                  bg-[#c2185b]
                  group-hover:w-full
                  transition-all
                  duration-700
                "
              />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}