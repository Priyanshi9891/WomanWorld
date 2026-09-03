import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";
import { services } from "../data/services";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        <section className="py-24 md:py-32 luxury-gradient">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            <SectionTitle
              eyebrow="Our Services"
              title="Beauty, Curated For You"
              description="Explore our complete collection of beauty experiences."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">

              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white overflow-hidden border border-[#caa229]/10 group"
                >

                  <div className="h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="p-7">

                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#caa229]">
                      {service.category}
                    </p>

                    <h2 className="font-display text-3xl text-[#ae2831] mt-2">
                      {service.title}
                    </h2>

                    <p className="text-sm leading-7 text-[#24151a]/60 mt-3">
                      {service.description}
                    </p>

                    <div className="flex justify-between items-center mt-6">
                      <span className="text-sm font-semibold text-[#caa229]">
                        {service.price}
                      </span>

                      <Link
                        to="/book-services"
                        className="px-5 py-3 bg-[#ae2831] text-white text-[10px] uppercase tracking-[0.15em]"
                      >
                        Book
                      </Link>
                    </div>

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