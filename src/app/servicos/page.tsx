import { AnimatedSection } from '../components/AnimatedSection';

export default function ServicosPage() {
  const services = [
    {
      title: "Web Design Premium",
      description: "Criação de websites com design exclusivo.",
      icon: "🎨"
    },
    {
      title: "Desenvolvimento Web",
      description: "Sites rápidos com Next.js, React e TypeScript.",
      icon: "💻"
    },
    {
      title: "Landing Pages",
      description: "Páginas otimizadas para conversão.",
      icon: "🚀"
    },
  ];

  return (
    <main>
      <section className="pt-24 max-w-6xl mx-auto px-4 py-12">
        <AnimatedSection direction="up">
          <h1 className="font-serif text-4xl text-[#1A2744] text-center mb-4">
            Meus Serviços
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Ofereço soluções digitais para o seu negócio.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-serif text-xl text-[#1A2744] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}