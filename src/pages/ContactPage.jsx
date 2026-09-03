import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionTitle from "../components/common/SectionTitle";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
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

          <div className="max-w-7xl mx-auto px-5 lg:px-8">

            <SectionTitle
              eyebrow="Contact Us"
              title="Let's Talk Beauty"
              description="We are here to answer your questions and help plan your next beauty experience."
            />

            <div className="grid lg:grid-cols-2 gap-10 mt-16">

              <div className="bg-[#ae2831] text-white p-8 md:p-12">

                <h2 className="font-display text-4xl">
                  Visit Women World
                </h2>

                <div className="space-y-7 mt-10">

                  <div className="flex gap-4">
                    <MapPin className="text-[#caa229]" />

                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">
                        Address
                      </p>

                      <p className="text-sm mt-2 text-white/80 leading-6">
                        123 Luxury Avenue,
                        <br />
                        Varanasi, Uttar Pradesh
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-[#caa229]" />

                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">
                        Phone
                      </p>

                      <p className="text-sm mt-2 text-white/80">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="text-[#caa229]" />

                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">
                        Email
                      </p>

                      <p className="text-sm mt-2 text-white/80">
                        hello@womenworldbeauty.com
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              <div className="bg-white p-8 md:p-12 shadow-luxury">

                {submitted ? (
                  <div className="min-h-[350px] flex items-center justify-center text-center">

                    <div>
                      <div className="w-16 h-16 mx-auto rounded-full bg-[#f4dde4] flex items-center justify-center text-[#ae2831] text-2xl">
                        ✓
                      </div>

                      <h3 className="font-display text-3xl text-[#ae2831] mt-5">
                        Message Received
                      </h3>

                      <p className="text-sm text-[#24151a]/60 mt-3">
                        Thank you for reaching out to Women World.
                      </p>
                    </div>

                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >

                    <div>
                      <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                        Your Name
                      </label>

                      <input
                        required
                        type="text"
                        className="w-full mt-2 px-4 py-4 border border-[#24151a]/10 focus:border-[#caa229]"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                        Email
                      </label>

                      <input
                        required
                        type="email"
                        className="w-full mt-2 px-4 py-4 border border-[#24151a]/10 focus:border-[#caa229]"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-[#24151a]/60">
                        Message
                      </label>

                      <textarea
                        required
                        rows="6"
                        className="w-full mt-2 px-4 py-4 border border-[#24151a]/10 focus:border-[#caa229] resize-none"
                        placeholder="How can we help?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#ae2831] text-white text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#8f2029]"
                    >
                      Send Message
                    </button>

                  </form>
                )}

              </div>

            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}