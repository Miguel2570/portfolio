import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AnimatedSection } from '../../components/AnimatedSection';

const projectsData = {
  'casapoupanca': {
    title: 'CasaPoupança',
    description: 'Aplicação desktop para gestão doméstica.',
    fullDescription: `O CasaPoupança é uma aplicação desktop desenvolvida em C# com Windows Forms, utilizando arquitetura MVC, para gestão doméstica de orçamentos, planeamento de compras e análise de despesas.

    O sistema permite a gestão de utilizadores, artigos, orçamentos mensais, planeamento de compras e execução de compras. Inclui estatísticas detalhadas, exportação CSV e indicadores visuais de estado do orçamento.

    A aplicação segue o padrão MVC garantindo uma separação clara entre interface, lógica de negócio e acesso a dados, com proteções como encriptação SHA256 e validação de integridade dos dados.`,
    technologies: ['C#', '.NET Framework', 'Windows Forms', 'Entity Framework', 'SQL Server', 'MVC', 'SHA256'],
    year: '2026',
    link: 'https://github.com/Miguel2570/DA_CasaPoupanca',
    images: [
      '/projects/CasaPoupanca/capa.jpg',
      '/projects/CasaPoupanca/screenshot1.jpg',
      '/projects/CasaPoupanca/screenshot2.jpg',
      '/projects/CasaPoupanca/screenshot3.jpg',
    ]
  },
  'emergencysts': {
    title: 'Emergency STS',
    description: 'Sistema de gestão de triagem hospitalar.',
    fullDescription: `O Emergency STS é um sistema distribuído desenvolvido no âmbito do TeSP em Programação de Sistemas de Informação. O projeto integra uma plataforma web, uma aplicação móvel Android e uma API REST para gestão do processo de triagem hospitalar e acompanhamento de pacientes em serviços de urgência.

    O sistema permite o registo e gestão de pacientes, a atribuição de prioridades segundo o protocolo de Triagem de Manchester, o acompanhamento do estado das consultas e o envio de notificações em tempo real via MQTT.

    Foi utilizado o modelo RBAC (Role-Based Access Control) para garantir que cada utilizador acede apenas às funcionalidades correspondentes ao seu perfil (Administrador, Médico, Enfermeiro, Paciente).

    A aplicação móvel implementa um modo offline com SQLite, permitindo consultar a informação previamente sincronizada mesmo em cenários de conectividade limitada.`,
    technologies: ['PHP', 'Yii2', 'Java', 'MySQL', 'SQLite', 'MQTT', 'Volley', 'HTML/CSS/JS'],
    year: '2026',
    link: 'https://emergencysts.vercel.app',
    images: [
      '/projects/EmergencySTS/capa.jpg',
      '/projects/EmergencySTS/screenshot1.jpg',
      '/projects/EmergencySTS/screenshot2.jpg',
      '/projects/EmergencySTS/screenshot3.jpg',
    ]
  },
  'emergencysts-android': {
    title: 'Emergency STS Android',
    description: 'App Android para gestão de triagem hospitalar.',
    fullDescription: `O Emergency STS Android é a aplicação móvel do sistema Emergency STS, desenvolvida em Java para o sistema operativo Android. A aplicação é direcionada a enfermeiros e pacientes, permitindo o acesso à informação clínica e a realização de triagens de forma móvel e eficiente.

    A aplicação implementa um modo offline robusto com SQLite, permitindo consultar a informação previamente sincronizada mesmo em cenários de conectividade limitada. As notificações em tempo real são enviadas via MQTT (Mosquitto), garantindo que os utilizadores são alertados sobre alterações de prioridade, início de consultas e outras atualizações críticas.

    O controlo de acessos é baseado em roles (RBAC), garantindo que enfermeiros e pacientes acedem apenas às funcionalidades permitidas. O acesso de médicos e administradores é bloqueado na aplicação móvel, sendo redirecionados para o painel web.`,
    technologies: ['Java', 'Android SDK', 'SQLite', 'MQTT', 'Volley', 'SharedPreferences'],
    year: '2026',
    link: 'https://github.com/Miguel2570/emergencysts-android',
    images: [
      '/projects/EmergencySTS_Android/capa.jpg',
      '/projects/EmergencySTS_Android/login.jpg',
      '/projects/EmergencySTS_Android/homepage-enfermeiro.jpg',
      '/projects/EmergencySTS_Android/pulseiras.jpg',
      '/projects/EmergencySTS_Android/triagem.jpg',
      '/projects/EmergencySTS_Android/historico.jpg',
      '/projects/EmergencySTS_Android/profile.jpg',
    ]
  },
  'leiriadetail': {
    title: 'Leiria Detail',
    description: 'Website para empresa de detalhe automóvel.',
    fullDescription: `O Leiria Detail é um website profissional para uma empresa de detalhe automóvel, desenvolvido com uma arquitetura moderna e escalável.

    O projeto inclui um frontend para clientes, um painel administrativo completo, e uma API GraphQL para gestão de dados. A autenticação é feita via OAuth2 (Google) e bcrypt, com envio de emails através da API Resend.

    O sistema utiliza PostgreSQL como base de dados, com validação de dados via Zod e geração de relatórios em PDF com jsPDF.`,
    technologies: [
      'Vue 3 (Composition API)',
      'TypeScript',
      'Express.js',
      'GraphQL (Apollo Server)',
      'PostgreSQL',
      'Tailwind CSS'
    ],
    year: '2024',
    link: 'https://leiriadetail.vercel.app',
    images: [
      '/projects/leiriadetail/capa.jpg',
    ]
  },
  'rmais': {
    title: 'R+',
    description: 'Plataforma de gestão para empresas.',
    fullDescription: 'O R+ é uma plataforma completa de gestão empresarial...',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    year: '2024',
    link: 'https://rmais.vercel.app',
    images: [
      '/projects/rmais/capa.jpg',
    ]
  },
  'threadzai': {
    title: 'Threadz AI',
    description: 'IA para análise de threads.',
    fullDescription: 'O Threadz AI utiliza inteligência artificial para analisar e categorizar threads...',
    technologies: ['Python', 'OpenAI', 'Next.js'],
    year: '2024',
    link: 'https://threadzai.vercel.app',
    images: [
      '/projects/threadzai/capa.jpg',
    ]
  },
};

// 🔧 CORREÇÃO: Adicionar async e usar await
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ← DESEMBRULHAR A PROMISE!

  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <section className="pt-24 max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="text-[#C9A84C] hover:underline mb-4 inline-block">
          ← Voltar
        </Link>

        <AnimatedSection direction="up">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A2744] mb-4">
            {project.title}
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            {project.fullDescription || project.description}
          </p>
        </AnimatedSection>

        {/* GALERIA DE IMAGENS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((image, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 0.05}>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src={image}
                  alt={`${project.title} - Imagem ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* TECNOLOGIAS */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-[#F5F0E8] text-[#1A2744] px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINK DO PROJETO */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#C9A84C] text-white px-6 py-3 rounded-lg hover:bg-[#C9A84C]/90 transition-colors"
          >
            Ver projeto online →
          </a>
        )}
      </section>
      <Footer />
    </main>
  );
}