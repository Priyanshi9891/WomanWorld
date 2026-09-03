import SectionTitle from "../common/SectionTitle";

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 bg-white">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="The Transformation"
          title="Before & After"
          description="Every transformation begins with confidence."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          <div className="relative">
            <img
              src="/images/before-after/before-1.jpg"
              alt="Before beauty treatment"
              className="w-full h-[450px] object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute bottom-5 left-5 px-5 py-2 bg-white text-[#ae2831] text-xs uppercase tracking-[0.2em]">
              Before
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/before-after/after-1.jpg"
              alt="After beauty treatment"
              className="w-full h-[450px] object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute bottom-5 left-5 px-5 py-2 bg-[#ae2831] text-white text-xs uppercase tracking-[0.2em]">
              After
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}