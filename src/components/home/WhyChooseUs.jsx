import {
  Sparkles,
  Heart,
  Award,
  Gem,
} from "lucide-react";

import SectionTitle from "../common/SectionTitle";

const reasons = [
  {
    icon: Gem,
    title: "Premium Experience",
    text: "Thoughtfully designed beauty experiences in an elegant environment.",
  },
  {
    icon: Award,
    title: "Expert Artists",
    text: "Skilled beauty professionals who understand modern beauty and timeless elegance.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    text: "Carefully selected products for quality, comfort and beautiful results.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    text: "Every appointment is tailored around your individual needs and preferences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 luxury-gradient">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Why Women Choose Us"
          title="The Women World Difference"
          description="Because you deserve more than a beauty appointment."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white p-8 border border-[#caa229]/15 hover:border-[#caa229]/50 transition duration-500 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#f4dde4] flex items-center justify-center group-hover:bg-[#ae2831] transition">
                  <Icon
                    size={23}
                    className="text-[#ae2831] group-hover:text-white transition"
                  />
                </div>

                <p className="text-xs text-[#caa229] tracking-[0.2em] mt-7">
                  0{index + 1}
                </p>

                <h3 className="font-display text-2xl text-[#ae2831] mt-2">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-[#24151a]/60 mt-4">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}