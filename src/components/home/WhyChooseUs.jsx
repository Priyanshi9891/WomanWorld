import {
  Sparkles,
  Heart,
  Award,
  Gem,
} from "lucide-react";

import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const reasons = [
  {
    icon: Gem,
    title: "Premium Experience",
    text: "Thoughtfully designed beauty experiences in an elegant environment.",
  },
  {
    icon: Award,
    title: "Expert Artists",
    text: "Skilled beauty professionals who understand modern beauty and timeless elegance.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    text: "Carefully selected products for quality, comfort and beautiful results.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    text: "Every appointment is tailored around your individual needs and preferences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-14 md:py-20 bg-[#fff7f9] overflow-hidden">

      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#e91e63]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#e4c878]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Why Women Choose Us"
            title="The Women World Difference"
            description="Because you deserve more than a beauty appointment."
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-9 md:mt-12">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  relative
                  group
                  bg-white
                  rounded-xl
                  p-4
                  sm:p-6
                  md:p-7
                  border
                  border-[#e4c878]/30
                  hover:border-[#c9a227]
                  shadow-[0_8px_30px_rgba(59,32,40,0.05)]
                  hover:shadow-[0_15px_35px_rgba(194,24,91,0.12)]
                  transition-shadow
                  duration-500
                  overflow-hidden
                "
              >

                {/* Gold corner decoration */}
                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-12
                    h-12
                    border-t
                    border-r
                    border-[#e4c878]/60
                    rounded-tr-xl
                    opacity-50
                    group-hover:opacity-100
                    transition
                  "
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="
                    w-11
                    h-11
                    sm:w-14
                    sm:h-14
                    rounded-full
                    bg-[#fce8ee]
                    border
                    border-[#e4c878]/40
                    flex
                    items-center
                    justify-center
                    group-hover:bg-[#c2185b]
                    group-hover:border-[#e4c878]
                    transition-all
                    duration-400
                  "
                >
                  <Icon
                    size={20}
                    className="
                      text-[#c2185b]
                      group-hover:text-[#e4c878]
                      transition-colors
                      duration-300
                      sm:w-[23px]
                      sm:h-[23px]
                    "
                  />
                </motion.div>

                {/* Number */}
                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    text-[#c9a227]
                    tracking-[0.2em]
                    mt-4
                    sm:mt-6
                    font-semibold
                  "
                >
                  0{index + 1}
                </p>

                {/* Title */}
                <h3
                  className="
                    font-display
                    text-xl
                    sm:text-2xl
                    text-[#8f1747]
                    mt-1
                    leading-tight
                    group-hover:text-[#c2185b]
                    transition-colors
                    duration-300
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-xs
                    sm:text-sm
                    leading-6
                    sm:leading-7
                    text-[#765963]
                    mt-2
                    sm:mt-3
                  "
                >
                  {item.text}
                </p>

                {/* Bottom gold line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    bg-[#c9a227]
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