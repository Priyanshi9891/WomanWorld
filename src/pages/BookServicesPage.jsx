import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
  Search,
  MapPin,
  Clock,
  ChevronRight,
  Check,
  ArrowLeft,
  CalendarDays,
} from "lucide-react";

import { services } from "../data/services";
import { branches } from "../data/branches";

export default function BookServicesPage() {
  const [step, setStep] = useState(1);

  const [selectedService, setSelectedService] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const [search, setSearch] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  /* =========================================================
     FILTER SERVICES
  ========================================================= */

  const filteredServices = services.filter((service) =>
    service.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* =========================================================
     SELECT SERVICE
  ========================================================= */

  const handleServiceSelect = (service) => {
    setSelectedService(service);

    // Automatically move to branch selection
    setTimeout(() => {
      setStep(2);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 250);
  };

  /* =========================================================
     SELECT BRANCH
  ========================================================= */

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);

    // Automatically move to details
    setTimeout(() => {
      setStep(3);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 250);
  };

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =========================================================
     BACK BUTTON
  ========================================================= */

  const goBack = () => {
    if (step === 2) {
      setStep(1);
    }

    if (step === 3) {
      setStep(2);
    }

    if (step === 4) {
      setStep(3);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setStep(4);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     BOOK AGAIN
  ========================================================= */

  const bookAgain = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedBranch(null);
    setSearch("");

    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      message: "",
    });

    setSubmitted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen bg-[#fff7f9]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <section className="bg-[#fff7f9] pt-10 pb-6 md:pt-14 md:pb-8">

          <div className="max-w-6xl mx-auto px-5">

            <div className="text-center">

              <p
                className="text-[#d4af37] text-3xl md:text-4xl"
                style={{
                  fontFamily:
                    "'Brush Script MT', 'Segoe Script', cursive",
                }}
              >
                Reserve Your Slot
              </p>

              <h1
                className="
                  text-4xl
                  md:text-6xl
                  text-[#3d071d]
                  font-light
                  mt-1
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Book an{" "}
                <span className="italic text-[#c2185b]">
                  Appointment
                </span>
              </h1>

              <p className="text-[#3d071d]/60 text-sm mt-3">
                Your beauty experience is just a few steps away.
              </p>

            </div>

          </div>
        </section>

        {/* =====================================================
            STEP INDICATOR
        ====================================================== */}

        <section className="max-w-5xl mx-auto px-5 pb-6">

          <div className="relative">

            {/* Connecting line */}

            <div
              className="
                absolute
                left-[12%]
                right-[12%]
                top-6
                h-px
                bg-[#d4af37]/30
              "
            />

            <div className="relative grid grid-cols-4">

              <Step
                number="1"
                label="SERVICE"
                active={step >= 1}
                completed={step > 1}
              />

              <Step
                number="2"
                label="BRANCH"
                active={step >= 2}
                completed={step > 2}
              />

              <Step
                number="3"
                label="DETAILS"
                active={step >= 3}
                completed={step > 3}
              />

              <Step
                number="4"
                label="CONFIRM"
                active={step >= 4}
                completed={false}
              />

            </div>

          </div>
        </section>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <section className="max-w-5xl mx-auto px-5 pb-16">

          <AnimatePresence mode="wait">

            {/* =================================================
                STEP 1 - SERVICE
            ================================================== */}

            {step === 1 && (
              <motion.div
                key="service"
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                <div className="mb-5">

                  <p
                    className="text-[#d4af37] text-2xl"
                    style={{
                      fontFamily:
                        "'Brush Script MT', 'Segoe Script', cursive",
                    }}
                  >
                    Step One
                  </p>

                  <h2
                    className="
                      text-3xl
                      md:text-4xl
                      text-[#3d071d]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Choose Your Service
                  </h2>

                </div>

                {/* Search */}

                <div
                  className="
                    relative
                    bg-white
                    border
                    border-[#d4af37]/30
                    rounded-xl
                    mb-5
                  "
                >

                  <Search
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#c2185b]
                    "
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search a service..."
                    className="
                      w-full
                      py-3.5
                      pl-11
                      pr-4
                      bg-transparent
                      outline-none
                      text-sm
                      text-[#3d071d]
                    "
                  />

                </div>

                {/* Services */}

                <div
                  className="
                    grid
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-3
                  "
                >

                  {filteredServices.map(
                    (service, index) => {

                      const selected =
                        selectedService?.id ===
                        service.id;

                      return (
                        <motion.button
                          key={service.id}
                          type="button"
                          onClick={() =>
                            handleServiceSelect(
                              service
                            )
                          }
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay:
                              index * 0.025,
                          }}
                          whileHover={{
                            y: -3,
                          }}
                          className={`
                            relative
                            text-left
                            bg-white
                            rounded-xl
                            border
                            px-4
                            py-3.5
                            min-h-[105px]
                            transition-all
                            ${
                              selected
                                ? "border-[#d4af37] ring-2 ring-[#d4af37]/20"
                                : "border-[#3d071d]/10 hover:border-[#d4af37]"
                            }
                          `}
                        >

                          {/* Selected */}

                          {selected && (
                            <span
                              className="
                                absolute
                                top-2
                                right-2
                                w-5
                                h-5
                                rounded-full
                                bg-[#c2185b]
                                text-white
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <Check size={12} />
                            </span>
                          )}

                          {/* Service Name */}

                          <h3
                            className="
                              text-base
                              md:text-lg
                              leading-tight
                              text-[#3d071d]
                              pr-5
                            "
                            style={{
                              fontFamily:
                                "'Cormorant Garamond', Georgia, serif",
                            }}
                          >
                            {service.title}
                          </h3>

                          {/* Price */}

                          <div
                            className="
                              mt-3
                              flex
                              items-center
                              justify-between
                            "
                          >

                            <span
                              className="
                                text-[9px]
                                uppercase
                                tracking-widest
                                text-[#3d071d]/40
                              "
                            >
                              Price
                            </span>

                            <span
                              className="
                                text-sm
                                font-semibold
                                text-[#c2185b]
                              "
                            >
                              ₹{formatPrice(service.price)}
                            </span>

                          </div>

                        </motion.button>
                      );
                    }
                  )}

                </div>

                {filteredServices.length === 0 && (
                  <div className="text-center py-12 text-[#3d071d]/60">
                    No service found.
                  </div>
                )}

              </motion.div>
            )}

            {/* =================================================
                STEP 2 - BRANCH
            ================================================== */}

            {step === 2 && (
              <motion.div
                key="branch"
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                {/* Back */}

                <BackButton onClick={goBack} />

                {/* Selected Service */}

                <div
                  className="
                    mb-6
                    bg-[#3d071d]
                    rounded-2xl
                    px-5
                    py-4
                    text-white
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  <div>

                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-widest
                        text-[#d4af37]
                      "
                    >
                      Selected Service
                    </p>

                    <p
                      className="
                        text-xl
                        mt-1
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      {selectedService?.title}
                    </p>

                  </div>

                  <span className="text-[#d4af37] font-semibold">
                    ₹{formatPrice(
                      selectedService?.price
                    )}
                  </span>

                </div>

                {/* Heading */}

                <div className="mb-5">

                  <p
                    className="text-[#d4af37] text-2xl"
                    style={{
                      fontFamily:
                        "'Brush Script MT', 'Segoe Script', cursive",
                    }}
                  >
                    Step Two
                  </p>

                  <h2
                    className="
                      text-3xl
                      md:text-4xl
                      text-[#3d071d]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Choose Your Branch
                  </h2>

                  <p className="text-sm text-[#3d071d]/55 mt-1">
                    Select the Women World location you prefer.
                  </p>

                </div>

                {/* Branch Cards */}

                <div className="grid md:grid-cols-2 gap-4">

                  {branches.map((branch) => {

                    const selected =
                      selectedBranch?.id ===
                      branch.id;

                    return (
                      <motion.button
                        key={branch.id}
                        type="button"
                        onClick={() =>
                          handleBranchSelect(
                            branch
                          )
                        }
                        whileHover={{
                          y: -4,
                        }}
                        className={`
                          relative
                          text-left
                          bg-white
                          border
                          rounded-2xl
                          p-5
                          transition-all
                          ${
                            selected
                              ? "border-[#d4af37] ring-2 ring-[#d4af37]/20"
                              : "border-[#3d071d]/10 hover:border-[#d4af37]"
                          }
                        `}
                      >

                        {/* Check */}

                        {selected && (
                          <div
                            className="
                              absolute
                              top-4
                              right-4
                              w-7
                              h-7
                              rounded-full
                              bg-[#c2185b]
                              text-white
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <Check size={14} />
                          </div>
                        )}

                        {/* Name */}

                        <h3
                          className="
                            text-2xl
                            text-[#3d071d]
                            pr-10
                          "
                          style={{
                            fontFamily:
                              "'Cormorant Garamond', Georgia, serif",
                          }}
                        >
                          {branch.name}
                        </h3>

                        <div className="w-10 h-[2px] bg-[#d4af37] my-4" />

                        {/* Address */}

                        <div className="flex gap-3">

                          <MapPin
                            size={17}
                            className="
                              text-[#c2185b]
                              flex-none
                              mt-0.5
                            "
                          />

                          <p className="text-sm text-[#3d071d]/70 leading-relaxed">
                            {branch.address}
                          </p>

                        </div>

                        {/* Hours */}

                        <div className="flex gap-3 mt-4">

                          <Clock
                            size={17}
                            className="
                              text-[#c2185b]
                              flex-none
                              mt-0.5
                            "
                          />

                          <div>

                            <p className="text-[9px] uppercase tracking-widest text-[#3d071d]/40">
                              Opening Hours
                            </p>

                            <p className="text-sm text-[#3d071d] mt-1">
                              {branch.hours}
                            </p>

                          </div>

                        </div>

                        {/* Choose */}

                        <div
                          className="
                            mt-5
                            pt-4
                            border-t
                            border-[#3d071d]/10
                            flex
                            items-center
                            justify-between
                            text-[10px]
                            uppercase
                            tracking-widest
                            text-[#c2185b]
                          "
                        >

                          <span>
                            Select Branch
                          </span>

                          <ChevronRight size={15} />

                        </div>

                      </motion.button>
                    );
                  })}

                </div>

              </motion.div>
            )}

            {/* =================================================
                STEP 3 - DETAILS
            ================================================== */}

            {step === 3 && (
              <motion.div
                key="details"
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                {/* Back */}

                <BackButton onClick={goBack} />

                {/* Summary */}

                <div
                  className="
                    grid
                    md:grid-cols-2
                    gap-3
                    mb-6
                  "
                >

                  {/* Service */}

                  <div
                    className="
                      bg-[#3d071d]
                      text-white
                      rounded-xl
                      p-4
                    "
                  >

                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-widest
                        text-[#d4af37]
                      "
                    >
                      Service
                    </p>

                    <div className="flex justify-between items-center mt-1">

                      <p
                        className="text-lg"
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', Georgia, serif",
                        }}
                      >
                        {selectedService?.title}
                      </p>

                      <span className="text-[#d4af37] text-sm font-semibold">
                        ₹{formatPrice(
                          selectedService?.price
                        )}
                      </span>

                    </div>

                  </div>

                  {/* Branch */}

                  <div
                    className="
                      bg-[#3d071d]
                      text-white
                      rounded-xl
                      p-4
                    "
                  >

                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-widest
                        text-[#d4af37]
                      "
                    >
                      Branch
                    </p>

                    <p
                      className="text-lg mt-1"
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      {selectedBranch?.name}
                    </p>

                  </div>

                </div>

                {/* Heading */}

                <div className="mb-5">

                  <p
                    className="text-[#d4af37] text-2xl"
                    style={{
                      fontFamily:
                        "'Brush Script MT', 'Segoe Script', cursive",
                    }}
                  >
                    Step Three
                  </p>

                  <h2
                    className="
                      text-3xl
                      md:text-4xl
                      text-[#3d071d]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    Your Details
                  </h2>

                </div>

                {/* Form */}

                <form
                  onSubmit={handleSubmit}
                  className="
                    bg-white
                    border
                    border-[#3d071d]/10
                    rounded-2xl
                    p-5
                    md:p-7
                    space-y-5
                  "
                >

                  {/* Name + Phone */}

                  <div className="grid md:grid-cols-2 gap-4">

                    <FormInput
                      label="Full Name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <FormInput
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="+91"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                  </div>

                  {/* Email */}

                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {/* Date + Time */}

                  <div className="grid md:grid-cols-2 gap-4">

                    {/* Date */}

                    <div>

                      <label
                        className="
                          text-[10px]
                          uppercase
                          tracking-widest
                          text-[#3d071d]/60
                        "
                      >
                        Preferred Date
                      </label>

                      <div className="relative">

                        <CalendarDays
                          size={17}
                          className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-[#c2185b]
                            pointer-events-none
                          "
                        />

                        <input
                          required
                          name="date"
                          type="date"
                          min={
                            new Date()
                              .toISOString()
                              .split("T")[0]
                          }
                          value={formData.date}
                          onChange={handleChange}
                          className="
                            w-full
                            mt-2
                            py-3.5
                            pl-11
                            pr-4
                            rounded-xl
                            bg-[#fff7f9]
                            border
                            border-[#3d071d]/10
                            outline-none
                            focus:border-[#d4af37]
                            text-sm
                          "
                        />

                      </div>

                    </div>

                    {/* Time */}

                    <div>

                      <label
                        className="
                          text-[10px]
                          uppercase
                          tracking-widest
                          text-[#3d071d]/60
                        "
                      >
                        Preferred Time
                      </label>

                      <input
                        required
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="
                          w-full
                          mt-2
                          py-3.5
                          px-4
                          rounded-xl
                          bg-[#fff7f9]
                          border
                          border-[#3d071d]/10
                          outline-none
                          focus:border-[#d4af37]
                          text-sm
                        "
                      />

                    </div>

                  </div>

                  {/* Message */}

                  <div>

                    <label
                      className="
                        text-[10px]
                        uppercase
                        tracking-widest
                        text-[#3d071d]/60
                      "
                    >
                      Additional Message
                    </label>

                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Anything you would like us to know..."
                      className="
                        w-full
                        mt-2
                        py-3.5
                        px-4
                        rounded-xl
                        bg-[#fff7f9]
                        border
                        border-[#3d071d]/10
                        outline-none
                        focus:border-[#d4af37]
                        text-sm
                        resize-none
                      "
                    />

                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="
                      w-full
                      py-4
                      rounded-xl
                      bg-[#3d071d]
                      text-white
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      font-semibold
                      hover:bg-[#c2185b]
                      transition
                      shadow-lg
                    "
                  >
                    Confirm Appointment
                  </button>

                  <p className="text-center text-[9px] text-[#3d071d]/40">
                    Frontend demonstration — booking data
                    is not connected to a backend.
                  </p>

                </form>

              </motion.div>
            )}

            {/* =================================================
                STEP 4 - CONFIRMATION
            ================================================== */}

            {step === 4 && submitted && (
              <motion.div
                key="confirmation"
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  bg-white
                  border
                  border-[#d4af37]/30
                  rounded-3xl
                  p-7
                  md:p-12
                  text-center
                  shadow-[0_20px_60px_rgba(61,7,29,0.08)]
                "
              >

                {/* Success */}

                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-[#3d071d]
                    text-[#d4af37]
                    mx-auto
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Check size={34} />
                </div>

                <p
                  className="
                    text-[#d4af37]
                    text-3xl
                    mt-6
                  "
                  style={{
                    fontFamily:
                      "'Brush Script MT', 'Segoe Script', cursive",
                  }}
                >
                  Your Moment Is Reserved
                </p>

                <h2
                  className="
                    text-4xl
                    md:text-5xl
                    text-[#3d071d]
                    mt-1
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  Appointment Request Received
                </h2>

                <p className="text-sm text-[#3d071d]/60 mt-3 max-w-md mx-auto">
                  Thank you for choosing Women World Beauty.
                  We look forward to welcoming you.
                </p>

                {/* Summary */}

                <div
                  className="
                    max-w-md
                    mx-auto
                    mt-8
                    bg-[#fff7f9]
                    border
                    border-[#3d071d]/10
                    rounded-2xl
                    p-5
                    text-left
                  "
                >

                  <SummaryRow
                    label="Service"
                    value={
                      selectedService?.title
                    }
                  />

                  <SummaryRow
                    label="Price"
                    value={`₹${formatPrice(
                      selectedService?.price
                    )}`}
                  />

                  <SummaryRow
                    label="Branch"
                    value={
                      selectedBranch?.name
                    }
                  />

                  <SummaryRow
                    label="Date"
                    value={formData.date}
                  />

                  <SummaryRow
                    label="Time"
                    value={formData.time}
                    last
                  />

                </div>

                <button
                  onClick={bookAgain}
                  className="
                    mt-7
                    px-8
                    py-3.5
                    rounded-full
                    bg-[#3d071d]
                    text-white
                    text-xs
                    uppercase
                    tracking-widest
                    hover:bg-[#c2185b]
                    transition
                  "
                >
                  Book Another Appointment
                </button>

              </motion.div>
            )}

          </AnimatePresence>

        </section>
      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   STEP COMPONENT
========================================================= */

function Step({
  number,
  label,
  active,
  completed,
}) {
  return (
    <div className="flex flex-col items-center">

      <div
        className={`
          relative
          z-10
          w-12
          h-12
          rounded-full
          flex
          items-center
          justify-center
          text-sm
          font-medium
          transition-all
          ${
            completed
              ? "bg-[#c2185b] text-white"
              : active
              ? "bg-[#3d071d] text-[#d4af37] ring-4 ring-[#d4af37]/15"
              : "bg-[#fff7f9] border border-[#d4af37]/40 text-[#3d071d]/50"
          }
        `}
      >
        {completed ? (
          <Check size={16} />
        ) : (
          number
        )}
      </div>

      <span
        className={`
          mt-2
          text-[9px]
          md:text-[10px]
          tracking-[0.14em]
          ${
            active
              ? "text-[#3d071d]"
              : "text-[#3d071d]/40"
          }
        `}
      >
        {label}
      </span>

    </div>
  );
}

/* =========================================================
   BACK BUTTON
========================================================= */

function BackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex
        items-center
        gap-2
        mb-5
        text-[#3d071d]/60
        hover:text-[#c2185b]
        text-xs
        uppercase
        tracking-widest
        transition
      "
    >
      <ArrowLeft size={15} />
      Back
    </button>
  );
}

/* =========================================================
   FORM INPUT
========================================================= */

function FormInput({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>

      <label
        className="
          text-[10px]
          uppercase
          tracking-widest
          text-[#3d071d]/60
        "
      >
        {label}
      </label>

      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          mt-2
          py-3.5
          px-4
          rounded-xl
          bg-[#fff7f9]
          border
          border-[#3d071d]/10
          outline-none
          focus:border-[#d4af37]
          text-sm
          text-[#3d071d]
          placeholder:text-[#3d071d]/35
          transition
        "
      />

    </div>
  );
}

/* =========================================================
   SUMMARY ROW
========================================================= */

function SummaryRow({
  label,
  value,
  last = false,
}) {
  return (
    <div
      className={`
        flex
        justify-between
        gap-4
        py-3
        ${
          !last
            ? "border-b border-[#3d071d]/10"
            : ""
        }
      `}
    >

      <span
        className="
          text-[9px]
          uppercase
          tracking-widest
          text-[#3d071d]/50
        "
      >
        {label}
      </span>

      <span
        className="
          text-sm
          text-[#3d071d]
          text-right
          font-medium
        "
      >
        {value}
      </span>

    </div>
  );
}

/* =========================================================
   PRICE FORMATTER
========================================================= */

function formatPrice(price) {
  if (
    price === undefined ||
    price === null ||
    price === ""
  ) {
    return "";
  }

  return String(price)
    .replace(/₹/g, "")
    .replace(/\/-/g, "")
    .trim();
}