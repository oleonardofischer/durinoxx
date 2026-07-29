import { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, ShieldCheck, ShieldAlert, Activity, Clock, Check, X, RefreshCw, Layers } from 'lucide-react';

export default function TechComparison() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'integrity'>('comparison');
  const [years, setYears] = useState<number>(15);

  // Inox remains practically brand new due to premium alloys (AISI 304/316/316Ti)
  const inoxIntegrity = Math.max(97, Math.round(100 - years * 0.1));
  const inoxDowntime = 0; // zero maintenance shutdown required for recoating

  // Traditional Carbon Steel/Iron degrades over time unless major maintenance is done
  const getIronIntegrity = (y: number) => {
    let integrity = 100;
    for (let i = 1; i <= y; i++) {
      integrity -= 6; // base decay rate per year from oxidation
      // Every 5 years a major, disruptive sandblasting and epoxy coating is performed to patch leaks
      if (i % 5 === 0) {
        integrity = Math.min(85, integrity + 18); // partially restored, but suffers permanent fatigue
      }
    }
    return Math.max(20, integrity);
  };

  const getIronDowntime = (y: number) => {
    // 4 days of yearly inspection/patching + 20 days of complete halt every 5 years for full repaint
    const routineInspect = y * 4;
    const majorSandblasting = Math.floor(y / 5) * 20;
    return routineInspect + majorSandblasting;
  };

  const ironIntegrity = getIronIntegrity(years);
  const ironDowntime = getIronDowntime(years);

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
            DURABILIDADE EXTREMA VS. OBSOLESCÊNCIA
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Aço Inox vs. Tanques de Ferro: Por que o Inox é a Escolha Inteligente
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Onde as aplicações convencionais utilizam tanques de ferro ou aço carbono vulneráveis à oxidação, nossos sistemas de aço inoxidável premium Stallkamp garantem resistência absoluta à corrosão.
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
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Comparativo Técnico
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
                Integridade
              </span>
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Comparison Matrix */}
        {activeTab === 'comparison' && (
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            
            {/* Stainless Steel Card */}
            <div className="bg-slate-950 border-2 border-orange-500/40 rounded-2xl p-6 sm:p-8 relative shadow-xl">
              <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider font-mono flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="h-3.5 w-3.5" />
                DURINOXX AÇO INOX (STALLKAMP)
              </div>

              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Sistemas em Aço Inox Premium</h3>
                  <p className="text-slate-400 text-sm mt-1">Concebido para durar gerações sem degradação química ou física.</p>
                </div>

                <div className="space-y-4">
                  {/* Item */}
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-500/10 p-1 rounded mt-0.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Resistência à Corrosão</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Impermeabilidade total a fluidos agressivos, chorume, dejetos e intempéries.</p>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-500/10 p-1 rounded mt-0.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Custo de Manutenção</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Manutenção praticamente nula, sem necessidade de repinturas periódicas.</p>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-500/10 p-1 rounded mt-0.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Segurança Contra Vazamentos</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Furação computadorizada de precisão alemã e vedação hermética permanente.</p>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-500/10 p-1 rounded mt-0.5">
                      <Check className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Valor do Ativo Reversível</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Retém alto valor de mercado e permite desmontagem e realocação facilitadas.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-900 flex justify-between items-center bg-slate-900/40 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-400" />
                    <span className="text-xs text-slate-400 font-mono">VIDA ÚTIL ESTIMADA:</span>
                  </div>
                  <span className="text-lg font-bold text-white font-display">40 a 60 Anos</span>
                </div>
              </div>
            </div>

            {/* Iron / Carbon Steel Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 relative opacity-85 shadow-lg">
              <div className="absolute -top-3.5 left-6 bg-slate-800 text-slate-300 px-4 py-1 rounded-full text-xs font-bold tracking-wider font-mono flex items-center gap-1.5 border border-slate-700">
                <ShieldAlert className="h-3.5 w-3.5 text-orange-500" />
                TANQUES TRADICIONAIS DE FERRO
              </div>

              <div className="mt-4 space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-300">Ferro / Aço Carbono Pintado</h3>
                  <p className="text-slate-500 text-sm mt-1">Sistemas de baixo custo de aquisição imediato, mas alto custo cumulativo de manutenção.</p>
                </div>

                <div className="space-y-4">
                  {/* Item */}
                  <div className="flex items-start gap-3">
                    <div className="bg-rose-500/10 p-1 rounded mt-0.5">
                      <X className="h-4 w-4 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-300">Fragilidade à Oxidação</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Suscetível à ferrugem precoce, corrosão severa e vazamentos em curto prazo.</p>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="flex items-start gap-3">
                    <div className="bg-rose-500/10 p-1 rounded mt-0.5">
                      <X className="h-4 w-4 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-300">Custo Manutenção Elevado</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Exige paradas periódicas para repintura interna/externa e trocas de parafusos.</p>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="flex items-start gap-3">
                    <div className="bg-rose-500/10 p-1 rounded mt-0.5">
                      <X className="h-4 w-4 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-300">Risco de Vazamento</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Fadiga física e oxidação geram vazamentos e riscos de multas ambientais graves.</p>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="flex items-start gap-3">
                    <div className="bg-rose-500/10 p-1 rounded mt-0.5">
                      <X className="h-4 w-4 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-300">Depreciação Rápida</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Perda rápida de valor patrimonial devido ao desgaste, sendo inviável para realocações.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-900 flex justify-between items-center bg-slate-900/20 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-slate-500" />
                    <span className="text-xs text-slate-500 font-mono">VIDA ÚTIL ESTIMADA:</span>
                  </div>
                  <span className="text-lg font-bold text-slate-400 font-display">8 a 15 Anos</span>
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
                    Ciclo de Vida & Fadiga Estrutural
                  </h3>
                  <p className="text-slate-400 text-xs mt-2">
                    Arraste o controle para simular o comportamento de integridade mecânica de um tanque de <strong>2.000m³</strong> ao longo de décadas e veja as paradas técnicas necessárias para cada sistema.
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
                <div className="bg-orange-500/5 p-4 rounded-xl border border-orange-500/20 text-xs text-orange-200">
                  <strong className="text-white block mb-1">Como calculamos:</strong>
                  Nosso modelo simula a taxa média de oxidação metálica sob gases de efluentes corrosivos, o desgaste físico das guarnições e o tempo acumulado de paralisação técnica para manutenção preventiva severa.
                </div>
              </div>

              {/* Data Display Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Integrity & Downtime Metrics */}
                <div className="space-y-6">
                  
                  {/* Metric 1: Structural Integrity */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      1. Integridade Física Estrutural (%):
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

                    {/* Iron Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300 font-medium flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                          Tanque de Ferro / Carbono Tradicional
                        </span>
                        <span className={`font-mono font-semibold ${ironIntegrity > 70 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {ironIntegrity}% {ironIntegrity > 75 ? '(Instável)' : ironIntegrity > 50 ? '(Degradado)' : '(Risco Crítico)'}
                        </span>
                      </div>
                      <div className="w-full bg-slate-900 h-5 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className={`h-full rounded-full transition-all duration-300 flex items-center justify-end px-3 ${
                            ironIntegrity > 75 
                              ? 'bg-yellow-500' 
                              : ironIntegrity > 50 
                                ? 'bg-orange-600' 
                                : 'bg-red-600'
                          }`}
                          style={{ width: `${ironIntegrity}%` }}
                        >
                          <span className="text-[9px] text-slate-950 font-bold font-mono">Fadiga</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metric 2: Operational Downtime */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      2. Paralisações Técnicas Acumuladas (Dias):
                    </h4>
                    
                    {/* Stainless Steel Downtime */}
                    <div className="flex justify-between items-center text-xs bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/50">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Aço Inox (Durinoxx):
                      </span>
                      <span className="font-mono text-emerald-400 font-bold">
                        {inoxDowntime} Dias de Parada
                      </span>
                    </div>

                    {/* Iron Downtime */}
                    <div className="flex justify-between items-center text-xs bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/50">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                        Tanques de Ferro:
                      </span>
                      <span className="font-mono text-rose-400 font-bold">
                        {ironDowntime} Dias de Parada (Manutenção)
                      </span>
                    </div>
                  </div>

                </div>

                {/* Technical Report Summary */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 font-mono block uppercase">Status Estrutural Estimado:</span>
                    <span className="text-lg sm:text-xl font-display font-bold text-white">
                      {years <= 5 
                        ? 'Estabilidade Inicial' 
                        : years <= 10 
                          ? 'Período de Manutenção Severa' 
                          : 'Inox Consolidado vs Ferro Obsoleto'
                      }
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-2 rounded-lg text-orange-400 text-xs">
                    <RefreshCw className="h-4 w-4 animate-spin-slow" />
                    <span>
                      {years < 10 
                        ? 'Inox opera sem paradas físicas.' 
                        : 'O ferro exige troca completa ou jateamento agressivo imediato.'
                      }
                    </span>
                  </div>
                </div>

                {/* Timeline info dots */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/60 text-xs">
                    <span className="text-slate-400 block font-mono">Anos 1-4:</span>
                    <span className="text-white">Operação inicial estável, mas o ferro já exige vistorias periódicas de oxidação.</span>
                  </div>
                  <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/60 text-xs">
                    <span className="text-slate-400 block font-mono">Ano 5 (Parada Crítica):</span>
                    <span className="text-rose-400 font-semibold block">20 dias de parada no ferro</span>
                    <span className="text-slate-300">Parada obrigatória do ferro para jateamento de areia e repintura epóxi geral.</span>
                  </div>
                  <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800/60 text-xs">
                    <span className="text-slate-400 block font-mono">Anos 15-30:</span>
                    <span className="text-white">Inox Stallkamp mantém integridade acima de 95%. O ferro enfrenta risco crítico de vazamentos.</span>
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
