import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "#services" },
  { label: "Projects", path: "#projects" },
  { label: "Contact Us", path: "#contact" },
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="relative z-50 w-full bg-[#31266e]">
      <div className="max-w-[1530px] mx-auto flex items-center justify-between px-16 pt-[45px] pb-6">
        {/* Logo */}
        <Link to="/" className="w-20 h-[71px] flex flex-col justify-end bg-[url(https://c.animaapp.com/mms2hnc1lnJ5gE/img/image-38-1.png)] bg-cover bg-center shrink-0">
          <img
            className="w-20 h-[22.13px]"
            alt="Apptizone"
            src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/image-39.png"
          />
        </Link>
        {/* Nav links */}
        <nav className="flex items-center gap-[90px]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <div key={link.label} className="relative flex flex-col items-center gap-1">
                <Link 
                  to={link.path} 
                  className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-9 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity uppercase"
                >
                  {link.label}
                </Link>
                {isActive && (
                  <img
                    className="w-[61px] h-[7px]"
                    alt="active"
                    src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/vector-235.svg"
                  />
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
