import SectionTitle from "../common/SectionTitle";
import { certificates } from "../../data/certificates";

export default function Certificates() {
  return (
    <section className="py-24 md:py-32 bg-white">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Our Credentials"
          title="Excellence You Can Trust"
          description="Our commitment to beauty excellence is backed by professional training and expertise."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-[#fff9f5] p-5 border border-[#caa229]/20"
            >

              <div className="h-64 bg-[#f4dde4] overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="mt-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#caa229]">
                  {certificate.year}
                </p>

                <h3 className="font-display text-2xl text-[#ae2831] mt-2">
                  {certificate.title}
                </h3>

                <p className="text-xs text-[#24151a]/60 mt-2">
                  {certificate.organization}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}