import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, HardHat, FileCheck2, Globe } from 'lucide-react';

export default function GermanTechnology() {
  return (
    <section id="tecnologia" className="py-20 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Text & Badges */}
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full py-1.5 px-3 text-xs text-amber-700 font-mono">
              <Globe className="h-3.5 w-3.5" />
              <span>TECNOLOGIA GLOBAL • PARCERIA DURINOXX & STALLKAMP</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Excelência Alemã com Engenharia Local
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              A <strong>Durinoxx</strong> une a liderança global da alemã <strong>Stallkamp</strong> à engenharia nacional para entregar tanques segmentados e equipamentos de alta performance.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
              Nossas chapas de aço inox são fabricadas e testadas na Alemanha, com montagem especializada executada pela Durinoxx em todo o território nacional.
            </p>

            {/* Highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              <div className="flex gap-2.5 items-start">
                <div className="bg-orange-500/10 p-2 rounded-lg text-orange-600 mt-0.5">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Chapa de Aço Inox Premium</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Composição certificada com alto teor de cromo e molibdênio para estanqueidade total.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="bg-orange-500/10 p-2 rounded-lg text-orange-600 mt-0.5">
                  <HardHat className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Segurança Operacional</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Montagem mecânica rápida e alta confiabilidade técnica.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="bg-orange-500/10 p-2 rounded-lg text-orange-600 mt-0.5">
                  <Zap className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Equipamentos Stallkamp</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Agitadores, bombas e separadores projetados com máxima eficiência energética.</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Column 2: Durabilidade e Baixa Manutenção Card */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 relative shadow-xl space-y-6">
              
              {/* Abstract flag subtle indicator */}
              <div className="absolute top-5 right-6 flex items-center space-x-1.5 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                <div className="w-2.5 h-1.5 bg-black" />
                <div className="w-2.5 h-1.5 bg-red-600" />
                <div className="w-2.5 h-1.5 bg-yellow-500" />
                <span className="text-[9px] font-mono font-medium text-slate-600">STALLKAMP GERMANY</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-orange-500/10 p-3 rounded-xl text-orange-600">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest block">EXCELÊNCIA EM ENGENHARIA</span>
                  <h3 className="font-display font-bold text-2xl text-slate-900">Durabilidade e Baixa Manutenção</h3>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/90 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Todo o portfólio da empresa é desenvolvido sob os pilares de serem <strong>indestrutíveis, eficientes, confiáveis e de fácil manutenção</strong>.
                </p>
                <p className="text-slate-600 text-sm">
                  Suas bombas e agitadores, por exemplo, são projetados para operar de forma segura sob as condições mais difíceis.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500 font-mono">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Alta Estabilidade Química
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Operação Contínua
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Mínima Intervenção
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
