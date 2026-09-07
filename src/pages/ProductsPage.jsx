

import { useMemo, useState } from "react";
import { Sparkles, Tag } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { products } from "../data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((product) => product.category))];
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <Navbar />

      <main className="pt-[76px] md:pt-[84px]">

        {/* =====================================================
            SMALL HERO
        ====================================================== */}

        <section className="relative h-[280px] md:h-[360px] overflow-hidden">

          <img
            src="/images/products/hero.jpg"
            alt="Women's World professional products"
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
                Women's World
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
                Our Products
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
                Professional haircare and skincare, trusted and
                used in every treatment we offer.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            PRODUCTS SECTION
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
                FILTER TITLE
            ================================================== */}

            <div className="flex items-center justify-center gap-3 mb-5">

              <Tag size={18} className="text-[#c2185b]" />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  font-bold
                  text-[#3d071d]
                "
              >
                Shop By Use
              </p>

            </div>


            {/* =================================================
                CATEGORY FILTER - single scrollable row
            ================================================== */}

            <div
              className="
                flex
                justify-start
                lg:justify-center
                gap-2.5
                overflow-x-auto
                pb-2
                mb-12
                scrollbar-hide
              "
            >

              {categories.map((category) => {

                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`
                      shrink-0
                      px-6
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
                pb-5
                mb-8
                border-b
                border-[#d4af37]/20
              "
            >

              <div>

                <p className="font-display text-3xl text-[#3d071d]">
                  {activeCategory === "All" ? "All Products" : activeCategory}
                </p>

                <p className="text-xs text-[#3d071d]/50 mt-1">
                  {filteredProducts.length} products available
                </p>

              </div>

            </div>


            {/* =================================================
                PRODUCT CARDS
            ================================================== */}

            {filteredProducts.length > 0 ? (

              <div
                className="
                  grid
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                  gap-5
                  md:gap-6
                "
              >

                {filteredProducts.map((product) => (

                  <div
                    key={product.id}
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

                    {/* SQUARE IMAGE */}

                    <div
                      className="
                        relative
                        aspect-square
                        overflow-hidden
                        bg-[#3d071d]
                      "
                    >

                      <img
                        src={product.image}
                        alt={product.name}
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
                            "/images/products/default.jpg";
                        }}
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#3d071d]/70
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* Category badge */}

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
                          {product.category}
                        </span>

                      </div>

                    </div>


                    {/* CARD CONTENT */}

                    <div className="p-5">

                      <p
                        className="
                          text-[8px]
                          uppercase
                          tracking-[0.18em]
                          text-[#c9a227]
                          font-semibold
                        "
                      >
                        {product.brand}
                      </p>

                      <h2
                        className="
                          font-display
                          text-xl
                          leading-tight
                          text-[#3d071d]
                          mt-1.5
                          min-h-[52px]
                          group-hover:text-[#c2185b]
                          transition-colors
                          duration-300
                        "
                      >
                        {product.name}
                      </h2>

                      {/* Divider */}

                      <div
                        className="
                          w-10
                          h-[2px]
                          bg-[#d4af37]
                          mt-3
                          group-hover:w-16
                          transition-all
                          duration-500
                        "
                      />

                      {/* Use for */}

                      <p
                        className="
                          text-xs
                          text-[#3d071d]/60
                          leading-5
                          mt-3
                        "
                      >
                        {product.useFor}
                      </p>

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

                <h2 className="font-display text-3xl text-[#3d071d]">
                  No Products Found
                </h2>

                <p className="text-sm text-[#3d071d]/50 mt-2">
                  Try another category.
                </p>

                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
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
                  View All Products
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