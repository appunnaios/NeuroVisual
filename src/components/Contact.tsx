import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Vamos Criar <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Juntos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pronto para transformar sua marca? Entre em contato com nossa equipe de especialistas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">contato@neurovisual.global</p>
                  <p className="text-gray-400">parcerias@neurovisual.global</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Telefone</h3>
                  <p className="text-gray-400">+55 11 1234-5678</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Escritórios</h3>
                  <p className="text-gray-400">São Paulo • Nova York • Londres</p>
                  <p className="text-gray-400">Tóquio • Dubai • Singapura</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="relative p-8 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10 rounded-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-cyan-500/5 rounded-2xl blur-xl" />
                <p className="relative text-gray-300 leading-relaxed italic">
                  "A NeuroVisual transformou completamente nossa abordagem de marketing. Os resultados superaram todas as expectativas."
                </p>
                <p className="relative text-sm text-gray-500 mt-4">— CMO Fortune 500</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-2xl blur-xl" />

            <form
              onSubmit={handleSubmit}
              className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors duration-300"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                  placeholder="Sua empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors duration-300 resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                  required
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Enviar Mensagem</span>
                  <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
