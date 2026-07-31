import { useState } from 'react';
import { motion } from 'motion/react';
import { ProductDetail, ProductId } from '../types';
import { Shield } from 'lucide-react';
import { useSheets } from '../context/SheetsContext';

// Custom technical SVG Icons matching Image.png
export function TankTechnicalIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Tank Dome Top */}
      <path d="M 16 28 C 16 16, 48 16, 48 28" strokeWidth="2.5" />
      {/* Tank Dome Cap/Hatch */}
      <path d="M 28 17 C 28 14, 36 14, 36 17" />
      {/* Tank Body Outer Walls */}
      <path d="M 16 28 L 16 52 M 48 28 L 48 52" strokeWidth="2.5" />
      {/* Horizontal Shell Rings */}
      <line x1="16" y1="36" x2="48" y2="36" strokeDasharray="0" />
      <line x1="16" y1="44" x2="48" y2="44" strokeDasharray="0" />
      {/* Bottom Ring Foundation */}
      <rect x="12" y="52" width="40" height="4" rx="1" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
      {/* Ladder Structure on the Right */}
      <line x1="42" y1="30" x2="42" y2="52" strokeWidth="1.8" />
      <line x1="42" y1="34" x2="48" y2="34" strokeWidth="1.5" />
      <line x1="42" y1="40" x2="48" y2="40" strokeWidth="1.5" />
      <line x1="42" y1="46" x2="48" y2="46" strokeWidth="1.5" />
    </svg>
  );
}

export function AgitatorTechnicalIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Central Hub */}
      <circle cx="20" cy="32" r="3.5" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
      
      {/* 3 Large Curved Propeller Blades */}
      {/* Top Blade */}
      <path d="M 20 28.5 C 15 14, 28 8, 25 22 C 23.5 25, 21 27.5, 20 28.5 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
      {/* Bottom Left Blade */}
      <path d="M 17.5 34 C 4 38, 5 54, 16 43 C 18.5 40.5, 19 36, 17.5 34 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
      {/* Bottom Right Blade */}
      <path d="M 22.5 34 C 36 38, 35 54, 24 43 C 21.5 40.5, 21 36, 22.5 34 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />

      {/* Motor Body Shaft & Cylindrical Housing */}
      <path d="M 23.5 26 L 42 26 C 45 26, 47 28, 47 32 C 47 36, 45 38, 42 38 L 23.5 38" strokeWidth="2" />
      {/* Cooling Fins/Rings on Motor */}
      <line x1="31" y1="26" x2="31" y2="38" strokeWidth="1.5" />
      <line x1="36" y1="26" x2="36" y2="38" strokeWidth="1.5" />
      <line x1="41" y1="26" x2="41" y2="38" strokeWidth="1.5" />

      {/* Guide Mast Mounting Rail Frame */}
      <rect x="47" y="16" width="10" height="32" rx="1" fill="currentColor" fillOpacity="0.1" strokeWidth="2" />
      <line x1="52" y1="12" x2="52" y2="52" strokeWidth="2.5" />
      <circle cx="52" cy="22" r="1.5" fill="currentColor" />
      <circle cx="52" cy="42" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function SeparatorTechnicalIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Top Rectangular Hopper / Funnel Box */}
      <polygon points="26,10 48,10 44,24 30,24" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
      <rect x="22" y="6" width="30" height="4" rx="1" strokeWidth="2" />

      {/* Horizontal Screw Press Barrel */}
      <rect x="18" y="24" width="32" height="12" rx="2" strokeWidth="2" />
      <line x1="24" y1="24" x2="24" y2="36" strokeWidth="1.5" />
      <line x1="30" y1="24" x2="30" y2="36" strokeWidth="1.5" />
      <line x1="36" y1="24" x2="36" y2="36" strokeWidth="1.5" />
      <line x1="42" y1="24" x2="42" y2="36" strokeWidth="1.5" />

      {/* End Discharge & Handwheel */}
      <path d="M 50 27 L 55 27 L 55 33 L 50 33" strokeWidth="2" />
      <circle cx="57" cy="30" r="3" fill="currentColor" fillOpacity="0.2" strokeWidth="1.8" />

      {/* Drive Motor Unit on Frame */}
      <rect x="12" y="38" width="14" height="10" rx="1" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
      <line x1="26" y1="43" x2="34" y2="43" strokeWidth="2" />

      {/* Support Stand & Trolley Frame */}
      <path d="M 34 36 L 34 52 M 44 36 L 44 52 M 16 48 L 16 52 M 12 52 L 50 52" strokeWidth="2" />

      {/* Wheels at the Bottom */}
      <circle cx="18" cy="56" r="3" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
      <circle cx="44" cy="56" r="3" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
    </svg>
  );
}

export default function ProductCatalog() {
  const { getImageUrl } = useSheets();
  const portfolioSystems = getImageUrl("03") || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800";
  const [activeTab, setActiveTab] = useState<ProductId>('tanques');

  const products: ProductDetail[] = [
    {
      id: 'tanques',
      name: 'Tanques de Aço Inox Segmentados (Ondulados & Lisos)',
      tagline: 'Sistemas modulares montados sobre base de concreto armado com estanqueidade absoluta.',
      description: 'Tanques industriais montados por sobreposição de chapas inoxidáveis fixadas por parafusos estruturais de alta resistência. Selagem com selante especial de elevada elasticidade, resistente a dejetos e efluentes agressivos. União à laje por perfil angular contínuo em aço inox e chumbadores.',
      features: [
        'Construção em Aço Ondulado (alta rigidez estrutural sem reforços) ou Aço Liso',
        'Ligas de alta performance: AISI 304, AISI 316L, AISI S32101 e AISI 318LN (Duplex)',
        'Anel superior em AISI 316Ti especial para zona de gás em biogás',
        'Borda superior com perfil estrutural de alta rigidez e estabilidade'
      ],
      techSpec: {
        material: 'AISI 304 / 316L / S32101 / 318LN / 316Ti',
        capacityOrFlow: 'Volumes até 12.800+ m³ (2,7m a 43,0m diâmetro)',
        efficiency: 'Estanqueidade 100% com selante elástico especial',
        compliance: 'Conformidade integral com NR-13 e normas ambientais'
      }
    },
    {
      id: 'agitadores',
      name: 'Agitadores e Misturadores Submersíveis',
      tagline: 'Homogeneização contínua para fermentação e biodigestão.',
      description: 'Misturadores de alto torque Stallkamp ideais para homogeneizar efluentes e dejetos orgânicos, otimizando a liberação de biogás e evitando a decantação.',
      features: [
        'Hélices autolimpantes em aço inox',
        'Ajuste preciso de altura e ângulo no mastro de guia',
        'Sensores térmicos e de umidade integrados',
        'Baixo consumo energético com alto fluxo de agitação'
      ],
      techSpec: {
        material: 'Aço Inoxidável AISI 304 ou AISI 316',
        capacityOrFlow: 'Diâmetros de hélice até 1.200 mm',
        efficiency: 'Hélices projetadas via simulação CFD',
        compliance: 'Conformidade ATEX e segurança operacional'
      }
    },
    {
      id: 'separadores',
      name: 'Separadores de Fases Sólido-Líquido',
      tagline: 'Separação e recuperação mecânica de efluentes.',
      description: 'Separadores helicoidais de prensa que realizam a triagem física de efluentes agrícolas ou industriais em fase sólida (fertilizante orgânico) e líquida (irrigação/biodigestor).',
      features: [
        'Rosca sem-fim endurecida em aço inox',
        'Peneiras de micragem precisa e autolimpantes',
        'Regulador mecânico de umidade final',
        'Redução imediata do volume armazenado'
      ],
      techSpec: {
        material: 'Aço Inoxidável AISI 316 Premium',
        capacityOrFlow: 'Vazão de entrada de até 90 m³/h',
        efficiency: 'Separação de até 94% de sólidos suspensos',
        compliance: 'Segurança mecânica completa NR-12'
      }
    }
  ];

  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <section id="sistemas" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <motion.div 
            className="lg:col-span-7 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block font-mono">
              PORTFÓLIO DE ENGENHARIA DE PROCESSO
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Sistemas e Equipamentos Integrados de Alta Performance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Desenvolvemos o projeto completo do tanque industrial, incluindo todos os componentes de circulação, agitação e separação física, garantindo compatibilidade química e mecânica de 100%.
            </p>
            
            {/* Process engineering advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span>Compatibilidade 100% Homologada</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span>Alta Resistência Química e Mecânica</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span>Engenharia Alemã</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span>Soluções Seguras sob Medida</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            {/* Real photograph of integrated systems */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group bg-slate-50 p-1">
              <div className="aspect-[3/2] w-full rounded-xl overflow-hidden relative">
                <img 
                  src={portfolioSystems} 
                  alt="Sistemas e Equipamentos Durinoxx" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Overlay indicator */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded border border-slate-200 text-[10px] font-mono font-medium text-slate-800 shadow-sm">
                  Sistemas Stallkamp em Operação
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Tab Bar */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          {products.map((p) => {
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`py-4 px-5 rounded-2xl font-medium text-sm sm:text-base text-center transition-all duration-300 border flex flex-col items-center justify-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-orange-500/10 border-orange-500 text-orange-600 shadow-lg shadow-orange-500/10 font-bold scale-[1.02]'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-100/80'
                }`}
              >
                <div className={isActive ? "text-orange-500" : "text-slate-500"}>
                  {p.id === 'tanques' && <TankTechnicalIcon className="h-8 w-8" />}
                  {p.id === 'agitadores' && <AgitatorTechnicalIcon className="h-8 w-8" />}
                  {p.id === 'separadores' && <SeparatorTechnicalIcon className="h-8 w-8" />}
                </div>
                <span>{p.id === 'tanques' ? 'Tanques de Inox' : p.id === 'agitadores' ? 'Agitadores' : 'Separadores'}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab content area */}
        <motion.div 
          key={activeTab}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Descriptive side */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest font-bold">
                  DURINOXX SOLUÇÕES DE ENGENHARIA
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <div className="text-orange-500 bg-orange-500/10 p-2 rounded-xl">
                    {activeProduct.id === 'tanques' && <TankTechnicalIcon className="h-8 w-8" />}
                    {activeProduct.id === 'agitadores' && <AgitatorTechnicalIcon className="h-8 w-8" />}
                    {activeProduct.id === 'separadores' && <SeparatorTechnicalIcon className="h-8 w-8" />}
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                    {activeProduct.name}
                  </h3>
                </div>
                <p className="text-slate-700 font-medium text-sm mt-2 italic">
                  "{activeProduct.tagline}"
                </p>
                <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              {/* Key Features bullet list */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Diferenciais de engenharia deste sistema:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2 items-start bg-white p-3 rounded-lg border border-slate-200">
                      <Shield className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications side */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-6 shadow-sm">
              <h4 className="font-display font-bold text-sm text-slate-900 border-b border-slate-150 pb-3 flex items-center gap-2">
                <span>Dados Técnicos do Equipamento</span>
                <span className="bg-orange-500/10 text-orange-600 text-[10px] px-2 py-0.5 rounded font-mono font-medium">Stallkamp</span>
              </h4>

              <div className="space-y-4">
                
                {/* Spec row */}
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Material de Construção:</span>
                  <span className="text-sm font-medium text-slate-800 block mt-0.5">
                    {activeProduct.techSpec.material}
                  </span>
                </div>

                {/* Spec row */}
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Dimensionamento / Vazão Máxima:</span>
                  <span className="text-sm font-medium text-slate-800 block mt-0.5">
                    {activeProduct.techSpec.capacityOrFlow}
                  </span>
                </div>

                {/* Spec row */}
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Eficiência Mecânica / Vedação:</span>
                  <span className="text-sm font-medium text-slate-800 block mt-0.5">
                    {activeProduct.techSpec.efficiency}
                  </span>
                </div>

                {/* Spec row */}
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Segurança e Conformidade:</span>
                  <span className="text-sm font-medium text-slate-800 block mt-0.5">
                    {activeProduct.techSpec.compliance}
                  </span>
                </div>

              </div>

              {/* Call-to-action to inquire specifically about this product */}
              <div className="pt-4 border-t border-slate-150">
                <a
                  href="#calculadora"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs py-3 rounded-lg text-center block w-full transition-all duration-200 hover:-translate-y-0.5"
                >
                  Configurar Projetos com {pname(activeProduct.id)}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Roofing Options & Accessories Breakdown Section (from Document) */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-10">
          <div>
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block font-mono">
              SISTEMAS DE COBERTURA E ACESSÓRIOS
            </span>
            <h3 className="font-display font-bold text-2xl text-slate-900 mt-1">
              Opções de Cobertura para Tanques de Armazenamento
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Fornecemos coberturas projetadas e fabricadas especificamente para conter emissões, odores e captar biogás:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Teto Inox */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <span className="text-[10px] font-mono text-orange-600 uppercase font-bold bg-orange-500/10 px-2 py-0.5 rounded">
                AÇO INOXIDÁVEL
              </span>
              <h4 className="font-bold text-slate-900 text-base">Teto em Aço Inox</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Versão autoportante (conforme diâmetro)</li>
                <li>• Selante elástico nas conexões</li>
                <li>• Pingadeira perimetral interna contra condensado</li>
                <li>• Inclinação do telhado de 10° ou 15°</li>
                <li>• Tampa para inspeção e manutenção</li>
              </ul>
            </div>

            {/* Teto Membrana Lona */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <span className="text-[10px] font-mono text-emerald-600 uppercase font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                MEMBRANA LONA
              </span>
              <h4 className="font-bold text-slate-900 text-base">Teto de Membrana</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Tecido reforçado em verde ou cinza</li>
                <li>• Redução de emissões de gases e odores</li>
                <li>• Tratamento fungicida e proteção UV</li>
                <li>• Baixa propagação de chamas (DIN 4102 B1)</li>
                <li>• Coluna central e perfil inox na borda</li>
              </ul>
            </div>

            {/* Teto Dupla Membrana */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <span className="text-[10px] font-mono text-amber-600 uppercase font-bold bg-amber-500/10 px-2 py-0.5 rounded">
                BIOGÁS & GASES
              </span>
              <h4 className="font-bold text-slate-900 text-base">Dupla Membrana</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Membrana externa + interna variando por pressão</li>
                <li>• Insuflação de ar em gabinete de aço inox</li>
                <li>• Coluna central AISI 304/316Ti</li>
                <li>• Mínima permeabilidade ao gás metano</li>
                <li>• Indicador mecânico/eletrônico de nível</li>
              </ul>
            </div>

            {/* Teto PRFV */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <span className="text-[10px] font-mono text-blue-600 uppercase font-bold bg-blue-500/10 px-2 py-0.5 rounded">
                FIBRA DE VIDRO
              </span>
              <h4 className="font-bold text-slate-900 text-base">Teto em PRFV</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Plana autoportante, cúpula lisa ou nervurada</li>
                <li>• Elevada rigidez e alta capacidade de carga</li>
                <li>• Vedação total com selante especial</li>
                <li>• Todas as fixações em aço inoxidável</li>
                <li>• Pingadeira perimetral interna</li>
              </ul>
            </div>

          </div>

          {/* Componentes & Acessórios Fornecidos */}
          <div className="pt-6 border-t border-slate-200">
            <h4 className="font-display font-bold text-base text-slate-900 mb-4">
              Componentes Individuais e Acessórios Integrados:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs text-slate-700">
              <div className="bg-slate-50 p-2.5 rounded border border-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Isolamento térmico trapezoidal</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded border border-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Fundo em inox 304 ou 316</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded border border-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Plataformas e passarelas</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded border border-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Escadas em alumínio/fixas</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded border border-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Manholes (bocas de inspeção)</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded border border-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Calhas de transbordamento</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded border border-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Passagens de parede & flanges</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded border border-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Válvulas de alívio & tubos de gás</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function pname(id: ProductId) {
  switch (id) {
    case 'tanques': return 'Tanques';
    case 'agitadores': return 'Agitadores';
    case 'separadores': return 'Separadores';
  }
}
