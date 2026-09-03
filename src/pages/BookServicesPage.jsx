import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";

import { services } from "../data/services";
import { branches } from "../data/branches";

export default function BookServicesPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="pt-20">

        <section className="py-24 md:py-32 luxury-gradient">

          <div className="max-w-4xl mx-auto px-5 lg:px-8">

            <SectionTitle
              eyebrow="Book Your Experience"
              title="Your Beauty Appointment"
              description="Choose your service, branch and preferred time."
            />

            <div className="mt-14 bg-white p-7 md:p-12 shadow-luxury">

              {submitted ? (
                <div className="text-center py-16">

                  <div className="w-20 h-20 rounded-full bg-[#f4dde4] flex items-center justify-center mx-auto text-3xl text-[#ae2831]">
                    ✓
                  </div>

                  <h2 className="font-display text-4xl text-[#ae2831] mt-7">
                    Appointment Request Received
                  </h2>

                  <p className="text-sm text-[#24151a]/60 mt-4">
                    Thank you for choosing Women World Beauty.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-7 px-6 py-3 border border-[#caa229] text-[#ae2831] text-xs uppercase tracking-widest"
                  >
                    Book Another
                  </button>

                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >

                  <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                        Full Name
                      </label>

                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        className="w-full mt-2 px-4 py-4 border border-[#24151a]/10 focus:border-[#caa229]"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                        Phone
                      </label>

                      <input
                        required
                        type="tel"
                        placeholder="+91"
                        className="w-full mt-2 px-4 py-4 border border-[#24151a]/10 focus:border-[#caa229]"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                      Email
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="Your email address"
                      className="w-full mt-2 px-4 py-4 border border-[#24151a]/10 focus:border-[#caa229]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                        Select Service
                      </label>

                      <select
                        required
                        className="w-full mt-2 px-4 py-4 border border-[#24151a]/10 bg-white"
                      >
                        <option value="">
                          Choose a service
                        </option>

                        {services.map((service) => (
                          <option
                            key={service.id}
                            value={service.title}
                          >
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                        Select Branch
                      </label>

                      <select
                        required
                        className="w-full mt-2 px-4 py-4 border border-[#24151a]/10 bg-white"
                      >
                        <option value="">
                          Choose a branch
                        </option>

                        {branches.map((branch) => (
                          <option
                            key={branch.id}
                            value={branch.name}
                          >
                            {branch.name}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                        Preferred Date
                      </label>

                      <input
                        required
                        type="date"
                        className="w-full mt-2 px-4 py-4 border border-[#24151a]/10"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                        Preferred Time
                      </label>

                      <input
                        required
                        type="time"
                        className="w-full mt-2 px-4 py-4 border border-[#24151a]/10"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                      Additional Message
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Tell us anything we should know..."
                      className="w-full mt-2 px-4 py-4 border border-[#24151a]/10 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#ae2831] text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#8f2029] transition"
                  >
                    Request Appointment
                  </button>

                  <p className="text-center text-[10px] text-[#24151a]/40">
                    This is a frontend demonstration. Booking
                    data is not currently connected to a backend.
                  </p>

                </form>
              )}

            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}