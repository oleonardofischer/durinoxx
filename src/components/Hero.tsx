import { motion } from 'motion/react';
import { Shield, Sparkles, ArrowRight, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { useSheets } from '../context/SheetsContext';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const { getImageUrl } = useSheets();
  const heroTank = getImageUrl("02") || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800";

  return (
    <section
      id="hero"
      className="relative bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-900"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Orange/Amber glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full py-1.5 px-3.5 text-xs text-orange-400 font-mono tracking-wide">
              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
              <span>ALTA TECNOLOGIA INDUSTRIAL & CONFIABILIDADE</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Sistemas de Tanques em Aço Inox com <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500">Engenharia Alemã</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              A <strong>Durinoxx</strong> projeta e instala tanques industriais de aço inox de alta tecnologia, unindo a excelência alemã <strong>Stallkamp</strong> à agilidade da engenharia nacional.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-sm">
                  <strong>Resistência à Corrosão:</strong> Proteção total contra oxidação com vida útil superior a 40 anos.
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-sm">
                  <strong>Sistemas Integrados:</strong> Bombas, agitadores e separadores de fase originais de alta eficiência.
                </span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-sm">
                  <strong>Adequação Normativa:</strong> Projetos em conformidade técnica com as normas NR-12 e NR-13.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-base px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer hover:-translate-y-0.5"
              >
                <span>Solicitar Orçamento Técnico</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#calculadora"
                className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white font-medium text-base px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <span>Simular Dimensionamento</span>
                <ChevronRight className="h-4 w-4 text-slate-500" />
              </a>
            </div>

            {/* Micro badges for confidence */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-900">
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-white">40+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Anos de Vida Útil</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-white">100%</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Inox Premium Stallkamp</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-white">Zero</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Desperdício por Corrosão</span>
              </div>
            </div>
          </motion.div>

          {/* Graphical/Illustrative Interactive Representation of the Stainless Steel Tank */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-[380px] sm:max-w-[420px] lg:max-w-none">
              
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/10 rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none" />
              
              {/* Main Visual Card */}
              <div className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-2xl">
                
                {/* Real Photograph of Inox Tank Segment */}
                <div className="h-64 sm:h-72 md:h-80 w-full bg-slate-950/60 rounded-xl relative overflow-hidden border border-slate-800/80 group">
                  <img 
                    src={heroTank} 
                    alt="Tanque Inox Durinoxx" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Ambient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                  
                  {/* Operational indicators Overlay */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-800 px-2.5 py-1.5 rounded-lg backdrop-blur-sm">
                    <span className="flex items-center text-[10px] font-mono text-orange-400 gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                      INSTALAÇÃO CONCLUÍDA
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-slate-950/90 border border-slate-800 px-2.5 py-1.5 rounded-lg backdrop-blur-sm">
                    <span className="text-[10px] font-mono text-slate-300">
                      ORIGEM: <strong>STALLKAMP GERMANY</strong>
                    </span>
                  </div>
                </div>

                {/* Technical Description Box */}
                <div className="mt-5 space-y-3">
                  <div className="flex justify-between items-center text-xs text-slate-400 font-mono pb-2.5 border-b border-slate-800">
                    <span>TECNOLOGIA DE MONTAGEM:</span>
                    <span className="text-white font-medium">Chapas Segmentadas</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/50">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Resistência</span>
                      <span className="text-white font-medium block mt-0.5">Sem Corrosão</span>
                    </div>
                    <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/50">
                      <span className="text-slate-400 block text-[10px] uppercase font-mono">Manutenção</span>
                      <span className="text-white font-medium block mt-0.5">Downtime Zero</span>
                    </div>
                  </div>

                  {/* Partner Logo representation */}
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-950/40 to-slate-900/40 border border-orange-900/30 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-orange-500" />
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-400 font-mono">MATÉRIA-PRIMA:</span>
                        <span className="text-[11px] font-bold text-white uppercase tracking-wider">Stallkamp GmbH (Alemanha)</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded border border-orange-500/30">
                      ORIGINAL
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
