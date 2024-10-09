import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

function CustomButton({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="text-black py-4 px-8 rounded-full bg-amber-gold hover:bg-text-secondary transition-all duration-300">
      {label}
    </button>
  );
}

export default CustomButton;
