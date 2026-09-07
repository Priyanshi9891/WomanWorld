// import { useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Sparkles,
//   Star,
//   Send,
//   Navigation,
//   Award,
// } from "lucide-react";

// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// // ===========================================================
// // STATIC DATA
// // ===========================================================

// const WHATSAPP_NUMBER = "919598365954"; // Sunita Singh - primary line

// const branches = [
//   {
//     id: 1,
//     name: "Lanka Branch",
//     address: "Behind V2 Building, 1st Floor, BHU, Lanka, Varanasi, UP",
//     mapQuery: "Behind V2 Building, BHU, Lanka, Varanasi",
//     phone: "+91 95983 65954",
//     contact: "Sunita Singh",
//   },
//   {
//     id: 2,
//     name: "Newada Branch",
//     address: "Akash Ganga Complex, Newada, Indian Bank, BLW, Varanasi, UP",
//     mapQuery: "Akash Ganga Complex, Newada, BLW, Varanasi",
//     phone: "+91 91406 32122",
//     contact: "Poonam Singh",
//   },
// ];

// const initialReviews = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     rating: 5,
//     comment:
//       "Best bridal makeup experience! Sunita ma'am made me feel like a queen on my wedding day.",
//   },
//   {
//     id: 2,
//     name: "Ritu Verma",
//     rating: 5,
//     comment:
//       "Loved my hair spa and keratin treatment. Very professional staff and spotless salon.",
//   },
//   {
//     id: 3,
//     name: "Anjali Gupta",
//     rating: 4,
//     comment:
//       "Great skin services, and the academy staff are genuinely knowledgeable and patient.",
//   },
// ];

// // Simple WhatsApp glyph, since lucide-react has no brand icon for it
// function WhatsAppIcon({ size = 18, className = "" }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className={className}
//     >
//       <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.07c-.24.68-1.4 1.31-1.93 1.36-.5.05-1.05.24-3.55-.74-2.99-1.18-4.87-4.14-5.02-4.33-.15-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2.01.9 2.16.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.23 1.6 1.99 1.1.98 2.03 1.28 2.32 1.43.29.15.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
//     </svg>
//   );
// }

// export default function ContactPage() {
//   // ---- contact form state ----
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSendWhatsApp = (e) => {
//     e.preventDefault();

//     const text =
//       `Hello Women's World!\n` +
//       `Name: ${name}\n` +
//       `Phone: ${phone}\n` +
//       `Subject: ${subject}\n` +
//       `Message: ${message}`;

//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

//     window.open(url, "_blank");
//   };

//   // ---- reviews state ----
//   const [reviews, setReviews] = useState(initialReviews);
//   const [reviewName, setReviewName] = useState("");
//   const [reviewComment, setReviewComment] = useState("");
//   const [reviewRating, setReviewRating] = useState(5);
//   const [hoverRating, setHoverRating] = useState(0);

//   const handleSubmitReview = (e) => {
//     e.preventDefault();

//     if (!reviewName.trim() || !reviewComment.trim()) return;

//     const newReview = {
//       id: Date.now(),
//       name: reviewName.trim(),
//       rating: reviewRating,
//       comment: reviewComment.trim(),
//     };

//     setReviews((prev) => [newReview, ...prev]);
//     setReviewName("");
//     setReviewComment("");
//     setReviewRating(5);
//   };

//   return (
//     <>

//       {/* Local keyframes - scoped by unique class names below */}
//       <style>{`
//         @keyframes ww-fade-up {
//           from { opacity: 0; transform: translateY(26px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes ww-float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-16px); }
//         }
//         @keyframes ww-pulse-ring {
//           0% { transform: scale(0.9); opacity: 0.6; }
//           70% { transform: scale(1.25); opacity: 0; }
//           100% { transform: scale(1.25); opacity: 0; }
//         }
//         .ww-fade-up {
//           animation: ww-fade-up 0.8s ease both;
//         }
//         .ww-float {
//           animation: ww-float 5s ease-in-out infinite;
//         }
//         .ww-pulse-ring::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           border-radius: 9999px;
//           border: 2px solid #d4af37;
//           animation: ww-pulse-ring 2.4s ease-out infinite;
//         }
//       `}</style>

//       <Navbar />

//       <main className="pt-[76px] md:pt-[84px]">

//         {/* =====================================================
//             SMALL HERO
//         ====================================================== */}

//         <section className="relative h-[220px] md:h-[260px] overflow-hidden">

//           <img
//             src="/images/contact/hero.jpg"
//             alt="Women's World Salon & Academy"
//             className="absolute inset-0 w-full h-full object-cover"
//           />

//           <div className="absolute inset-0 bg-[#3d071d]/65" />

//           <div className="absolute inset-0 bg-gradient-to-r from-[#3d071d]/80 via-transparent to-[#c2185b]/30" />

//           <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#d4af37]/10 blur-3xl rounded-full" />

//           <div className="relative z-10 h-full flex items-center justify-center text-center px-5">

//             <div className="max-w-3xl">

//               <div className="flex items-center justify-center gap-3 mb-3">

//                 <span className="w-10 h-px bg-[#d4af37]" />

//                 <Sparkles size={14} className="text-[#d4af37]" />

//                 <span className="w-10 h-px bg-[#d4af37]" />

//               </div>

//               <p className="text-[#f1d477] text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold">
//                 Women's World
//               </p>

//               <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-2">
//                 Let's Talk Beauty
//               </h1>

//               <p className="mt-3 text-white/75 text-sm md:text-base leading-6 max-w-xl mx-auto">
//                 Bridal, party & everyday beauty — reach out and our
//                 team will personally guide you.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             SHOWCASE IMAGE + QUICK INFO
//         ====================================================== */}

//         <section className="relative py-16 md:py-20 bg-[#fff7f9] overflow-hidden">

//           <div
//             className="
//               absolute
//               -top-32
//               -left-32
//               w-80
//               h-80
//               rounded-full
//               bg-[#c2185b]/10
//               blur-3xl
//               pointer-events-none
//             "
//           />

//           <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

//             <div className="grid lg:grid-cols-2 gap-12 items-center">

//               {/* ANIMATED SHOWCASE IMAGE */}

//               <div className="relative ww-fade-up">

//                 <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-[0_20px_60px_rgba(59,32,40,0.15)] ww-float">

//                   <img
//                     src="/images/contact/showcase.jpg"
//                     alt="Women's World bridal styling"
//                     className="w-full h-[380px] md:h-[460px] object-cover"
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                     }}
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#3d071d]/60 via-transparent to-transparent" />

//                 </div>

//                 {/* Floating badge - Premium Membership */}

//                 <div
//                   className="
//                     absolute
//                     -bottom-6
//                     -left-6
//                     md:-left-10
//                     bg-white
//                     rounded-2xl
//                     border
//                     border-[#d4af37]/40
//                     shadow-[0_12px_35px_rgba(59,32,40,0.18)]
//                     px-5
//                     py-4
//                     flex
//                     items-center
//                     gap-3
//                     ww-float
//                   "
//                   style={{ animationDelay: "0.6s" }}
//                 >

//                   <div className="relative w-10 h-10 rounded-full bg-[#3d071d] flex items-center justify-center ww-pulse-ring">
//                     <Award size={18} className="text-[#f1d477]" />
//                   </div>

//                   <div>
//                     <p className="font-display text-lg text-[#3d071d] leading-none">
//                       Premium
//                     </p>
//                     <p className="text-[9px] uppercase tracking-[0.15em] text-[#3d071d]/50 mt-1">
//                       Only For Ladies
//                     </p>
//                   </div>

//                 </div>

//               </div>


//               {/* QUICK INFO CARDS */}

//               <div className="ww-fade-up" style={{ animationDelay: "0.15s" }}>

//                 <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#c2185b]">
//                   Get In Touch
//                 </p>

//                 <h2 className="font-display text-3xl md:text-4xl text-[#3d071d] mt-3">
//                   We'd Love To Hear From You
//                 </h2>

//                 <p className="text-sm leading-7 text-[#3d071d]/60 mt-4">
//                   Whether it's a bridal look, a hair transformation, or
//                   enrolling at our academy — our team replies fast on
//                   call and WhatsApp.
//                 </p>

//                 <div className="grid sm:grid-cols-2 gap-5 mt-9">

//                   <div className="bg-white rounded-2xl p-5 border border-[#d4af37]/25 shadow-[0_8px_25px_rgba(59,32,40,0.06)]">

//                     <Phone size={18} className="text-[#c2185b]" />

//                     <p className="text-[9px] uppercase tracking-[0.18em] text-[#3d071d]/40 mt-3">
//                       Sunita Singh
//                     </p>

//                     <p className="text-sm font-semibold text-[#3d071d] mt-1">
//                       +91 95983 65954
//                     </p>

//                   </div>

//                   <div className="bg-white rounded-2xl p-5 border border-[#d4af37]/25 shadow-[0_8px_25px_rgba(59,32,40,0.06)]">

//                     <Phone size={18} className="text-[#c2185b]" />

//                     <p className="text-[9px] uppercase tracking-[0.18em] text-[#3d071d]/40 mt-3">
//                       Poonam Singh
//                     </p>

//                     <p className="text-sm font-semibold text-[#3d071d] mt-1">
//                       +91 91406 32122
//                     </p>

//                   </div>

//                   <div className="bg-white rounded-2xl p-5 border border-[#d4af37]/25 shadow-[0_8px_25px_rgba(59,32,40,0.06)]">

//                     <Mail size={18} className="text-[#c2185b]" />

//                     <p className="text-[9px] uppercase tracking-[0.18em] text-[#3d071d]/40 mt-3">
//                       Email
//                     </p>

//                     <p className="text-sm font-semibold text-[#3d071d] mt-1 break-all">
//                       hello@womensworld.com
//                     </p>

//                   </div>

//                   <div className="bg-white rounded-2xl p-5 border border-[#d4af37]/25 shadow-[0_8px_25px_rgba(59,32,40,0.06)]">

//                     <Clock size={18} className="text-[#c2185b]" />

//                     <p className="text-[9px] uppercase tracking-[0.18em] text-[#3d071d]/40 mt-3">
//                       Hours
//                     </p>

//                     <p className="text-sm font-semibold text-[#3d071d] mt-1">
//                       10:00 AM – 8:00 PM
//                     </p>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             CONTACT FORM - sends to WhatsApp
//         ====================================================== */}

//         <section className="relative py-16 md:py-20 bg-[#3d071d] overflow-hidden">

//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#d4af37]/10 blur-3xl rounded-full pointer-events-none" />

//           <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8">

//             <div className="text-center mb-10 ww-fade-up">

//               <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#f1d477]">
//                 Send A Message
//               </p>

//               <h2 className="font-display text-3xl md:text-4xl text-white mt-3">
//                 Message Us Instantly On WhatsApp
//               </h2>

//               <p className="text-sm text-white/60 mt-3">
//                 Fill the form below — it opens WhatsApp with your
//                 details ready to send.
//               </p>

//             </div>

//             <form
//               onSubmit={handleSendWhatsApp}
//               className="bg-white rounded-3xl p-6 md:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.25)] ww-fade-up"
//               style={{ animationDelay: "0.15s" }}
//             >

//               <div className="grid sm:grid-cols-2 gap-5">

//                 <div>
//                   <label className="text-[10px] uppercase tracking-[0.18em] text-[#3d071d]/50 font-semibold">
//                     Your Name
//                   </label>

//                   <input
//                     required
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter your name"
//                     className="
//                       w-full
//                       mt-2
//                       px-4
//                       py-3.5
//                       rounded-xl
//                       border
//                       border-[#3d071d]/15
//                       text-sm
//                       text-[#3d071d]
//                       focus:outline-none
//                       focus:border-[#c2185b]
//                       transition
//                     "
//                   />
//                 </div>

//                 <div>
//                   <label className="text-[10px] uppercase tracking-[0.18em] text-[#3d071d]/50 font-semibold">
//                     Phone Number
//                   </label>

//                   <input
//                     required
//                     type="tel"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     placeholder="Enter your phone number"
//                     className="
//                       w-full
//                       mt-2
//                       px-4
//                       py-3.5
//                       rounded-xl
//                       border
//                       border-[#3d071d]/15
//                       text-sm
//                       text-[#3d071d]
//                       focus:outline-none
//                       focus:border-[#c2185b]
//                       transition
//                     "
//                   />
//                 </div>

//               </div>

//               <div className="mt-5">
//                 <label className="text-[10px] uppercase tracking-[0.18em] text-[#3d071d]/50 font-semibold">
//                   Subject
//                 </label>

//                 <input
//                   required
//                   type="text"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                   placeholder="Bridal makeup, hair spa, academy enquiry..."
//                   className="
//                     w-full
//                     mt-2
//                     px-4
//                     py-3.5
//                     rounded-xl
//                     border
//                     border-[#3d071d]/15
//                     text-sm
//                     text-[#3d071d]
//                     focus:outline-none
//                     focus:border-[#c2185b]
//                     transition
//                   "
//                 />
//               </div>

//               <div className="mt-5">
//                 <label className="text-[10px] uppercase tracking-[0.18em] text-[#3d071d]/50 font-semibold">
//                   Message
//                 </label>

//                 <textarea
//                   required
//                   rows="5"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder="Tell us how we can help..."
//                   className="
//                     w-full
//                     mt-2
//                     px-4
//                     py-3.5
//                     rounded-xl
//                     border
//                     border-[#3d071d]/15
//                     text-sm
//                     text-[#3d071d]
//                     resize-none
//                     focus:outline-none
//                     focus:border-[#c2185b]
//                     transition
//                   "
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="
//                   group
//                   w-full
//                   flex
//                   items-center
//                   justify-center
//                   gap-2.5
//                   mt-7
//                   py-4
//                   rounded-full
//                   bg-[#25D366]
//                   text-white
//                   text-xs
//                   uppercase
//                   tracking-[0.18em]
//                   font-bold
//                   hover:bg-[#1ebe5b]
//                   transition-all
//                   duration-300
//                 "
//               >
//                 <WhatsAppIcon size={18} />
//                 Send On WhatsApp
//                 <Send
//                   size={14}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </button>

//             </form>

//           </div>

//         </section>


//         {/* =====================================================
//             OUR BRANCHES - with embedded maps
//         ====================================================== */}

//         <section className="relative py-16 md:py-20 bg-[#fff7f9] overflow-hidden">

//           <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none" />

//           <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

//             <div className="flex items-center justify-center gap-3 mb-12 ww-fade-up">

//               <MapPin size={18} className="text-[#c2185b]" />

//               <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#3d071d]">
//                 Visit Us
//               </p>

//             </div>

//             <div className="grid md:grid-cols-2 gap-8">

//               {branches.map((branch, index) => (

//                 <div
//                   key={branch.id}
//                   className="
//                     bg-white
//                     rounded-2xl
//                     overflow-hidden
//                     border
//                     border-[#d4af37]/25
//                     shadow-[0_8px_30px_rgba(59,32,40,0.07)]
//                     hover:shadow-[0_18px_45px_rgba(194,24,91,0.15)]
//                     transition-all
//                     duration-500
//                     ww-fade-up
//                   "
//                   style={{ animationDelay: `${index * 0.15}s` }}
//                 >

//                   <div className="h-64 w-full">

//                     <iframe
//                       title={branch.name}
//                       src={`https://www.google.com/maps?q=${encodeURIComponent(
//                         branch.mapQuery
//                       )}&output=embed`}
//                       className="w-full h-full border-0"
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                     />

//                   </div>

//                   <div className="p-6 md:p-7">

//                     <h3 className="font-display text-2xl text-[#3d071d]">
//                       {branch.name}
//                     </h3>

//                     <div className="w-10 h-[2px] bg-[#d4af37] mt-3 mb-4" />

//                     <div className="flex gap-3">
//                       <MapPin size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
//                       <p className="text-xs text-[#3d071d]/60 leading-6">
//                         {branch.address}
//                       </p>
//                     </div>

//                     <div className="flex gap-3 mt-3">
//                       <Phone size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
//                       <p className="text-xs text-[#3d071d]/60">
//                         {branch.contact} — {branch.phone}
//                       </p>
//                     </div>

//                     <a
//                       href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
//                         branch.mapQuery
//                       )}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="
//                         group
//                         inline-flex
//                         items-center
//                         gap-2
//                         mt-5
//                         px-5
//                         py-2.5
//                         rounded-full
//                         bg-[#3d071d]
//                         border
//                         border-[#d4af37]
//                         text-[#f1d477]
//                         text-[9px]
//                         uppercase
//                         tracking-[0.15em]
//                         font-semibold
//                         hover:bg-[#c2185b]
//                         transition-all
//                       "
//                     >
//                       Get Directions
//                       <Navigation
//                         size={12}
//                         className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
//                       />
//                     </a>

//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             REVIEWS & RATINGS
//         ====================================================== */}

//         <section className="relative py-16 md:py-20 bg-white overflow-hidden">

//           <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">

//             <div className="flex items-center justify-center gap-3 mb-12 ww-fade-up">

//               <Star size={18} className="text-[#c2185b]" />

//               <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#3d071d]">
//                 Client Love
//               </p>

//             </div>

//             <div className="grid lg:grid-cols-5 gap-10">

//               {/* EXISTING REVIEWS */}

//               <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5 content-start">

//                 {reviews.map((review, index) => (

//                   <div
//                     key={review.id}
//                     className="
//                       bg-[#fff7f9]
//                       rounded-2xl
//                       p-6
//                       border
//                       border-[#d4af37]/25
//                       ww-fade-up
//                     "
//                     style={{ animationDelay: `${index * 0.08}s` }}
//                   >

//                     <div className="flex gap-0.5">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star
//                           key={star}
//                           size={14}
//                           className={
//                             star <= review.rating
//                               ? "text-[#d4af37] fill-[#d4af37]"
//                               : "text-[#3d071d]/15"
//                           }
//                         />
//                       ))}
//                     </div>

//                     <p className="text-sm text-[#3d071d]/70 leading-6 mt-3">
//                       "{review.comment}"
//                     </p>

//                     <p className="text-xs font-semibold text-[#3d071d] mt-4">
//                       — {review.name}
//                     </p>

//                   </div>

//                 ))}

//               </div>


//               {/* LEAVE A REVIEW FORM */}

//               <div className="lg:col-span-2">

//                 <div className="bg-[#3d071d] rounded-2xl p-6 md:p-8 sticky top-24 ww-fade-up" style={{ animationDelay: "0.2s" }}>

//                   <h3 className="font-display text-2xl text-white">
//                     Leave A Review
//                   </h3>

//                   <div className="w-10 h-[2px] bg-[#d4af37] mt-3 mb-6" />

//                   <form onSubmit={handleSubmitReview}>

//                     <label className="text-[10px] uppercase tracking-[0.18em] text-white/50 font-semibold">
//                       Your Rating
//                     </label>

//                     <div className="flex gap-1.5 mt-2 mb-5">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <button
//                           key={star}
//                           type="button"
//                           onClick={() => setReviewRating(star)}
//                           onMouseEnter={() => setHoverRating(star)}
//                           onMouseLeave={() => setHoverRating(0)}
//                           className="transition-transform hover:scale-110"
//                           aria-label={`Rate ${star} stars`}
//                         >
//                           <Star
//                             size={22}
//                             className={
//                               star <= (hoverRating || reviewRating)
//                                 ? "text-[#d4af37] fill-[#d4af37]"
//                                 : "text-white/25"
//                             }
//                           />
//                         </button>
//                       ))}
//                     </div>

//                     <label className="text-[10px] uppercase tracking-[0.18em] text-white/50 font-semibold">
//                       Your Name
//                     </label>

//                     <input
//                       required
//                       type="text"
//                       value={reviewName}
//                       onChange={(e) => setReviewName(e.target.value)}
//                       placeholder="Enter your name"
//                       className="
//                         w-full
//                         mt-2
//                         mb-5
//                         px-4
//                         py-3
//                         rounded-xl
//                         bg-white/5
//                         border
//                         border-[#d4af37]/30
//                         text-sm
//                         text-white
//                         placeholder:text-white/30
//                         focus:outline-none
//                         focus:border-[#d4af37]
//                         transition
//                       "
//                     />

//                     <label className="text-[10px] uppercase tracking-[0.18em] text-white/50 font-semibold">
//                       Your Review
//                     </label>

//                     <textarea
//                       required
//                       rows="4"
//                       value={reviewComment}
//                       onChange={(e) => setReviewComment(e.target.value)}
//                       placeholder="Share your experience..."
//                       className="
//                         w-full
//                         mt-2
//                         px-4
//                         py-3
//                         rounded-xl
//                         bg-white/5
//                         border
//                         border-[#d4af37]/30
//                         text-sm
//                         text-white
//                         placeholder:text-white/30
//                         resize-none
//                         focus:outline-none
//                         focus:border-[#d4af37]
//                         transition
//                       "
//                     />

//                     <button
//                       type="submit"
//                       className="
//                         w-full
//                         mt-6
//                         py-3.5
//                         rounded-full
//                         bg-[#d4af37]
//                         text-[#3d071d]
//                         text-[10px]
//                         uppercase
//                         tracking-[0.18em]
//                         font-bold
//                         hover:bg-[#c2185b]
//                         hover:text-white
//                         transition-all
//                       "
//                     >
//                       Submit Review
//                     </button>

//                   </form>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }