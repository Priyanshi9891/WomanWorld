import SectionTitle from "../common/SectionTitle";
import { gallery } from "../../data/gallery";

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 luxury-gradient">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Inside Women World"
          title="A Glimpse of Beauty"
          description="Explore moments from our world of elegance."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-16">

          {gallery.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden h-64 md:h-80"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-[#ae2831]/0 group-hover:bg-[#ae2831]/40 transition duration-500 flex items-end">

                <p className="text-white font-display text-2xl p-5 opacity-0 group-hover:opacity-100 transition">
                  {item.title}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}