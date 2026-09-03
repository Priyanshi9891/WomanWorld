import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const stats = [
  {
    value: "15+",
    label: "Years of Excellence",
  },
  {
    value: "50K+",
    label: "Happy Clients",
  },
  {
    value: "25+",
    label: "Beauty Experts",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function ImpactMatrix() {
  return (
    <section className="py-24 md:py-28 bg-[#ae2831]">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Our Impact"
          title="Numbers That Tell Our Story"
          description="Years of trust, thousands of beautiful experiences."
          light
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 border-t border-white/20">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-10 text-center border-b lg:border-b-0 border-white/20 lg:border-r last:border-r-0"
            >

              <p className="font-display text-5xl md:text-6xl text-[#caa229]">
                {stat.value}
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 mt-3">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}