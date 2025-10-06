import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Brain, TrendingUp } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-gray-300">Marketing orientado por dados e criatividade</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">NeuroVisual</span>
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Marketing
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforme sua marca com estratégias neurais que combinam
            <span className="text-pink-400 font-semibold"> criatividade</span>,
            <span className="text-cyan-400 font-semibold"> dados</span> e
            <span className="text-purple-400 font-semibold"> inovação</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50">
              <span className="relative z-10 flex items-center gap-2">
                Explore Nosso Trabalho
                <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105">
              Fale Conosco
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <Brain className="w-10 h-10 text-pink-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Estratégia Neural</h3>
              <p className="text-sm text-gray-400">Decisões baseadas em comportamento e psicologia</p>
            </div>

            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <Sparkles className="w-10 h-10 text-purple-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Design Criativo</h3>
              <p className="text-sm text-gray-400">Identidades visuais que capturam atenção</p>
            </div>

            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-105">
              <TrendingUp className="w-10 h-10 text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Resultados Reais</h3>
              <p className="text-sm text-gray-400">Crescimento mensurável e sustentável</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/30" />
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
