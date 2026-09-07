import { Sparkles, Clock, Tag, GraduationCap, CheckCircle2 } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { courses, extensions } from "../data/courses";

export default function AcademicAboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[76px] md:pt-[84px]">

        {/* =====================================================
            SMALL HERO
        ====================================================== */}

        <section className="relative h-[300px] md:h-[320px] overflow-hidden">

          <img
            src="/images/academic/hero.jpg"
            alt="Women's World Academy"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#3d071d]/65" />

          {/* Pink glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d071d]/80 via-transparent to-[#c2185b]/30" />

          {/* Gold glow */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#d4af37]/10 blur-3xl rounded-full" />

          <div className="relative z-10 h-full flex items-center justify-center text-center px-5">

            <div className="max-w-3xl">

              <div className="flex items-center justify-center gap-3 mb-3">

                <span className="w-10 h-px bg-[#d4af37]" />

                <Sparkles size={14} className="text-[#d4af37]" />

                <span className="w-10 h-px bg-[#d4af37]" />

              </div>

              <p
                className="
                  text-[#f1d477]
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.3em]
                  font-semibold
                "
              >
                Women's World Academy
              </p>

              <h1
                className="
                  font-display
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  text-white
                  mt-2
                "
              >
                Academic Courses
              </h1>

              <p
                className="
                  mt-3
                  text-white/75
                  text-sm
                  md:text-base
                  leading-6
                  max-w-xl
                  mx-auto
                "
              >
                Professional training in hair, skin and makeup —
                built on discipline, technique and real salon practice.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            PHILOSOPHY STRIP
        ====================================================== */}

        <section className="bg-[#fff7f9] pt-14 md:pt-20">

          <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">

            <p className="text-xs uppercase tracking-[0.25em] text-[#c9a227] font-semibold">
              Our Philosophy
            </p>

            <h2 className="font-display text-3xl md:text-4xl text-[#3d071d] mt-3">
              Beauty is an art. Excellence is a discipline.
            </h2>

            <p className="text-sm leading-7 text-[#3d071d]/60 mt-5 max-w-2xl mx-auto">
              Women's World believes professional beauty is built on
              knowledge, creativity, continuous learning and genuine
              care — every course below reflects the exact curriculum
              taught at our academy.
            </p>

          </div>

        </section>


        {/* =====================================================
            COURSES SECTION
        ====================================================== */}

        <section className="relative py-16 md:py-20 bg-[#fff7f9] overflow-hidden">

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

          <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">

            {/* SECTION TITLE */}

            <div className="flex items-center justify-center gap-3 mb-14">

              <GraduationCap size={18} className="text-[#c2185b]" />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  font-bold
                  text-[#3d071d]
                "
              >
                Full Course Curriculum
              </p>

            </div>


            {/* COURSE CARDS */}

            <div className="flex flex-col gap-10">

              {courses.map((course) => (

                <div
                  key={course.id}
                  className="
                    group
                    flex
                    flex-col
                    lg:flex-row
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    border
                    border-[#d4af37]/25
                    shadow-[0_8px_30px_rgba(59,32,40,0.07)]
                    hover:shadow-[0_18px_45px_rgba(194,24,91,0.15)]
                    transition-all
                    duration-500
                  "
                >

                  {/* IMAGE - brochure photo */}

                  <div
                    className="
                      relative
                      w-full
                      lg:w-[340px]
                      shrink-0
                      aspect-[4/3]
                      lg:aspect-auto
                      overflow-hidden
                      bg-[#3d071d]
                    "
                  >

                    <img
                      src={course.image}
                      alt={`${course.title} - ${course.level}`}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition-transform
                        duration-700
                      "
                      onError={(e) => {
                        e.currentTarget.src =
                          "/images/academic/default.jpg";
                      }}
                    />

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

                    {/* Level badge */}

                    <div
                      className="
                        absolute
                        top-3
                        left-3
                        px-3
                        py-1.5
                        rounded-full
                        bg-[#3d071d]/80
                        border
                        border-[#d4af37]/60
                        backdrop-blur-sm
                      "
                    >

                      <span
                        className="
                          text-[8px]
                          uppercase
                          tracking-[0.16em]
                          font-semibold
                          text-[#f1d477]
                        "
                      >
                        {course.level}
                      </span>

                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="flex-1 p-6 md:p-8">

                    <h3
                      className="
                        font-display
                        text-2xl
                        md:text-3xl
                        text-[#3d071d]
                        group-hover:text-[#c2185b]
                        transition-colors
                        duration-300
                      "
                    >
                      {course.title}
                    </h3>

                    {/* Duration + Price */}

                    <div className="flex flex-wrap items-center gap-5 mt-4">

                      <div className="flex items-center gap-2">

                        <Clock size={14} className="text-[#c9a227]" />

                        <span className="text-xs text-[#3d071d]/60">
                          {course.duration}
                        </span>

                      </div>

                      <div className="flex items-center gap-2">

                        <Tag size={14} className="text-[#c9a227]" />

                        <span className="text-base font-semibold text-[#c9a227]">
                          {course.price}
                        </span>

                        <span className="text-[10px] text-[#3d071d]/40">
                          {course.priceNote}
                        </span>

                      </div>

                    </div>

                    {/* Divider */}

                    <div
                      className="
                        w-12
                        h-[2px]
                        bg-[#d4af37]
                        mt-5
                        mb-5
                        group-hover:w-20
                        transition-all
                        duration-500
                      "
                    />

                    {/* Topics - two column list */}

                    <div
                      className="
                        grid
                        sm:grid-cols-2
                        gap-x-6
                        gap-y-2.5
                      "
                    >

                      {course.topics.map((topic, index) => (

                        <div
                          key={index}
                          className="flex items-start gap-2"
                        >

                          <CheckCircle2
                            size={14}
                            className="text-[#c2185b] mt-0.5 shrink-0"
                          />

                          <span className="text-xs text-[#3d071d]/70 leading-5">
                            {topic}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* GOLD BOTTOM LINE */}

                  <div
                    className="
                      hidden
                      lg:block
                      w-[3px]
                      bg-[#d4af37]
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            EXTENSIONS SECTION
        ====================================================== */}

        <section className="relative py-16 md:py-20 bg-[#3d071d] overflow-hidden">

          {/* Gold glow */}

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-96
              h-64
              bg-[#d4af37]/10
              blur-3xl
              rounded-full
              pointer-events-none
            "
          />

          <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">

            <div className="text-center mb-12">

              <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#f1d477]">
                Add-On Specialisations
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-white mt-3">
                Extension Certifications
              </h2>

            </div>

            <div className="grid sm:grid-cols-3 gap-6">

              {extensions.map((extension) => (

                <div
                  key={extension.id}
                  className="
                    group
                    bg-white/5
                    border
                    border-[#d4af37]/25
                    rounded-2xl
                    p-7
                    text-center
                    hover:bg-white/10
                    hover:border-[#d4af37]/60
                    transition-all
                    duration-300
                  "
                >

                  <h3 className="font-display text-xl text-[#f1d477]">
                    {extension.title}
                  </h3>

                  <div className="w-8 h-[2px] bg-[#d4af37] mx-auto mt-4 mb-4" />

                  <p className="text-xs uppercase tracking-[0.15em] text-white/60 font-semibold">
                    {extension.price}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}