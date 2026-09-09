


import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { offers } from "../../data/offers";
import { Link } from "react-router-dom";

export default function Offers() {
  return (
    <section
      id="offers"
      className="relative overflow-hidden bg-[#fff7f9] py-8 md:py-12"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#e91e63]/10 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#e4c878]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-2 mb-5 md:mb-7"
        >
          <Sparkles
            size={14}
            className="text-[#c9a227]"
          />

          <p
            className="
              text-[20px]
              sm:text-[20px]
              uppercase
              tracking-[0.28em]
              font-semibold
              text-[#c2185b]
            "
          >
            Exclusive Beauty Offers
          </p>
        </motion.div>

        {/* ================= OFFER CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

          {offers.slice(0, 3).map((offer, index) => (
            <motion.div
              key={offer.id}

              initial={{
                opacity: 0,
                y: 30,
                scale: 0.98,
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
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                y: -5,
              }}

              className="
                group
                relative
                h-[270px]
                sm:h-[285px]
                md:h-[300px]
                overflow-hidden
                rounded-2xl
                border
                border-[#e4c878]/50
                bg-white
                shadow-[0_10px_30px_rgba(59,32,40,0.10)]
                hover:shadow-[0_18px_40px_rgba(194,24,91,0.16)]
                transition-shadow
                duration-500
              "
            >

              {/* ================= IMAGE ================= */}
              <img
                src={offer.image}
                alt={offer.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* ================= LIGHT OVERLAY ================= */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-white
                  via-white/80
                  to-white/20
                "
              />

              {/* ================= PINK GLOW ================= */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-32
                  h-32
                  rounded-full
                  bg-[#e91e63]/15
                  blur-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              {/* ================= GOLD INNER BORDER ================= */}
              <div
                className="
                  absolute
                  inset-3
                  rounded-xl
                  border
                  border-[#e4c878]/0
                  group-hover:border-[#e4c878]/70
                  transition-all
                  duration-500
                  pointer-events-none
                "
              />

              {/* ================= CENTERED CONTENT ================= */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-5
                "
              >

                {/* Subtitle */}
                <p
                  className="
                    text-[15px]
                    uppercase
                    tracking-[0.25em]
                    font-semibold
                    text-[#c9a227]
                  "
                >
                  {offer.subtitle}
                </p>

                {/* Offer Title */}
                <h3
                  className="
                    mt-2
                    font-display
                    text-3xl
                    sm:text-4xl
                    leading-none
                    text-[#5a1832]
                  "
                >
                  {offer.title}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-center gap-3 mt-3">

                  <span
                    className="
                      font-display
                      text-2xl
                      text-[#c2185b]
                    "
                  >
                    {offer.price}
                  </span>

                  {offer.oldPrice && (
                    <span
                      className="
                        text-[10px]
                        text-[#8b6874]
                        line-through
                      "
                    >
                      {offer.oldPrice}
                    </span>
                  )}

                </div>

                {/* Discover Offer */}
                <Link
                  to="/offers"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    mt-3
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    font-semibold
                    text-[#5a1832]
                    group-hover:text-[#c2185b]
                    transition-colors
                    duration-300
                  "
                >
                  Discover Offer

                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

              </div>

              {/* ================= BOTTOM GOLD LINE ================= */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-[#c2185b]
                  via-[#e4c878]
                  to-[#c2185b]
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


