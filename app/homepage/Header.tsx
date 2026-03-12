"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#problem" },
  { label: "Demo", href: "#demo" },
  { label: "Prompt Packs", href: "#context-packs" },
  { label: "How It Works", href: "#how-it-works" },
];

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);

export const Header = () => {
  const [open, setOpen] = useState(false);

  // lock body scroll when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="border-b border-[#e2e5ec]/10">
        <div className="flex justify-between py-6 md:py-3 max-w-6xl mx-auto items-center text-[#c9d3ee] text-sm px-4">
          <h1 className="font-semibold text-md">Merlin Context Packs</h1>

          {/* desktop nav */}
          <ul className="hidden lg:flex gap-12">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-[#e2e5ec] transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#demo" className="hidden lg:block bg-[#666fdf] px-3 py-1 rounded-lg text-[#e2e5ec] font-semibold border border-[#c9d3ee]/50 cursor-pointer">
            Try Demo
          </a>

          {/* mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-[#c9d3ee] cursor-pointer"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* mobile sidebar + overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.75, ease: [0.72, 0.72, 0, 1] }}
              className="lg:hidden fixed top-0 right-0 z-50 h-screen w-full sm:w-80 bg-[#0b0c14] border-l border-[#e2e5ec]/10 flex flex-col"
            >
              {/* sidebar header */}
              <div className="flex items-center justify-between px-5 py-6 border-b border-[#e2e5ec]/10">
                <span className="font-semibold text-sm text-[#c9d3ee]">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-[#c9d3ee] cursor-pointer"
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* nav links */}
              <ul className="flex flex-col px-4 pt-4 flex-1">
                {navLinks.map((l) => (
                  <li key={l.label} className="border-b border-[#e2e5ec]/8">
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-4 text-sm text-[#c9d3ee] hover:bg-white/5 hover:text-[#e2e5ec] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* bottom CTA */}
              <div className="px-4 pb-6">
                <a
                  href="#demo"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-[#666fdf] px-3 py-2.5 rounded-lg text-[#e2e5ec] font-semibold border border-[#c9d3ee]/50 text-sm"
                >
                  Try Demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}