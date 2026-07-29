import { useState } from 'react';
import { motion } from 'motion/react';
import { ProductDetail, ProductId } from '../types';
import { Layers, Zap, Hammer, RefreshCw, Shield, ToggleLeft, ArrowRight } from 'lucide-react';
import { useSheets } from '../context/SheetsContext';

export default function ProductCatalog() {
  const { getImageUrl } = useSheets();
  const portfolioSystems = getImageUrl("03") || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800";
  const [activeTab, setActiveTab] = useState<ProductId>('tanques');

  const products: ProductDetail[] = [
    {
      id: 'tanques',
      name: 'Tanques de Aço Inox Segmentados',
      tagline: 'A evolução do armazenamento de fluidos e dejetos industriais.',
      description: 'Tanques modulares de aço inox (AISI 304, 316 ou 316Ti) fixados por parafusos inoxidáveis especiais e selagem hermética. Instalação rápida por guias mecânicas de içamento.',
      features: [
        'Instalação modular sem soldas em campo',
        'Resistência absoluta a gases corrosivos (H₂S)',
        'Fácil expansão e desmontagem modular',
        'Fundações de concreto simplificadas'
      ],
      techSpec: {
        material: 'AISI 304 / AISI 316 / AISI 316Ti (Stallkamp)',
        capacityOrFlow: '50 m³ a 15.000 m³',
        efficiency: 'Estanqueidade 100% (Guarnições de EPDM/Viton)',
        compliance: 'Conformidade com NR-13 e normas ambientais'
      }
    },
    {
      id: 'bombas',
      name: 'Sistemas de Bombas de Alta Performance',
      tagline: 'Transporte de fluidos densos, lodos e dejetos sem entupimento.',
      description: 'Bombas Stallkamp submersíveis e de lóbulos desenvolvidas para o bombeamento eficiente de fluidos de alta viscosidade, presença de sólidos e materiais fibrosos.',
      features: [
        'Lóbulos de altíssima resistência abrasiva',
        'Operação estável sob alta pressão',
        'Manutenção in-place sem desconectar tubos',
        'Motores de alto rendimento energético'
      ],
      techSpec: {
        material: 'Ferro Fundido Dúctil ou Aço Inox Fundido',
        capacityOrFlow: 'Vazão até 380 m³/h • Pressões até 12 bar',
        efficiency: 'Até 88% de eficiência mecânica',
        compliance: 'NR-12 Integrada • Certificação CE'
      }
    },
    {
      id: 'agitadores',
      name: 'Agitadores e Misturadores Submersíveis',
      tagline: 'Homogeneização contínua para fermentação e biodigestão.',
      description: 'Misturadores de alto torque Stallkamp ideais para homogeneizar efluentes e dejetos orgânicos, otimizando a liberação de biogás e evitando a decantação.',
      features: [
        'Hélices autolimpantes em aço inox',
        'Ajuste preciso de altura e ângulo',
        'Sensores térmicos e de umidade integrados',
        'Baixo consumo energético com alto fluxo'
      ],
      techSpec: {
        material: 'Aço Inoxidável AISI 304 ou AISI 316',
        capacityOrFlow: 'Diâmetros de hélice até 1.200 mm',
        efficiency: 'Hélices projetadas via simulação CFD',
        compliance: 'Conformidade ATEX para segurança explosiva'
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
              Desenvolvemos o projeto completo do tanque industrial, incluindo todos os componentes de circulação, agitação e separação física da mesma fabricante Stallkamp, garantindo compatibilidade química e mecânica de 100%.
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
                <span>Engenharia Alemã Stallkamp</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span>Soluções Seguras sob Medida (NR-12)</span>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-4xl mx-auto mb-12"
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
                className={`py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-center transition-all duration-300 border flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-orange-500/10 border-orange-500 text-orange-600 shadow-md shadow-orange-500/5 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {p.id === 'tanques' && <Layers className="h-5 w-5" />}
                {p.id === 'bombas' && <Zap className="h-5 w-5" />}
                {p.id === 'agitadores' && <RefreshCw className="h-5 w-5" />}
                {p.id === 'separadores' && <Hammer className="h-5 w-5" />}
                <span>{p.id === 'tanques' ? 'Tanques de Inox' : p.id === 'bombas' ? 'Sistemas de Bombas' : p.id === 'agitadores' ? 'Agitadores' : 'Separadores'}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab content area */}
        <motion.div 
          key={activeTab}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg"
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
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                  {activeProduct.name}
                </h3>
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

      </div>
    </section>
  );
}

function pname(id: ProductId) {
  switch (id) {
    case 'tanques': return 'Tanques';
    case 'bombas': return 'Bombas';
    case 'agitadores': return 'Agitadores';
    case 'separadores': return 'Separadores';
  }
}
