
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // WhatsApp number without + or spaces
  const whatsappNumber = "91 9839408887";

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    if (!message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (message.trim().length < 5) {
      newErrors.message = "Message must contain at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    // Emoji characters — written literally so they render
    // reliably on WhatsApp after URL encoding
    const flower = "🌸";
    const sparkles = "✨";
    const heart = "💕";
    const person = "👤";
    const messageIcon = "💬";
    const pinkHeart = "💖";

    const messageLines = [
      `Hello Radiant Glow ${flower}${sparkles}`,
      "",

      `${person}  Name`,
      name.trim(),
      "",
      `${messageIcon}  Message`,
      message.trim(),
      "",
      "━━━━━━━━━━━━━━━━━━━━",
      `Thank you! ${pinkHeart}${sparkles}`,
    ];

    const whatsappMessage = messageLines.join("\n");

    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    // Reset form
    setName("");
    setMessage("");
    setErrors({});
  };

  return (
    <section className="relative py-10 md:py-14 bg-[#fff7f9] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#e91e63]/10 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-[#c9a227]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* =======================================================
            MAIN CONTACT SECTION
        ======================================================== */}

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
                alt="Radiant Glow beauty"
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
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#3d071d]/35
                  via-transparent
                  to-transparent
                "
              />

              {/* Gold corner decoration */}
              <div
                className="
                  absolute
                  top-5
                  left-5
                  w-12
                  h-12
                  border-l
                  border-t
                  border-[#e4c878]
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  w-12
                  h-12
                  border-r
                  border-b
                  border-[#e4c878]
                "
              />
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
                alt="Radiant Glow beauty"
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
            {/* Small Label — now in big font */}
            <p
              className="
                font-display
                text-[#c2185b]
                text-3xl
                sm:text-4xl
                md:text-5xl
                tracking-tight
                font-semibold
              "
            >
              Get In Touch
            </p>

            {/* Heading */}
            <h2
              className="
                font-display
                text-4xl
                sm:text-5xl
                md:text-6xl
                text-[#3d071d]
                leading-[0.95]
                mt-3
              "
            >
              Let's Create
              <br />
              <span className="text-[#c2185b] italic">
                Your Beauty Moment
              </span>
            </h2>

            {/* Gold Line */}
            <div className="w-14 h-px bg-[#c9a227] mt-6" />

            <p
              className="
                text-sm
                md:text-base
                text-[#765963]
                leading-6
                mt-5
                max-w-md
              "
            >
              Have a question or want to book your next beauty experience?
              We would love to hear from you.
            </p>

            {/* ================= CONTACT DETAILS ================= */}

            <div className="space-y-5 mt-7">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="
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
                  "
                >
                  <MapPin size={17} className="text-[#c2185b]" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#c9a227]
                      font-semibold
                    "
                  >
                    Visit Us
                  </p>

                  
                  <p className="text-xs font-semibold text-[#3d071d]">
                    Radiant Glow
                  </p>

                  <p className="text-[10px] text-[#765963]">
                    Near Lanka Pragya Hospital
                   <br />
                    Varanasi, Uttar Pradesh
                  </p>
                
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="
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
                  "
                >
                  <Phone size={17} className="text-[#c2185b]" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#c9a227]
                      font-semibold
                    "
                  >
                    Call Us
                  </p>

                  <p className="text-sm text-[#3d071d] mt-1">
                    +91 6386022738
                  </p>
                </div>
              </div>

              {/* Email */}
             
            </div>

            {/* ================= WHATSAPP FORM ================= */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="
                mt-8
                p-5
                rounded-2xl
                bg-white/80
                border
                border-[#e4c878]/40
                shadow-[0_12px_35px_rgba(59,32,40,0.08)]
                max-w-lg
              "
            >
              {/* Form Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-[#fce8ee]
                    border
                    border-[#e4c878]/50
                    flex
                    items-center
                    justify-center
                  "
                >
                  <MessageCircle
                    size={18}
                    className="text-[#c2185b]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#3d071d]">
                    Message Us on WhatsApp
                  </p>

                  <p className="text-[11px] text-[#765963] mt-0.5">
                    Send us your enquiry directly
                  </p>
                </div>
              </div>

              <form onSubmit={handleWhatsApp} className="space-y-3">
                {/* Name */}
                <div>
                  <label
                    className="
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-[#c9a227]
                      font-semibold
                      mb-1.5
                    "
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    placeholder="Enter your name"
                    className={`
                      w-full
                      px-4
                      py-3
                      rounded-lg
                      border
                      bg-[#fffafb]
                      text-sm
                      text-[#3d071d]
                      placeholder:text-[#aa8f97]
                      outline-none
                      transition-all
                      ${
                        errors.name
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                          : "border-[#ead8dc] focus:border-[#c2185b] focus:ring-2 focus:ring-[#c2185b]/10"
                      }
                    `}
                  />

                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    className="
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-[#c9a227]
                      font-semibold
                      mb-1.5
                    "
                  >
                    Your Message
                  </label>

                  <textarea
                    rows="3"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setErrors((prev) => ({ ...prev, message: "" }));
                    }}
                    placeholder="How can we help you?"
                    className={`
                      w-full
                      px-4
                      py-3
                      rounded-lg
                      border
                      bg-[#fffafb]
                      text-sm
                      text-[#3d071d]
                      placeholder:text-[#aa8f97]
                      outline-none
                      resize-none
                      transition-all
                      ${
                        errors.message
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                          : "border-[#ead8dc] focus:border-[#c2185b] focus:ring-2 focus:ring-[#c2185b]/10"
                      }
                    `}
                  />

                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* WhatsApp Button */}
                <button
                  type="submit"
                  className="
                    group
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-5
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
                    cursor-pointer
                  "
                >
                  <MessageCircle size={16} />

                  Send on WhatsApp

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </button>
              </form>
            </motion.div>

            {/* ================= ACTION BUTTONS ================= */}

            <div className="flex flex-wrap items-center gap-4 mt-5">

              {/* Contact Us Button */}
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-lg
                  bg-transparent
                  border
                  border-[#3d071d]
                  text-[#3d071d]
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                  hover:bg-[#3d071d]
                  hover:text-white
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

              {/* Book Appointment Button */}
              <Link
                to="/book-services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-lg
                  bg-[#c2185b]
                  border
                  border-[#c2185b]
                  text-white
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                  hover:bg-[#3d071d]
                  hover:border-[#3d071d]
                  transition-all
                  duration-300
                  shadow-[0_10px_25px_rgba(194,24,91,0.25)]
                "
              >
                <CalendarCheck size={15} />

                Book Appointment

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

            </div>
          </motion.div>
        </div>

        {/* =======================================================
            MAP SECTION
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 md:mt-20"
        >
          {/* Map Heading */}
          <div className="text-center mb-7">
            <p
              className="
                text-[#c2185b]
                text-[10px]
                uppercase
                tracking-[0.3em]
                font-semibold
              "
            >
              Find Us
            </p>

            <h3
              className="
                font-display
                text-3xl
                sm:text-4xl
                md:text-5xl
                text-[#3d071d]
                mt-2
              "
            >
              Visit Our <span className="text-[#c2185b] italic">Salon</span>
            </h3>

            <div className="w-12 h-px bg-[#c9a227] mx-auto mt-4" />

            <p className="text-sm text-[#765963] mt-4">
              Come visit Radiant Glow and experience beauty in a luxurious
              atmosphere.
            </p>
          </div>

          {/* Map */}
          <div
            className="
              relative
              w-full
              h-[300px]
              sm:h-[380px]
              md:h-[450px]
              rounded-2xl
              overflow-hidden
              border
              border-[#e4c878]/50
              shadow-[0_20px_50px_rgba(59,32,40,0.12)]
            "
          >
            <iframe
              title="Radiant Glow Salon Location"
              src="https://www.google.com/maps?q=Women's+World+Salon,+1st+Floor,+BHU+Lanka+Road,+Behind+V2+Building,+Lanka,+Varanasi,+Uttar+Pradesh+221005&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Overlay Label */}
            <div
              className="
                absolute
                left-4
                bottom-4
                sm:left-6
                sm:bottom-6
                bg-white/95
                backdrop-blur-md
                rounded-xl
                px-4
                py-3
                shadow-[0_10px_25px_rgba(59,32,40,0.15)]
                border
                border-[#e4c878]/40
              "
            >
              <div className="flex items-center gap-2">
                <div
                  className="
                    w-8
                    h-8
                    rounded-full
                    bg-[#fce8ee]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <MapPin size={15} className="text-[#c2185b]" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#3d071d]">
                    Radiant Glow
                  </p>

                  <p className="text-[10px] text-[#765963]">
                    Near Lanka Pragya Hospital
                   <br />
                    Varanasi, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
