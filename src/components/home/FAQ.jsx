import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import { faqs } from "../../data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative py-12 md:py-16 bg-[#fff7f9] overflow-hidden">

      {/* Decorative glow */}
      <div
        className="
          absolute
          -top-24
          -right-24
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
          -bottom-24
          -left-24
          w-64
          h-64
          rounded-full
          bg-[#e4c878]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="max-w-4xl mx-auto px-5 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.7,
          }}
        >
          <SectionTitle
            eyebrow="Frequently Asked"
            title="Questions, Answered"
          />
        </motion.div>

        {/* FAQ LIST */}
        <div className="mt-8 md:mt-10 space-y-2">

          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className={`
                  group
                  overflow-hidden
                  rounded-xl
                  border
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "bg-white border-[#e4c878]/70 shadow-[0_10px_30px_rgba(194,24,91,0.08)]"
                      : "bg-white/70 border-[#e4c878]/25 hover:border-[#e4c878]/60"
                  }
                `}
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-4
                    px-5
                    py-4
                    md:px-6
                    md:py-5
                    text-left
                  "
                >

                  <div className="flex items-center gap-3">

                    {/* Number */}
                    <span
                      className={`
                        hidden
                        sm:flex
                        w-7
                        h-7
                        rounded-full
                        items-center
                        justify-center
                        text-[9px]
                        font-semibold
                        shrink-0
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-[#c2185b] text-white border-[#c2185b]"
                            : "bg-[#fce8ee] text-[#c2185b] border-[#e4c878]/40"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`
                        font-display
                        text-lg
                        md:text-xl
                        leading-6
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "text-[#c2185b]"
                            : "text-[#3d071d] group-hover:text-[#c2185b]"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                  </div>

                  {/* Plus / Minus */}
                  <span
                    className={`
                      w-8
                      h-8
                      rounded-full
                      flex
                      items-center
                      justify-center
                      shrink-0
                      border
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-[#3d071d] border-[#e4c878] text-[#e4c878] rotate-180"
                          : "bg-[#fce8ee] border-[#e4c878]/40 text-[#c2185b]"
                      }
                    `}
                  >
                    {isOpen ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </span>

                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-5">

                        <div className="
                          h-px
                          w-full
                          bg-[#e4c878]/20
                          mb-4
                        " />

                        <p
                          className="
                            text-sm
                            leading-6
                            text-[#3b2028]/65
                            pl-0
                            sm:pl-10
                          "
                        >
                          {faq.answer}
                        </p>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom pink line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: isOpen ? "100%" : "0%",
                  }}
                  className="
                    h-[2px]
                    bg-gradient-to-r
                    from-[#c2185b]
                    via-[#e4c878]
                    to-[#c2185b]
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