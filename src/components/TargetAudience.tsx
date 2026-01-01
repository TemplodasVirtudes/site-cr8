"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const positives = [
  "Você coordena um curso, formação ou programa educacional",
  "Você oferece serviços ou treinamentos e sente que “cada lançamento é do zero”",
  "Você não tem landing page (ou tem, mas não converte)",
  "Você quer parar de depender apenas de indicações ou do Instagram",
  "Você precisa de processo, não só “arte bonita”"
];

const negatives = [
  "Você procura apenas um “site rápido e barato”",
  "Você não pretende estruturar atendimento ou vendas",
  "Você não está disposto(a) a organizar informações básicas",
  "Você espera resultados sem participação nenhuma"
];

export function TargetAudience() {
  return (
    <section id="quem-e" className="relative w-full py-24 bg-[#050505] overflow-hidden">
      
      {/* Elementos de Fundo (Decoração Sutil) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2e70f0]/30 to-transparent" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#2e70f0]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Isso é para você?
          </h2>
          <p className="text-[#a4bac8] max-w-2xl mx-auto text-lg">
            Não é uma página de venda. É uma página de posicionamento.
            <br />
            <span className="text-[#2e70f0]">Se faz sentido, avançamos.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* COLUNA POSITIVA (PARA VOCÊ) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2e70f0]/20 text-[#2e70f0]">
                <Check size={18} />
              </span>
              Para você se...
            </h3>

            {positives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group p-6 rounded-2xl bg-[#24384a]/30 border border-white/5 backdrop-blur-sm hover:bg-[#24384a]/50 hover:border-[#2e70f0]/30 transition-all duration-300 cursor-default"
              >
                <div className="flex gap-4 items-start">
                  <div className="mt-1 min-w-[20px] text-[#2e70f0]">
                    <Check size={20} />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors text-base md:text-lg">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* COLUNA NEGATIVA (NÃO É PARA VOCÊ) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-semibold text-gray-400 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 text-red-500/80">
                <X size={18} />
              </span>
              Talvez não seja se...
            </h3>

            {negatives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-black/40 border border-white/5 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              >
                <div className="flex gap-4 items-start">
                  <div className="mt-1 min-w-[20px] text-red-400/80">
                    <X size={20} />
                  </div>
                  <p className="text-gray-500 hover:text-gray-300 transition-colors text-base md:text-lg">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
            
            <div className="mt-6 p-4 rounded-lg bg-[#a4bac8]/10 border border-[#a4bac8]/20 text-center">
              <p className="text-sm text-[#a4bac8]">
                📌 E está tudo bem — cada negócio tem seu momento.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
