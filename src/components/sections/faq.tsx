"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Como funciona a estrutura de campanha para Terapeutas Capilares e Coordenadores?",
    answer: "Não fazemos apenas 'posts'. Criamos um ecossistema integrado. Conectamos sua atração (Stories/Ads) diretamente a uma Landing Page de Alta Conversão com formulário inteligente. O lead não fica perdido no Direct; ele cai classificado na sua planilha e no seu WhatsApp, pronto para o agendamento ou matrícula.",
  },
  {
    question: "Tenho um volume alto de mensagens e perco o controle. O Método CR8 resolve isso?",
    answer: "Sim. Esse é o 'Fluxo Invisível'. Substituímos o controle manual por triagem automática. Nossa tecnologia filtra quem são os curiosos e quem são os compradores reais antes mesmo de você falar 'oi'. Ideal para quem não pode perder tempo respondendo perguntas repetitivas.",
  },
  {
    question: "Minhas planilhas atuais não são automatizadas. Vocês integram tudo?",
    answer: "Absolutamente. A CR8 elimina o 'Ctrl+C / Ctrl+V'. Integramos os dados da página de captura diretamente ao seu CRM ou Google Sheets. Se um aluno preenche a ficha, o contrato pode ser gerado automaticamente, o financeiro notificado e o acesso liberado, sem intervenção humana.",
  },
  {
    question: "A CR8 é uma agência de marketing ou de tecnologia?",
    answer: "Somos uma consultoria de Engenharia Digital. Enquanto agências focam apenas na estética (o post bonito), nós focamos na infraestrutura que sustenta a venda. Entregamos o processo operacional que garante que o marketing funcione sem gerar o caos na sua rotina.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Elementos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2e70f0]/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2e70f0]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-[#2e70f0] font-bold tracking-widest text-xs uppercase mb-3 block">
            Dúvidas Estratégicas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-[#a4bac8] mt-4 max-w-2xl mx-auto">
            Entenda como transformamos caos operacional em máquinas de venda.
          </p>
        </div>

        {/* ESTRUTURA SEMÂNTICA PARA AIO/SEO (Schema.org) */}
        <div 
          className="space-y-4" 
          itemScope 
          itemType="https://schema.org/FAQPage"
        >
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden transition-colors hover:border-[#2e70f0]/30"
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-white text-lg pr-8" itemProp="name">
                  {item.question}
                </span>
                <span className="text-[#2e70f0]">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div 
                      className="px-6 pb-6 text-[#a4bac8] leading-relaxed border-t border-white/5 pt-4"
                      itemScope 
                      itemProp="acceptedAnswer" 
                      itemType="https://schema.org/Answer"
                    >
                      <span itemProp="text">{item.answer}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}