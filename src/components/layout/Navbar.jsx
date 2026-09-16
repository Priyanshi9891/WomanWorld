
// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, ArrowUpRight } from "lucide-react";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "Services", path: "/services" },
//   { name: "Offers", path: "/offers" },
//   { name: "Academic About", path: "/academic-about" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const closeMenu = () => {
//     setMobileOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50">

//       <nav className="bg-[#3d071d]/95 backdrop-blur-xl border-b border-[#d4af37]/40 shadow-[0_5px_30px_rgba(0,0,0,0.15)]">

//         <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">

//           <div className="h-[76px] md:h-[84px] flex items-center justify-between">

//             {/* ================= LOGO ================= */}
//             <Link
//               to="/"
//               onClick={closeMenu}
//               className="group flex items-center"
//             >
//               <div className="flex flex-col leading-none">

//                 {/* COMPANY NAME */}
//                 <span
//                   className="
//                     font-script
//                     text-[30px]
//                     sm:text-[34px]
//                     md:text-[40px]
//                     lg:text-[44px]
//                     text-[#d4af37]
//                     whitespace-nowrap
//                     transition-all
//                     duration-300
//                     group-hover:text-[#f1d477]
//                     group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]
//                   "
//                 >
//                   Women's World
//                 </span>

//                 {/* SALON & ACADEMY */}
//                 <div className="flex items-center justify-center gap-2 mt-1">

//                   <span className="hidden sm:block w-5 md:w-7 h-px bg-[#d4af37]" />

//                   <span
//                     className="
//                       text-[7px]
//                       sm:text-[8px]
//                       md:text-[9px]
//                       lg:text-[10px]
//                       font-bold
//                       tracking-[0.18em]
//                       text-[#f1d477]
//                       whitespace-nowrap
//                     "
//                   >
//                     SALON & ACADEMY
//                   </span>

//                   <span className="hidden sm:block w-5 md:w-7 h-px bg-[#d4af37]" />

//                 </div>

//               </div>
//             </Link>


//             {/* ================= DESKTOP NAV ================= */}
//             <div className="hidden lg:flex items-center gap-7 xl:gap-9">

//               {navItems.map((item) => (

//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   className="group relative py-2"
//                 >
//                   {({ isActive }) => (
//                     <>
//                       <span
//                         className={`
//                           text-[10px]
//                           xl:text-[11px]
//                           font-semibold
//                           uppercase
//                           tracking-[0.16em]
//                           transition-colors
//                           duration-300
//                           ${
//                             isActive
//                               ? "text-[#d4af37]"
//                               : "text-white group-hover:text-[#d4af37]"
//                           }
//                         `}
//                       >
//                         {item.name}
//                       </span>

//                       {/* UNDERLINE */}
//                       <span
//                         className={`
//                           absolute
//                           left-0
//                           -bottom-1
//                           h-[1.5px]
//                           bg-[#d4af37]
//                           transition-all
//                           duration-400
//                           ${
//                             isActive
//                               ? "w-full"
//                               : "w-0 group-hover:w-full"
//                           }
//                         `}
//                       />
//                     </>
//                   )}
//                 </NavLink>

//               ))}


//               {/* BOOK SERVICES */}
//               <Link
//                 to="/book-services"
//                 className="
//                   group
//                   flex
//                   items-center
//                   gap-2
//                   ml-1
//                   px-5
//                   py-3
//                   rounded-full
//                   bg-[#d4af37]
//                   border
//                   border-[#f1d477]
//                   text-[#3d071d]
//                   text-[9px]
//                   font-bold
//                   uppercase
//                   tracking-[0.17em]
//                   transition-all
//                   duration-300
//                   hover:bg-[#c2185b]
//                   hover:text-white
//                 "
//               >
//                 <span>Book Services</span>

//                 <ArrowUpRight
//                   size={14}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                     group-hover:-translate-y-1
//                   "
//                 />
//               </Link>

//             </div>


//             {/* ================= MOBILE MENU BUTTON ================= */}
//             <button
//               type="button"
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="
//                 lg:hidden
//                 w-10
//                 h-10
//                 rounded-full
//                 border
//                 border-[#d4af37]
//                 bg-[#d4af37]
//                 text-[#3d071d]
//                 flex
//                 items-center
//                 justify-center
//                 transition-all
//                 duration-300
//                 hover:bg-[#c2185b]
//                 hover:text-white
//               "
//               aria-label="Toggle navigation menu"
//               aria-expanded={mobileOpen}
//             >
//               {mobileOpen ? (
//                 <X size={20} />
//               ) : (
//                 <Menu size={20} />
//               )}
//             </button>

//           </div>

//         </div>


//         {/* ================= MOBILE MENU ================= */}
//         {mobileOpen && (

//           <div
//             className="
//               lg:hidden
//               absolute
//               top-[76px]
//               right-0
//               w-[78%]
//               sm:w-[65%]
//               bg-[#fff7f9]
//               border-l
//               border-b
//               border-[#d4af37]/50
//               shadow-[-10px_20px_45px_rgba(59,32,40,0.20)]
//               rounded-bl-2xl
//               overflow-hidden
//             "
//           >

//             {/* TOP GOLD LINE */}
//             <div
//               className="
//                 h-[3px]
//                 bg-gradient-to-r
//                 from-[#3d071d]
//                 via-[#d4af37]
//                 to-[#c2185b]
//               "
//             />

//             <div className="px-6 py-6">

//               {/* MOBILE LOGO */}
//               <div className="text-center pb-5 mb-3 border-b border-[#d4af37]/25">

//                 <div
//                   className="
//                     font-script
//                     text-[30px]
//                     text-[#c9a227]
//                   "
//                 >
//                   Women's World
//                 </div>

//                 <div
//                   className="
//                     mt-1
//                     text-[8px]
//                     font-bold
//                     tracking-[0.22em]
//                     text-[#3d071d]
//                   "
//                 >
//                   SALON & ACADEMY
//                 </div>

//               </div>


//               {/* MOBILE LINKS */}
//               <div className="flex flex-col">

//                 {navItems.map((item) => (

//                   <NavLink
//                     key={item.path}
//                     to={item.path}
//                     onClick={closeMenu}
//                     className="group relative flex items-center justify-between py-4 border-b border-[#d4af37]/15"
//                   >

//                     {({ isActive }) => (
//                       <>
//                         <span
//                           className={`
//                             text-[11px]
//                             font-semibold
//                             uppercase
//                             tracking-[0.15em]
//                             transition-colors
//                             duration-300
//                             ${
//                               isActive
//                                 ? "text-[#c2185b]"
//                                 : "text-[#3d071d] group-hover:text-[#c2185b]"
//                             }
//                           `}
//                         >
//                           {item.name}
//                         </span>

//                         <ArrowUpRight
//                           size={14}
//                           className={
//                             isActive
//                               ? "text-[#c9a227]"
//                               : "text-[#3d071d]/30"
//                           }
//                         />

//                         <span
//                           className={`
//                             absolute
//                             left-0
//                             bottom-0
//                             h-[1px]
//                             bg-[#d4af37]
//                             transition-all
//                             duration-300
//                             ${
//                               isActive
//                                 ? "w-full"
//                                 : "w-0 group-hover:w-full"
//                             }
//                           `}
//                         />

//                       </>
//                     )}

//                   </NavLink>

//                 ))}

//               </div>


//               {/* MOBILE BOOK BUTTON */}
//               <Link
//                 to="/book-services"
//                 onClick={closeMenu}
//                 className="
//                   group
//                   flex
//                   items-center
//                   justify-center
//                   gap-2
//                   w-full
//                   mt-6
//                   py-3.5
//                   rounded-full
//                   bg-[#3d071d]
//                   border
//                   border-[#d4af37]
//                   text-white
//                   text-[9px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.18em]
//                   hover:bg-[#c2185b]
//                   transition-all
//                   duration-300
//                 "
//               >
//                 Book Services

//                 <ArrowUpRight
//                   size={14}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                     group-hover:-translate-y-1
//                   "
//                 />

//               </Link>

//             </div>

//           </div>

//         )}

//       </nav>

//     </header>
//   );
// }


import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Academic ", path: "/academic-about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      <nav className="bg-[#3d071d]/95 backdrop-blur-xl border-b border-[#d4af37]/40 shadow-[0_5px_30px_rgba(0,0,0,0.15)]">

        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">

          <div className="h-[76px] md:h-[84px] flex items-center justify-between">

            {/* ================= LOGO ================= */}

            <Link
              to="/"
              onClick={closeMenu}
              className="group flex items-center"
            >

              {/* LOGO IMAGE - ADDED */}
             {/* <img
  src="/images/logo/logo.png"
  alt="Women's World Logo"
  className="
    w-10
    h-10
    sm:w-12
    sm:h-12
    md:w-14
    md:h-14
    rounded-full
    object-cover
    mr-3
    transition-transform
    duration-300
    group-hover:scale-105
  "
/> */}
              <div className="flex flex-col leading-none">

                {/* COMPANY NAME */}

                <span
                  className="
                    font-script
                    text-[30px]
                    sm:text-[34px]
                    md:text-[40px]
                    lg:text-[44px]
                    text-[#d4af37]
                    whitespace-nowrap
                    transition-all
                    duration-300
                    group-hover:text-[#f1d477]
                    group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]
                  "
                >
                  Radiant Glow
                </span>

                {/* SALON & ACADEMY */}

                <div className="flex items-center justify-center gap-2 mt-1">

                  <span className="hidden sm:block w-5 md:w-7 h-px bg-[#d4af37]" />

                  <span
                    className="
                      text-[7px]
                      sm:text-[8px]
                      md:text-[9px]
                      lg:text-[10px]
                      font-bold
                      tracking-[0.18em]
                      text-[#f1d477]
                      whitespace-nowrap
                    "
                  >
                    SALON & ACADEMY
                  </span>

                  <span className="hidden sm:block w-5 md:w-7 h-px bg-[#d4af37]" />

                </div>

              </div>

            </Link>


            {/* ================= DESKTOP NAV ================= */}

            <div className="hidden lg:flex items-center gap-7 xl:gap-9">

              {navItems.map((item) => (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className="group relative py-2"
                >

                  {({ isActive }) => (
                    <>
                      <span
                        className={`
                          text-[10px]
                          xl:text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-[#d4af37]"
                              : "text-white group-hover:text-[#d4af37]"
                          }
                        `}
                      >
                        {item.name}
                      </span>

                      {/* UNDERLINE */}

                      <span
                        className={`
                          absolute
                          left-0
                          -bottom-1
                          h-[1.5px]
                          bg-[#d4af37]
                          transition-all
                          duration-400
                          ${
                            isActive
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }
                        `}
                      />

                    </>
                  )}

                </NavLink>

              ))}


              {/* BOOK SERVICES */}

              <Link
                to="/book-services"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  ml-1
                  px-5
                  py-3
                  rounded-full
                  bg-[#d4af37]
                  border
                  border-[#f1d477]
                  text-[#3d071d]
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  transition-all
                  duration-300
                  hover:bg-[#c2185b]
                  hover:text-white
                "
              >

                <span>Book Services</span>

                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </Link>

            </div>


            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                lg:hidden
                w-10
                h-10
                rounded-full
                border
                border-[#d4af37]
                bg-[#d4af37]
                text-[#3d071d]
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:bg-[#c2185b]
                hover:text-white
              "
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >

              {mobileOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}

            </button>

          </div>

        </div>


        {/* ================= MOBILE MENU ================= */}

        {mobileOpen && (

          <div
            className="
              lg:hidden
              absolute
              top-[76px]
              right-0
              w-[78%]
              sm:w-[65%]
              bg-[#fff7f9]
              border-l
              border-b
              border-[#d4af37]/50
              shadow-[-10px_20px_45px_rgba(59,32,40,0.20)]
              rounded-bl-2xl
              overflow-hidden
            "
          >

            {/* TOP GOLD LINE */}

            <div
              className="
                h-[3px]
                bg-gradient-to-r
                from-[#3d071d]
                via-[#d4af37]
                to-[#c2185b]
              "
            />

            <div className="px-6 py-6">

              {/* MOBILE LOGO */}

              <div className="text-center pb-5 mb-3 border-b border-[#d4af37]/25">

                {/* LOGO IMAGE - ADDED */}

                {/* <img
                  src="/images/logo/logo.png"
                  alt="Women's World Logo"
                  className="
                    w-12
                    h-12
                    object-contain
                    mx-auto
                    mb-2
                  "
                /> */}

                <div
                  className="
                    font-script
                    text-[30px]
                    text-[#c9a227]
                  "
                >
                  Radiant Glow
                </div>

                <div
                  className="
                    mt-1
                    text-[8px]
                    font-bold
                    tracking-[0.22em]
                    text-[#3d071d]
                  "
                >
                  SALON & ACADEMY
                </div>

              </div>


              {/* MOBILE LINKS */}

              <div className="flex flex-col">

                {navItems.map((item) => (

                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className="group relative flex items-center justify-between py-4 border-b border-[#d4af37]/15"
                  >

                    {({ isActive }) => (
                      <>
                        <span
                          className={`
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            transition-colors
                            duration-300
                            ${
                              isActive
                                ? "text-[#c2185b]"
                                : "text-[#3d071d] group-hover:text-[#c2185b]"
                            }
                          `}
                        >
                          {item.name}
                        </span>

                        <ArrowUpRight
                          size={14}
                          className={
                            isActive
                              ? "text-[#c9a227]"
                              : "text-[#3d071d]/30"
                          }
                        />

                        <span
                          className={`
                            absolute
                            left-0
                            bottom-0
                            h-[1px]
                            bg-[#d4af37]
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }
                          `}
                        />

                      </>
                    )}

                  </NavLink>

                ))}

              </div>


              {/* MOBILE BOOK BUTTON */}

              <Link
                to="/book-services"
                onClick={closeMenu}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  mt-6
                  py-3.5
                  rounded-full
                  bg-[#3d071d]
                  border
                  border-[#d4af37]
                  text-white
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  hover:bg-[#c2185b]
                  transition-all
                  duration-300
                "
              >

                Book Services

                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </Link>

            </div>

          </div>

        )}

      </nav>

    </header>
  );
}

