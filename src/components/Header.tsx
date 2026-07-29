import { useState, useEffect } from 'react';
import { Menu, X, Shield, PhoneCall, Layers } from 'lucide-react';
import DurinoxxLogo from './DurinoxxLogo';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? 'bg-slate-950 border-b border-slate-900 py-4 shadow-xl'
          : isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <DurinoxxLogo className="h-8 sm:h-9 md:h-10 transition-all duration-300 group-hover:scale-[1.02]" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#diferenciais" className="text-sm font-medium text-slate-300 hover:text-orange-500 transition-colors">
              Diferenciais
            </a>
            <a href="#tecnologia" className="text-sm font-medium text-slate-300 hover:text-orange-500 transition-colors">
              Tecnologia Alemã
            </a>
            <a href="#sistemas" className="text-sm font-medium text-slate-300 hover:text-orange-500 transition-colors">
              Sistemas e Produtos
            </a>
            <a href="#setores" className="text-sm font-medium text-slate-300 hover:text-orange-500 transition-colors">
              Aplicações
            </a>
            <a href="#calculadora" className="text-sm font-medium text-slate-300 hover:text-orange-500 transition-colors flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Simulador
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+5549991988570"
              className="flex items-center space-x-1.5 text-xs font-medium text-slate-300 hover:text-orange-500 transition-colors"
            >
              <PhoneCall className="h-3.5 w-3.5 text-orange-500" />
              <span>Fale Conosco</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
              aria-label="Alternar Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 top-[64px] bg-slate-950 border-t border-slate-900 z-40 transition-all duration-300 overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          <a
            href="#diferenciais"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium text-slate-300 hover:text-orange-500 border-b border-slate-900 pb-3"
          >
            Diferenciais
          </a>
          <a
            href="#tecnologia"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium text-slate-300 hover:text-orange-500 border-b border-slate-900 pb-3"
          >
            Tecnologia Alemã
          </a>
          <a
            href="#sistemas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium text-slate-300 hover:text-orange-500 border-b border-slate-900 pb-3"
          >
            Sistemas e Produtos
          </a>
          <a
            href="#setores"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium text-slate-300 hover:text-orange-500 border-b border-slate-900 pb-3"
          >
            Aplicações
          </a>
          <a
            href="#calculadora"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium text-slate-300 hover:text-orange-500 border-b border-slate-900 pb-3"
          >
            Simulador de Tanques
          </a>

          <div className="pt-6 flex flex-col space-y-4">
            <a
              href="tel:+551199999999"
              className="flex items-center justify-center space-x-2 text-slate-300 bg-slate-900 border border-slate-800 py-3 rounded-lg"
            >
              <PhoneCall className="h-4 w-4 text-orange-500" />
              <span>Fale Direto: (11) 9999-9999</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="bg-orange-500 text-white font-medium text-center py-3.5 rounded-lg shadow-md block w-full cursor-pointer"
            >
              Solicitar Orçamento Grátis
            </button>
            <div className="flex items-center justify-center space-x-2 text-slate-500 text-xs">
              <Shield className="h-4 w-4 text-orange-500" />
              <span>Fornecedor Stallkamp Oficial no Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
