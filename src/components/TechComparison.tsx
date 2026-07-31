import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Activity, Clock, Check, RefreshCw, Layers, Award, Sparkles } from 'lucide-react';

export default function TechComparison() {
  const [activeTab, setActiveTab] = useState<'advantages' | 'integrity'>('advantages');
  const [years, setYears] = useState<number>(15);

  // Inox remains practically brand new due to premium alloys (AISI 304/316/316Ti)
  const inoxIntegrity = Math.max(97, Math.round(100 - years * 0.1));
  const inoxDowntime = 0; // zero maintenance shutdown required for recoating

  return (
    <section id="diferenciais" className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2 font-mono">
            ALTA TECNOLOGIA E LONGEVIDADE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Diferenciais Técnicos e Vantagens do Aço Inox
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Conheça os principais pilares de excelência que tornam os sistemas em aço inoxidável Stallkamp e Durinoxx a solução definitiva para o armazenamento e manejo de efluentes e resíduos orgânicos.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div 
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 inline-flex">
            <button
              onClick={() => setActiveTab('advantages')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'advantages'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Vantagens do Aço Inox
            </button>
            <button
              onClick={() => setActiveTab('integrity')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'integrity'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Simulador de Ciclo de Vida</span>
              <span className="bg-orange-500/20 text-orange-400 text-[10px] px-1.5 py-0.5 rounded font-mono">
                Desempenho
              </span>
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Advantages Matrix */}
        {activeTab === 'advantages' && (
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Top Banner Card */}
            <div className="bg-slate-950 border-2 border-orange-500/40 rounded-2xl p-6 sm:p-8 relative shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold font-mono border border-orange-500/20 mb-3">
                    <ShieldCheck className="h-4 w-4" />
                    DURINOXX & STALLKAMP
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Sistemas Integrados em Aço Inoxidável Premium</h3>
                  <p className="text-slate-400 text-sm mt-1">Engenharia projetada para altíssima durabilidade e máxima eficiência operacional.</p>
                </div>
                
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-4 shrink-0">
                  <div className="bg-orange-500/10 p-3 rounded-lg text-orange-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono block uppercase">VIDA ÚTIL ESTIMADA</span>
                    <span className="text-xl font-bold text-white font-display">Superior a 40 Anos</span>
                  </div>
                </div>
              </div>

              {/* Grid of Advantages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-semibold text-white">Resistência Superior à Corrosão</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pl-8">
                    Impermeabilidade total a fluidos agressivos, chorume, dejetos e intempéries climáticas sem depender de tintas protetivas.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-semibold text-white">Manutenção Praticamente Nula</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pl-8">
                    Reduz drasticamente os custos secundários ao eliminar a necessidade de repinturas periódicas e tratamentos anticorrosivos.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-semibold text-white">Segurança e Vedação Hermética</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pl-8">
                    Furação computadorizada de precisão alemã e vedações de engenharia testadas para total estanqueidade sem vazamentos.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-semibold text-white">Construção Modular e Reversível</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pl-8">
                    A montagem em anéis segmentados permite fácil expansão futura de volume, desmontagem simplificada e realocação do ativo.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-semibold text-white">Neutralidade Química e Biológica</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pl-8">
                    Não contamina nem interfere no processo biológico de biodigestores e tanques de armazenamento de resíduos orgânicos.
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-xl space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-semibold text-white">Sustentabilidade e Reciclagem</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pl-8">
                    O aço inoxidável é um material 100% reciclável ao final de sua longa vida útil, alinhado com a economia circular.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Interactive Structural Integrity & Lifecycle Simulator */}
        {activeTab === 'integrity' && (
          <motion.div 
            className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Controls Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                    <Activity className="text-orange-500 h-5 w-5" />
                    Simulador de Desempenho Contínuo
                  </h3>
                  <p className="text-slate-400 text-xs mt-2">
                    Simule o comportamento de integridade estrutural e a disponibilidade operacional dos tanques em <strong>Aço Inox Durinoxx Stallkamp</strong> ao longo das décadas.
                  </p>
                </div>

                {/* Years Slider */}
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-300">Tempo de Operação:</span>
                    <span className="text-lg font-mono font-bold text-orange-500">{years} Anos</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>1 Ano</span>
                    <span>10 Anos</span>
                    <span>20 Anos</span>
                    <span>30 Anos</span>
                  </div>
                </div>

                {/* Technical Context Callout */}
                <div className="bg-orange-500/5 p-4 rounded-xl border border-orange-500/20 text-xs text-orange-200 space-y-1">
                  <strong className="text-white block">Excelência em Ligas Metálicas:</strong>
                  <span>
                    Utilizamos ligas nobres como AISI 304, AISI 316 e AISI 316Ti, garantindo estabilidade física e química contínua sob severas condições de efluentes.
                  </span>
                </div>
              </div>

              {/* Data Display Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Integrity & Downtime Metrics */}
                <div className="space-y-6">
                  
                  {/* Metric 1: Structural Integrity */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      1. Integridade Física Estrutural do Aço Inox (%):
                    </h4>
                    
                    {/* Stainless Steel Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300 font-medium flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                          Durinoxx Aço Inox Stallkamp
                        </span>
                        <span className="font-mono text-emerald-400 font-semibold">
                          {inoxIntegrity}% (Excelente)
                        </span>
                      </div>
                      <div className="w-full bg-slate-900 h-5 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-full transition-all duration-300 flex items-center justify-end px-3"
                          style={{ width: `${inoxIntegrity}%` }}
                        >
                          <span className="text-[9px] text-white font-bold font-mono">Estável</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metric 2: Operational Downtime */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      2. Paralisações Técnicas Obrigatórias Para Repintura:
                    </h4>
                    
                    {/* Stainless Steel Downtime */}
                    <div className="flex justify-between items-center text-xs bg-slate-900/60 p-3 rounded-lg border border-slate-800/50">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Aço Inox (Durinoxx Stallkamp):
                      </span>
                      <span className="font-mono text-emerald-400 font-bold">
                        {inoxDowntime} Dias de Parada (100% Disponível)
                      </span>
                    </div>
                  </div>

                </div>

                {/* Technical Report Summary */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 font-mono block uppercase">Status Estrutural em {years} Anos:</span>
                    <span className="text-lg sm:text-xl font-display font-bold text-white">
                      Desempenho e Integridade Total
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-lg text-emerald-400 text-xs">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Inox opera com índice de manutenção próximo a zero.</span>
                  </div>
                </div>

                {/* Timeline info dots */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/60 text-xs">
                    <span className="text-slate-400 block font-mono">Anos 1-10:</span>
                    <span className="text-white">Operação contínua com estanqueidade perfeita e sem desgaste de parede.</span>
                  </div>
                  <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/60 text-xs">
                    <span className="text-slate-400 block font-mono">Anos 10-20:</span>
                    <span className="text-white">Estrutura inalterada frente a reagentes e efluentes orgânicos ou industriais.</span>
                  </div>
                  <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/60 text-xs">
                    <span className="text-slate-400 block font-mono">Anos 20-30+:</span>
                    <span className="text-white">Manutenção de alto valor do ativo e facilidade para expansão modular.</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

