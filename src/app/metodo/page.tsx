"use client";

import { useState } from "react";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";

export default function MetodoPage() {
  
  // Controle das Etapas (1 = Identidade, 2 = Diagnóstico)
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Estado COMPLETO (Igual ao da Home)
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    cidade: "",
    instagram: "",
    cenario: "", // Radio button
    mensagem: "",
  });

  // Estado para os Objetivos (Checkboxes)
  const [objetivos, setObjetivos] = useState<string[]>([]);

  // URL DO SCRIPT
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJfADfNVyDAJZIHaxpJPRwVFOB_vgphgcwyL5l1yQo2pV0JfVYAsPjdYu3xcBoZm_z/exec";

  // Atualiza campos de texto
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Atualiza Radio Button (Cenário)
  const handleRadioChange = (val: string) => {
    setFormData((prev) => ({ ...prev, cenario: val }));
  };

  // Atualiza Checkboxes (Objetivos)
  const handleCheckboxChange = (goal: string) => {
    setObjetivos((prev) => 
      prev.includes(goal) ? prev.filter(item => item !== goal) : [...prev, goal]
    );
  };

  // Função para avançar do Passo 1 para o Passo 2
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    // Validação básica: Nome, Zap e Email são obrigatórios
    if (formData.nome && formData.whatsapp && formData.email) {
      setStep(2); // Avança visualmente
      // Rola a tela suavemente para o topo do formulário
      document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Por favor, preencha os campos obrigatórios (Nome, WhatsApp e Email).");
    }
  };

  // Envio Final
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = {
        ...formData,
        objetivos: objetivos.join(", "), // Junta os objetivos numa string
        date: new Date().toISOString(),
        origem: "Pagina Metodo (Form Completo)"
      };

      // Envia para o Google Sheets
      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      
      // REDIRECIONAMENTO FORÇADO (Mobile Friendly)
      setTimeout(() => {
        window.location.href = "/obrigado";
      }, 1000);

    } catch (error) {
      console.error(error);
      window.location.href = "/obrigado";
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#2e70f0]/30">
      
      {/* HERO SECTION */}
      <section className="relative pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2e70f0]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Texto */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#2e70f0] animate-pulse"></span>
                Método Operacional CR8
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Sua operação precisa ser tão profissional quanto <span className="text-[#2e70f0]">seu conteúdo.</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-[#2e70f0]/50 pl-6">
                Estrutura de bastidores validada para coordenadores e formadores.
              </p>
            </div>

            {/* VÍDEO */}
            <div className="relative aspect-[9/16] max-w-[280px] mx-auto md:max-w-[320px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-900 to-black shadow-2xl shadow-[#2e70f0]/10">
               <video 
                  controls 
                  className="w-full h-full object-cover"
                  playsInline
                >
                  <source src="/video-metodo.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREA DO FORMULÁRIO */}
      <section id="diagnostico" className="py-12 relative">
        <div className="container mx-auto px-4 max-w-xl">
          
          <div className="bg-gradient-to-b from-white/10 to-black border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md shadow-2xl transition-all duration-500">
            
            <div className="mb-6 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-bold text-white mb-2">
                {step === 1 ? "1. Seus Dados" : "2. Diagnóstico"}
              </h2>
              
              {/* Barra de Progresso */}
              <div className="flex items-center gap-2 mt-2">
                <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-[#2e70f0]' : 'bg-white/10'}`}></div>
                <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-[#2e70f0]' : 'bg-white/10'}`}></div>
              </div>
            </div>

            {status === "success" ? (
              <div className="text-center py-12 animate-fade-in">
                <Loader2 className="animate-spin text-[#2e70f0] mx-auto mb-4" size={40} />
                <p className="text-white font-bold">Enviando aplicação...</p>
              </div>
            ) : (
              <form onSubmit={step === 1 ? handleNextStep : handleSubmit} className="space-y-5">
                
                {/* --- PASSO 1: DADOS COMPLETOS DE CONTATO --- */}
                <div className={step === 1 ? "block animate-fade-in" : "hidden"}>
                  <div className="space-y-4">
                    
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Nome Completo *</label>
                      <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Seu nome" required className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">WhatsApp *</label>
                        <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="(DDD) 99999-9999" required className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                        </div>
                        <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Cidade/UF</label>
                        <input type="text" name="cidade" value={formData.cidade} onChange={handleInputChange} placeholder="Ex: SP" className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                        </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">E-mail Corporativo *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" required className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Instagram (Opcional)</label>
                      <input type="text" name="instagram" value={formData.instagram} onChange={handleInputChange} placeholder="@seuprojeto" className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-all flex justify-center items-center gap-2 mt-6"
                    >
                      Avançar para Diagnóstico <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                {/* --- PASSO 2: CONTEXTO E OBJETIVOS --- */}
                <div className={step === 2 ? "block animate-fade-in" : "hidden"}>
                   <div className="space-y-6">
                    
                    {/* Feedback visual de quem é o usuário */}
                    <div className="bg-[#2e70f0]/10 border border-[#2e70f0]/30 p-3 rounded-lg flex items-center gap-3">
                      <CheckCircle2 className="text-[#2e70f0]" size={18} />
                      <p className="text-xs text-gray-300">Vamos analisar o perfil de: <strong>{formData.nome}</strong></p>
                    </div>

                    {/* Cenário (Radio) */}
                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Qual seu cenário atual?</label>
                        <div className="grid grid-cols-1 gap-2">
                        {["Coordeno um curso/formação", "Ofereço serviços profissionais", "Projeto educacional nascendo", "Ainda estou só na ideia"].map((option) => (
                            <label key={option} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${formData.cenario === option ? "border-[#2e70f0] bg-[#2e70f0]/10" : "border-white/10 bg-black/40 hover:border-white/30"}`}>
                                <input 
                                type="radio" 
                                name="cenario" 
                                checked={formData.cenario === option}
                                onChange={() => handleRadioChange(option)}
                                className="accent-[#2e70f0] w-4 h-4" 
                                />
                                <span className="text-gray-300 text-xs md:text-sm">{option}</span>
                            </label>
                        ))}
                        </div>
                    </div>

                    {/* Objetivos (Checkbox) */}
                    <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">O que você busca?</label>
                        <div className="grid grid-cols-2 gap-2">
                        {["Organizar vendas", "Landing Page Pro", "Captar Leads", "Automatizar Zap"].map((goal) => (
                            <label key={goal} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${objetivos.includes(goal) ? "border-[#2e70f0] bg-[#2e70f0]/10" : "border-white/10 bg-black/40 hover:border-white/30"}`}>
                                <input 
                                type="checkbox" 
                                checked={objetivos.includes(goal)}
                                onChange={() => handleCheckboxChange(goal)}
                                className="accent-[#2e70f0] w-4 h-4 rounded" 
                                />
                                <span className="text-gray-300 text-xs">{goal}</span>
                            </label>
                        ))}
                        </div>
                    </div>

                    {/* Mensagem */}
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Qual seu maior gargalo hoje?</label>
                      <textarea name="mensagem" value={formData.mensagem} onChange={handleInputChange} rows={2} placeholder="Ex: Falta de tempo..." className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors resize-none text-sm" />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button 
                        type="button" 
                        onClick={() => setStep(1)}
                        className="w-1/3 bg-transparent border border-white/10 text-gray-400 font-bold py-3 rounded-lg hover:text-white transition-all text-sm"
                      >
                        Voltar
                      </button>
                      <button 
                        type="submit" 
                        disabled={status === "loading"}
                        className="w-2/3 bg-[#2e70f0] text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-all flex justify-center items-center gap-2 shadow-lg shadow-blue-900/30 text-sm"
                      >
                        {status === "loading" ? "Processando..." : "Finalizar Envio"}
                      </button>
                    </div>
                  </div>
                </div>

              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
