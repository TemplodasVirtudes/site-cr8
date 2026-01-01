"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Formulário Rápido",
    description: "Você responde algumas perguntas de 3 a 5 minutos para entendermos seu contexto.",
  },
  {
    id: "02",
    title: "Nossa Análise",
    description: "Analisamos seu momento e objetivo antes mesmo de falar com você.",
  },
  {
    id: "03",
    title: "Alinhamento",
    description: "Entramos em contato para alinhar o melhor caminho para o seu projeto.",
  },
  {
    id: "04",
    title: "Proposta",
    description: "Se fizer sentido para ambos, apresentamos a proposta e os próximos passos.",
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative w-full py-24 bg-[#24384a]"> {/* Fundo Grafite */}
      
      {/* Divisória no topo */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Título da Seção */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              O primeiro contato
            </h2>
            <p className="text-[#a4bac8] text-lg max-w-xl">
              Sem burocracia. Entendemos seu cenário antes de propor qualquer coisa.
            </p>
          </motion.div>

          {/* Nota de rodapé do título */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block text-right"
          >
            <span className="text-sm font-medium text-[#2e70f0] bg-[#2e70f0]/10 px-4 py-2 rounded-full border border-[#2e70f0]/20">
              Processo Exclusivo CR8
            </span>
          </motion.div>
        </div>

        {/* Grid de Passos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Linha conectora (aparece só no Desktop entre os cards) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[120%] h-[2px] bg-gradient-to-r from-[#5c7a8f]/30 to-transparent z-0 pointer-events-none" />
              )}

              <div className="relative z-10 bg-[#000000]/20 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-[#000000]/40 hover:border-[#2e70f0]/30 transition-all duration-300 h-full">
                
                {/* Número Grande */}
                <div className="text-5xl font-bold text-white/10 mb-4 group-hover:text-[#2e70f0]/20 transition-colors">
                  {step.id}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2e70f0] transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-[#a4bac8] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aviso Final */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#a4bac8] text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2e70f0]" />
            Sem compromisso. Sem obrigação de fechar.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
