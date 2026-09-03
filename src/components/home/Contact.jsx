import { MapPin, Phone, Mail } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="py-24 md:py-32 bg-[#f4dde4]/40">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Create Your Beauty Moment"
          description="Have a question or want to book your next experience?"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          <div className="bg-[#ae2831] p-8 md:p-12 text-white">

            <p className="text-xs uppercase tracking-[0.25em] text-[#ff93b3]">
              Visit Women World
            </p>

            <h3 className="font-display text-4xl md:text-5xl mt-4">
              We would love to welcome you.
            </h3>

            <div className="space-y-6 mt-10">

              <div className="flex gap-4">
                <MapPin className="text-[#caa229]" />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Address
                  </p>

                  <p className="text-sm mt-1 text-white/80">
                    123 Luxury Avenue,
                    <br />
                    Varanasi, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#caa229]" />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Phone
                  </p>

                  <p className="text-sm mt-1 text-white/80">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#caa229]" />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                    Email
                  </p>

                  <p className="text-sm mt-1 text-white/80">
                    hello@womenworldbeauty.com
                  </p>
                </div>
              </div>

            </div>

            <Link
              to="/contact"
              className="inline-block mt-10 px-7 py-4 bg-[#caa229] text-white text-xs uppercase tracking-[0.15em] font-semibold"
            >
              Contact Us
            </Link>

          </div>

          <div className="min-h-[450px] bg-[#24151a] flex items-center justify-center">

            <div className="text-center px-8">

              <p className="text-xs uppercase tracking-[0.3em] text-[#caa229]">
                Women World
              </p>

              <h3 className="font-display text-6xl text-white mt-4">
                Your Beauty
              </h3>

              <p className="font-display italic text-5xl text-[#ff93b3] mt-1">
                Awaits.
              </p>

              <div className="w-16 h-px bg-[#caa229] mx-auto mt-7" />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}