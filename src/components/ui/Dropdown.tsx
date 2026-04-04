import React, { useState } from 'react';

const services = [
  "WhatsApp Marketing",
  "SEO",
  "Social Media Management",
  "Search Engine Marketing",
  "Web & App Design",
  "WhatsApp Integration",
];

interface DropdownProps {
  name?: string;
  value?: string;
  onChange?: (e: { target: { name: string; value: string } }) => void;
  id?: string;
  variant?: string;
  size?: string;
  padding?: string;
  position?: string;
  className?: string;
  layout_gap?: string;
  layout_width?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  name = "",
  value = "",
  onChange,
  className = "",
  layout_width = "flex-1"
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (s: string) => {
    if (onChange) {
      onChange({ target: { name, value: s } });
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full ${className} ${layout_width}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-full h-[51px] bg-white rounded-[10px] border border-solid border-[#bfbfbf] flex items-center cursor-pointer px-[17px] text-left focus:outline-none focus:border-primary transition-all duration-300`}
      >
        <span className={`[font-family:'Bricolage_Grotesque',Helvetica] font-normal text-xl flex-1 truncate ${value ? "text-[#333]" : "text-[#cfcdcd]"}`}>
          {value || "Select Service"}
        </span>
        <img className="w-[30px] h-[30px] ml-2" alt="down" src="https://c.animaapp.com/mms4ffjl5N2sBn/img/lsicon-down-filled.svg" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-[#bfbfbf] rounded-[10px] z-[60] shadow-lg mt-1 overflow-hidden">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSelect(s)}
              className="w-full px-4 py-3 hover:bg-[#eeeefb] text-left [font-family:'Bricolage_Grotesque',Helvetica] text-[#333] text-lg transition-colors duration-200"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
