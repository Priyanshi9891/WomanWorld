import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import SectionTitle from "../common/SectionTitle";
import { branches } from "../../data/branches";

export default function Branches() {
  return (
    <section className="relative py-14 md:py-20 bg-[#fff7f9] overflow-hidden">

      {/* =========================
          BACKGROUND DECORATIONS
      ========================= */}

      <div
        className="
          absolute
          -top-24
          -left-24
          w-72
          h-72
          rounded-full
          bg-[#e91e63]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -right-24
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
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionTitle
            eyebrow="Our Locations"
            title="Find Your Women World"
            description="Visit us and step into your own world of beauty."
          />
        </motion.div>

        {/* =========================
            BRANCH CARDS
        ========================= */}

        <div className="grid md:grid-cols-2 gap-5 md:gap-7 mt-10 md:mt-12">

          {branches.slice(0, 2).map((branch, index) => {

            const comingFromLeft = index === 0;

            return (
              <motion.div
                key={branch.id}

                /* Start position */
                initial={{
                  opacity: 0,
                  x: comingFromLeft ? -250 : 250,
                  rotate: comingFromLeft ? -4 : 4,
                  scale: 0.9,
                }}

                /* Final position */
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  scale: 1,
                }}

                /* Animation repeats whenever section appears */
                viewport={{
                  once: false,
                  amount: 0.25,
                }}

                /* Slow luxury animation */
                transition={{
                  duration: 1.8,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}

                /* Small hover movement */
                whileHover={{
                  y: -5,
                }}

                className="
                  group
                  relative
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-[#e4c878]/40
                  shadow-[0_10px_35px_rgba(59,32,40,0.08)]
                  hover:shadow-[0_20px_45px_rgba(194,24,91,0.16)]
                  transition-shadow
                  duration-500
                "
              >

                {/* =========================
                    TOP GOLD LINE
                ========================= */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-[3px]
                    bg-gradient-to-r
                    from-[#e4c878]
                    via-[#c9a227]
                    to-[#e4c878]
                    z-20
                  "
                />

                {/* =========================
                    BRANCH IMAGE
                ========================= */}

                <div
                  className="
                    relative
                    aspect-[16/9]
                    overflow-hidden
                    bg-[#3d071d]
                  "
                >

                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Dark image overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#3d071d]/95
                      via-[#3d071d]/35
                      to-transparent
                    "
                  />

                  {/* Pink overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-[#c2185b]/15
                      to-transparent
                    "
                  />

                  {/* =========================
                      BRANCH LABEL
                  ========================= */}

                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      px-3
                      py-1.5
                      rounded-full
                      bg-[#3d071d]/80
                      border
                      border-[#e4c878]/70
                      backdrop-blur-sm
                    "
                  >
                    <p
                      className="
                        text-[#e4c878]
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        font-semibold
                      "
                    >
                      Our Branch
                    </p>
                  </div>

                  {/* =========================
                      ADDRESS ON IMAGE
                  ========================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-5
                    "
                  >

                    <h3
                      className="
                        font-display
                        text-3xl
                        sm:text-4xl
                        text-white
                        leading-none
                      "
                    >
                      {branch.name}
                    </h3>

                    <div
                      className="
                        flex
                        items-start
                        gap-2
                        mt-3
                      "
                    >

                      <MapPin
                        size={17}
                        className="
                          text-[#e4c878]
                          shrink-0
                          mt-0.5
                        "
                      />

                      <p
                        className="
                          text-white/90
                          text-xs
                          sm:text-sm
                          leading-5
                        "
                      >
                        {branch.address}
                      </p>

                    </div>

                  </div>

                </div>

                {/* =========================
                    CARD INFORMATION
                ========================= */}

                <div className="p-5 sm:p-6">

                  {/* Phone */}
                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-[#fce8ee]
                        border
                        border-[#e4c878]/40
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <Phone
                        size={16}
                        className="text-[#c2185b]"
                      />
                    </div>

                    <div>

                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.18em]
                          text-[#c9a227]
                          font-semibold
                        "
                      >
                        Contact
                      </p>

                      <p
                        className="
                          text-sm
                          text-[#3b2028]
                          mt-0.5
                        "
                      >
                        {branch.phone}
                      </p>

                    </div>

                  </div>

                  {/* Divider */}
                  <div
                    className="
                      h-px
                      bg-[#e4c878]/25
                      my-4
                    "
                  />

                  {/* Opening Hours */}
                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-[#fce8ee]
                        border
                        border-[#e4c878]/40
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      <Clock
                        size={16}
                        className="text-[#c2185b]"
                      />
                    </div>

                    <div>

                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.18em]
                          text-[#c9a227]
                          font-semibold
                        "
                      >
                        Opening Hours
                      </p>

                      <p
                        className="
                          text-sm
                          text-[#3b2028]
                          mt-0.5
                        "
                      >
                        {branch.hours}
                      </p>

                    </div>

                  </div>

                  {/* =========================
                      BOOK BUTTON
                  ========================= */}

                  <Link
                    to="/book-services"
                    className="
                      mt-5
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      py-3
                      rounded-lg
                      bg-[#3d071d]
                      border
                      border-[#e4c878]
                      text-white
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      font-semibold
                      hover:bg-[#c2185b]
                      hover:text-[#e4c878]
                      transition-all
                      duration-300
                    "
                  >
                    Book At This Branch

                    <ArrowUpRight size={15} />
                  </Link>

                </div>

                {/* =========================
                    BOTTOM GOLD LINE
                ========================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-20
                    h-[2px]
                    bg-[#c9a227]
                    group-hover:w-full
                    transition-all
                    duration-700
                  "
                />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}