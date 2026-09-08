
// import { motion } from "framer-motion";
// import { PlayCircle } from "lucide-react";

// // Simple Instagram glyph, since recent lucide-react versions
// // dropped brand icons like Instagram / Facebook / WhatsApp
// function InstagramIcon({ size = 16, className = "" }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
//       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//     </svg>
//   );
// }

// // Replace each "instagramUrl" with the real reel link from your
// // Instagram account, e.g. "https://www.instagram.com/reel/Cxxxxxxxxxx/"
// const reels = [
//   {
//     id: 1,
//     thumbnail: "/images/before-after/reel-1-thumb.jpg",
//     instagramUrl: "https://www.instagram.com/reel/DdBLtADy-cT/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
//     title: "Bridal Transformation",
//   },
//   {
//     id: 2,
//     thumbnail: "/images/before-after/reel-2-thumb.jpg",
//     instagramUrl: "https://www.instagram.com/reel/DbcdG7SJxk8/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
//     title: "Hair Transformation",
//   },
//   {
//     id: 3,
//     thumbnail: "/images/before-after/reel-3-thumb.jpg",
//     instagramUrl: "https://www.instagram.com/reel/DavFGptJTgw/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
//     title: "Glow Transformation",
//   },
//   {
//     id: 4,
//     thumbnail: "/images/before-after/reel-4-thumb.jpg",
//     instagramUrl: "https://www.instagram.com/reel/DVX6w1tCfNo/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
//     title: "Nail Transformation",
//   },
//   {
//     id: 5,
//     thumbnail: "/images/before-after/reel-4-thumb.jpg",
//     instagramUrl: "https://www.instagram.com/reel/DVHCz1pDPN1/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
//     title: "Nail Transformation",
//   },
//   {
//     id: 6,
//     thumbnail: "/images/before-after/reel-4-thumb.jpg",
//     instagramUrl: "https://www.instagram.com/reel/DUqAppwEi3M/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
//     title: "Nail Transformation",
//   },
//   {
//     id: 7,
//     thumbnail: "/images/before-after/reel-4-thumb.jpg",
//     instagramUrl: "https://www.instagram.com/reel/DUFTk72kmcB/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
//     title: "Nail Transformation",
//   },
//   {
//     id: 8,
//     thumbnail: "/images/before-after/reel-4-thumb.jpg",
//     instagramUrl: "https://www.instagram.com/reel/DTiE9icDCWv/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
//     title: "Nail Transformation",
//   },
//   {
//     id: 8,
//     thumbnail: "/images/before-after/reel-4-thumb.jpg",
//     instagramUrl: "https://www.instagram.com/reel/DStw_luEnZY/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
//     title: "Nail Transformation",
//   },
// ];

// export default function BeforeAfter() {
//   return (
//     <section className="py-16 md:py-24 bg-[#fff7f9]">
//       <div className="max-w-7xl mx-auto px-5 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <p className="text-[#c9a227] uppercase tracking-[0.3em] text-sm font-semibold mb-3">
//             Our Transformations
//           </p>

//           <div className="w-16 h-px bg-[#c9a227] mx-auto mb-5" />

//           <h2 className="font-display text-4xl md:text-6xl text-[#3b2028]">
//             Beauty in Motion
//           </h2>

//           <p className="mt-4 text-[#765963] max-w-2xl mx-auto">
//             Watch our latest transformation reels on Instagram.
//           </p>
//         </motion.div>

//         {/* Reels - single column on mobile (vertical scroll, no
//             horizontal carousel), 2 up on small tablets, 4 up on desktop */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
//           {reels.map((reel, index) => (
//             <motion.a
//               key={reel.id}
//               href={reel.instagramUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.1,
//               }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.03,
//               }}
//               className="
//                 relative
//                 block
//                 overflow-hidden
//                 rounded-2xl
//                 bg-[#3d071d]
//                 border
//                 border-[#e4c878]
//                 shadow-xl
//                 group
//               "
//             >
//               <div className="aspect-[9/16] relative">

//                 {/* Thumbnail image - no video plays here, it just
//                     links out to the real reel on Instagram */}

//                 <img
//                   src={reel.thumbnail}
//                   alt={reel.title}
//                   loading="lazy"
//                   className="
//                     absolute
//                     inset-0
//                     w-full
//                     h-full
//                     object-cover
//                     transition-transform
//                     duration-700
//                     group-hover:scale-110
//                   "
//                   onError={(e) => {
//                     e.currentTarget.src = "/images/before-after/default.jpg";
//                   }}
//                 />

//                 {/* Overlay */}
//                 <div className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-[#3d071d]
//                   via-transparent
//                   to-transparent
//                 " />

//                 {/* Centered play icon */}
//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     flex
//                     items-center
//                     justify-center
//                     opacity-90
//                     group-hover:opacity-100
//                     group-hover:scale-110
//                     transition-all
//                     duration-300
//                   "
//                 >
//                   <PlayCircle
//                     size={46}
//                     className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
//                     strokeWidth={1.5}
//                   />
//                 </div>

//                 {/* Instagram badge */}
//                 <div className="
//                   absolute
//                   top-4
//                   right-4
//                   w-9
//                   h-9
//                   rounded-full
//                   bg-[#c2185b]/90
//                   border
//                   border-[#e4c878]
//                   flex
//                   items-center
//                   justify-center
//                 ">
//                   <InstagramIcon size={16} className="text-white" />
//                 </div>

//                 {/* Title */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <p className="
//                     text-white
//                     font-display
//                     text-xl
//                     md:text-2xl
//                   ">
//                     {reel.title}
//                   </p>

//                   <span
//                     className="
//                       inline-flex
//                       items-center
//                       gap-1.5
//                       mt-2
//                       text-[#e4c878]
//                       text-xs
//                       uppercase
//                       tracking-wider
//                     "
//                   >
//                     <InstagramIcon size={12} />
//                     Watch On Instagram
//                   </span>
//                 </div>

//               </div>
//             </motion.a>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Instagram Icon
function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// Instagram Reels
const reels = [
  {
    id: 1,
    thumbnail: "/images/before-after/reel-1-thumb.jpg",
    instagramUrl:
      "https://www.instagram.com/reel/DdBLtADy-cT/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: 2,
    thumbnail: "/images/before-after/reel-2-thumb.jpg",
    instagramUrl:
      "https://www.instagram.com/reel/DbcdG7SJxk8/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: 3,
    thumbnail: "/images/before-after/reel-3-thumb.jpg",
    instagramUrl:
      "https://www.instagram.com/reel/DavFGptJTgw/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: 4,
    thumbnail: "/images/before-after/reel-4-thumb.jpg",
    instagramUrl:
      "https://www.instagram.com/reel/DVX6w1tCfNo/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: 5,
    thumbnail: "/images/before-after/reel-5-thumb.jpg",
    instagramUrl:
      "https://www.instagram.com/reel/DVHCz1pDPN1/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: 6,
    thumbnail: "/images/before-after/reel-6-thumb.jpg",
    instagramUrl:
      "https://www.instagram.com/reel/DUqAppwEi3M/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: 7,
    thumbnail: "/images/before-after/reel-7-thumb.jpg",
    instagramUrl:
      "https://www.instagram.com/reel/DUFTk72kmcB/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: 8,
    thumbnail: "/images/before-after/reel-8-thumb.jpg",
    instagramUrl:
      "https://www.instagram.com/reel/DTiE9icDCWv/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-16 md:py-24 bg-[#fff7f9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-[#c9a227] uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Our Transformations
          </p>

          <div className="w-16 h-px bg-[#c9a227] mx-auto mb-5" />

          <h2 className="font-display text-4xl md:text-6xl text-[#3b2028]">
            Beauty in Motion
          </h2>

          <p className="mt-4 text-[#765963] max-w-2xl mx-auto">
            Watch our latest transformation reels on Instagram.
          </p>
        </motion.div>

        {/* Reels Carousel */}
        <div
          className="
            flex
            gap-4
            md:gap-5
            overflow-x-auto
            overflow-y-hidden
            snap-x
            snap-mandatory
            scroll-smooth
            pb-4

            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {reels.map((reel, index) => (
            <motion.a
              key={reel.id}
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: Math.min(index * 0.08, 0.4),
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                relative
                block
                flex-none
                snap-start
                overflow-hidden
                rounded-2xl
                bg-[#3d071d]
                border
                border-[#e4c878]
                shadow-xl
                group

                w-[82vw]
                sm:w-[45vw]
                md:w-[calc((100%-60px)/4)]
              "
            >
              <div className="aspect-[9/16] relative">

                {/* Reel Thumbnail */}
                <img
                  src={reel.thumbnail}
                  alt="Instagram Reel"
                  loading="lazy"
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
                  onError={(e) => {
                    e.currentTarget.src =
                      "/images/before-after/default.jpg";
                  }}
                />

                {/* Gradient Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#3d071d]/80
                    via-transparent
                    to-transparent
                  "
                />

                {/* Play Button */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-90
                    group-hover:opacity-100
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      bg-white/15
                      backdrop-blur-sm
                      border
                      border-white/40
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <PlayCircle
                      size={42}
                      className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Instagram Badge */}
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    w-10
                    h-10
                    rounded-full
                    bg-[#c2185b]/90
                    border
                    border-[#e4c878]
                    flex
                    items-center
                    justify-center
                    backdrop-blur-sm
                  "
                >
                  <InstagramIcon
                    size={17}
                    className="text-white"
                  />
                </div>

                {/* Instagram Text */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-4
                    md:p-5
                    text-center
                  "
                >
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-[#e4c878]
                      text-xs
                      uppercase
                      tracking-wider
                    "
                  >
                    <InstagramIcon size={12} />
                    Watch On Instagram
                  </span>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-5">
          <span className="text-[#765963] text-xs uppercase tracking-widest">
            Swipe to explore
          </span>

          <span className="text-[#c9a227] text-lg">
            →
          </span>
        </div>

        {/* Desktop Scroll Hint */}
        <div className="hidden md:flex justify-center items-center gap-2 mt-6">
          <span className="text-[#765963] text-xs uppercase tracking-widest">
            Scroll to explore more
          </span>

          <span className="text-[#c9a227] text-lg">
            →
          </span>
        </div>

      </div>
    </section>
  );
}
