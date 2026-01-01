"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ícones para mobile

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detectar rolagem para aumentar o efeito de vidro
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
        scrolled ? "bg-black/80 backdrop-blur-xl" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-2xl font-bold tracking-tighter text-white">
          CR8<span className="text-[#2e70f0]">.</span> {/* Azul da paleta */}
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              {/* Efeito sutil de hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#a4bac8] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link 
            href="#contato"
            className="px-6 py-2 text-sm font-bold bg-[#2e70f0] text-white rounded-lg hover:bg-blue-600 transition-all shadow-[0_0_15px_rgba(46,112,240,0.3)]"
          >
            Quero conversar
          </Link>
        </div>

        {/* MENU MOBILE ICON */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* A BORDA PRATEADA MÁGICA (Inspired by Meeting ABT) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400/50 to-transparent" />
      
    </motion.header>
  );
}