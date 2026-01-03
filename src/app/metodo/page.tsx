"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";

export default function MetodoPage() {
  const router = useRouter();
  
  // Controle das Etapas (1 = Básico, 2 = Detalhes)
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    mensagem: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // URL DO SCRIPT
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJfADfNVyDAJZIHaxpJPRwVFOB_vgphgcwyL5l1yQo2pV0JfVYAsPjdYu3xcBoZm_z/exec";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para avançar do Passo 1 para o Passo 2
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.whatsapp) {
      setStep(2); // Avança visualmente
    } else {
      alert("Por favor, preencha nome e WhatsApp para continuar.");
    }
  };

  // Envio Final
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = {
        ...formData,
        objetivos: ["DIAGNOSTICO_METODO"], 
        date: new Date().toISOString(),
        origem: "Pagina Metodo (Funil 2 Passos)"
      };

      // Tenta enviar (Fire and Forget para não travar no mobile)
      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Feedback visual rápido
      setStatus("success");
      
      // REDIRECIONAMENTO FORÇADO (Resolve o bug do mobile)
      // Usamos window.location em vez de router.push para garantir a navegação
      setTimeout(() => {
        window.location.href = "/obrigado";
      }, 1000);

    } catch (error) {
      console.error(error);
      // Mesmo com erro, redireciona para não travar o usuário
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
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Solicitar Diagnóstico</h2>
              
              {/* Barra de Progresso */}
              <div className="flex items-center gap-2 mt-4">
                <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-[#2e70f0]' : 'bg-white/10'}`}></div>
                <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-[#2e70f0]' : 'bg-white/10'}`}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">Passo {step} de 2</p>
            </div>

            {status === "success" ? (
              <div className="text-center py-12 animate-fade-in">
                <Loader2 className="animate-spin text-[#2e70f0] mx-auto mb-4" size={40} />
                <p className="text-white font-bold">Gerando protocolo...</p>
                <p className="text-xs text-gray-500 mt-2">Você será redirecionado.</p>
              </div>
            ) : (
              <form onSubmit={step === 1 ? handleNextStep : handleSubmit} className="space-y-5">
                
                {/* --- PASSO 1: DADOS BÁSICOS --- */}
                <div className={step === 1 ? "block animate-fade-in" : "hidden"}>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Nome do Responsável</label>
                      <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="Seu nome" required className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-4 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Seu WhatsApp</label>
                      <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} placeholder="(DDD) 99999-9999" required className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-4 text-white focus:border-[#2e70f0] focus:outline-none transition-colors" />
                    </div>
                    
                    <button 
                      type="submit" // No passo 1, o submit dispara handleNextStep
                      className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-all flex justify-center items-center gap-2 mt-4"
                    >
                      Iniciar Diagnóstico <ArrowRight size={18} />
                    </button>
                    <p className="text-center text-xs text-gray-600 mt-4">
                      🔒 Vamos usar esses dados apenas para te retornar.
                    </p>
                  </div>
                </div>

                {/* --- PASSO 2: DETALHES --- */}
                <div className={step === 2 ? "block animate-fade-in" : "hidden"}>
                   <div className="space-y-5">
                    <div className="bg-[#2e70f0]/10 border border-[#2e70f0]/30 p-4 rounded-lg flex items-center gap-3 mb-6">
                      <CheckCircle2 className="text-[#2e70f0]" size={20} />
                      <p className="text-sm text-gray-300">Ótimo, <strong>{formData.nome}</strong>. Só mais um detalhe para nossa equipe técnica:</p>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Qual seu maior gargalo hoje?</label>
                      <textarea name="mensagem" value={formData.mensagem} onChange={handleInputChange} rows={3} placeholder="Ex: Falta de tempo, alunos no whatsapp, planilhas..." className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2e70f0] focus:outline-none transition-colors resize-none" />
                    </div>

                    <div className="flex gap-3">
                      <button 
                        type="button" 
                        onClick={() => setStep(1)}
                        className="w-1/4 bg-transparent border border-white/10 text-gray-400 font-bold py-4 rounded-lg hover:text-white transition-all text-sm"
                      >
                        Voltar
                      </button>
                      <button 
                        type="submit" 
                        disabled={status === "loading"}
                        className="w-3/4 bg-[#2e70f0] text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-all flex justify-center items-center gap-2 shadow-lg shadow-blue-900/30"
                      >
                        {status === "loading" ? "Processando..." : "Finalizar Envio"}
                        {status === "loading" && <Loader2 className="animate-spin" size={16} />}
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
