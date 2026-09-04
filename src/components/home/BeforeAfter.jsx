import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const reels = [
  {
    id: 1,
    video: "/images/before-after/reel-1.mp4",
    title: "Bridal Transformation",
  },
  {
    id: 2,
    video: "/images/before-after/reel-2.mp4",
    title: "Hair Transformation",
  },
  {
    id: 3,
    video: "/images/before-after/reel-3.mp4",
    title: "Glow Transformation",
  },
  {
    id: 4,
    video: "/images/before-after/reel-4.mp4",
    title: "Nail Transformation",
  },
];



export default function BeforeAfter() {
  return (
    <section className="py-16 md:py-24 bg-[#fff7f9]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#c9a227] uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Our Transformations
          </p>

          <div className="w-16 h-px bg-[#c9a227] mx-auto mb-5" />

          <h2 className="font-display text-4xl md:text-6xl text-[#3b2028]">
            Beauty in Motion
          </h2>

          <p className="mt-4 text-[#765963] max-w-2xl mx-auto">
            Discover some of our latest beauty transformations and experiences.
          </p>
        </motion.div>

        {/* Reels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                relative
                overflow-hidden
                rounded-2xl
                bg-[#3d071d]
                border
                border-[#e4c878]
                shadow-xl
                group
              "
            >
              <div className="aspect-[9/16] relative">

                <video
                  src={reel.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#3d071d]
                  via-transparent
                  to-transparent
                " />

                {/* Play icon */}
                <div className="
                  absolute
                  top-4
                  right-4
                  w-9
                  h-9
                  rounded-full
                  bg-[#c2185b]/90
                  border
                  border-[#e4c878]
                  flex
                  items-center
                  justify-center
                ">
                  <span className="text-white text-xs">
                    ▶
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="
                    text-white
                    font-display
                    text-xl
                    md:text-2xl
                  ">
                    {reel.title}
                  </p>

                  <Link
                    to="/book-services"
                    className="
                      inline-flex
                      items-center
                      gap-1
                      mt-2
                      text-[#e4c878]
                      text-xs
                      uppercase
                      tracking-wider
                    "
                  >
                    Book Now
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}