import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
  X,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { services } from "../data/services";

export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Create categories automatically from services.js
  const categories = useMemo(() => {
    return ["All", ...new Set(services.map((service) => service.category))];
  }, []);

  // Filter services
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "All" ||
        service.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        service.title.toLowerCase().includes(searchText) ||
        service.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <>
      <Navbar />

      <main className="pt-[76px] md:pt-[84px]">

        {/* =====================================================
            SMALL HERO
        ====================================================== */}

        <section className="relative h-[300px] md:h-[370px] overflow-hidden">

          <img
            src="/images/services/hero.jpg"
            alt="Women's World beauty services"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#3d071d]/65" />

          {/* Pink glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d071d]/80 via-transparent to-[#c2185b]/30" />

          {/* Gold glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/10 blur-3xl rounded-full" />

          <div className="relative z-10 h-full flex items-center justify-center text-center px-5">

            <div className="max-w-3xl">

              <div className="flex items-center justify-center gap-3 mb-4">

                <span className="w-10 h-px bg-[#d4af37]" />

                <Sparkles
                  size={15}
                  className="text-[#d4af37]"
                />

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
                Women's World
              </p>

              <h1
                className="
                  font-display
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  text-white
                  mt-2
                "
              >
                Our Services
              </h1>

              <p
                className="
                  mt-4
                  text-white/75
                  text-sm
                  md:text-base
                  leading-7
                  max-w-xl
                  mx-auto
                "
              >
                Discover beauty experiences crafted to make
                you feel confident, radiant and unforgettable.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES SECTION
        ====================================================== */}

        <section className="relative py-16 md:py-24 bg-[#fff7f9] overflow-hidden">

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
                SEARCH
            ================================================== */}

            <div className="max-w-3xl mx-auto">

              <div
                className="
                  relative
                  flex
                  items-center
                  bg-white
                  border
                  border-[#d4af37]/30
                  shadow-[0_10px_35px_rgba(59,32,40,0.08)]
                  rounded-full
                  overflow-hidden
                  focus-within:border-[#c2185b]/50
                  transition
                "
              >

                <Search
                  size={19}
                  className="
                    ml-5
                    text-[#c2185b]
                    shrink-0
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for a service..."
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    px-4
                    py-4
                    text-sm
                    text-[#3d071d]
                    placeholder:text-[#3d071d]/40
                  "
                />

                {search && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="
                      mr-3
                      w-8
                      h-8
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-[#3d071d]/50
                      hover:text-[#c2185b]
                      hover:bg-[#fce8ee]
                      transition
                    "
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}

              </div>

            </div>


            {/* =================================================
                FILTER TITLE
            ================================================== */}

            <div className="flex items-center gap-3 mt-12 mb-5">

              <SlidersHorizontal
                size={18}
                className="text-[#c2185b]"
              />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  font-bold
                  text-[#3d071d]
                "
              >
                Explore By Category
              </p>

            </div>


            {/* =================================================
                CATEGORY FILTERS
            ================================================== */}

            <div
              className="
                flex
                gap-2
                overflow-x-auto
                pb-4
                scrollbar-hide
              "
            >

              {categories.map((category) => {

                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`
                      shrink-0
                      px-5
                      py-2.5
                      rounded-full
                      border
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-[#3d071d] text-[#f1d477] border-[#d4af37]"
                          : "bg-white text-[#3d071d]/70 border-[#d4af37]/30 hover:border-[#c2185b] hover:text-[#c2185b]"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}

            </div>


            {/* =================================================
                RESULTS HEADER
            ================================================== */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-3
                mt-8
                pb-5
                border-b
                border-[#d4af37]/20
              "
            >

              <div>

                <p
                  className="
                    font-display
                    text-3xl
                    text-[#3d071d]
                  "
                >
                  {activeCategory === "All"
                    ? "All Services"
                    : activeCategory}
                </p>

                <p className="text-xs text-[#3d071d]/50 mt-1">
                  {filteredServices.length} services available
                </p>

              </div>

              {search && (
                <p className="text-xs text-[#c2185b]">
                  Searching for:{" "}
                  <span className="font-semibold">
                    "{search}"
                  </span>
                </p>
              )}

            </div>


            {/* =================================================
                SERVICE CARDS
            ================================================== */}

            {filteredServices.length > 0 ? (

              <div
                className="
                  grid
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                  gap-5
                  md:gap-6
                  mt-8
                "
              >

                {filteredServices.map((service) => (

                  <div
                    key={service.id}
                    className="
                      group
                      bg-white
                      rounded-2xl
                      overflow-hidden
                      border
                      border-[#d4af37]/25
                      shadow-[0_8px_30px_rgba(59,32,40,0.07)]
                      hover:shadow-[0_18px_45px_rgba(194,24,91,0.15)]
                      hover:-translate-y-1
                      transition-all
                      duration-500
                    "
                  >

                    {/* IMAGE */}

                    <div
                      className="
                        relative
                        h-52
                        sm:h-56
                        overflow-hidden
                        bg-[#3d071d]
                      "
                    >

                      <img
                        src={service.image}
                        alt={service.title}
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
                            "/images/services/default.jpg";
                        }}
                      />

                      {/* Image overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#3d071d]/75
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* Category */}

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
                          {service.category}
                        </span>

                      </div>

                    </div>


                    {/* CARD CONTENT */}

                    <div className="p-5">

                      <h2
                        className="
                          font-display
                          text-2xl
                          leading-tight
                          text-[#3d071d]
                          min-h-[56px]
                          group-hover:text-[#c2185b]
                          transition-colors
                          duration-300
                        "
                      >
                        {service.title}
                      </h2>


                      {/* Divider */}

                      <div
                        className="
                          w-10
                          h-[2px]
                          bg-[#d4af37]
                          mt-4
                          group-hover:w-16
                          transition-all
                          duration-500
                        "
                      />


                      {/* PRICE + BOOK */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-3
                          mt-5
                        "
                      >

                        <div>

                          <p
                            className="
                              text-[8px]
                              uppercase
                              tracking-[0.18em]
                              text-[#3d071d]/40
                            "
                          >
                            Starting From
                          </p>

                          <p
                            className="
                              text-base
                              font-semibold
                              text-[#c9a227]
                              mt-1
                            "
                          >
                            {service.price}
                          </p>

                        </div>


                        <Link
                          to="/book-services"
                          className="
                            group/book
                            flex
                            items-center
                            gap-1.5
                            px-4
                            py-2.5
                            rounded-full
                            bg-[#3d071d]
                            border
                            border-[#d4af37]
                            text-white
                            text-[8px]
                            uppercase
                            tracking-[0.15em]
                            font-semibold
                            hover:bg-[#c2185b]
                            hover:text-[#f1d477]
                            transition-all
                            duration-300
                          "
                        >

                          Book

                          <ArrowUpRight
                            size={13}
                            className="
                              group-hover/book:translate-x-0.5
                              group-hover/book:-translate-y-0.5
                              transition-transform
                            "
                          />

                        </Link>

                      </div>

                    </div>


                    {/* GOLD BOTTOM LINE */}

                    <div
                      className="
                        h-[2px]
                        w-0
                        bg-[#d4af37]
                        group-hover:w-full
                        transition-all
                        duration-700
                      "
                    />

                  </div>

                ))}

              </div>

            ) : (

              /* =================================================
                 NO RESULTS
              ================================================== */

              <div className="py-24 text-center">

                <div
                  className="
                    w-16
                    h-16
                    mx-auto
                    rounded-full
                    bg-[#fce8ee]
                    border
                    border-[#d4af37]/40
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Search
                    size={24}
                    className="text-[#c2185b]"
                  />

                </div>

                <h2
                  className="
                    font-display
                    text-3xl
                    text-[#3d071d]
                    mt-5
                  "
                >
                  No Service Found
                </h2>

                <p className="text-sm text-[#3d071d]/50 mt-2">
                  Try another service name or category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="
                    mt-6
                    px-6
                    py-3
                    rounded-full
                    bg-[#3d071d]
                    border
                    border-[#d4af37]
                    text-[#f1d477]
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    font-semibold
                    hover:bg-[#c2185b]
                    transition-all
                  "
                >
                  View All Services
                </button>

              </div>

            )}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}