import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";

export default function AcademicAboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        <section className="py-24 md:py-32 luxury-gradient">

          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            <SectionTitle
              eyebrow="Academic About"
              title="Beauty Meets Knowledge"
              description="Discover the philosophy, education and professional standards behind Women World."
            />

            <div className="grid lg:grid-cols-2 gap-14 mt-16 items-center">

              <div className="h-[500px]">
                <img
                  src="/images/about/academic.jpg"
                  alt="Women World Academy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-[#caa229] font-semibold">
                  Our Philosophy
                </p>

                <h2 className="font-display text-4xl md:text-5xl text-[#ae2831] mt-3">
                  Beauty is an art. Excellence is a discipline.
                </h2>

                <p className="text-sm leading-8 text-[#24151a]/65 mt-6">
                  Women World believes professional beauty is
                  built on knowledge, creativity, continuous
                  learning and genuine care.
                </p>

                <p className="text-sm leading-8 text-[#24151a]/65 mt-4">
                  Our academic approach focuses on professional
                  techniques, product knowledge, hygiene,
                  client care and evolving beauty trends.
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mt-9">

                  <div className="bg-white p-6 border border-[#caa229]/15">
                    <p className="font-display text-3xl text-[#caa229]">
                      01
                    </p>

                    <h3 className="font-semibold text-[#ae2831] mt-3">
                      Professional Training
                    </h3>

                    <p className="text-xs text-[#24151a]/60 leading-6 mt-2">
                      Continuous learning and professional development.
                    </p>
                  </div>

                  <div className="bg-white p-6 border border-[#caa229]/15">
                    <p className="font-display text-3xl text-[#caa229]">
                      02
                    </p>

                    <h3 className="font-semibold text-[#ae2831] mt-3">
                      Modern Techniques
                    </h3>

                    <p className="text-xs text-[#24151a]/60 leading-6 mt-2">
                      Keeping up with modern beauty practices.
                    </p>
                  </div>

                  <div className="bg-white p-6 border border-[#caa229]/15">
                    <p className="font-display text-3xl text-[#caa229]">
                      03
                    </p>

                    <h3 className="font-semibold text-[#ae2831] mt-3">
                      Hygiene Standards
                    </h3>

                    <p className="text-xs text-[#24151a]/60 leading-6 mt-2">
                      Professional standards for every beauty service.
                    </p>
                  </div>

                  <div className="bg-white p-6 border border-[#caa229]/15">
                    <p className="font-display text-3xl text-[#caa229]">
                      04
                    </p>

                    <h3 className="font-semibold text-[#ae2831] mt-3">
                      Client First
                    </h3>

                    <p className="text-xs text-[#24151a]/60 leading-6 mt-2">
                      Understanding individual beauty goals.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}