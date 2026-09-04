import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="relative py-10 md:py-14 bg-[#fff7f9] overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#e91e63]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ================= LEFT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full flex justify-center lg:justify-start"
          >

            {/* Vertical Big Image */}
            <div
              className="
                relative
                w-[78%]
                sm:w-[65%]
                md:w-[55%]
                lg:w-[68%]
                aspect-[3/4]
                rounded-2xl
                overflow-hidden
                border
                border-[#e4c878]/50
                shadow-[0_20px_45px_rgba(59,32,40,0.15)]
                group
              "
            >

              <img
                src="/images/contact/contact-main.jpg"
                alt="Women World beauty"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Dark subtle overlay */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#3d071d]/35
                via-transparent
                to-transparent
              " />

              {/* Gold corner decoration */}
              <div className="
                absolute
                top-5
                left-5
                w-12
                h-12
                border-l
                border-t
                border-[#e4c878]
              " />

              <div className="
                absolute
                bottom-5
                right-5
                w-12
                h-12
                border-r
                border-b
                border-[#e4c878]
              " />

            </div>


            {/* ================= SMALL SQUARE IMAGE ================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                x: 30,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-[-20px]
                left-[55%]
                sm:left-[53%]
                lg:left-[55%]
                w-[32%]
                aspect-square
                rounded-xl
                overflow-hidden
                border-[5px]
                border-[#fff7f9]
                shadow-[0_18px_40px_rgba(59,32,40,0.22)]
                z-10
                group
              "
            >

              <img
                src="/images/contact/contact-small.jpg"
                alt="Women World beauty"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

            </motion.div>

          </motion.div>


          {/* ================= RIGHT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Small Label */}
            <p className="
              text-[#c2185b]
              text-[10px]
              uppercase
              tracking-[0.3em]
              font-semibold
            ">
              Get In Touch
            </p>


            {/* Heading */}
            <h2 className="
              font-display
              text-4xl
              sm:text-5xl
              md:text-6xl
              text-[#3d071d]
              leading-[0.95]
              mt-3
            ">
              Let's Create
              <br />
              <span className="text-[#c2185b] italic">
                Your Beauty Moment
              </span>
            </h2>


            {/* Gold Line */}
            <div className="w-14 h-px bg-[#c9a227] mt-6" />


            <p className="
              text-sm
              md:text-base
              text-[#765963]
              leading-6
              mt-5
              max-w-md
            ">
              Have a question or want to book your next
              beauty experience? We would love to hear from you.
            </p>


            {/* Contact Details */}
            <div className="space-y-5 mt-7">

              {/* Address */}
              <div className="flex items-start gap-4">

                <div className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#fce8ee]
                  border
                  border-[#e4c878]/50
                  flex
                  items-center
                  justify-center
                  shrink-0
                ">
                  <MapPin
                    size={17}
                    className="text-[#c2185b]"
                  />
                </div>

                <div>
                  <p className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#c9a227]
                    font-semibold
                  ">
                    Visit Us
                  </p>

                  <p className="
                    text-sm
                    text-[#3d071d]
                    leading-5
                    mt-1
                  ">
                    123 Luxury Avenue,
                    <br />
                    Varanasi, Uttar Pradesh
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-start gap-4">

                <div className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#fce8ee]
                  border
                  border-[#e4c878]/50
                  flex
                  items-center
                  justify-center
                  shrink-0
                ">
                  <Phone
                    size={17}
                    className="text-[#c2185b]"
                  />
                </div>

                <div>
                  <p className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#c9a227]
                    font-semibold
                  ">
                    Call Us
                  </p>

                  <p className="
                    text-sm
                    text-[#3d071d]
                    mt-1
                  ">
                    +91 98765 43210
                  </p>
                </div>

              </div>


              {/* Email */}
              <div className="flex items-start gap-4">

                <div className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#fce8ee]
                  border
                  border-[#e4c878]/50
                  flex
                  items-center
                  justify-center
                  shrink-0
                ">
                  <Mail
                    size={17}
                    className="text-[#c2185b]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#c9a227]
                    font-semibold
                  ">
                    Email Us
                  </p>

                  <p className="
                    text-sm
                    text-[#3d071d]
                    mt-1
                    break-all
                  ">
                    hello@womenworldbeauty.com
                  </p>
                </div>

              </div>

            </div>


            {/* Button */}
            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                mt-7
                px-6
                py-3
                rounded-lg
                bg-[#3d071d]
                border
                border-[#e4c878]
                text-white
                text-[10px]
                uppercase
                tracking-[0.2em]
                font-semibold
                hover:bg-[#c2185b]
                transition-all
                duration-300
              "
            >
              Contact Us

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

          </motion.div>

        </div>

      </div>
    </section>
  );
}