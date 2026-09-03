import { MapPin, Phone, Clock } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { branches } from "../../data/branches";
import { Link } from "react-router-dom";

export default function Branches() {
  return (
    <section className="py-24 md:py-32 bg-[#f4dde4]/35">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Our Locations"
          title="Find Your Women World"
          description="Visit us and step into your own world of beauty."
        />

        <div className="grid lg:grid-cols-2 gap-7 mt-16">

          {branches.map((branch) => (
            <div
              key={branch.id}
              className="grid md:grid-cols-2 bg-white overflow-hidden border border-[#caa229]/10"
            >

              <div className="h-72 md:h-full">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="p-7">

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#caa229]">
                  Our Branch
                </p>

                <h3 className="font-display text-3xl text-[#ae2831] mt-2">
                  {branch.name}
                </h3>

                <div className="space-y-4 mt-7">

                  <div className="flex gap-3">
                    <MapPin
                      size={18}
                      className="text-[#caa229] shrink-0"
                    />

                    <p className="text-xs leading-6 text-[#24151a]/65">
                      {branch.address}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Phone
                      size={17}
                      className="text-[#caa229] shrink-0"
                    />

                    <p className="text-xs text-[#24151a]/65">
                      {branch.phone}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Clock
                      size={17}
                      className="text-[#caa229] shrink-0"
                    />

                    <p className="text-xs text-[#24151a]/65">
                      {branch.hours}
                    </p>
                  </div>

                </div>

                <Link
                  to="/book-services"
                  className="inline-block mt-7 px-5 py-3 bg-[#ae2831] text-white text-[10px] tracking-[0.15em] uppercase font-semibold"
                >
                  Book Here
                </Link>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}