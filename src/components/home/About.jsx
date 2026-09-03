import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Our Story"
          title="A Celebration of Every Woman"
          description="We believe beauty is personal, powerful and uniquely yours."
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center mt-16">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="/images/about/about.jpg"
              alt="Women World Beauty"
              className="w-full h-[500px] object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute -bottom-7 -right-7 bg-[#ae2831] text-white p-7 hidden md:block">
              <p className="font-display text-4xl">
                15+
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] mt-1">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#caa229] font-semibold">
              More Than Beauty
            </p>

            <h3 className="font-display text-4xl md:text-5xl text-[#ae2831] mt-4">
              Where elegance becomes an experience.
            </h3>

            <p className="text-sm leading-8 text-[#24151a]/65 mt-6">
              Women World is a premium beauty destination
              dedicated to creating exceptional experiences.
              From sophisticated hair styling to transformative
              skincare and timeless bridal makeup, every service
              is designed around you.
            </p>

            <p className="text-sm leading-8 text-[#24151a]/65 mt-4">
              Our philosophy combines expert artistry, premium
              products and personalized care to create beauty
              experiences that make you feel confident from
              within.
            </p>

            <div className="mt-8">
              <Button to="/academic-about">
                Discover Our Story
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}