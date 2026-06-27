import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-24 max-w-4xl mx-auto px-4 py-12">
        <AnimatedSection direction="up">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A2744] text-center mb-4">
            Vamos Trabalhar Juntos?
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Entre em contacto para oportunidades, projetos ou colaborações.
          </p>
        </AnimatedSection>

        {/* Informações de contacto do CV */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-serif text-lg text-[#1A2744] mb-2">📧 Email</h3>
            <a href="mailto:miguelctobias@gmail.com" className="text-[#C9A84C] hover:underline">
              miguelctobias@gmail.com
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-serif text-lg text-[#1A2744] mb-2">📱 Telefone</h3>
            <a href="tel:+351912881282" className="text-[#C9A84C] hover:underline">
              (+351) 912 881 282
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-serif text-lg text-[#1A2744] mb-2">📍 Localização</h3>
            <p className="text-gray-600">Leiria, Portugal</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-serif text-lg text-[#1A2744] mb-2">🎓 Formação</h3>
            <p className="text-gray-600">CTeSP em Programação de Sistemas de Informação</p>
          </div>
        </div>

        <AnimatedSection direction="up" delay={0.2}>
          <form className="space-y-4 bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C9A84C] outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C9A84C] outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assunto
              </label>
              <input
                type="text"
                placeholder="Assunto da mensagem"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C9A84C] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                placeholder="Escreva a sua mensagem..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C9A84C] outline-none transition-colors"
              />
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </AnimatedSection>
      </section>
    </main>
  );
}