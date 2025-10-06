import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Lançamento Tech Global',
    category: 'Lançamento de Produto',
    description: 'Campanha revolucionária alcançando 50M+ usuários em 30 países',
    gradient: 'from-pink-500 to-rose-500',
    stats: '+250% ROI',
  },
  {
    title: 'Rebranding de Luxo',
    category: 'Estratégia de Marca',
    description: 'Transformação completa de marca para casa de moda de luxo icônica',
    gradient: 'from-orange-500 to-amber-500',
    stats: '+180% Engajamento',
  },
  {
    title: 'Revolução E-commerce',
    category: 'Transformação Digital',
    description: 'Experiência de compra com IA e personalização neural',
    gradient: 'from-cyan-500 to-blue-500',
    stats: '+320% Conversão',
  },
  {
    title: 'Movimento Sustentável',
    category: 'Impacto Social',
    description: 'Campanha de conscientização global para liderança ambiental',
    gradient: 'from-emerald-500 to-green-500',
    stats: '100M+ Alcance',
  },
  {
    title: 'Ativação Esportiva',
    category: 'Experiencial',
    description: 'Tour imersivo multicitade com experiências de realidade aumentada',
    gradient: 'from-violet-500 to-purple-500',
    stats: '+400% Social',
  },
  {
    title: 'Disrupção FinTech',
    category: 'Marketing de Crescimento',
    description: 'Estratégia de lançamento para plataforma financeira de nova geração',
    gradient: 'from-fuchsia-500 to-pink-500',
    stats: '1M+ Usuários',
  },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trabalhos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Destaque</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Campanhas que moldam a cultura e geram resultados sem precedentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`} />

              <div className="relative h-96 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-gray-700 group-hover:transform group-hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />

                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400 uppercase tracking-wider">{project.category}</span>
                      <ExternalLink className={`w-5 h-5 text-white transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} text-transparent bg-clip-text`}>
                      {project.stats}
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center transform transition-transform duration-500 ${hoveredIndex === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.gradient}`} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform origin-left transition-transform duration-500 ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50">
            <span className="relative z-10">Ver Todos os Projetos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
