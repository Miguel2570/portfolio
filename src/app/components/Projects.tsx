'use client';

import { AnimatedSection } from './AnimatedSection';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    slug: "casapoupanca",
    title: "CasaPoupança",
    description: "Aplicação desktop para gestão doméstica de orçamentos e compras.",
    image: "/projects/CasaPoupanca/capa.jpg",
    technologies: ["C#", ".NET", "Windows Forms", "Entity Framework", "SQL Server", "MVC"],
    link: "https://github.com/Miguel2570/DA_CasaPoupanca",
    year: "2026"
  },
  {
    slug: "emergencysts",
    title: "Emergency STS",
    description: "Sistema de gestão de triagem hospitalar e acompanhamento de pacientes.",
    image: "/projects/EmergencySTS/capa.jpg",
    technologies: ["PHP", "Yii2", "Java", "MySQL", "MQTT", "Android"],
    link: "https://emergencysts.vercel.app",
    year: "2026"
  },
  {
    slug: "emergencysts-android",
    title: "Emergency STS Android",
    description: "App Android para gestão de triagem hospitalar com modo offline.",
    image: "/projects/EmergencySTS_Android/capa.jpg",
    technologies: ["Java", "Android", "SQLite", "MQTT", "Volley"],
    link: "https://github.com/Miguel2570/emergencysts-android",
    year: "2026"
  },
  {
    slug: "leiriadetail",
    title: "Leiria Detail",
    description: "Website para empresa de detalhe automóvel.",
    image: "/projects/leiriadetail/capa.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://leiriadetail.vercel.app",
    year: "2026"
  },
  {
    slug: "rmais",
    title: "R+",
    description: "Plataforma de gestão para empresas.",
    image: "/projects/rmais/capa.jpg",
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "https://rmais.vercel.app",
    year: "2026"
  },
  {
    slug: "threadzai",
    title: "Threadz AI",
    description: "IA para análise de threads.",
    image: "/projects/threadzai/capa.jpg",
    technologies: ["Python", "OpenAI", "Next.js"],
    link: "https://threadzai.vercel.app",
    year: "2026"
  },
];

export function Projects() {
  return (
    <section className="py-20 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection direction="up">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A2744] text-center mb-4">
            Meus Projetos
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Conheça alguns dos projetos que desenvolvi com design premium e tecnologia de ponta.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="h-56 bg-[#1A2744] relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/30 font-serif text-2xl">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-[#C9A84C] text-white text-sm px-3 py-1 rounded-full">
                    {project.year}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#1A2744] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#F5F0E8] text-[#1A2744] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projetos/${project.slug}`}
                    className="text-[#C9A84C] font-medium hover:underline text-sm inline-flex items-center gap-1"
                  >
                    Ver detalhes →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}