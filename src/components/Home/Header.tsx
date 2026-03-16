import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: "About", path: "/about" },
  { 
    label: "Services", 
    path: "#services",
    submenu: [
      { label: "UIUX Design", path: "/services/ui-ux" },
      { label: "SEO", path: "/services/seo" },
      { label: "SEM", path: "/services/sem" },
      { label: "Social Media Marketing", path: "/services/social-media-marketing" },
      { label: "WhatsApp Marketing", path: "/services/whatsapp-marketing" },
      { label: "WhatsApp Integration", path: "/services/whatsapp-integration" },
    ]
  },
  { label: "Projects", path: "#projects" },
  { label: "Contact Us", path: "#contact" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
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
            const isActive = location.pathname === link.path || 
              (link.submenu?.some(sub => location.pathname === sub.path));
            
            return (
              <div 
                key={link.label} 
                className="relative group flex flex-col items-center gap-1"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {link.submenu ? (
                  <span className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-9 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity uppercase">
                    {link.label}
                  </span>
                ) : (
                  <Link 
                    to={link.path} 
                    className="font-['Black_Han_Sans',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-9 whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity uppercase"
                  >
                    {link.label}
                  </Link>
                )}
                
                {isActive && (
                  <img
                    className="w-[61px] h-[7px]"
                    alt="active"
                    src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/vector-235.svg"
                  />
                )}

                {/* Submenu */}
                {link.submenu && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${activeSubmenu === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="bg-[#31266e] border border-[#4a3b9d] rounded-xl py-4 px-6 shadow-2xl min-w-[240px]">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="block py-2 text-white/90 hover:text-white font-['Black_Han_Sans',Helvetica] text-sm tracking-wider uppercase transition-colors whitespace-nowrap"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
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
