'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const hardSkills = [
  { name: 'HTML', level: 90, color: 'bg-[#E34F26]' },
  { name: 'CSS / Bootstrap', level: 85, color: 'bg-[#1572B6]' },
  { name: 'JavaScript / TypeScript', level: 80, color: 'bg-[#3178C6]' },
  { name: 'PHP', level: 75, color: 'bg-[#777BB4]' },
  { name: 'SQL', level: 75, color: 'bg-[#4479A1]' },
  { name: 'Git', level: 80, color: 'bg-[#F05032]' },
  { name: 'Next.js / React', level: 80, color: 'bg-[#61DAFB]' },
  { name: 'Tailwind CSS', level: 85, color: 'bg-[#06B6D4]' },
];

const softSkills = [
  'Responsável',
  'Dedicado',
  'Comunicativo',
  'Trabalho em Equipa',
  'Proativo',
  'Adaptável'
];

export function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection direction="up">
          <h2 className="font-serif text-4xl text-[#1A2744] text-center mb-4">
            Competências
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Tecnologias e soft skills que utilizo para criar soluções digitais.
          </p>
        </AnimatedSection>

        {/* Hard Skills */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl text-[#1A2744] mb-6 text-center">
            Hard Skills
          </h3>
          <div className="space-y-4">
            {hardSkills.map((skill, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.05}>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#1A2744] font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="font-serif text-2xl text-[#1A2744] mb-6 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.05}>
                <span className="bg-[#F5F0E8] text-[#1A2744] px-4 py-2 rounded-full text-sm font-medium border border-[#C9A84C]/20 hover:border-[#C9A84C] transition-colors">
                  {skill}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}