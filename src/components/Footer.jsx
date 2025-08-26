import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0F9E98] text-white text-sm px-6 py-2 flex justify-between items-center absolute -bottom-0 left-0 w-full z-50">
      <div className="flex items-center space-x-2">
        <img src="/logo-4-sm.png" alt="Logo" className="h-6" />
        <span>PT. INTI DAYA ENERGITAMA - MERSI HOSPITAL © 2020</span>
      </div>
      <span>Unit: Farmasi Rawat Inap</span>
    </footer>
  );
}
