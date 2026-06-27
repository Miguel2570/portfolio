export function Footer() {
  return (
    <footer className="bg-[#1A2744] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} [Seu Nome]. Todos os direitos reservados.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Feito com ❤️ em Portugal
        </p>
      </div>
    </footer>
  );
}