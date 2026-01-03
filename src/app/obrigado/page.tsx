import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Protocolo Recebido | CR8",
  description: "Seus dados foram recebidos com sucesso.",
};

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#2e70f0]/30 flex items-center justify-center relative overflow-hidden">
      
      {/* --- BACKGROUND ATMOSFÉRICO --- */}
      {/* Luz azul de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2e70f0]/20 blur-[100px] rounded-full pointer-events-none animate-pulse" />
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-2xl text-center">
        
        {/* --- ÍCONE DE SUCESSO ANIMADO --- */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)] animate-fade-in-up">
            <CheckCircle2 size={48} className="text-green-400" />
          </div>
        </div>

        {/* --- TEXTO PRINCIPAL --- */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Protocolo <span className="text-green-400">Iniciado.</span>
        </h1>
        
        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
          Recebemos suas informações com segurança. Nossa equipe técnica iniciará a análise do seu perfil agora mesmo.
        </p>

        {/* --- A LINHA DO TEMPO (STATUS) --- */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-10 text-left">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Status da Solicitação</h3>
          
          <div className="space-y-6">
            {/* Passo 1 - Concluído */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-sm">✓</div>
              <div>
                <p className="font-bold text-white">Envio de Dados</p>
                <p className="text-xs text-green-400">Recebido com sucesso</p>
              </div>
            </div>

            {/* Linha Conectora */}
            <div className="w-0.5 h-6 bg-white/10 ml-4 -my-2"></div>

            {/* Passo 2 - Em andamento */}
            <div className="flex items-center gap-4 opacity-100">
              <div className="w-8 h-8 rounded-full border-2 border-[#2e70f0] flex items-center justify-center text-[#2e70f0] text-xs animate-spin-slow">
                ⚙️
              </div>
              <div>
                <p className="font-bold text-white">Triagem Técnica</p>
                <p className="text-xs text-[#2e70f0] animate-pulse">Em processamento...</p>
              </div>
            </div>

            {/* Linha Conectora */}
            <div className="w-0.5 h-6 bg-white/10 ml-4 -my-2"></div>

            {/* Passo 3 - Futuro */}
            <div className="flex items-center gap-4 opacity-50">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-500 text-xs">
                3
              </div>
              <div>
                <p className="font-bold text-gray-300">Contato via WhatsApp</p>
                <p className="text-xs text-gray-500">Aguardando análise</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTÃO DE AÇÃO --- */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
        >
          <span>← Voltar para a Home</span>
        </Link>

      </div>
    </main>
  );
}
