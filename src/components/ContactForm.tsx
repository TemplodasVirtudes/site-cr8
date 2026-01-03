"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const router = useRouter(); // Inicializa o roteador

  // Estados dos campos
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    cidade: "",
    instagram: "",
    cenario: "",
    mensagem: "",
  });

  // Estado dos checkboxes
  const [objetivos, setObjetivos] = useState<string[]>([]);

  // Estado de envio
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // URL DO SCRIPT (Que você forneceu)
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJfADfNVyDAJZIHaxpJPRwVFOB_vgphgcwyL5l1yQo2pV0JfVYAsPjdYu3xcBoZm_z/exec";

  // Função para atualizar inputs de texto
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para atualizar checkboxes
  const handleCheckboxChange = (goal: string) => {
    setObjetivos((prev) => 
      prev.includes(goal) ? prev.filter(item => item !== goal) : [...prev, goal]
    );
  };

  // Função de Envio
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = {
        ...formData,
        objetivos: objetivos.join(", "),
        date: new Date().toISOString(),
        origem: "Site Principal (ContactForm)"
      };

      // Envia para o Google Sheets
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Se chegou aqui, deu certo!
      setStatus("success");
      
      // Espera 1 segundo mostrando sucesso e redireciona
      setTimeout(() => {
        router.push("/obrigado");
      }, 1000);

    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
    }
  };

  return (
    <section id="inscricao" className="relative w-full py-24 bg-[#000000]">
      {/* Luz de fundo */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2e70f0]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Vamos estruturar o seu projeto?
          </motion.h2>
          <p className="text-[#a4bac8] text-lg max-w-2xl mx-auto">
            Leva de 3 a 5 minutos. Suas respostas ativam nossa análise automática.
          </p>
        </div>

        {status === "success" ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#24384a]/40 border border-[#2e70f0] rounded-2xl p-12 text-center"
          >
            <CheckCircle2 size={64} className="text-[#2e70f0] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Recebemos sua aplicação!</h3>
            <p className="text-[#a4bac8] text-lg">
              Redirecionando para a confirmação...
            </p>
            <div className="mt-6 flex justify-center">
              <Loader2 className="animate-spin text-[#2e70f0]" size={32} />
            </div>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
            onSubmit={handleSubmit}
          >
            
            {/* BLOCO 1 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2e70f0] text-xs">1</span>
                Sobre você
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#a4bac8]">Nome completo *</label>
                  <input required name="nome" value={formData.nome} onChange={handleInputChange} type="text" placeholder="Como gosta de ser chamado" className="w-full bg-[#24384a]/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#a4bac8]">WhatsApp *</label>
                  <input required name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} type="tel" placeholder="(00) 00000-0000" className="w-full bg-[#24384a]/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#a4bac8]">E-mail corporativo *</label>
                  <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="seu@email.com" className="w-full bg-[#24384a]/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#a4bac8]">Cidade / Estado</label>
                  <input name="cidade" value={formData.cidade} onChange={handleInputChange} type="text" placeholder="Ex: São Paulo, SP" className="w-full bg-[#24384a]/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-[#a4bac8]">Instagram profissional (Opcional)</label>
                <input name="instagram" value={formData.instagram} onChange={handleInputChange} type="text" placeholder="@seuprojeto" className="w-full bg-[#24384a]/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="w-full h-px bg-white/5" />

            {/* BLOCO 2 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2e70f0] text-xs">2</span>
                Seu contexto atual
              </h3>

              <div className="space-y-4">
                <label className="text-sm text-[#a4bac8]">Hoje, você se encaixa melhor em qual cenário?</label>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Coordeno um curso/formação", "Ofereço serviços profissionais", "Projeto educacional nascendo", "Ainda estou só na ideia"].map((option) => (
                    <label key={option} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${formData.cenario === option ? "border-[#2e70f0] bg-[#2e70f0]/10" : "border-white/10 bg-[#24384a]/20 hover:border-[#2e70f0]/50"}`}>
                      <input 
                        type="radio" 
                        name="cenario" 
                        value={option}
                        checked={formData.cenario === option}
                        onChange={handleInputChange}
                        className="accent-[#2e70f0] w-5 h-5" 
                      />
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-white/5" />

            {/* BLOCO 3 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2e70f0] text-xs">3</span>
                Objetivo e Expectativa
              </h3>

              <div className="space-y-2">
                <label className="text-sm text-[#a4bac8]">Qual é o principal objetivo agora?</label>
                <div className="grid md:grid-cols-2 gap-3">
                   {["Organizar processo de venda", "Ter uma LP profissional", "Captar leads qualificados", "Automatizar atendimento"].map((goal) => (
                     <label key={goal} className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${objetivos.includes(goal) ? "bg-[#2e70f0]/20" : "hover:bg-white/5"}`}>
                       <input 
                         type="checkbox" 
                         checked={objetivos.includes(goal)}
                         onChange={() => handleCheckboxChange(goal)}
                         className="accent-[#2e70f0] w-4 h-4 rounded" 
                       />
                       <span className="text-gray-300 text-sm">{goal}</span>
                     </label>
                   ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-[#a4bac8]">O que mais te motivou a nos procurar?</label>
                <textarea name="mensagem" value={formData.mensagem} onChange={handleInputChange} rows={3} placeholder="Conte um pouco sobre sua maior dificuldade hoje..." className="w-full bg-[#24384a]/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors resize-none" />
              </div>
            </div>

            {/* MENSAGEM DE ERRO */}
            {status === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400">
                <AlertCircle size={20} />
                <span>Ocorreu um erro ao enviar. Tente novamente ou chame no WhatsApp.</span>
              </div>
            )}

            {/* BOTÃO */}
            <div className="pt-6 border-t border-white/10 flex flex-col items-center text-center gap-6">
              <p className="text-sm text-[#5c7a8f]">
                <CheckCircle2 size={16} className="inline mr-2 text-[#2e70f0]" />
                Seus dados serão enviados diretamente para nossa equipe.
              </p>
              
              <button 
                disabled={status === "loading"}
                type="submit"
                className="group relative px-10 py-5 bg-[#2e70f0] text-white font-bold text-lg rounded-full overflow-hidden shadow-[0_0_20px_rgba(46,112,240,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(46,112,240,0.6)] w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {status === "loading" ? "Enviando..." : "Enviar e seguir para a conversa"}
                  {status === "loading" ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                </span>
                {status !== "loading" && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />}
              </button>
            </div>

          </motion.form>
        )}

      </div>
    </section>
  );
}