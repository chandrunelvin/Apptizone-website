import React, { useEffect, useState } from 'react';
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
  { label: "Contact Us", path: "/contact" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname]);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
      <div className="max-w-[1530px] mx-auto flex items-center justify-between px-6 pb-6 pt-6 md:px-10 md:pt-8 lg:px-16 lg:pt-[45px]">
        {/* Logo */}
        <Link to="/" className="h-[58px] w-[64px] shrink-0 bg-[url(https://c.animaapp.com/mms2hnc1lnJ5gE/img/image-38-1.png)] bg-cover bg-center md:h-[65px] md:w-[72px] lg:h-[71px] lg:w-20 flex flex-col justify-end">
          <img
            className="h-[18px] w-[64px] md:h-[20px] md:w-[72px] lg:h-[22.13px] lg:w-20"
            alt="Apptizone"
            src="https://c.animaapp.com/mms2hnc1lnJ5gE/img/image-39.png"
          />
        </Link>

        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white backdrop-blur md:h-14 md:w-14 lg:hidden"
        >
          <span className="relative block h-5 w-6">
            <span className={`absolute left-0 top-0 h-[2px] w-6 bg-current transition-all ${mobileMenuOpen ? 'top-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2 h-[2px] w-6 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 top-4 h-[2px] w-6 bg-current transition-all ${mobileMenuOpen ? 'top-2 -rotate-45' : ''}`} />
          </span>
        </button>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-[90px] lg:flex">
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

      <div
        className={`px-6 md:px-10 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div className={`overflow-hidden rounded-[28px] border border-white/20 bg-[#201f51]/95 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur transition-all duration-300 ${mobileMenuOpen ? 'max-h-[80vh] translate-y-0' : 'max-h-0 -translate-y-3 p-0 border-transparent'}`}>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path ||
                link.submenu?.some((sub) => location.pathname === sub.path);

              if (link.submenu) {
                return (
                  <div key={link.label} className="rounded-2xl bg-white/5 px-4 py-3">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((value) => !value)}
                      className="flex w-full items-center justify-between text-left font-['Black_Han_Sans',Helvetica] text-sm uppercase tracking-[0.08em] text-white"
                    >
                      <span>{link.label}</span>
                      <span className={`text-lg transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>▾</span>
                    </button>
                    <div className={`grid transition-all duration-300 ${mobileServicesOpen ? 'mt-3 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-2 pb-1">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.path}
                              className="rounded-xl px-3 py-2 font-['Bricolage_Grotesque',Helvetica] text-base text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`rounded-2xl px-4 py-3 font-['Black_Han_Sans',Helvetica] text-sm uppercase tracking-[0.08em] transition-colors ${
                    isActive ? 'bg-white text-[#201f51]' : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
