import React from "react";

const BorderMagicButton = ({ name, icon, link }) => {
  return (
    <a href={link} className="inline-block" target="_blank">
      <button className="relative inline-flex h-8 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl space-x-2">
          {icon && <img src={icon} alt={`${name} icon`} className="mr-1 h-4 w-4" />} {/* Render icon as img */}
          <span>{name}</span>
          <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
        </span>
      </button>
    </a>
  );
};

export default BorderMagicButton;
