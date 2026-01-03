"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detectar rolagem
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Para quem é", href: "#quem-e" },
    { name: "O Problema", href: "#problema" },
    { name: "Solução", href: "#solucao" },
    { name: "Como Funciona", href: "#como-funciona" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white z-50">
          CR8<span className="text-[#2e70f0]">.</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#2e70f0] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON DESKTOP */}
        <div className="hidden md:block">
          <Link 
            href="#inscricao" // Aponta para o ID do formulário
            className="px-6 py-2 text-sm font-bold bg-[#2e70f0] text-white rounded-lg hover:bg-blue-600 transition-all shadow-[0_0_15px_rgba(46,112,240,0.3)]"
          >
            Quero conversar
          </Link>
        </div>

        {/* MENU MOBILE ICON */}
        <button 
          className="md:hidden text-white z-50 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MENU MOBILE (O BLOCO QUE FALTAVA) --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)} // Fecha ao clicar
                className="text-2xl font-bold text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="#inscricao"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-4 text-lg font-bold bg-[#2e70f0] text-white rounded-full hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(46,112,240,0.4)]"
            >
              Quero conversar
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* A LINHA MÁGICA INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400/20 to-transparent" />
      
    </motion.header>
  );
}
