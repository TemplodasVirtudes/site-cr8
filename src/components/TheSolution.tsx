"use client";

import { motion } from "framer-motion";
import { Layers, Monitor, MessageCircle, GitMerge, FileText, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Landing Pages Estratégicas",
    description: "Páginas claras, rápidas e focadas em conversão. Sem enrolação.",
  },
  {
    icon: FileText,
    title: "Formulários Inteligentes",
    description: "Alinhados às normas vigentes e desenhados para qualificar o lead.",
  },
  {
    icon: MessageCircle,
    title: "Integração WhatsApp",
    description: "Automações que iniciam a conversa imediatamente após o cadastro.",
  },
  {
    icon: GitMerge,
    title: "Organização de Funil",
    description: "Estruturamos o caminho do cliente desde o clique até a venda.",
  },
  {
    icon: Layers,
    title: "Base Reutilizável",
    description: "Criamos ativos que você aproveita para futuras turmas ou lançamentos.",
  }
];

export function TheSolution() {
  return (
    <section id="solucao" className="relative w-full py-24 bg-[#000000] overflow-hidden">
      
      {/* Luz de Fundo Azul (A Solução) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2e70f0]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            O que a <span className="text-[#2e70f0]">CR8</span> faz?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#a4bac8] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            O nosso trabalho começa organizando o caminho. Não vendemos fórmulas prontas.
            <br />
            <strong className="text-white font-semibold">Construímos estruturas digitais sob medida.</strong>
          </motion.p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(46, 112, 240, 0.05)" }}
              className="group p-8 rounded-2xl bg-[#24384a]/20 border border-white/5 hover:border-[#2e70f0]/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#2e70f0]/10 text-[#2e70f0] group-hover:bg-[#2e70f0] group-hover:text-white transition-all">
                <item.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2e70f0] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-[#a4bac8] text-sm leading-relaxed group-hover:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}

          {/* Card de Aviso (O último card diferente) */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
             className="p-8 rounded-2xl border border-dashed border-[#5c7a8f]/40 flex flex-col justify-center items-center text-center bg-transparent"
          >
            <div className="text-[#5c7a8f] mb-4">
              <CheckCircle2 size={32} />
            </div>
            <p className="text-[#a4bac8] text-sm">
              📌 O escopo exato só é definido após reunião de alinhamento e aceite.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
