"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Marca e Descrição */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-2xl font-bold tracking-tighter text-white">
              CR8<span className="text-[#2e70f0]">.</span>
            </div>
            <p className="text-[#a4bac8] text-sm leading-relaxed max-w-sm">
              Transformamos cursos e serviços em estruturas digitais que vendem com processo.
              Sem improviso. Apenas método e performance.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Navegação</h4>
            <ul className="space-y-2 text-sm text-[#a4bac8]">
              <li><a href="#quem-e" className="hover:text-[#2e70f0] transition-colors">Para quem é</a></li>
              <li><a href="#problema" className="hover:text-[#2e70f0] transition-colors">O Problema</a></li>
              <li><a href="#solucao" className="hover:text-[#2e70f0] transition-colors">Solução CR8</a></li>
              <li><a href="#como-funciona" className="hover:text-[#2e70f0] transition-colors">Como Funciona</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#24384a]/30 flex items-center justify-center text-white hover:bg-[#2e70f0] hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#24384a]/30 flex items-center justify-center text-white hover:bg-[#2e70f0] hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#24384a]/30 flex items-center justify-center text-white hover:bg-[#2e70f0] hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
            <p className="text-[#5c7a8f] text-xs mt-4">
              Jaraguá do Sul, SC - Brasil
            </p>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#5c7a8f] text-xs">
            © {currentYear} CR8 Estratégias Digitais. Todos os direitos reservados.
          </p>
          <p className="text-[#5c7a8f] text-xs flex items-center gap-1">
            Desenvolvido com <span className="text-[#2e70f0]">Next.js</span> e Estratégia.
          </p>
        </div>
      </div>
    </footer>
  );
}
