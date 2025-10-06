import { Brain, Target, TrendingUp, Zap, Globe, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Brain,
    title: 'Neuromarketing',
    description: 'Aproveite a ciência cognitiva para criar campanhas que ressoam em nível subconsciente',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Target,
    title: 'Estratégia de Marca',
    description: 'Segmentação precisa e posicionamento para dominar seu segmento de mercado',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: TrendingUp,
    title: 'Marketing de Crescimento',
    description: 'Estratégias orientadas por dados que escalam seu negócio exponencialmente',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Inovação Digital',
    description: 'Integração de tecnologia de ponta para experiências de próxima geração',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Globe,
    title: 'Campanhas Globais',
    description: 'Estratégias multimercado que transcendem fronteiras e culturas',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: BarChart3,
    title: 'Análise e Insights',
    description: 'Inteligência de dados avançada que transforma métricas em estratégias',
    color: 'from-fuchsia-500 to-pink-500',
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções de marketing de classe mundial impulsionadas por inovação e criatividade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${service.color.includes('pink') ? '#ec4899' : service.color.includes('orange') ? '#f97316' : service.color.includes('cyan') ? '#06b6d4' : service.color.includes('violet') ? '#8b5cf6' : service.color.includes('emerald') ? '#10b981' : '#ec4899'}, transparent)`,
                  }}
                />

                <div className="relative h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 hover:border-gray-600 hover:transform hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transform transition-transform duration-500 ${hoveredIndex === index ? 'scale-110 rotate-6' : ''}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>

                  <div className={`mt-6 h-1 bg-gradient-to-r ${service.color} rounded-full transform origin-left transition-transform duration-500 ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
