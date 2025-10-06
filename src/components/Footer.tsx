import { Brain, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">NeuroVisual</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando marcas através da criatividade neural e inovação orientada por dados em todo o mundo.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">Neuromarketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">Estratégia de Marca</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">Marketing de Crescimento</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">Análise</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">Imprensa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Conecte-se</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-500 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-500 transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Fique atualizado com nossos últimos trabalhos e insights.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              {currentYear} NeuroVisual Marketing. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Política de Privacidade</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Termos de Serviço</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
    </footer>
  );
}
