"use client"; // Necessário para o formulário funcionar

import { useState } from "react";
import Image from "next/image";
import { Metadata } from "next";

// Se der erro de Metadata no "use client", remova o export metadata e configure no layout ou use generateMetadata
// Mas para simplificar agora, vamos focar no visual.

export default function CoordenadoresPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      nome: e.target.nome.value,
      whatsapp: e.target.whatsapp.value,
      objetivo: ["COORDENADOR_VIP"], // Marcador especial para sua planilha
      mensagem: e.target.mensagem.value,
    };

    try {
      await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      setSuccess(true);
    } catch (error) {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      
      {/* --- SEÇÃO 1: HERO COM VÍDEO --- */}
      <section className="relative pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Texto */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase">
                Acesso Restrito • Coordenadores ABT
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Oi, aqui é o <span className="text-blue-500">Rafael.</span> 👋
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Eu sei que coordenar exige muito. O objetivo desta página é te mostrar como tirar o peso operacional das suas costas, sem tirar sua autonomia.
              </p>
            </div>

            {/* Vídeo Vertical */}
            <div className="relative aspect-[4/5] max-w-xs mx-auto md:max-w-none rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-black shadow-2xl shadow-blue-900/20">
               <video 
                  controls 
                  className="w-full h-full object-cover rounded-3xl"
                  playsInline
                >
                  <source src="/video-coordenadores.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: COMO FUNCIONA (NOVIDADE) --- */}
      <section className="py-16 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Como vamos fazer isso?</h2>
            <p className="text-gray-400">Sem burocracia. Processo simples e direto.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Linha conectora (só desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 -z-10 opacity-30"></div>

            {[
              { step: "01", title: "Alinhamento", text: "Você preenche o formulário abaixo e entendemos seu momento atual." },
              { step: "02", title: "Estruturação", text: "A CR8 monta a landing page e a automação para você validar." },
              { step: "03", title: "Operação", text: "Seus alunos chegam organizados. Você foca apenas no conteúdo." },
            ].map((item, i) => (
              <div key={i} className="text-center bg-black p-6 rounded-2xl border border-white/10 relative">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-blue-600/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: FORMULÁRIO VIP (NOVIDADE) --- */}
      <section id="form-vip" className="py-20 relative">
        <div className="container mx-auto px-4 max-w-2xl">
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Pré-Alinhamento</h2>
              <p className="text-gray-400 text-sm">
                Preencha para iniciarmos a conversa. <br/>
                <span className="text-blue-400">Zero compromisso. Controle total seu.</span>
              </p>
            </div>

            {success ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Recebido!</h3>
                <p className="text-gray-400">Vou analisar e te chamo no WhatsApp em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    placeholder="Como gosta de ser chamado"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    name="whatsapp"
                    required
                    placeholder="(DDD) 99999-9999"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Alguma observação? (Opcional)</label>
                  <textarea 
                    name="mensagem"
                    rows={3}
                    placeholder="Ex: Tenho um curso rodando em SP..."
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-900/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Iniciar Conversa (Sem Compromisso)"}
                </button>
                
                <p className="text-center text-xs text-gray-600 mt-4">
                  🔒 Seus dados ficam restritos à equipe CR8.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* --- RODAPÉ DISCRETO --- */}
      <footer className="py-8 text-center text-gray-800 text-sm">
        <p>CR8 Estratégias Digitais • Exclusivo Coordenadores</p>
      </footer>
    </main>
  );
}
