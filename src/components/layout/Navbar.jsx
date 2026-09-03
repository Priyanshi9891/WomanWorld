import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Offers",
    path: "/offers",
  },
  {
    name: "Academic About",
    path: "/academic-about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-[#fff9f5]/95 backdrop-blur-xl border-b border-[#caa229]/20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex flex-col leading-none"
            >
              <span className="font-display text-3xl md:text-4xl font-bold text-[#ae2831] tracking-wide">
                WOMEN WORLD
              </span>

              <span className="text-[9px] md:text-[10px] tracking-[0.35em] text-[#caa229] uppercase">
                Beauty & Elegance
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-xs font-semibold tracking-[0.12em] uppercase transition duration-300 ${
                      isActive
                        ? "text-[#ae2831]"
                        : "text-[#24151a] hover:text-[#ae2831]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/book-services"
                className="px-6 py-3 bg-[#ae2831] text-white text-xs font-semibold tracking-[0.12em] uppercase hover:bg-[#8f2029] transition duration-300"
              >
                Book Services
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#ae2831]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#fff9f5] border-t border-[#caa229]/20">
            <div className="px-5 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-[0.12em] uppercase ${
                      isActive
                        ? "text-[#ae2831]"
                        : "text-[#24151a]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/book-services"
                onClick={closeMenu}
                className="text-center px-6 py-4 bg-[#ae2831] text-white text-xs font-semibold tracking-[0.12em] uppercase"
              >
                Book Services
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}