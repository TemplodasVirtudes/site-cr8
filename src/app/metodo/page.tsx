"use client";

import { useState } from "react";
// Removemos o import Image pois não está sendo usado no momento, ou mantenha se for usar no futuro

export default function MetodoPage() { // <--- NOME ATUALIZADO AQUI
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      nome: e.target.nome.value,
      whatsapp: e.target.whatsapp.value,
      objetivo: ["DIAGNOSTICO_METODO"], 
      mensagem: e.target.mensagem.value,
    };

    try {
      await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      setSuccess(true);
    } catch (error) {
      setSuccess(true); 
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      
      {/* --- SEÇÃO 1: HERO INSTITUCIONAL --- */}
      <section className="relative pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        {/* Fundo Atmosférico */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Texto Focado em Dores/Solução */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Método Operacional CR8
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Sua operação precisa ser tão profissional quanto <span className="text-blue-500">seu conteúdo.</span>
              </h1>
              
              <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-blue-900/50 pl-6">
                Para coordenadores e formadores que não podem perder tempo com processos manuais. 
                Uma estrutura de bastidores que funciona sozinha.
              </p>
            </div>

            {/* Vídeo / Motion Graphics */}
            <div className="relative aspect-[9/16] max-w-[280px] mx-auto md:max-w-[320px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-900 to-black shadow-2xl shadow-blue-900/10">
               <video 
                  controls 
                  className="w-full h-full object-cover"
                  playsInline
                  // poster="/capa-video.jpg" // Se tiver uma capa, descomente aqui
                >
                  {/* ATENÇÃO: O arquivo deve se chamar exatamente 'video-metodo.mp4' na pasta public */}
                  <source src="/video-metodo.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: O CHECKLIST (DIAGNÓSTICO) --- */}
      <section className="py-20 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">Essa estrutura é para o seu momento?</h2>
            <p className="text-gray-400">Nossa tecnologia foi desenhada especificamente para:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quem tem Conteúdo", desc: "Seu produto/curso já é validado, mas a entrega te consome." },
              { title: "Quem busca Ordem", desc: "Você quer sair do 'amadorismo' do WhatsApp misturado." },
              { title: "Quem quer Escala", desc: "Preparar o terreno para receber mais alunos sem enlouquecer." },
            ].map((item, i) => (
              <div key={i} className="bg-black/40 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                <div className="text-blue-500 text-xl mb-3">✓</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: FORMULÁRIO DE APLICAÇÃO --- */}
      <section id="diagnostico" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-xl">
          
          <div className="bg-gradient-to-b from-white/10 to-black border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md shadow-2xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Solicitar Diagnóstico</h2>
              <p className="text-gray-400 text-sm">
                Analise se a nossa estrutura comporta a sua demanda. <br/>
                <span className="text-blue-400">Sem custo. Sem compromisso.</span>
              </p>
            </div>

            {success ? (
              <div className="text-center py-12 animate-fade-in bg-green-500/5 rounded-xl border border-green-500/20">
                <div className="text-green-400 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-white mb-2">Solicitação Recebida</h3>
                <p className="text-gray-400 text-sm px-4">Nossa equipe técnica entrará em contato para agendar o diagnóstico.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Nome do Responsável</label>
                  <input type="text" name="nome" required className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Contato (WhatsApp)</label>
                  <input type="tel" name="whatsapp" required className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Qual seu maior gargalo hoje?</label>
                  <textarea name="mensagem" rows={3} placeholder="Ex: Falta de tempo, desorganização, falta de equipe..." className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none" />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-transform transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {loading ? "Processando..." : "Solicitar Análise de Estrutura"}
                </button>
              </form>
            )}
          </div>
          
          <p className="text-center text-xs text-gray-600 mt-8">
            © CR8 Estratégias Digitais. Privacidade garantida.
          </p>
        </div>
      </section>
    </main>
  );
}
