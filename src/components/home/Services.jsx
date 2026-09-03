import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-white">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Our Signature Services"
          title="Beauty, Curated For You"
          description="Discover our collection of premium beauty services."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group bg-[#fff9f5] overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#fff9f5]/90 text-[9px] tracking-[0.18em] uppercase text-[#ae2831]">
                  {service.category}
                </div>
              </div>

              <div className="p-6">

                <h3 className="font-display text-3xl text-[#ae2831]">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 text-[#24151a]/60 mt-3">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs font-semibold text-[#caa229]">
                    {service.price}
                  </span>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#ae2831]"
                  >
                    Explore
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-7 py-4 border border-[#caa229] text-[#ae2831] text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#caa229] hover:text-white transition"
          >
            View All Services
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}