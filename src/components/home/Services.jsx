import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceItems = [
  {
    id: 1,
    title: "Bridal Makeup",
    price: "₹9,999",
    category: "Bridal",
    image: "/images/services/bridal-makeup.jpg",
  },
  {
    id: 2,
    title: "Party Makeup",
    price: "₹1,999",
    category: "Makeup",
    image: "/images/services/party-makeup.jpg",
  },
  {
    id: 3,
    title: "Engagement Makeup",
    price: "₹6,999",
    category: "Makeup",
    image: "/images/services/engagement-makeup.jpg",
  },
  {
    id: 4,
    title: "Hair Service",
    price: "599",
    category: "Hair",
    image: "/images/services/hair-service.jpg",
  },
  {
    id: 5,
    title: "Skin Service",
    price: "₹1,000",
    category: "Skincare",
    image: "/images/services/skin-service.jpg",
  },
  {
    id: 6,
    title: "Nail Service",
    price: "₹149",
    category: "Nails",
    image: "/images/services/nail-service.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fff7f9] py-16 sm:py-20 md:py-28"
    >
      {/* Decorative background */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#e91e63]/10 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#e4c878]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-8 sm:w-12 bg-[#c9a227]" />

            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#c2185b]">
              Beauty,{" "}
              <span className="italic text-[#c2185b]">
                Curated
              </span>{" "}
              For You
            </span>

            <span className="h-px w-8 sm:w-12 bg-[#c9a227]" />
          </div>

          {/* Title */}
          <h2
            className="
              font-display
              text-4xl
              leading-tight
              font-medium
              text-[#3b2028]
              sm:text-5xl
              md:text-6xl
            "
          >
            Our Signature Services
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              px-2
              text-sm
              leading-6
              text-[#765963]
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
          >
            Discover our collection of premium beauty services,
            thoughtfully designed to make you feel confident,
            beautiful and unforgettable.
          </p>

          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent sm:mt-6 sm:w-20" />
        </motion.div>

        {/* EXPANDING GALLERY */}
        <div
          className="
            group/gallery
            flex
            flex-col
            gap-4
            md:h-[520px]
            md:flex-row
            md:gap-3
          "
        >
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                group/card
                relative
                h-[400px]
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#e4c878]/40
                bg-[#3b2028]
                shadow-[0_15px_40px_rgba(59,32,40,0.10)]
                transition-all
                duration-700
                ease-out

                sm:h-[440px]

                md:h-full
                md:flex-[1]
                md:rounded-[2rem]
                md:hover:flex-[2.4]
              "
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover/card:scale-110
                "
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Dark / Pink Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#3d071d]
                  via-[#3d071d]/35
                  to-transparent
                  opacity-90
                  transition-opacity
                  duration-700
                  group-hover/card:opacity-95
                "
              />

              {/* Pink glow */}
              <div
                className="
                  absolute
                  -bottom-20
                  -left-10
                  h-48
                  w-48
                  rounded-full
                  bg-[#e91e63]/25
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover/card:bg-[#e91e63]/40
                "
              />

              {/* Category */}
              <div
                className="
                  absolute
                  left-4
                  top-4
                  rounded-full
                  border
                  border-[#e4c878]/50
                  bg-[#3d071d]/50
                  px-3
                  py-1.5
                  backdrop-blur-md
                  sm:left-5
                  sm:top-5
                  sm:px-4
                  sm:py-2
                "
              >
                <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#e4c878] sm:text-[9px] sm:tracking-[0.22em]">
                  {service.category}
                </span>
              </div>

              {/* Gold corner */}
              <div
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#e4c878]/60
                  bg-[#3d071d]/40
                  text-[#e4c878]
                  opacity-0
                  backdrop-blur-md
                  transition-all
                  duration-500
                  group-hover/card:opacity-100

                  sm:right-5
                  sm:top-5
                  sm:h-10
                  sm:w-10
                "
              >
                <ArrowUpRight size={16} />
              </div>

              {/* Bottom Content */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                  sm:p-6
                  md:p-7
                "
              >
                {/* Small line */}
                <div className="mb-3 h-px w-10 bg-[#e4c878] transition-all duration-500 group-hover/card:w-16 sm:mb-4" />

                {/* Service Name */}
                <h3
                  className="
                    font-display
                    text-2xl
                    font-medium
                    leading-tight
                    text-white
                    transition-all
                    duration-500
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  {service.title}
                </h3>

                {/* Price */}
                <div
                  className="
                    mt-2
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    opacity-100
                    transition-all
                    duration-500
                    sm:mt-3
                  "
                >
                  <span className="text-[8px] uppercase tracking-[0.15em] text-white/65 sm:text-[9px] sm:tracking-[0.18em]">
                    Starting from
                  </span>

                  <span className="text-sm font-semibold text-[#e4c878]">
                    {service.price}
                  </span>
                </div>

                {/* Explore */}
                <Link
                  to="/services"
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#e4c878]/60
                    bg-[#3d071d]/30
                    px-4
                    py-2.5
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:bg-[#c2185b]
                    hover:border-[#c9a227]
                    sm:mt-5
                    sm:px-5
                    sm:text-[9px]
                    sm:tracking-[0.18em]
                    md:translate-y-3
                    md:opacity-0
                    md:group-hover/card:translate-y-0
                    md:group-hover/card:opacity-100
                  "
                >
                  Explore Service

                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:mt-12
            sm:flex-row
            sm:gap-5
          "
        >
          {/* View All Services */}
          <Link
            to="/services"
            className="
              group
              inline-flex
              w-full
              max-w-[280px]
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#c9a227]
              bg-[#c2185b]
              px-6
              py-3.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white
              shadow-[0_10px_30px_rgba(194,24,91,0.20)]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#e91e63]
              hover:shadow-[0_12px_35px_rgba(194,24,91,0.30)]
              sm:w-auto
              sm:max-w-none
              sm:px-8
              sm:py-4
              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            View All Services

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          {/* Book Appointment */}
          <Link
            to="/book-services"
            className="
              group
              inline-flex
              w-full
              max-w-[280px]
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#c9a227]
              bg-gradient-to-r
              from-[#d4af37]
              to-[#f1d477]
              px-6
              py-3.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#3d071d]
              shadow-[0_10px_30px_rgba(212,175,55,0.22)]
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_12px_35px_rgba(212,175,55,0.40)]
              sm:w-auto
              sm:max-w-none
              sm:px-8
              sm:py-4
              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            Book Appointment

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}


// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden bg-[#fff7f9] py-20 md:py-28"
//     >
//       {/* Decorative background */}
//       <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#e91e63]/10 blur-3xl" />
//       <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#e4c878]/10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-12 text-center md:mb-16"
//         >
//           {/* Eyebrow */}
//           <div className="mb-4 flex items-center justify-center gap-4">
//             <span className="h-px w-12 bg-[#c9a227]" />

//             <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c2185b]">
//               Beauty,{" "}
//             <span className="italic text-[#c2185b]">
//               Curated
//             </span>{" "}
//             For You
//             </span>

//             <span className="h-px w-12 bg-[#c9a227]" />
//           </div>

//           {/* Title */}
//           <h2 className="font-display text-5xl font-medium leading-tight text-[#3b2028] md:text-6xl">
//             Our Signature Services
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#765963] md:text-base">
//             Discover our collection of premium beauty services,
//             thoughtfully designed to make you feel confident,
//             beautiful and unforgettable.
//           </p>

//           <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
//         </motion.div>

//         {/* EXPANDING GALLERY */}
//         <div className="group/gallery flex flex-col gap-4 md:h-[520px] md:flex-row md:gap-3">

//           {serviceItems.map((service, index) => (
//             <motion.div
//               key={service.id}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.08,
//               }}
//               className="
//                 group/card
//                 relative
//                 h-[420px]
//                 overflow-hidden
//                 rounded-[2rem]
//                 border
//                 border-[#e4c878]/40
//                 bg-[#3b2028]
//                 shadow-[0_15px_40px_rgba(59,32,40,0.10)]
//                 transition-all
//                 duration-700
//                 ease-out

//                 md:h-full
//                 md:flex-[1]
//                 md:hover:flex-[2.4]
//               "
//             >
//               {/* Image */}
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="
//                   absolute
//                   inset-0
//                   h-full
//                   w-full
//                   object-cover
//                   transition-transform
//                   duration-1000
//                   ease-out
//                   group-hover/card:scale-110
//                 "
//                 onError={(e) => {
//                   e.currentTarget.style.display = "none";
//                 }}
//               />

//               {/* Dark / Pink Gradient */}
//               <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-[#3d071d]
//                   via-[#3d071d]/35
//                   to-transparent
//                   opacity-90
//                   transition-opacity
//                   duration-700
//                   group-hover/card:opacity-95
//                 "
//               />

//               {/* Pink glow */}
//               <div
//                 className="
//                   absolute
//                   -bottom-20
//                   -left-10
//                   h-48
//                   w-48
//                   rounded-full
//                   bg-[#e91e63]/25
//                   blur-3xl
//                   transition-all
//                   duration-700
//                   group-hover/card:bg-[#e91e63]/40
//                 "
//               />

//               {/* Category */}
//               <div
//                 className="
//                   absolute
//                   left-5
//                   top-5
//                   rounded-full
//                   border
//                   border-[#e4c878]/50
//                   bg-[#3d071d]/50
//                   px-4
//                   py-2
//                   backdrop-blur-md
//                 "
//               >
//                 <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#e4c878]">
//                   {service.category}
//                 </span>
//               </div>

//               {/* Gold corner */}
//               <div
//                 className="
//                   absolute
//                   right-5
//                   top-5
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#e4c878]/60
//                   bg-[#3d071d]/40
//                   text-[#e4c878]
//                   opacity-0
//                   backdrop-blur-md
//                   transition-all
//                   duration-500
//                   group-hover/card:opacity-100
//                 "
//               >
//                 <ArrowUpRight size={17} />
//               </div>

//               {/* Bottom Content */}
//               <div
//                 className="
//                   absolute
//                   bottom-0
//                   left-0
//                   right-0
//                   p-6
//                   md:p-7
//                 "
//               >
//                 {/* Small line */}
//                 <div className="mb-4 h-px w-10 bg-[#e4c878] transition-all duration-500 group-hover/card:w-16" />

//                 {/* Service Name */}
//                 <h3
//                   className="
//                     font-display
//                     text-3xl
//                     font-medium
//                     leading-tight
//                     text-white
//                     transition-all
//                     duration-500
//                     md:text-4xl
//                   "
//                 >
//                   {service.title}
//                 </h3>

//                 {/* Price */}
//                 <div
//                   className="
//                     mt-3
//                     flex
//                     items-center
//                     gap-2
//                     opacity-100
//                     transition-all
//                     duration-500
//                   "
//                 >
//                   <span className="text-[9px] uppercase tracking-[0.18em] text-white/65">
//                     Starting from
//                   </span>

//                   <span className="text-sm font-semibold text-[#e4c878]">
//                     {service.price}
//                   </span>
//                 </div>

//                 {/* Explore */}
//                 <Link
//                   to="/services"
//                   className="
//                     mt-5
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-[#e4c878]/60
//                     bg-[#3d071d]/30
//                     px-5
//                     py-2.5
//                     text-[9px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.18em]
//                     text-white
//                     opacity-0
//                     backdrop-blur-md
//                     transition-all
//                     duration-500
//                     group-hover/card:translate-y-0
//                     group-hover/card:opacity-100
//                     md:translate-y-3
//                   "
//                 >
//                   Explore Service
//                   <ArrowUpRight size={14} />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-12 text-center"
//         >
//           <Link
//             to="/services"
//             className="
//               inline-flex
//               items-center
//               gap-3
//               rounded-full
//               border
//               border-[#c9a227]
//               bg-[#c2185b]
//               px-8
//               py-4
//               text-[10px]
//               font-semibold
//               uppercase
//               tracking-[0.2em]
//               text-white
//               shadow-[0_10px_30px_rgba(194,24,91,0.20)]
//               transition-all
//               duration-300
//               hover:bg-[#e91e63]
//               hover:shadow-[0_12px_35px_rgba(194,24,91,0.30)]
//             "
//           >
//             View All Services
//             <ArrowUpRight size={16} />
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// }