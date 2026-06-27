'use client';

import { AnimatedSection } from './AnimatedSection';

const experiences = [
  {
    title: 'Estagiário de Desenvolvimento Web',
    company: 'MagicalStage',
    period: 'Fev 2026 - Jun 2026',
    description: 'Desenvolvimento de um website completo, aplicando tecnologias modernas e boas práticas de programação.'
  },
  {
    title: 'Estagiário de Informática',
    company: 'CPS - Consultores Informáticos',
    period: '2023',
    description: 'Manutenção e configuração de equipamentos informáticos, apoio técnico e diagnóstico de problemas de hardware.'
  },
];

export function Experience() {
  return (
    <section className="py-20 bg-[#F5F0E8]">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection direction="up">
          <h2 className="font-serif text-4xl text-[#1A2744] text-center mb-4">
            Experiência Profissional
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Minha trajetória no mundo da programação e tecnologia.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#C9A84C]/30" />

          {experiences.map((exp, index) => (
            <AnimatedSection key={index} direction={index % 2 === 0 ? 'right' : 'left'} delay={index * 0.2}>
              <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                    <span className="text-sm text-[#C9A84C] font-medium">{exp.period}</span>
                    <h3 className="font-serif text-xl text-[#1A2744] mt-1">{exp.title}</h3>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                    <p className="text-gray-600 text-sm mt-2">{exp.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#C9A84C] rounded-full border-4 border-white shadow-lg" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}