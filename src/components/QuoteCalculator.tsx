import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SectorId, QuoteSimulation } from '../types';
import { Layers, Settings2, ShieldAlert, BadgeInfo, Sliders, ChevronRight, Check } from 'lucide-react';

interface QuoteCalculatorProps {
  onSelectConfig: (summary: string, sector: SectorId, volume: number) => void;
}

export default function QuoteCalculator({ onSelectConfig }: QuoteCalculatorProps) {
  const [sector, setSector] = useState<SectorId>('biogas');
  const [volume, setVolume] = useState<number>(1200);
  const [hasAgitator, setHasAgitator] = useState<boolean>(true);
  const [hasPump, setHasPump] = useState<boolean>(true);
  const [hasSeparator, setHasSeparator] = useState<boolean>(false);

  // Advanced geometric & structural estimation based on volume
  // Typical tank ratio: diameter is usually 1.5x to 3x the height
  // Volume = PI * (D/2)^2 * H
  const [height, setHeight] = useState<number>(6); // meters
  const [diameter, setDiameter] = useState<number>(16); // meters

  // Whenever volume changes, suggest reasonable physical dimensions
  useEffect(() => {
    let suggestedHeight = 6;
    if (volume < 200) suggestedHeight = 3.5;
    else if (volume < 500) suggestedHeight = 4.5;
    else if (volume < 1500) suggestedHeight = 6.0;
    else if (volume < 4000) suggestedHeight = 7.5;
    else suggestedHeight = 9.0;

    // Radius = sqrt( Volume / (PI * H) )
    // Diameter = 2 * Radius
    const radius = Math.sqrt(volume / (Math.PI * suggestedHeight));
    const suggestedDiameter = Math.round(2 * radius * 10) / 10; // 1 decimal place

    setHeight(suggestedHeight);
    setDiameter(suggestedDiameter);
  }, [volume]);

  // Adjust volume if user modifies height or diameter directly
  const handleHeightOrDiameterChange = (newH: number, newD: number) => {
    setHeight(newH);
    setDiameter(newD);
    const calculatedVolume = Math.round(Math.PI * Math.pow(newD / 2, 2) * newH);
    setVolume(calculatedVolume);
  };

  // Determine Steel alloy recommendation
  const getSteelGrade = (): 'AISI 304' | 'AISI 316' | 'AISI 316Ti' => {
    if (sector === 'agua') return 'AISI 304';
    if (sector === 'quimico') return 'AISI 316';
    return 'AISI 316Ti';
  };

  const steelGrade = getSteelGrade();

  // Estimate plate count (Stallkamp plates are typically 1.5m high by 3.0m circumference segment)
  const segmentsPerRing = Math.ceil((Math.PI * diameter) / 3.0);
  const totalRings = Math.ceil(height / 1.5);
  const totalPlates = segmentsPerRing * totalRings;

  // Lifespan estimation
  const getLifespan = () => {
    let base = 40;
    if (steelGrade === 'AISI 316Ti') base = 50;
    if (sector === 'quimico') base = 35; // corrosive chemical wear
    return base;
  };

  const estimatedLifespan = getLifespan();

  // Handle CTA Submit to pre-fill the Quote Request Contact Form
  const handleSubmitToForm = () => {
    const accessoryText = [
      hasAgitator ? 'Agitadores Stallkamp' : '',
      hasPump ? 'Sistemas de Bombas Stallkamp' : '',
      hasSeparator ? 'Separador Sólido-Líquido' : ''
    ].filter(Boolean).join(', ');

    const configSummary = `Solicitação de Orçamento Técnico Simulado:
• Segmento: ${sector === 'agua' ? 'Água/Saneamento' : sector === 'biogas' ? 'Produção de Biogás' : 'Químico Industrial'}
• Volume Solicitado: ${volume} m³
• Dimensões Sugeridas: Diâmetro de ${diameter}m e Altura de ${height}m (${totalRings} anéis de chapas)
• Liga Recomendada: Aço Inox ${steelGrade}
• Acessórios integrados: ${accessoryText || 'Nenhum'}
Por favor, elaborar uma proposta formalizada com prazos de entrega.`;

    onSelectConfig(configSummary, sector, volume);
  };

  return (
    <section id="calculadora" className="py-20 bg-slate-50 border-y border-slate-200 relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2 font-mono">
            DIMENSIONAMENTO ON-LINE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Configure seu Projeto de Tanque Industrial
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base">
            Simule os parâmetros estruturais do reservatório em tempo real. Obtenha estimativas de materiais, dimensões recomendadas e envie a pré-configuração para orçamento instantâneo.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div 
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Input Controls Column */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* 1. Sector selection */}
                <div className="space-y-2.5">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                    1. Setor de Aplicação do Fluido:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setSector('agua')}
                      className={`py-2.5 px-2 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                        sector === 'agua'
                          ? 'bg-orange-500/10 border-orange-500 text-orange-600 font-semibold shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      Água e Reuso
                    </button>
                    <button
                      onClick={() => setSector('biogas')}
                      className={`py-2.5 px-2 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                        sector === 'biogas'
                          ? 'bg-orange-500/10 border-orange-500 text-orange-600 font-semibold shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      Efluente e Biogás
                    </button>
                    <button
                      onClick={() => setSector('quimico')}
                      className={`py-2.5 px-2 rounded-lg text-xs font-medium text-center border transition-all cursor-pointer ${
                        sector === 'quimico'
                          ? 'bg-orange-500/10 border-orange-500 text-orange-600 font-semibold shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      Processo Químico
                    </button>
                  </div>
                </div>

                {/* 2. Volume selection slider */}
                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      2. Volume Requerido:
                    </span>
                    <span className="text-xl font-display font-bold text-slate-900">
                      {volume.toLocaleString('pt-BR')} <span className="text-xs text-orange-500">m³</span>
                    </span>
                  </div>
                  
                  <input
                    type="range"
                    min="50"
                    max="10000"
                    step="50"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
                  />

                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>50 m³</span>
                    <span>2.500 m³</span>
                    <span>5.000 m³</span>
                    <span>7.500 m³</span>
                    <span>10.000 m³</span>
                  </div>
                </div>

                {/* 3. Physical Fine-Tuning */}
                <div className="space-y-3 bg-slate-50/70 p-4 rounded-xl border border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <Sliders className="h-3.5 w-3.5 text-slate-400" />
                      Ajuste Fino de Geometria:
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">V = π • (D/2)² • H</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Height input */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono text-slate-500">
                        <span>Altura (H):</span>
                        <span className="text-slate-800 font-bold">{height}m</span>
                      </div>
                      <input
                        type="range"
                        min="3"
                        max="12"
                        step="1.5" // matches standard Stallkamp plate height rings (1.5m each)
                        value={height}
                        onChange={(e) => handleHeightOrDiameterChange(Number(e.target.value), diameter)}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
                      />
                    </div>

                    {/* Diameter input */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono text-slate-500">
                        <span>Diâmetro (D):</span>
                        <span className="text-slate-800 font-bold">{diameter}m</span>
                      </div>
                      <input
                        type="range"
                        min="4"
                        max="46"
                        step="0.5"
                        value={diameter}
                        onChange={(e) => handleHeightOrDiameterChange(height, Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Stallkamp Accessories Checklist */}
                <div className="space-y-2.5">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                    3. Equipamentos Stallkamp Integrados:
                  </label>
                  <div className="space-y-2">
                    
                    {/* Agitator */}
                    <button
                      onClick={() => setHasAgitator(!hasAgitator)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        hasAgitator
                          ? 'bg-orange-500/[0.02] border-orange-500/40 text-slate-800 shadow-sm'
                          : 'bg-slate-50/50 border-slate-200 text-slate-400 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          hasAgitator ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {hasAgitator && <Check className="h-3 w-3" />}
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-xs font-semibold ${hasAgitator ? 'text-slate-800 font-semibold' : 'text-slate-500'}`}>
                            Agitador Submersível Stallkamp
                          </span>
                          <span className="text-[10px] text-slate-500">Garante homogeneidade biológica e liberação de gases.</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono font-bold bg-slate-50 px-2 py-0.5 rounded border border-slate-200">ATEX</span>
                    </button>

                    {/* Pump */}
                    <button
                      onClick={() => setHasPump(!hasPump)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        hasPump
                          ? 'bg-orange-500/[0.02] border-orange-500/40 text-slate-800 shadow-sm'
                          : 'bg-slate-50/50 border-slate-200 text-slate-400 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          hasPump ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {hasPump && <Check className="h-3 w-3" />}
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-xs font-semibold ${hasPump ? 'text-slate-800 font-semibold' : 'text-slate-500'}`}>
                            Bomba de Lóbulos / Sucção Forçada
                          </span>
                          <span className="text-[10px] text-slate-500">Transfere fluidos pesados e lodos sem risco de obstrução.</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono font-bold bg-slate-50 px-2 py-0.5 rounded border border-slate-200">NR-12</span>
                    </button>

                    {/* Separator */}
                    <button
                      onClick={() => setHasSeparator(!hasSeparator)}
                      className={`flex items-center justify-between w-full p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        hasSeparator
                          ? 'bg-orange-500/[0.02] border-orange-500/40 text-slate-800 shadow-sm'
                          : 'bg-slate-50/50 border-slate-200 text-slate-400 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          hasSeparator ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {hasSeparator && <Check className="h-3 w-3" />}
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-xs font-semibold ${hasSeparator ? 'text-slate-800 font-semibold' : 'text-slate-500'}`}>
                            Separador de Prensa Helicoidal Sólido-Líquido
                          </span>
                          <span className="text-[10px] text-slate-500">Gera biofertilizante sólido seco para fácil ensacamento.</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono font-bold bg-slate-50 px-2 py-0.5 rounded border border-slate-200">PRENSA</span>
                    </button>

                  </div>
                </div>

              </div>

              {/* Action Button inside Left Grid */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={handleSubmitToForm}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm py-4 px-6 rounded-xl block w-full text-center shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Preencher Solicitação de Proposta</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Simulated Live Technical Specification Output */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
              
              {/* Output Header */}
              <div className="border-b border-slate-200 pb-4">
                <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest font-bold">
                  SIMULAÇÃO ESTRUTURAL DE SUCESSO
                </span>
                <h3 className="font-display font-bold text-xl text-slate-900 mt-1">
                  Configuração Proposta Durinoxx
                </h3>
              </div>

              {/* Dynamic visual miniature of structural plates */}
              <div className="bg-white rounded-xl p-4 border border-slate-200 flex items-center justify-center gap-6 shadow-sm">
                
                {/* Micro schematic canvas */}
                <div className="relative w-28 h-32 flex flex-col items-center justify-end">
                  {/* Wireframe lines */}
                  <div className="absolute inset-0 border border-dashed border-orange-500/20 rounded-lg" />
                  
                  {/* Tank structure dynamic drawing */}
                  <div
                    className="bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 border border-slate-350 shadow-sm relative transition-all duration-300"
                    style={{
                      width: `${Math.max(50, Math.min(100, (diameter / 46) * 100))}%`,
                      height: `${Math.max(40, Math.min(100, (height / 12) * 100))}%`,
                      borderRadius: '8px 8px 12px 12px'
                    }}
                  >
                    {/* Ring divider lines */}
                    {Array.from({ length: totalRings - 1 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="absolute border-b border-slate-400/50 w-full left-0"
                        style={{ bottom: `${((idx + 1) / totalRings) * 100}%` }}
                      />
                    ))}

                    {/* Label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[9px] font-bold text-slate-800 font-mono">
                        {volume}m³
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dimensions text highlights */}
                <div className="space-y-1.5 text-xs">
                  <div>
                    <span className="text-slate-400 font-mono block">DIÂMETRO DE PROJETO:</span>
                    <span className="text-slate-800 font-bold">{diameter} Metros</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block">ALTURA ESTRUTURAL:</span>
                    <span className="text-slate-800 font-bold">{height} Metros</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono block">QUANTIDADE DE ANÉIS:</span>
                    <span className="text-slate-800 font-semibold">{totalRings} Anéis de Chapas</span>
                  </div>
                </div>

              </div>

              {/* Output specifications detail list */}
              <div className="space-y-3.5">
                
                <div className="flex justify-between text-xs font-mono pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Liga de Aço Inox Recomendada:</span>
                  <span className="text-orange-600 font-bold bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                    {steelGrade}
                  </span>
                </div>

                <div className="flex justify-between text-xs font-mono pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Total de Chapas Segmentadas:</span>
                  <span className="text-slate-800 font-semibold">~ {totalPlates} Chapas Stallkamp</span>
                </div>

                <div className="flex justify-between text-xs font-mono pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Previsão de Vida Útil Operacional:</span>
                  <span className="text-emerald-650 font-bold text-emerald-600">{estimatedLifespan}+ Anos</span>
                </div>

                <div className="flex justify-between text-xs font-mono pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Manutenções Críticas Necessárias:</span>
                  <span className="text-slate-800 font-semibold">Nenhuma nos primeiros 20 anos</span>
                </div>

                <div className="flex justify-between text-xs font-mono pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Normas Técnicas Asseguradas:</span>
                  <span className="text-slate-800 font-semibold">NR-13, AWWA D103, NR-12</span>
                </div>

              </div>

              {/* Informative warning alert about special configurations */}
              <div className="bg-amber-500/[0.04] p-4 rounded-lg border border-amber-500/20 flex gap-2.5">
                <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  <strong>Atenção Técnica:</strong> Para volumes acima de 5.000m³, nossa equipe de engenharia realiza estudos complementares de sondagem de solo SP para garantia total do dimensionamento da fundação civil.
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
