import React from 'react';

interface EditTextProps {
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  id?: string;
  variant?: string;
  size?: string;
  padding?: string;
  position?: string;
  className?: string;
  layout_width?: string;
}

const EditText: React.FC<EditTextProps> = ({
  placeholder = "",
  type = "text",
  name = "",
  value = "",
  onChange,
  onFocus,
  onBlur,
  id = "",
  variant = "default",
  size = "md",
  padding = "md",
  position = "relative",
  className = "",
  layout_width = "flex-1"
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      className={`w-full h-[51px] bg-white rounded-[10px] border border-solid border-[#bfbfbf] [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[#333] text-xl px-[17px] focus:outline-none focus:border-primary transition-all duration-300 ${className} ${layout_width}`}
    />
  );
};

export default EditText;
