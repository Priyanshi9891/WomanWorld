import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";
import { offers } from "../data/offers";
import { Link } from "react-router-dom";

export default function OffersPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        <section className="py-24 md:py-32 bg-[#24151a]">

          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            <SectionTitle
              eyebrow="Exclusive Offers"
              title="Beauty Worth Celebrating"
              description="Discover our specially curated packages."
              light
            />

            <div className="grid md:grid-cols-3 gap-7 mt-16">

              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white/5 border border-white/10 overflow-hidden"
                >

                  <div className="h-72 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="p-7">

                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#ff93b3]">
                      {offer.subtitle}
                    </p>

                    <h2 className="font-display text-3xl text-white mt-2">
                      {offer.title}
                    </h2>

                    <p className="text-sm text-white/60 leading-7 mt-3">
                      {offer.description}
                    </p>

                    <div className="flex items-center gap-3 mt-5">

                      <span className="font-display text-3xl text-[#caa229]">
                        {offer.price}
                      </span>

                      <span className="text-xs text-white/40 line-through">
                        {offer.oldPrice}
                      </span>

                    </div>

                    <Link
                      to="/book-services"
                      className="block text-center mt-6 px-5 py-4 bg-[#ae2831] text-white text-[10px] uppercase tracking-[0.15em] font-semibold"
                    >
                      Book This Offer
                    </Link>

                  </div>

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