import React, { useState, useRef, useEffect } from "react";

/**
 * ChatWidget — Radiant Glow Salon and Academy
 * -------------------------------------------------
 * Front-end-only FAQ chatbot.
 * No backend, no AI API, no external libraries.
 */

// =====================================================
// 1. SALON DETAILS
// =====================================================

const SALON_INFO = {
  name: "Radiant Glow and Academy",

  greeting:
    "Hi! I'm the Radiant Glow assistant. Ask me about services, timings, courses or booking.",
};

// =====================================================
// 2. FAQ DATA
// =====================================================


const FAQS = [
  // =====================================================
  // SERVICES
  // =====================================================
  {
    id: "services",
    label: "Services & Prices",
    keywords: [
      "service",
      "services",
      "salon service",
      "beauty service",
      "price",
      "prices",
      "cost",
      "rate",
      "facial",
      "haircut",
      "hair",
      "bridal",
      "makeup",
      "spa",
      "skincare",
      "skin",
      "beauty",
      "waxing",
      "manicure",
      "pedicure",
      "threading",
      "massage",
    ],
    answer:
      "Radiant Glow Salon & Academy offers a wide range of beauty and salon services including haircuts and styling, facials, bridal makeup, makeup, spa treatments, skincare, waxing, manicure, pedicure, threading and massage. Please visit our Services page for the latest service details and prices.",
  },


  // =====================================================
  // TIMINGS
  // =====================================================
  {
    id: "timings",
    label: "Timings",
    keywords: [
      "time",
      "timing",
      "timings",
      "open",
      "close",
      "hours",
      "today",
      "when open",
      "when close",
    ],
    answer:
      "Radiant Glow  Salon & Academy is open every day from 10:00 AM to 8:00 PM. Timings may differ on major public holidays.",
  },


  // =====================================================
  // BRANCHES / LOCATION
  // =====================================================
  {
    id: "location",
    label: "Location & Branches",
    keywords: [
      "location",
      "address",
      "where",
      "map",
      "direction",
      "directions",
      "branch",
      "branches",
      "varanasi",
      "city centre",
      "city center",
    ],
    answer:
      "We currently have two branches in Varanasi, Uttar Pradesh: Radiant Glow Varanasi and Radiant Glow City Centre.",
  },


  // =====================================================
  // VARANASI BRANCH
  // =====================================================
  {
    id: "varanasi_branch",
    label: "Varanasi Branch",
    keywords: [
      "varanasi branch",
      "Radiant Glow varanasi",
      "Radiant Glow varanasi",
      "varanasi address",
      "varanasi phone",
      "varanasi number",
      "varanasi contact",
    ],
    answer:
      "Radiant Glow Varanasi is located at 123 Luxury Avenue, Varanasi, Uttar Pradesh. Phone: +91 98765 43210. Opening hours: 10:00 AM – 8:00 PM.",
  },


  // =====================================================
  // CITY CENTRE BRANCH
  // =====================================================
  {
    id: "city_centre_branch",
    label: "City Centre Branch",
    keywords: [
      "city centre branch",
      "city center branch",
      "Radiant Glow city centre",
      "women's world city centre",
      "city centre address",
      "city centre phone",
      "city centre number",
      "city centre contact",
    ],
    answer:
      "Radiant Glow City Centre is located at 45 Beauty Street, Varanasi, Uttar Pradesh. Phone: +91 98765 43211. Opening hours: 10:00 AM – 8:00 PM.",
  },


  // =====================================================
  // CONTACT
  // =====================================================
  {
    id: "contact",
    label: "Contact",
    keywords: [
      "contact",
      "phone",
      "number",
      "call",
      "whatsapp",
      "email",
      "reach",
      "contact salon",
      "contact Radiant Glow",
    ],
    answer:
      "You can contact Radiant Glow Salon & Academy by phone or WhatsApp. Radiant Glow Varanasi: +91 98765 43210. Radiant Glow City Centre: +91 98765 43211.",
  },


  // =====================================================
  // BOOKING
  // =====================================================
  {
    id: "booking",
    label: "Book an Appointment",
    keywords: [
      "book",
      "booking",
      "appointment",
      "slot",
      "reserve",
      "schedule",
      "book appointment",
      "make appointment",
      "appointment booking",
    ],
    answer:
      "You can book an appointment using the 'Book Now' button on our website. Select your service, choose a branch, enter your details and confirm your booking.",
  },


  // =====================================================
  // ACADEMY
  // =====================================================
  {
    id: "academy",
    label: "Academy Courses",
    keywords: [
      "academy",
      "course",
      "courses",
      "class",
      "training",
      "certificate",
      "learn",
      "diploma",
      "beauty course",
      "professional course",
      "study",
    ],
    answer:
      "Radiant Glow Academy offers professional courses in hair, beauty, makeup, skin and beauty therapy. Courses include practical training and certification. Available courses include Hair Chemical, Beauty, Make Up, and Skin & Beauty courses.",
  },


  // =====================================================
  // HAIR CHEMICAL BASIC
  // =====================================================
  {
    id: "hair_chemical_basic",
    label: "Hair Chemical Basic Course",
    keywords: [
      "hair chemical basic",
      "basic hair chemical",
      "hair chemical course basic",
      "basic hair course",
      "hair chemical price",
      "hair chemical fees",
      "hair chemical fee",
    ],
    answer:
      "Hair Chemical Course – Basic Course: Duration: 3 to 6 Months. Price: ₹39,999 + GST. Topics include Hair Cut (4 Types), Shampoo Application, Deep Conditioning, Basic Hair Spa, Basic Global Coloring, Cream Application, Hair Ironing, Hair Tongs, Hair Crimping and Hair Blow Dry.",
  },


  // =====================================================
  // HAIR CHEMICAL ADVANCE
  // =====================================================
  {
    id: "hair_chemical_advance",
    label: "Hair Chemical Advance Course",
    keywords: [
      "hair chemical advance",
      "advanced hair chemical",
      "advance hair course",
      "hair chemical advanced course",
      "advanced hair course price",
      "advanced hair course fees",
      "hair chemical 49999",
    ],
    answer:
      "Hair Chemical Course – Advance Course: Duration: 3 to 6 Months. Price: ₹49,999 + GST. Topics include advanced hair cutting, color wheel knowledge, global color, fashion shades, pre-lightening, highlights, chunks, ombre, balayage, straightening, keratin, styling, home care and client consultation.",
  },


  // =====================================================
  // BEAUTY SELF COURSE
  // =====================================================
  {
    id: "beauty_self_course",
    label: "Beauty Self Course",
    keywords: [
      "beauty self course",
      "self beauty course",
      "beauty self",
      "beauty course self",
      "self course price",
      "self course fees",
    ],
    answer:
      "Beauty Course – Self Course: Duration: 3 Months. Price: ₹29,999 + GST. Topics include Manicure, Pedicure, Threading, Basic Facial, Basic Hair Cutting and Basic Waxing.",
  },


  // =====================================================
  // BEAUTY BASIC COURSE
  // =====================================================
  {
    id: "beauty_basic_course",
    label: "Beauty Basic Course",
    keywords: [
      "beauty basic course",
      "basic beauty course",
      "beauty course basic",
      "beauty basic fees",
      "beauty basic price",
    ],
    answer:
      "Beauty Course – Basic Course: Duration: 6 to 12 Months. Price: ₹39,999 + GST. Topics include Threading, Hair Cutting, Waxing, Cleanup, D-Tan, Facial, Manicure, Pedicure, Head Oil Massage, Hair Spa, Body Massage, Bleach, Body Bleach and Party Make-up.",
  },


  // =====================================================
  // MAKEUP COURSE
  // =====================================================
  {
    id: "makeup_course",
    label: "Make Up Course",
    keywords: [
      "makeup course",
      "make up course",
      "makeup training",
      "makeup class",
      "makeup fees",
      "makeup price",
      "bridal makeup course",
      "make up training",
    ],
    answer:
      "Make Up Course: Duration: 3 to 6 Months. Price: ₹39,999 + GST. Topics include Light Makeup, Evening Makeup, Glossy Makeup, Smokey Makeup, Shimmery Makeup, Glitter Makeup, Foundation Blending Theory, Lip Contouring, 5 Hair Styles, Party Makeup, Bridal Makeup, Classic Makeup and Royal Makeup.",
  },


  // =====================================================
  // SKIN & BEAUTY COURSE
  // =====================================================
  {
    id: "skin_beauty_course",
    label: "Skin & Beauty Course",
    keywords: [
      "skin beauty course",
      "skin and beauty course",
      "skin course",
      "beauty skin course",
      "advanced skin course",
      "skin course fees",
      "skin course price",
    ],
    answer:
      "Skin & Beauty Course – Advance Course: Duration: 6 to 12 Months. Price: ₹39,999 + GST. Topics include Luxury Facial, Acne, Pigmentation & Tan, Gold Body Polishing, Body Anti D-Tanning, Crystal Pedicure, Crystal Manicure, Liposoluble Waxing, Face with Body Bleach, Relaxing Facial, Foot Care Treatment, Customer Counselling, Product Knowledge and All Skin Treatment.",
  },


  // =====================================================
  // EXTENSIONS
  // =====================================================
  {
    id: "extensions",
    label: "Extension Services",
    keywords: [
      "extension",
      "extensions",
      "nail extension",
      "nails extension",
      "hair extension",
      "eyelashes extension",
      "eyelash extension",
      "permanent nails",
      "permanent hair",
      "eyelashes",
    ],
    answer:
      "We offer Permanent Nails Extension, Permanent Hair Extension and Eyelashes Extension. These extension services are priced on enquiry. Please contact the salon for current pricing and availability.",
  },


  // =====================================================
  // NAIL EXTENSION
  // =====================================================
  {
    id: "nail_extension",
    label: "Permanent Nails Extension",
    keywords: [
      "permanent nails",
      "nail extension",
      "nails extension",
      "nail extensions",
    ],
    answer:
      "Permanent Nails Extension is available at Radiant Glow. The price is available on enquiry. Please contact the salon for current pricing.",
  },


  // =====================================================
  // HAIR EXTENSION
  // =====================================================
  {
    id: "hair_extension",
    label: "Permanent Hair Extension",
    keywords: [
      "permanent hair",
      "hair extension",
      "hair extensions",
    ],
    answer:
      "Permanent Hair Extension is available at Radiant Glow. The price is available on enquiry. Please contact the salon for current pricing.",
  },


  // =====================================================
  // EYELASH EXTENSION
  // =====================================================
  {
    id: "eyelash_extension",
    label: "Eyelashes Extension",
    keywords: [
      "eyelashes",
      "eyelash",
      "eyelashes extension",
      "eyelash extension",
      "lash extension",
      "lash extensions",
    ],
    answer:
      "Eyelashes Extension is available at Radiant Glow. The price is available on enquiry. Please contact the salon for current pricing.",
  },


  // =====================================================
  // PRODUCTS
  // =====================================================
  {
    id: "products",
    label: "Products",
    keywords: [
      "product",
      "products",
      "shampoo",
      "conditioner",
      "mask",
      "moisturiser",
      "moisturizer",
      "serum",
      "cream",
      "skin product",
      "hair product",
      "professional products",
    ],
    answer:
      "Radiant Glow uses and offers professional beauty and hair-care products from brands including Schwarzkopf Professional, Godrej Professional, Brillare Professional, AgeLock, O2, Jeannot Ceuticals, SHEA and Lotus Professional.",
  },


  // =====================================================
  // HAIR PRODUCTS
  // =====================================================
  {
    id: "hair_products",
    label: "Hair Care Products",
    keywords: [
      "hair products",
      "hair care products",
      "hair shampoo",
      "hair mask",
      "frizz shampoo",
      "keracare",
      "bonacure",
      "dandruff shampoo",
      "moisturising shampoo",
      "keratin treatment",
    ],
    answer:
      "Our hair-care products include BC Bonacure Frizz Away Shampoo, KeraCare Smooth Renew Mask, Eco Dandruff Shampoo, Probio Honey Moisture Mask, Heavy Moisturising Shampoo, KeraCare Smooth Renew Shampoo, 18-MEA Collagen Therapy Shampoo and Kera Smooth Keratin Treatment.",
  },


  // =====================================================
  // SKIN PRODUCTS
  // =====================================================
  {
    id: "skin_products",
    label: "Skin Care Products",
    keywords: [
      "skin products",
      "skin care products",
      "skin cream",
      "skin serum",
      "moisturiser",
      "moisturizer",
      "night cream",
      "spf",
      "brightening",
      "skin booster",
      "skin mask",
    ],
    answer:
      "Our skin-care products include Skin Brightening Moisturiser, AgeLock Meladerm SPF 30 Gel Cream, City Shield Skin Protecting Cream, Retemin Brightening Super Booster Serum, PhytoRx Whitening & Brightening Night Creme and dermoSpa Japanese Sakura Night Creme.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: BC BONACURE
  // =====================================================
  {
    id: "bc_bonacure",
    label: "BC Bonacure Frizz Away Shampoo",
    keywords: [
      "bc bonacure",
      "bonacure",
      "frizz away shampoo",
    ],
    answer:
      "BC Bonacure Frizz Away Shampoo is from Schwarzkopf Professional. It is a Hair Care product intended for coarse, unruly and frizzy hair.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: KERACARE MASK
  // =====================================================
  {
    id: "keracare_mask",
    label: "KeraCare Smooth Renew Mask",
    keywords: [
      "keracare smooth renew mask",
      "smooth renew mask",
    ],
    answer:
      "KeraCare Smooth Renew Mask is from Godrej Professional. It is intended for dry and frizzy hair and contains macadamia oil and wheat protein.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: BRILLARE
  // =====================================================
  {
    id: "brillare_moisturiser",
    label: "Skin Brightening Moisturiser",
    keywords: [
      "skin brightening moisturiser",
      "skin brightening moisturizer",
      "brillare moisturiser",
      "brillare moisturizer",
    ],
    answer:
      "Skin Brightening Moisturiser is from Brillare Professional. It is designed to brighten and hydrate with 92% natural ingredients.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: AGELOCK MASK
  // =====================================================
  {
    id: "agelock_mask",
    label: "AgeLock Oat Meal Mask",
    keywords: [
      "agelock oat meal",
      "oat meal mask",
      "oatmeal mask",
      "agelock mask",
    ],
    answer:
      "AgeLock Oat Meal Mask is a Facial Care product. It is described as a complexion booster that boosts natural glow.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: DANDRUFF
  // =====================================================
  {
    id: "dandruff_shampoo",
    label: "Eco Dandruff Shampoo",
    keywords: [
      "eco dandruff",
      "dandruff shampoo",
      "o2 shampoo",
      "o2 eco",
    ],
    answer:
      "Eco Dandruff Shampoo is from O2. It is a Hair Care product intended as an anti-dandruff shampoo that soothes a dry scalp.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: PROBIO
  // =====================================================
  {
    id: "probio_mask",
    label: "Probio Honey Moisture Mask",
    keywords: [
      "probio",
      "honey moisture mask",
      "probio honey",
    ],
    answer:
      "Probio Honey Moisture Mask is from Godrej Professional. It is intended for very dry and damaged hair and provides intense hydration.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: AGELOCK SPF
  // =====================================================
  {
    id: "agelock_spf",
    label: "AgeLock Meladerm SPF 30",
    keywords: [
      "agelock meladerm",
      "meladerm",
      "spf 30",
      "spf30",
    ],
    answer:
      "AgeLock Meladerm SPF 30 Gel Cream is a Skin Care product. It is designed to brighten and protect skin from sun damage.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: KERACARE SHAMPOO
  // =====================================================
  {
    id: "keracare_shampoo",
    label: "KeraCare Smooth Renew Shampoo",
    keywords: [
      "keracare smooth renew shampoo",
      "smooth renew shampoo",
    ],
    answer:
      "KeraCare Smooth Renew Shampoo is from Godrej Professional. It is sulphate and paraben free and intended for dry and frizzy hair.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: CITY SHIELD
  // =====================================================
  {
    id: "city_shield",
    label: "City Shield Skin Protecting Cream",
    keywords: [
      "city shield",
      "skin protecting cream",
      "jeannot city shield",
    ],
    answer:
      "City Shield Skin Protecting Cream is from Jeannot Ceuticals. It protects skin against city pollution and is intended for all skin types.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: SHEA
  // =====================================================
  {
    id: "shea_shampoo",
    label: "18-MEA Collagen Therapy Shampoo",
    keywords: [
      "18 mea",
      "18-mea",
      "collagen therapy shampoo",
      "shea shampoo",
    ],
    answer:
      "18-MEA Collagen Therapy Shampoo is from SHEA. It is intended for extreme bleach recovery and bleached or fragile hair.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: RETEMIN
  // =====================================================
  {
    id: "retemin",
    label: "Retemin Brightening Super Booster Serum",
    keywords: [
      "retemin",
      "brightening super booster",
      "booster serum",
      "lotus serum",
    ],
    answer:
      "Retemin Brightening Super Booster Serum is from Lotus Professional. It contains plant retinol and vitamin C and is designed for a brighter complexion.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: DERMA CLEAN
  // =====================================================
  {
    id: "derma_clean",
    label: "Derma Clean Rebalancing Algae Mask",
    keywords: [
      "derma clean",
      "rebalancing algae mask",
      "algae mask",
      "jeannot mask",
    ],
    answer:
      "Derma Clean Rebalancing Algae Mask is from Jeannot Ceuticals. It purifies and mattifies oily skin and contains tea tree oil.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: PHYTOrX
  // =====================================================
  {
    id: "phytorx",
    label: "PhytoRx Night Creme",
    keywords: [
      "phytorx",
      "phyto rx",
      "night creme",
      "lotus night creme",
    ],
    answer:
      "PhytoRx Whitening & Brightening Night Creme is from Lotus Professional. It is a preservative-free night-care product for all skin types.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: SAKURA
  // =====================================================
  {
    id: "sakura",
    label: "dermoSpa Japanese Sakura Night Creme",
    keywords: [
      "dermospa",
      "dermo spa",
      "japanese sakura",
      "sakura night creme",
    ],
    answer:
      "dermoSpa Japanese Sakura Night Creme is from Lotus Professional. It is an overnight skin-care treatment described for skin whitening and nourishment.",
  },


  // =====================================================
  // SPECIFIC PRODUCT: KERA SMOOTH
  // =====================================================
  {
    id: "kera_smooth",
    label: "Kera Smooth Keratin Treatment",
    keywords: [
      "kera smooth",
      "keratin treatment",
      "kera smooth keratin",
    ],
    answer:
      "Kera Smooth Keratin Treatment is from Godrej Professional. It is a protein reconstruction treatment designed to reduce frizz and smoothen hair.",
  },


  // =====================================================
  // REVIEWS
  // =====================================================
  {
    id: "reviews",
    label: "Customer Reviews",
    keywords: [
      "review",
      "reviews",
      "rating",
      "ratings",
      "customer review",
      "feedback",
      "customers say",
      "experience",
    ],
    answer:
      "Radiant Glow has received positive customer feedback. Harshita Singh rated her first visit 5 stars and described the services as amazing. Anjali Singh also rated her experience 5 stars and praised the work. Gaurav rated the salon 5 stars and praised the hygiene, quality products and overall service.",
  },


  // =====================================================
  // HARSHITA REVIEW
  // =====================================================
  {
    id: "harshita_review",
    label: "Harshita Singh Review",
    keywords: [
      "harshita",
      "harshita singh",
      "harshita review",
    ],
    answer:
      "Harshita Singh gave a 5-star rating on 10 May 2025. She said it was her first visit and described the experience and services as amazing.",
  },


  // =====================================================
  // ANJALI REVIEW
  // =====================================================
  {
    id: "anjali_review",
    label: "Anjali Singh Review",
    keywords: [
      "anjali",
      "anjali singh",
      "anjali review",
    ],
    answer:
      "Anjali Singh gave a 5-star rating. She described her first experience as superb and really great and said she would recommend the branch to others.",
  },


  // =====================================================
  // GAURAV REVIEW
  // =====================================================
  {
    id: "gaurav_review",
    label: "Gaurav Review",
    keywords: [
      "gaurav",
      "gaurav review",
    ],
    answer:
      "Gaurav gave a 5-star rating on 07 Dec 2024. He praised the salon's hygiene, high-quality products and excellent overall service and said he left feeling rejuvenated.",
  },


  // =====================================================
  // COURSE PRICES
  // =====================================================
  {
    id: "course_prices",
    label: "Course Prices",
    keywords: [
      "course price",
      "course prices",
      "course fees",
      "course fee",
      "fees",
      "fee",
      "academy fees",
      "academy price",
      "how much course",
    ],
    answer:
      "Our course prices are: Hair Chemical Basic ₹39,999 + GST; Hair Chemical Advance ₹49,999 + GST; Beauty Self Course ₹29,999 + GST; Beauty Basic Course ₹39,999 + GST; Make Up Course ₹39,999 + GST; Skin & Beauty Advance Course ₹39,999 + GST.",
  },


  // =====================================================
  // ALL COURSES
  // =====================================================
  {
    id: "all_courses",
    label: "All Academy Courses",
    keywords: [
      "all courses",
      "available courses",
      "academy courses list",
      "courses available",
      "what courses",
      "which courses",
    ],
    answer:
      "Radiant Glow Academy currently offers: Hair Chemical Course – Basic, Hair Chemical Course – Advance, Beauty Course – Self, Beauty Course – Basic, Make Up Course, and Skin & Beauty Course – Advance.",
  },


  // =====================================================
  // COURSE DURATION
  // =====================================================
  {
    id: "course_duration",
    label: "Course Duration",
    keywords: [
      "course duration",
      "course durations",
      "how long course",
      "course time",
      "training duration",
      "academy duration",
    ],
    answer:
      "Course durations are: Hair Chemical Basic – 3 to 6 Months; Hair Chemical Advance – 3 to 6 Months; Beauty Self – 3 Months; Beauty Basic – 6 to 12 Months; Make Up – 3 to 6 Months; Skin & Beauty Advance – 6 to 12 Months.",
  },
];



const FALLBACK_ANSWER =
  "I'm sorry, I don't have an answer for that yet. Please choose one of the quick questions below or contact Radiant Glow Salon and Academy for more information.";

// =====================================================
// 3. FIND ANSWER
// =====================================================

function findAnswer(userText) {
  const text = userText.toLowerCase();

  const match = FAQS.find((faq) =>
    faq.keywords.some((keyword) => text.includes(keyword))
  );

  return match ? match.answer : FALLBACK_ANSWER;
}

// =====================================================
// 4. COLORS
// =====================================================

const COLORS = {
  primary: "#6B2737",
  primaryDark: "#4E1C29",
  gold: "#C89B5C",
  cream: "#FBF6F0",
  text: "#2B1B1F",
  botBubble: "#F1E4E7",
  userBubble: "#6B2737",
  pink: "#E88AA5",
};

// =====================================================
// 5. STYLES
// =====================================================

const styles = {
    whatsappLauncher: {
  position: "fixed",

  right: 28,
  bottom: 108,

  width: 56,
  height: 56,

  borderRadius: "50%",

  background:
    "linear-gradient(145deg, #25D366, #128C7E)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  textDecoration: "none",

  border: "3px solid #FFFFFF",

  boxShadow:
    "0 7px 20px rgba(18, 140, 126, 0.35)",

  zIndex: 999,

  transition:
    "transform 0.3s ease, box-shadow 0.3s ease",
},

whatsappIcon: {
  width: 38,
  height: 38,

  borderRadius: "50%",

  background: "#FFFFFF",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",
},

whatsappPhone: {
  fontSize: 23,

  color: "#128C7E",

  fontWeight: "bold",

  transform: "rotate(-20deg)",

  display: "block",
},
  // ===================================================
  // CHAT ROBOT BUTTON
  // ===================================================

  launcher: {
    position: "fixed",
    bottom: 24,
    right: 24,

    width: 70,
    height: 70,

    borderRadius: "50%",

    background:
      "linear-gradient(145deg, #FFF7F9 0%, #F8DCE5 55%, #EFC5D2 100%)",

    border: `3px solid ${COLORS.gold}`,

    boxShadow:
      "0 8px 25px rgba(61, 7, 29, 0.28), 0 0 0 4px rgba(212,175,55,0.15)",

    cursor: "pointer",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    zIndex: 1000,

    transition:
      "transform 0.3s ease, box-shadow 0.3s ease",

    padding: 0,
  },

  // ===================================================
  // ROBOT CONTAINER
  // ===================================================

  robot: {
    position: "relative",

    width: 52,
    height: 58,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // ===================================================
  // ANTENNA
  // ===================================================

  antenna: {
    position: "absolute",

    top: 0,
    left: "50%",

    width: 4,
    height: 11,

    background: COLORS.gold,

    transform: "translateX(-50%)",

    borderRadius: 10,

    zIndex: 1,
  },

  antennaBall: {
    position: "absolute",

    width: 10,
    height: 10,

    top: -8,
    left: "50%",

    transform: "translateX(-50%)",

    background:
      "radial-gradient(circle at 30% 25%, #FFF6D6, #D4AF37 55%, #A47D1C)",

    borderRadius: "50%",

    boxShadow:
      "0 2px 5px rgba(0,0,0,0.2)",
  },

  // ===================================================
  // ROBOT HEAD
  // ===================================================

  robotHead: {
    position: "relative",

    width: 49,
    height: 42,

    marginTop: 11,

    background:
      "linear-gradient(145deg, #FFFFFF 0%, #FFF5F7 55%, #F1DDE3 100%)",

    border: `2px solid ${COLORS.gold}`,

    borderRadius: 17,

    boxShadow:
      "0 5px 10px rgba(61,7,29,0.18)",

    zIndex: 2,
  },

  // ===================================================
  // ROBOT EARS
  // ===================================================

  ear: {
    position: "absolute",

    top: 10,

    width: 8,
    height: 19,

    background:
      "linear-gradient(180deg, #D94678, #A7194B)",

    border: `2px solid ${COLORS.gold}`,

    borderRadius: 8,
  },

  // ===================================================
  // ROBOT FACE
  // ===================================================

  face: {
    position: "absolute",

    left: 5,
    right: 5,
    top: 6,
    bottom: 5,

    background:
      "linear-gradient(145deg, #3D071D, #64112F)",

    borderRadius: 11,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },

  // ===================================================
  // EYES
  // ===================================================

  eye: {
    position: "absolute",

    width: 7,
    height: 10,

    background:
      "linear-gradient(180deg, #FFB6C9, #FF719B)",

    borderRadius: "50%",

    boxShadow:
      "0 0 7px rgba(255,147,179,0.9)",
  },

  // ===================================================
  // SMILE
  // ===================================================

  smile: {
    position: "absolute",

    width: 12,
    height: 6,

    bottom: 7,

    borderBottom: "3px solid #FF93B3",

    borderRadius: "0 0 15px 15px",
  },

  // ===================================================
  // MICROPHONE
  // ===================================================

  mic: {
    position: "absolute",

    right: -6,
    bottom: 2,

    width: 12,
    height: 3,

    background: COLORS.gold,

    borderRadius: 5,

    transform: "rotate(-25deg)",
  },

  micBall: {
    position: "absolute",

    right: -4,
    top: -3,

    width: 7,
    height: 7,

    background: COLORS.gold,

    borderRadius: "50%",
  },

  // ===================================================
  // CHAT PANEL
  // ===================================================

  panel: {
    position: "fixed",

    bottom: 105,
    right: 24,

    width: 340,
    maxWidth: "calc(100vw - 32px)",

    height: 470,
    maxHeight: "calc(100vh - 140px)",

    background: COLORS.cream,

    borderRadius: 20,

    boxShadow:
      "0 15px 40px rgba(0,0,0,0.28)",

    display: "flex",
    flexDirection: "column",

    overflow: "hidden",

    zIndex: 1000,

    fontFamily:
      "Georgia, 'Times New Roman', serif",
  },

  // ===================================================
  // HEADER
  // ===================================================

  header: {
    background:
      "linear-gradient(135deg, #6B2737, #4E1C29)",

    color: COLORS.cream,

    padding: "15px 17px",

    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",
  },

  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  miniRobot: {
    width: 34,
    height: 34,

    borderRadius: "50%",

    background: "#FFF7F9",

    border: `2px solid ${COLORS.gold}`,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: 17,
  },

  headerTitle: {
    margin: 0,

    fontSize: 14,

    fontWeight: 600,

    letterSpacing: 0.2,
  },

  headerSubtitle: {
    margin: "3px 0 0",

    fontSize: 10,

    opacity: 0.8,

    fontFamily:
      "'Segoe UI', system-ui, sans-serif",
  },

  closeBtn: {
    background: "none",

    border: "none",

    color: COLORS.cream,

    fontSize: 20,

    cursor: "pointer",

    lineHeight: 1,

    padding: 4,
  },

  // ===================================================
  // MESSAGES
  // ===================================================

  messages: {
    flex: 1,

    overflowY: "auto",

    padding: "15px 13px",

    display: "flex",

    flexDirection: "column",

    gap: 10,

    scrollbarWidth: "thin",
  },

  bubbleRow: (isUser) => ({
    display: "flex",

    justifyContent:
      isUser ? "flex-end" : "flex-start",
  }),

  bubble: (isUser) => ({
    maxWidth: "82%",

    padding: "10px 13px",

    borderRadius: isUser
      ? "15px 15px 4px 15px"
      : "15px 15px 15px 4px",

    fontSize: 13,

    lineHeight: 1.45,

    fontFamily:
      "'Segoe UI', system-ui, sans-serif",

    background: isUser
      ? COLORS.userBubble
      : COLORS.botBubble,

    color: isUser
      ? COLORS.cream
      : COLORS.text,

    boxShadow:
      "0 2px 5px rgba(0,0,0,0.06)",
  }),

  // ===================================================
  // QUICK QUESTIONS
  // ===================================================

  quickWrap: {
    display: "flex",

    flexWrap: "wrap",

    gap: 6,

    padding: "0 12px 10px",

    maxHeight: 82,

    overflowY: "auto",
  },

  quickBtn: {
    border:
      `1px solid ${COLORS.primary}`,

    background: "#FFF",

    color: COLORS.primary,

    borderRadius: 999,

    padding: "6px 10px",

    fontSize: 11.5,

    cursor: "pointer",

    fontFamily:
      "'Segoe UI', system-ui, sans-serif",

    transition:
      "all 0.2s ease",
  },

  // ===================================================
  // INPUT
  // ===================================================

  inputRow: {
    display: "flex",

    borderTop:
      `1px solid ${COLORS.botBubble}`,

    padding: 9,

    gap: 8,

    background: "#FFFDFC",
  },

  input: {
    flex: 1,

    border:
      `1px solid ${COLORS.botBubble}`,

    borderRadius: 20,

    padding: "9px 13px",

    fontSize: 13,

    outline: "none",

    fontFamily:
      "'Segoe UI', system-ui, sans-serif",

    color: COLORS.text,

    background: "#FFFFFF",
  },

  sendBtn: {
    background:
      "linear-gradient(135deg, #6B2737, #4E1C29)",

    color: COLORS.cream,

    border: "none",

    borderRadius: 20,

    padding: "0 16px",

    fontSize: 12.5,

    cursor: "pointer",

    fontFamily:
      "'Segoe UI', system-ui, sans-serif",

    fontWeight: 600,
  },
};

// =====================================================
// 6. CHAT WIDGET
// =====================================================

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: SALON_INFO.greeting,
    },
  ]);

  const [input, setInput] = useState("");

  const scrollRef = useRef(null);

  // ===================================================
  // AUTO SCROLL
  // ===================================================

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  // ===================================================
  // SEND MESSAGE
  // ===================================================

  function sendMessage(text) {
    const trimmed = text.trim();

    if (!trimmed) return;

    const answer = findAnswer(trimmed);

    setMessages((previous) => [
      ...previous,

      {
        from: "user",
        text: trimmed,
      },

      {
        from: "bot",
        text: answer,
      },
    ]);

    setInput("");
  }

  // ===================================================
  // QUICK QUESTION
  // ===================================================

  function handleQuickQuestion(faq) {
    setMessages((previous) => [
      ...previous,

      {
        from: "user",
        text: faq.label,
      },

      {
        from: "bot",
        text: faq.answer,
      },
    ]);
  }

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <>
      {/* =============================================
          CUTE AI ROBOT BUTTON
      ============================================= */}

      <button
        type="button"
        style={styles.launcher}
        onClick={() =>
          setOpen((previous) => !previous)
        }
        aria-label={
          open
            ? "Close chat"
            : "Open AI assistant"
        }
        onMouseEnter={(event) => {
          event.currentTarget.style.transform =
            "scale(1.08)";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.transform =
            "scale(1)";
        }}
      >
        {open ? (
          <span
            style={{
              fontSize: 25,
              color: COLORS.primary,
              fontWeight: 600,
            }}
          >
            ✕
          </span>
        ) : (
          <div style={styles.robot}>
            {/* Antenna */}

            <div style={styles.antenna}>
              <span
                style={styles.antennaBall}
              ></span>
            </div>

            {/* Robot Head */}

            <div style={styles.robotHead}>
              {/* Left Ear */}

              <div
                style={{
                  ...styles.ear,
                  left: -7,
                }}
              ></div>

              {/* Right Ear */}

              <div
                style={{
                  ...styles.ear,
                  right: -7,
                }}
              ></div>

              {/* Face */}

              <div style={styles.face}>
                {/* Left Eye */}

                <span
                  style={{
                    ...styles.eye,
                    left: 11,
                  }}
                ></span>

                {/* Right Eye */}

                <span
                  style={{
                    ...styles.eye,
                    right: 11,
                  }}
                ></span>

                {/* Smile */}

                <span
                  style={styles.smile}
                ></span>
              </div>

              {/* Microphone */}

              <div style={styles.mic}>
                <span
                  style={styles.micBall}
                ></span>
              </div>
            </div>
          </div>
        )}
      </button>
{/* =============================================
    WHATSAPP BUTTON
============================================= */}
<a
  href="https://wa.me/919839408887?text=Hello%20Women's%20World%20Salon%20and%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  style={styles.whatsappLauncher}
>
  <svg
    width="34"
    height="34"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 3C8.82 3 3 8.82 3 16C3 18.3 3.6 20.47 4.65 22.36L3.5 28.5L9.8 27.38C11.65 28.4 13.77 29 16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3Z"
      fill="#25D366"
    />

    <path
      d="M22.35 18.95C22.02 18.78 20.42 17.99 20.12 17.87C19.82 17.75 19.6 17.69 19.38 18.03C19.16 18.36 18.53 19.1 18.34 19.32C18.15 19.55 17.96 19.58 17.63 19.41C17.3 19.24 16.23 18.89 14.97 17.76C13.99 16.88 13.33 15.79 13.14 15.46C12.96 15.13 13.12 14.94 13.29 14.77C13.44 14.62 13.62 14.39 13.79 14.21C13.96 14.02 14.02 13.89 14.13 13.67C14.24 13.45 14.18 13.26 14.1 13.09C14.02 12.92 13.37 11.31 13.1 10.65C12.83 10.01 12.55 10.1 12.34 10.09C12.14 10.08 11.91 10.08 11.69 10.08C11.47 10.08 11.12 10.16 10.82 10.49C10.52 10.82 9.67 11.62 9.67 13.24C9.67 14.86 10.85 16.42 11.02 16.64C11.19 16.86 13.34 20.18 16.64 21.61C17.42 21.95 18.03 22.15 18.5 22.3C19.29 22.55 20.01 22.51 20.58 22.43C21.21 22.34 22.52 21.64 22.79 20.87C23.06 20.1 23.06 19.44 22.98 19.3C22.91 19.17 22.68 19.1 22.35 18.95Z"
      fill="white"
    />
  </svg>
</a>
      {/* =============================================
          CHAT PANEL
      ============================================= */}

      {open && (
        <div
          style={styles.panel}
          role="dialog"
          aria-label={`${SALON_INFO.name} chat`}
        >
          {/* HEADER */}

          <div style={styles.header}>
            <div style={styles.headerLeft}>
              <div style={styles.miniRobot}>
                🤖
              </div>

              <div>
                <p style={styles.headerTitle}>
                  {SALON_INFO.name}
                </p>

                <p style={styles.headerSubtitle}>
                  AI Beauty Assistant
                </p>
              </div>
            </div>

            <button
              type="button"
              style={styles.closeBtn}
              onClick={() =>
                setOpen(false)
              }
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* MESSAGES */}

          <div
            style={styles.messages}
            ref={scrollRef}
          >
            {messages.map(
              (message, index) => {
                const isUser =
                  message.from === "user";

                return (
                  <div
                    key={`${message.from}-${index}`}
                    style={styles.bubbleRow(
                      isUser
                    )}
                  >
                    <div
                      style={styles.bubble(
                        isUser
                      )}
                    >
                      {message.text}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* QUICK QUESTIONS */}

          <div style={styles.quickWrap}>
            {FAQS.map((faq) => (
              <button
                type="button"
                key={faq.id}
                style={styles.quickBtn}
                onClick={() =>
                  handleQuickQuestion(faq)
                }
                onMouseEnter={(event) => {
                  event.currentTarget.style.background =
                    COLORS.primary;

                  event.currentTarget.style.color =
                    COLORS.cream;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background =
                    "#FFF";

                  event.currentTarget.style.color =
                    COLORS.primary;
                }}
              >
                {faq.label}
              </button>
            ))}
          </div>

          {/* INPUT */}

          <form
            style={styles.inputRow}
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              style={styles.input}
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder="Ask me anything..."
              aria-label="Type your question"
            />

            <button
              type="submit"
              style={styles.sendBtn}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}