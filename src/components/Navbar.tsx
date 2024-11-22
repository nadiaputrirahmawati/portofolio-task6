import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import gambar from "../assets/story.png";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isBlogOrContact =
    location.pathname === "/blog" || location.pathname === "/contact";

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-20  transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent shadow-0"
        }`}
      >
        <div className="navbar container mx-auto mt-2 mb-2">
          <div className="flex-1">
            <a className="w-40">
              <img src={gambar} alt="Logo" className="w-44 h-auto" />
            </a>
          </div>

          {/* Menu untuk Desktop */}
          <div className="hidden lg:flex">
            <ul className="flex px-1 space-x-4">
              {isBlogOrContact ? (
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                      isActive ? "bg-dark text-white" : "hover:bg-gray-100"
                    }`
                  }
                >
                  Home
                </NavLink>
              ) : (
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                    activeSection === "home" ? "bg-dark text-white" : ""
                  }`}
                  onClick={() => handleSetActive("home")}
                >
                  Home
                </ScrollLink>
              )}

              {!isBlogOrContact && (
                <>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                      activeSection === "about"
                        ? "bg-dark text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSetActive("about")}
                  >
                    About
                  </ScrollLink>

                  <ScrollLink
                    to="portfolio"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                      activeSection === "portfolio"
                        ? "bg-dark text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSetActive("portfolio")}
                  >
                    Portfolio
                  </ScrollLink>
                </>
              )}

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                    isActive ? "bg-dark text-white" : "hover:bg-gray-100"
                  }`
                }
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer w-32 text-center rounded-full border-2 border-dark text-dark font-semibold p-1 ${
                    isActive ? "bg-dark text-white" : "hover:bg-gray-100"
                  }`
                }
              >
                Contact
              </NavLink>
            </ul>
          </div>

          {/* Menu Hamburger untuk Mobile */}
          <div className="lg:hidden">
            <button
              className="btn btn-square btn-ghost"
              aria-label="Open menu"
              onClick={handleToggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal untuk menu mobile */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
          onClick={handleToggleModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-64"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-4">
              {isBlogOrContact ? (
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `cursor-pointer block px-4 py-2 rounded-md ${
                      isActive
                        ? "bg-dark text-white"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  Home
                </NavLink>
              ) : (
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`cursor-pointer block px-4 py-2 rounded-md ${
                    activeSection === "home"
                      ? "bg-dark text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleSetActive("home")}
                >
                  Home
                </ScrollLink>
              )}

              {!isBlogOrContact && (
                <>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`cursor-pointer block px-4 py-2 rounded-md ${
                      activeSection === "about"
                        ? "bg-dark text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSetActive("about")}
                  >
                    About
                  </ScrollLink>

                  <ScrollLink
                    to="portfolio"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`cursor-pointer block px-4 py-2 rounded-md ${
                      activeSection === "portfolio"
                        ? "bg-dark text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSetActive("portfolio")}
                  >
                    Portfolio
                  </ScrollLink>
                </>
              )}

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `cursor-pointer block px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-dark text-white"
                      : "hover:bg-gray-100"
                  }`
                }
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer block px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-dark text-white"
                      : "hover:bg-gray-100"
                  }`
                }
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
