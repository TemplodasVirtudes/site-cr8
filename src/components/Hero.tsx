"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Importei o Link

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(255,255,255,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg
        className="w-full h-full text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  const headline = "Transformamos cursos e serviços em estruturas digitais que vendem com processo.".split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#000000]">
      
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2e70f0]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-5xl mx-auto"
        >
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="mb-6 flex justify-center"
           >
             <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#a4bac8] uppercase tracking-widest backdrop-blur-md">
               Atuamos nos bastidores de projetos que crescem com método
             </span>
           </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
            {headline.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg md:text-xl text-[#a4bac8] max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A CR8 ajuda coordenadores, formadores e profissionais a organizarem 
            <strong className="text-white font-semibold"> landing pages, anúncios e fluxos de atendimento</strong>, 
            sem depender de tentativa e erro.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1.8 }}
             className="flex flex-col items-center gap-4"
          >
            {/* LINK ENVOLVENDO O BOTÃO - CORREÇÃO AQUI */}
            <Link href="#inscricao">
              <button className="group relative px-8 py-4 bg-[#2e70f0] text-white font-bold text-lg rounded-full overflow-hidden shadow-[0_0_20px_rgba(46,112,240,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(46,112,240,0.6)] cursor-pointer">
                <span className="relative z-10 flex items-center gap-2">
                  👉 Quero conversar
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>
            
            <span className="text-sm text-[#5c7a8f]">
              Conversa rápida. Sem compromisso. Sem pressão.
            </span>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
