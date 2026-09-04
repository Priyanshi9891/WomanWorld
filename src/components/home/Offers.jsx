
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

      {/* Background glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#e91e63]/10 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#e4c878]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* ================= TITLE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 mb-5 md:mb-7"
        >
          <Sparkles
            size={14}
            className="text-[#c9a227]"
          />

          <p className="
            text-[9px]
            sm:text-[10px]
            uppercase
            tracking-[0.28em]
            font-semibold
            text-[#c2185b]
          ">
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
                y: 40,
                scale: 0.97,
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
                y: -6,
              }}
              className="
                group
                relative
                h-[290px]
                sm:h-[310px]
                md:h-[330px]
                overflow-hidden
                rounded-2xl
                border
                border-[#e4c878]/40
                bg-[#3d071d]
                shadow-[0_12px_35px_rgba(59,32,40,0.12)]
                hover:shadow-[0_20px_45px_rgba(194,24,91,0.18)]
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
                  group-hover:scale-110
                "
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />


              {/* Dark image overlay */}

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#3d071d]
                via-[#3d071d]/60
                to-[#3d071d]/5
              " />


              {/* Pink glow */}

              <div className="
                absolute
                -top-16
                -right-16
                w-32
                h-32
                rounded-full
                bg-[#e91e63]/20
                blur-2xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              " />


              {/* Gold border on hover */}

              <div className="
                absolute
                inset-3
                rounded-xl
                border
                border-[#e4c878]/0
                group-hover:border-[#e4c878]/60
                transition-all
                duration-500
                pointer-events-none
              " />


              {/* ================= CONTENT ================= */}

              <div className="
                absolute
                left-0
                right-0
                bottom-0
                p-5
              ">

                {/* Subtitle */}

                <p className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  font-semibold
                  text-[#e4c878]
                ">
                  {offer.subtitle}
                </p>


                {/* Offer title */}

                <h3 className="
                  mt-1.5
                  font-display
                  text-3xl
                  sm:text-4xl
                  leading-none
                  text-white
                ">
                  {offer.title}
                </h3>


                {/* Price */}

                <div className="flex items-center gap-3 mt-3">

                  <span className="
                    font-display
                    text-2xl
                    text-[#f7c8d5]
                  ">
                    {offer.price}
                  </span>

                  {offer.oldPrice && (
                    <span className="
                      text-[10px]
                      text-white/45
                      line-through
                    ">
                      {offer.oldPrice}
                    </span>
                  )}

                </div>


                {/* Discover */}

                <Link
                  to="/offers"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-3
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    font-semibold
                    text-white
                    group-hover:text-[#e4c878]
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


              {/* Bottom gold line */}

              <div className="
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
              " />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

