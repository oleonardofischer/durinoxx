import { Shield, ArrowUp, Mail, Phone, MapPin, ExternalLink, Copyright, Award } from 'lucide-react';
import DurinoxxLogo from './DurinoxxLogo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center">
              <DurinoxxLogo className="h-8" iconSize={20} />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sistemas de engenharia modular e montagem de tanques industriais de aço inox de alta tecnologia. Parceiro oficial Stallkamp GmbH para efluentes, saneamento potável e biodigestão biogás de alto rendimento.
            </p>

            {/* Certifications Row */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] text-slate-600 font-mono uppercase tracking-widest block">HOMOLOGAÇÕES:</span>
              <div className="flex gap-1.5">
                <span className="bg-slate-900 border border-slate-800 text-slate-400 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded">
                  FINAME
                </span>
                <span className="bg-slate-900 border border-slate-800 text-slate-400 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded">
                  BNDES
                </span>
                <span className="bg-slate-900 border border-slate-800 text-slate-400 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded">
                  NR-13
                </span>
              </div>
            </div>
          </div>

          {/* Quick links Column */}
          <div className="md:col-span-2 space-y-3.5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#diferenciais" className="hover:text-orange-500 transition-colors">
                  Diferenciais do Inox
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-orange-500 transition-colors">
                  Origem Stallkamp
                </a>
              </li>
              <li>
                <a href="#sistemas" className="hover:text-orange-500 transition-colors">
                  Sistemas e Produtos
                </a>
              </li>
              <li>
                <a href="#setores" className="hover:text-orange-500 transition-colors">
                  Setores de Atuação
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-orange-500 transition-colors">
                  Simulador de Tanques
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Sede e Contatos
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <span className="leading-normal">
                  Lages, SC - Brasil
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-orange-500 shrink-0" />
                <a
                  href="https://wa.me/5549991988570?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  +55 49 99198.8570
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-orange-500 shrink-0" />
                <a
                  href="mailto:info@durinoxx.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  info@durinoxx.com
                </a>
              </li>
            </ul>
          </div>

          {/* Technology partnership card Column */}
          <div className="md:col-span-3 bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2.5">
            <div className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-amber-500" />
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                Stallkamp Gmbh
              </span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Todos os agitadores, bombas e chapas de aço inox são fornecidos diretamente de Dinklage, Alemanha, assegurando padrão europeu absoluto.
            </p>
            <a
              href="https://www.stallkamp.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-orange-400 font-mono flex items-center gap-1 hover:underline"
            >
              <span>Ir para Stallkamp</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

        </div>

        {/* Lower footer row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          
          <div className="flex items-center gap-1">
            <Copyright className="h-3.5 w-3.5 text-slate-600" />
            <span>2026 Durinoxx Industria e Comercio LTDA. Todos os direitos reservados.</span>
          </div>

          <div className="flex gap-4 text-[10px] font-mono text-slate-600">
            <span>CNPJ: 64.111.705/0001-69</span>
            <span>POLÍTICA DE PRIVACIDADE LGPD</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white p-2.5 rounded-lg border border-slate-800 transition-colors cursor-pointer flex items-center gap-1"
            aria-label="Voltar ao Topo"
          >
            <span>Topo</span>
            <ArrowUp className="h-3 w-3" />
          </button>

        </div>

      </div>
    </footer>
  );
}
