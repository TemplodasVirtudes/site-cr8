"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";

const problems = [
  {
    title: "Divulgação Improvisada",
    description: "Cursos sendo divulgados apenas por posts soltos e stories que somem em 24h.",
  },
  {
    title: "Sem Página de Conversão",
    description: "Falta de landing page ou uso de formulários confusos e sem padrão visual.",
  },
  {
    title: "Leads Perdidos",
    description: "Pessoas interessadas chegam, mas você perde o contato por falta de organização.",
  },
  {
    title: "WhatsApp Caótico",
    description: "Atendimento manual desorganizado, misturando pessoal com profissional.",
  },
  {
    title: "Ciclo do Zero",
    description: "Cada nova turma exige que você 'reinvente a roda' e comece tudo do zero.",
  }
];

export function TheProblem() {
  return (
    <section id="problema" className="relative w-full py-24 bg-[#24384a]">
      
      {/* Divisória suave no topo */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      {/* Container alinhado */}
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LADO ESQUERDO: Títulos e Impacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              <AlertTriangle size={14} />
              Diagnóstico Inicial
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              O que vemos antes de entrar no projeto.
            </h2>
            
            <p className="text-[#a4bac8] text-lg mb-8 leading-relaxed">
              A maioria dos profissionais excelentes no que fazem pecam na estrutura digital. 
              O resultado é muito esforço operacional para pouco resultado comercial.
            </p>

            {/* Frase de Impacto */}
            <div className="p-6 rounded-xl bg-black/20 border-l-4 border-[#2e70f0]">
              <p className="text-xl text-white font-medium italic">
                "Isso não é falta de esforço. <br />
                <span className="text-[#2e70f0] not-italic font-bold">É falta de estrutura."</span>
              </p>
            </div>
          </motion.div>

          {/* LADO DIREITO: Lista de Problemas (Cards) */}
          <div className="space-y-4">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ x: -5, backgroundColor: "rgba(0,0,0,0.2)" }}
                className="group flex items-center gap-6 p-5 rounded-xl bg-black/10 border border-white/5 transition-all cursor-default"
              >
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5c7a8f]/20 text-[#a4bac8] group-hover:bg-red-500/10 group-hover:text-red-400 transition-colors">
                  <ArrowRight size={20} />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#a4bac8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
