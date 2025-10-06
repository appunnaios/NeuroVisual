import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Marcas Globais', duration: 2000 },
  { value: 15, suffix: 'B+', label: 'Receita Gerada', duration: 2500 },
  { value: 98, suffix: '%', label: 'Satisfação do Cliente', duration: 2000 },
  { value: 50, suffix: '+', label: 'Países Atendidos', duration: 2000 },
];

function AnimatedCounter({ value, suffix, duration }: { value: number; suffix: string; duration: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-orange-500 to-cyan-500 text-transparent bg-clip-text">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Impacto Que <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Importa</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center transition-all duration-500 hover:border-gray-700 hover:transform hover:scale-105">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={stat.duration} />
                <p className="mt-4 text-lg text-gray-400 font-light">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
