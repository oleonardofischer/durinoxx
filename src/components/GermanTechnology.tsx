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
              A <strong>Durinoxx</strong> une a liderança global da alemã <strong>Stallkamp GmbH</strong> à engenharia nacional para entregar tanques segmentados e maquinários de alta performance.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
              Nossas chapas de aço inox são fabricadas e testadas na Alemanha, com montagem especializada executada pela Durinoxx em todo o território nacional.
            </p>

            {/* Highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
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
                  <FileCheck2 className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Normas e Regulamentações</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Conformidade integral com a NR-13 e exigências ambientais vigentes.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="bg-orange-500/10 p-2 rounded-lg text-orange-600 mt-0.5">
                  <HardHat className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Segurança Operacional</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Montagem mecânica rápida e conformidade total com a NR-12.</p>
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

          {/* Column 2: visual schematic card of German excellence */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 relative shadow-lg">
              
              {/* Abstract flag subtle indicator */}
              <div className="absolute top-4 right-4 flex items-center space-x-1.5 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                <div className="w-2.5 h-1.5 bg-black" />
                <div className="w-2.5 h-1.5 bg-red-600" />
                <div className="w-2.5 h-1.5 bg-yellow-500" />
                <span className="text-[9px] font-mono font-medium text-slate-600">GERMAN QUALITY</span>
              </div>

              <h3 className="font-display font-bold text-lg text-slate-900 mb-6">Ficha Técnica e Conformidade Legal</h3>
              
              <div className="space-y-4">
                
                {/* Rule Item */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-start gap-3.5">
                  <div className="bg-emerald-500/10 text-emerald-600 p-1.5 rounded-lg mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-semibold text-slate-900">NR-13 (Vasos de Armazenamento)</h4>
                      <span className="text-[10px] font-mono text-emerald-600 uppercase font-bold">Aprovado</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      Cálculo de espessura de chapas, ensaios não destrutivos (ultrassom) e projeto assinado por Engenheiro com ART.
                    </p>
                  </div>
                </div>

                {/* Rule Item */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-start gap-3.5">
                  <div className="bg-emerald-500/10 text-emerald-600 p-1.5 rounded-lg mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-semibold text-slate-900">NR-12 (Segurança de Equipamentos)</h4>
                      <span className="text-[10px] font-mono text-emerald-600 uppercase font-bold">Aprovado</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      Bombas e agitadores Stallkamp integram comandos e proteções que resguardam totalmente os operadores da planta.
                    </p>
                  </div>
                </div>

                {/* Rule Item */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-start gap-3.5">
                  <div className="bg-emerald-500/10 text-emerald-600 p-1.5 rounded-lg mt-0.5">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-semibold text-slate-900">Norma Sanitária & de Efluentes</h4>
                      <span className="text-[10px] font-mono text-emerald-600 uppercase font-bold">Aprovado</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      Sistemas 100% estanques adequados para tratamento de efluentes sanitários, industriais e produção de biogás.
                    </p>
                  </div>
                </div>

              </div>

              {/* Explanatory footer inside the card */}
              <div className="mt-6 pt-5 border-t border-slate-150 text-center">
                <span className="text-[11px] text-slate-400 font-mono block">
                  CÓDIGO DE SELETIVIDADE DE AÇO:
                </span>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="bg-slate-50 px-2 py-1 rounded text-[10px] font-bold text-slate-800 border border-slate-200 font-mono">
                    AISI 304 (Padrão)
                  </span>
                  <span className="bg-slate-50 px-2 py-1 rounded text-[10px] font-bold text-orange-600 border border-slate-200 font-mono">
                    AISI 316 (Química Fina)
                  </span>
                  <span className="bg-slate-50 px-2 py-1 rounded text-[10px] font-bold text-amber-700 border border-slate-200 font-mono">
                    AISI 316Ti (Biogás Extremo)
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
