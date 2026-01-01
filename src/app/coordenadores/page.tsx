import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para Coordenadores | CR8",
  description: "Uma conversa franca sobre a operação dos seus cursos.",
};

export default function CoordenadoresPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* --- SEÇÃO 1: HERO HÍBRIDO --- */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        
        {/* Luz de fundo (Glow) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LADO ESQUERDO: TEXTO (Copy do Manual) */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase">
                Exclusivo para Coordenadores ABT
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Oi, aqui é o <span className="text-blue-500">Rafael.</span> 👋
              </h1>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Falando diretamente com quem coordena formação, curso e turma 
                dentro da ABT — e sabe o trabalho gigante que isso gera.
              </p>

              {/* Box de Contexto */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-gray-300 text-sm italic">
                  "Tenho conversado com vários coordenadores e percebido um padrão: 
                  muita coisa boa sendo feita, mas tudo meio espalhado (WhatsApp, listas, avisos)..."
                </p>
              </div>
            </div>

            {/* LADO DIREITO: VÍDEO AVATAR */}
            <div className="relative group">
              {/* Moldura do Avatar */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-black shadow-2xl shadow-blue-900/20">
                
                {/* PLAYER DE VÍDEO */}
                {/* Certifique-se que o arquivo de vídeo está na pasta 'public' */}
                <video 
                  controls 
                  // poster="/avatar-rosto.png" // Se quiser uma capa antes do play, descomente essa linha
                  className="w-full h-full object-cover rounded-3xl"
                  playsInline
                >
                  <source src="/video-coordenadores.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>

              </div>
              
              {/* Legenda do vídeo */}
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <p className="text-gray-500 text-xs">Assista: O objetivo dessa página (45s)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: PROPOSTA & SEGURANÇA --- */}
      <section className="py-20 bg-white/2 border-t border-white/5" id="proposta">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-10">
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Organizar sem perder a autonomia.
            </h2>
            <p className="text-gray-400">
              A ideia não é padronizar tudo. É organizar o processo sem engessar, 
              respeitando o jeito de cada coordenação.
            </p>
          </div>

          {/* CARD DE SEGURANÇA */}
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              { icon: "🔒", title: "Dados Seguros", text: "Nenhuma informação sensível é solicitada." },
              { icon: "✅", title: "Controle Total", text: "O controle final continua sempre com o coordenador." },
              { icon: "🚫", title: "Zero Exposição", text: "Nada é divulgado sem sua validação prévia." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA FINAL - Manda para a Home onde tem o formulário */}
          <div className="pt-10 space-y-4">
            <Link 
              href="/#formulario" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-blue-600 rounded-full shadow-lg shadow-blue-900/40 hover:bg-blue-500 hover:scale-105 hover:shadow-blue-500/50"
            >
              👉 Quero entender como funciona
            </Link>
            <p className="text-sm text-gray-500">
              Leva de 3 a 5 minutos. Depois disso, a conversa é tranquila e sem obrigação.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
