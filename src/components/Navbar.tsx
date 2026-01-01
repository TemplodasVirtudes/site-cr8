"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      {/* Logo */}
      <div className="text-xl font-bold tracking-tighter text-white">
        SURREAL<span className="text-purple-500">.</span>
      </div>

      {/* Links do Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        <a href="#" className="hover:text-white transition-colors">Cases</a>
        <a href="#" className="hover:text-white transition-colors">Serviços</a>
        <a href="#" className="hover:text-white transition-colors">Sobre</a>
      </div>

      {/* Botão de Contato */}
      <button className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors">
        Falar no WhatsApp
      </button>
    </motion.nav>
  );
}
