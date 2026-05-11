import { useState, useEffect } from "react";
import { ServicesDropdownInteractive } from "./ServicesDropdownInteractive";

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-services-dropdown', handler);
    return () => window.removeEventListener('open-services-dropdown', handler);
  }, []);

  return (
    <>
      {/* Desktop Services Link - Clickable Overlay (for desktop header) */}
      <div
        className="absolute cursor-pointer left-[510px] top-[49px] h-[42px] w-[90px] z-[80] hover:opacity-80 transition-opacity hidden md:block"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-label="Toggle services menu"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      />

      {/* Interactive Dropdown */}
      <ServicesDropdownInteractive isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
