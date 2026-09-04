import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: 12,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 50,
    suffix: "K+",
    label: "Happy Clients",
  },
  {
    value: 25,
    suffix: "+",
    label: "Beauty Experts",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

function AnimatedNumber({ value, suffix, start }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (!start) {
      setNumber(0);
      return;
    }

    let startTime = null;
    const duration = 1800;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth easing
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setNumber(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setNumber(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <>
      {number}
      {suffix}
    </>
  );
}

export default function ImpactMatrix() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.35,
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        py-10
        md:py-14
        bg-[#3d071d]
        overflow-hidden
      "
    >

      {/* Small decorative glow */}
      <div
        className="
          absolute
          -top-24
          -left-24
          w-56
          h-56
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
          w-56
          h-56
          rounded-full
          bg-[#e4c878]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="
        max-w-6xl
        mx-auto
        px-5
        lg:px-8
        relative
        z-10
      ">

        {/* Small Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >
          <p
            className="
              text-[#e4c878]
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.3em]
              font-semibold
            "
          >
            Numbers That Tell About Us
          </p>

          <div
            className="
              w-10
              h-px
              bg-[#e4c878]
              mx-auto
              mt-3
            "
          />
        </motion.div>

        {/* Stats */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            mt-7
            border-t
            border-[#e4c878]/25
          "
        >

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="
                py-6
                md:py-7
                text-center
                border-b
                md:border-b-0
                border-[#e4c878]/20
                md:border-r
                last:border-r-0
                [&:nth-child(2)]:md:border-r
                [&:nth-child(2)]:border-r-0
                md:[&:nth-child(2)]:border-r
              "
            >

              {/* Animated Number */}
              <p
                className="
                  font-display
                  text-4xl
                  sm:text-5xl
                  md:text-5xl
                  text-[#e4c878]
                  leading-none
                "
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  start={isInView}
                />
              </p>

              {/* Label */}
              <p
                className="
                  text-[8px]
                  sm:text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/65
                  mt-2
                "
              >
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}