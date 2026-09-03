import SectionTitle from "../common/SectionTitle";
import { offers } from "../../data/offers";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Offers() {
  return (
    <section className="py-24 md:py-32 bg-[#24151a]">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Exclusive Offers"
          title="Luxury, With a Little More"
          description="Discover our specially curated beauty experiences."
          light
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative overflow-hidden min-h-[500px] group"
            >

              <img
                src={offer.image}
                alt={offer.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#24151a] via-[#24151a]/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff93b3]">
                  {offer.subtitle}
                </p>

                <h3 className="font-display text-4xl text-white mt-2">
                  {offer.title}
                </h3>

                <p className="text-sm text-white/70 leading-6 mt-3">
                  {offer.description}
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <span className="font-display text-2xl text-[#caa229]">
                    {offer.price}
                  </span>

                  <span className="text-xs text-white/40 line-through">
                    {offer.oldPrice}
                  </span>
                </div>

                <Link
                  to="/offers"
                  className="inline-flex items-center gap-2 mt-6 text-[10px] uppercase tracking-[0.2em] text-white font-semibold"
                >
                  Discover Offer
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}