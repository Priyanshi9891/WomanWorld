// import { Link } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";
// import { FaGoogle } from "react-icons/fa";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaYoutube,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#24151a] text-white">
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* Brand */}
//           <div>
//             <h2 className="font-display text-4xl text-[#caa229]">
//               WOMEN WORLD
//             </h2>

//             <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-[#ff93b3]">
//               Beauty & Elegance
//             </p>

//             <p className="mt-6 text-sm leading-7 text-[#f4dde4]/70">
//               Where beauty meets confidence, elegance meets
//               excellence, and every woman deserves to feel
//               extraordinary.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-3 mt-6">
//               <a
//                 href="https://www.instagram.com/womens_world_lanka?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
//                 aria-label="Instagram"
//                 className="w-10 h-10 border border-[#caa229]/40 flex items-center justify-center hover:bg-[#caa229] hover:text-[#24151a] transition"
//               >
//                 <FaInstagram size={17} />
//               </a>

//               <a
//                 href="https://www.facebook.com/womensworldsalon/"
//                 aria-label="Facebook"
//                 className="w-10 h-10 border border-[#caa229]/40 flex items-center justify-center hover:bg-[#caa229] hover:text-[#24151a] transition"
//               >
//                 <FaFacebookF size={17} />
//               </a>

//               <a
//   href="https://jsdl.in/DT-60262AA22MI"
//   aria-label="Google"
//   className="w-10 h-10 border border-[#caa229]/40 flex items-center justify-center hover:bg-[#caa229] hover:text-[#24151a] transition"
// >
//   <FaGoogle size={17} />
// </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-display text-2xl text-[#caa229]">
//               Quick Links
//             </h3>

//             <div className="mt-6 space-y-4 text-sm">
//               <Link
//                 className="block hover:text-[#ff93b3] transition"
//                 to="/"
//               >
//                 Home
//               </Link>

//               <Link
//                 className="block hover:text-[#ff93b3] transition"
//                 to="/services"
//               >
//                 Services
//               </Link>

//               <Link
//                 className="block hover:text-[#ff93b3] transition"
//                 to="/offers"
//               >
//                 Offers
//               </Link>

//               <Link
//                 className="block hover:text-[#ff93b3] transition"
//                 to="/academic-about"
//               >
//                 Academic About
//               </Link>

//               <Link
//                 className="block hover:text-[#ff93b3] transition"
//                 to="/contact"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-display text-2xl text-[#caa229]">
//               Our Services
//             </h3>

//             <div className="mt-6 space-y-4 text-sm text-[#f4dde4]/80">
//               <p>Hair Styling</p>
//               <p>Bridal Makeup</p>
//               <p>Skin Care</p>
//               <p>Nail Care</p>
//               <p>Spa & Wellness</p>
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="font-display text-2xl text-[#caa229]">
//               Visit Us
//             </h3>

//             <div className="mt-6 space-y-4 text-sm text-[#f4dde4]/80">
//               <p>
//                 123 Luxury Avenue,
//                 <br />
//                 Varanasi, Uttar Pradesh
//               </p>

//               <p>+91 98765 43210</p>

//               <p>hello@womenworldbeauty.com</p>

//               <Link
//                 to="/book-services"
//                 className="inline-flex items-center gap-2 text-[#ff93b3] hover:text-[#caa229] transition"
//               >
//                 Book Appointment
//                 <ArrowUpRight size={15} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
//           <p>
//             © 2026 Women World Beauty. All rights reserved.
//           </p>

//           <p>
//             Crafted with elegance.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaGoogle, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#24151a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="font-display text-4xl text-[#caa229]">
              Radiant Glow
            </h2>

            <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-[#ff93b3]">
              Beauty & Elegance
            </p>

            <p className="mt-6 text-sm leading-7 text-[#f4dde4]/70">
              Where beauty meets confidence, elegance meets
              excellence, and every woman deserves to feel
              extraordinary.
            </p>

            {/* Social Icons */}
            {/* <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/womens_world_lanka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-[#caa229]/40 flex items-center justify-center hover:bg-[#caa229] hover:text-[#24151a] transition"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.facebook.com/womensworldsalon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border border-[#caa229]/40 flex items-center justify-center hover:bg-[#caa229] hover:text-[#24151a] transition"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://jsdl.in/DT-60262AA22MI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="w-10 h-10 border border-[#caa229]/40 flex items-center justify-center hover:bg-[#caa229] hover:text-[#24151a] transition"
              >
                <FaGoogle size={17} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-2xl text-[#caa229]">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4 text-sm">
              <Link
                className="block hover:text-[#ff93b3] transition"
                to="/"
              >
                Home
              </Link>

              <Link
                className="block hover:text-[#ff93b3] transition"
                to="/services"
              >
                Services
              </Link>

              <Link
                className="block hover:text-[#ff93b3] transition"
                to="/offers"
              >
                Offers
              </Link>

              <Link
                className="block hover:text-[#ff93b3] transition"
                to="/academic-about"
              >
                Academic About
              </Link>

              <Link
                className="block hover:text-[#ff93b3] transition"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-2xl text-[#caa229]">
              Our Services
            </h3>

            <div className="mt-6 space-y-4 text-sm text-[#f4dde4]/80">
              <p>Hair Styling</p>
              <p>Bridal Makeup</p>
              <p>Skin Care</p>
              <p>Nail Care</p>
              <p>Spa & Wellness</p>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="font-display text-2xl text-[#caa229]">
              Visit Us
            </h3>

            <div className="mt-6 space-y-4 text-sm text-[#f4dde4]/80">
              <p>
               Near Lanka Pragya Hospital<br></br>
                Varanasi, Uttar Pradesh
              </p>

              <p>+91 6386022738</p>

              

              {/* Book Appointment Button */}
              <Link
                to="/book-services"
                className="group mt-4 inline-flex items-center justify-center gap-2
                px-6 py-3
                rounded-full
                bg-gradient-to-r from-[#caa229] to-[#e3bd4c]
                text-[#24151a]
                font-semibold
                text-sm
                shadow-lg shadow-[#caa229]/20
                hover:scale-105
                hover:shadow-[#caa229]/40
                transition-all duration-300"
              >
                Book Appointment

                <ArrowUpRight
                  size={17}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div
          className="max-w-7xl mx-auto px-5 lg:px-8 py-6
          flex flex-col md:flex-row
          justify-between gap-3
          text-xs text-white/50"
        >
          <p>
            © 2026 Radiant Glow Beauty. All rights reserved.
          </p>

          <p>
            Crafted with elegance.
          </p>
        </div>
      </div>
    </footer>
  );
}

