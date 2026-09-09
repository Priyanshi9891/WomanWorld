import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  GraduationCap,
  ArrowUpRight,
  Clock,
  Tag,
} from "lucide-react";

// Reuses the same brochure photos already used on the Academic page
const slideshowImages = [
  "/images/academic/image1.jpg",
  "/images/academic/hero.jpg",
  "/images/academic/image2.jpg",
];

// A short highlight of 3 courses - full list lives on /academic-about
const featuredCourses = [
  {
     id: 1,
    title: "Hair Chemical Course",
    level: "Basic Course",
    duration: "3 to 6 Months",
    price: "₹39,999",
  },
  {
     id: 2,
    title: "Hair Chemical Course",
    level: "Advance Course",
    duration: "3 to 6 Months",
    price: "₹49,999",
  },
  {
    id: 3,
    title: "Beauty Course",
    level: "Self Course",
    duration: "3 Months",
    price: "₹29,999",
    
  },
  {
    
    id: 5,
    title: "Make Up Course",
    level: "Make Up Course",
    duration: "3 to 6 Months",
    price: "₹39,999",
    
  },
  {
    id: 6,
    title: "Skin & Beauty Course",
    level: "Advance Course",
    duration: "6 to 12 Months",
    price: "₹39,999",
    
  },
  {
    id: 7,
    title: "Beauty Course",
    level: "Self Course",
    duration: "3 Months",
    price: "₹29,999",
    
  },
];

export default function Academic() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance the slideshow every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-10 md:py-16 bg-[#fff7f9] overflow-hidden">

      {/* Hides the native horizontal scrollbar on the mobile course
          strip, without depending on a Tailwind plugin/config */}
      <style>{`
        .ww-scroll-hide::-webkit-scrollbar {
          display: none;
        }
        .ww-scroll-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Background decoration */}

      <div
        className="
          absolute
          -top-32
          -left-32
          w-80
          h-80
          rounded-full
          bg-[#c2185b]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -right-32
          w-96
          h-96
          rounded-full
          bg-[#d4af37]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

        {/* =================================================
            SECTION TITLE
        ================================================== */}

        <div className="text-center max-w-2xl mx-auto mb-7">

          <div className="flex items-center justify-center gap-3 mb-3">

            <span className="w-10 h-px bg-[#d4af37]" />

            <Sparkles size={15} className="text-[#d4af37]" />

            <span className="w-10 h-px bg-[#d4af37]" />

          </div>

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              font-semibold
              text-[#c2185b]
            "
          >
           
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-[#3d071d] mt-2">
           Women's World Academy
          </h2>

          <p className="text-sm text-[#3d071d]/60 leading-6 mt-3">
            Professional training in hair, skin and makeup, taught by
            experienced stylists with real salon practice.
          </p>

        </div>


        {/* =================================================
            AUTO-CHANGING IMAGE SLIDESHOW
            One image visible at a time, changes automatically -
            same behaviour on mobile and desktop.
        ================================================== */}

        <div
          className="
            relative
            max-w-3xl
            mx-auto
            h-[220px]
            sm:h-[300px]
            md:h-[380px]
            rounded-2xl
            overflow-hidden
            border
            border-[#d4af37]/30
            shadow-[0_18px_50px_rgba(59,32,40,0.12)]
          "
        >

          {slideshowImages.map((image, index) => (

            <img
              key={image}
              src={image}
              alt={`Women's World Academy training ${index + 1}`}
              className={`
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-opacity
                duration-1000
                ease-in-out
                ${index === activeSlide ? "opacity-100" : "opacity-0"}
              `}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

          ))}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#3d071d]/60
              via-transparent
              to-transparent
            "
          />

          {/* Dot indicators */}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">

            {slideshowImages.map((_, index) => (

              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === activeSlide
                      ? "w-6 bg-[#d4af37]"
                      : "w-1.5 bg-white/50"
                  }
                `}
              />

            ))}

          </div>

        </div>


        {/* =================================================
            FEATURED COURSES
            Desktop: one line (3 columns).
            Mobile: horizontal scroll, one card at a time.
        ================================================== */}

        <div
          className="
            flex
            md:grid
            md:grid-cols-3
            gap-4
            mt-8
            overflow-x-auto
            snap-x
            snap-mandatory
            md:overflow-visible
            pb-2
            md:pb-0
            -mx-5
            px-5
            md:mx-0
            md:px-0
            ww-scroll-hide
          "
        >

          {featuredCourses.map((course) => (

            <div
              key={course.id}
              className="
                shrink-0
                w-[85%]
                sm:w-[60%]
                md:w-auto
                snap-center
                bg-white
                rounded-2xl
                p-5
                border
                border-[#d4af37]/25
                shadow-[0_8px_30px_rgba(59,32,40,0.07)]
                hover:shadow-[0_18px_45px_rgba(194,24,91,0.15)]
                hover:-translate-y-1
                transition-all
                duration-500
              "
            >

              <div className="w-10 h-10 rounded-full bg-[#3d071d] flex items-center justify-center">
                <GraduationCap size={18} className="text-[#f1d477]" />
              </div>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-[#c9a227]
                  font-semibold
                  mt-3
                "
              >
                {course.level}
              </p>

              <h3 className="font-display text-xl text-[#3d071d] mt-1">
                {course.title}
              </h3>

              <div className="w-8 h-[2px] bg-[#d4af37] mt-2 mb-3" />

              <div className="flex items-center gap-4">

                <div className="flex items-center gap-1.5">

                  <Clock size={12} className="text-[#3d071d]/40" />

                  <span className="text-[11px] text-[#3d071d]/50">
                    {course.duration}
                  </span>

                </div>

                <div className="flex items-center gap-1.5">

                  <Tag size={12} className="text-[#c9a227]" />

                  <span className="text-[11px] font-semibold text-[#c9a227]">
                    {course.price}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            VIEW MORE - links to the full Academic page
        ================================================== */}

        <div className="flex justify-center mt-6">

          <Link
            to="/academic-about"
            className="
              group
              inline-flex
              items-center
              gap-2
              px-7
              py-3.5
              rounded-full
              bg-[#3d071d]
              border
              border-[#d4af37]
              text-[#f1d477]
              text-[10px]
              uppercase
              tracking-[0.18em]
              font-semibold
              hover:bg-[#c2185b]
              hover:text-white
              transition-all
              duration-300
            "
          >

            View More Courses

            <ArrowUpRight
              size={14}
              className="
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                transition-transform
              "
            />

          </Link>

        </div>

      </div>

    </section>
  );
}