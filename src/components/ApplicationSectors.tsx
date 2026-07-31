import { motion } from 'motion/react';
import { SectorDetail, SectorId } from '../types';
import { Droplet, Flame, FlaskConical, Shield, Check } from 'lucide-react';

export default function ApplicationSectors() {
  const sectors: SectorDetail[] = [
    {
      id: 'agua',
      title: 'Tratamento de Efluentes (ETE) & Saneamento',
      subtitle: 'Decantação, Armazenamento de Lodo e Reatores Biológicos',
      description: 'Estações de Tratamento de Efluentes com estanqueidade total. Tanques para decantação, armazenamento de lodo, tanques de mistura, coleta de efluentes e reatores biológicos de alta durabilidade.',
      benefits: [
        'Resistência absoluta a efluentes urbanos e industriais',
        'Estanqueidade 100% que previne contaminação do solo',
        'Inércia biológica que impede incrustações e biofilme',
        'Estrutura modular sem necessidade de caixarias na obra'
      ],
      specs: {
        recommendedInox: 'Aço Inox AISI 304 / AISI 316L',
        avgTemp: 'Temperatura ambiente até 45°C',
        standards: ['CONAMA 430', 'ABNT NBR 12209', 'NR-13', 'AWWA D103']
      }
    },
    {
      id: 'biogas',
      title: 'Usinas de Biogás e Digestão Anaeróbia',
      subtitle: 'Fermentadores, Tanques Finais e Armazenamento de Gás',
      description: 'Projetados especificamente para suportar o ambiente agressivo e corrosivo do biogás (H₂S e ácidos voláteis). Coberturas de dupla membrana de insuflação contínua com baixíssima permeabilidade ao metano.',
      benefits: [
        'Anel superior em AISI 316Ti especial para zona de gás',
        'Isolamento térmico trapezoidal integrado',
        'Compatibilidade total com agitadores submersíveis Stallkamp',
        'Retenção segura de efluentes da digestão anaeróbia'
      ],
      specs: {
        recommendedInox: 'AISI 316Ti (Anel superior) / AISI 304 (Anéis inferiores)',
        avgTemp: '38°C (Mesofílico) a 55°C (Termofílico)',
        standards: ['Normas Internacionais de Biogás', 'ATEX', 'NR-12', 'DIN 4102 B1']
      }
    },
    {
      id: 'quimico',
      title: 'Agricultura e Agroindústria',
      subtitle: 'Dejetos Líquidos, Esterqueiras, Chorume e Fertilizantes',
      description: 'Armazenamento seguro para dejetos animais, chorume e fertilizantes orgânicos. Evita infiltrações no lençol freático e permite a recuperação mecânica de nutrientes para adubação.',
      benefits: [
        'Resistência a compostos nitrogenados e amônia',
        'Integração com separadores de fases sólido-líquido',
        'Agitação eficiente que impede a sedimentação do dejeto',
        'Montagem ágil diretamente sobre laje de concreto'
      ],
      specs: {
        recommendedInox: 'Aço Inox AISI 304 ou AISI 316L (Padrão Agro)',
        avgTemp: 'Temperatura ambiente',
        standards: ['Licenciamento Ambiental SEEMA/FATMA', 'NR-13']
      }
    }
  ];

  const additionalIndustries = [
    { title: 'Indústria em Geral', desc: 'Efluentes industriais, coleta de águas residuais e água clarificada.' },
    { title: 'Cervejarias', desc: 'Armazenamento de bagaço de malte (polpa cervejeira) e efluentes do processo.' },
    { title: 'Alimentos e Bebidas', desc: 'Armazenamento de sucos de frutas, resíduos alimentares líquidos e lodos orgânicos.' },
    { title: 'Reserva Técnica de Incêndio (RTI)', desc: 'Reservatórios dedicados contra incêndio de altíssima confiabilidade.' },
    { title: 'Madeireira, Papel e Celulose', desc: 'Tratamento e armazenamento de efluentes celulósicos e licores industriais.' }
  ];

  return (
    <section id="setores" className="py-20 bg-slate-950 border-b border-slate-900">
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
            SETORES DE ATUAÇÃO INDUSTRIAL
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Aplicações Industriais Homologadas
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Nossos sistemas de engenharia em aço inox Stallkamp são sob medida para os cenários mais exigentes do mercado nacional, combinando conformidade regulamentadora e proteção estrutural.
          </p>
        </motion.div>

        {/* Sectors Display Loop */}
        <div className="space-y-12">
          {sectors.map((sector) => {
            return (
              <motion.div
                key={sector.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Visual glow indicator */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Description & Benefits */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="bg-orange-500/10 text-orange-400 p-3 rounded-xl border border-orange-500/20">
                        {sector.id === 'agua' && <Droplet className="h-6 w-6" />}
                        {sector.id === 'biogas' && <Flame className="h-6 w-6" />}
                        {sector.id === 'quimico' && <FlaskConical className="h-6 w-6" />}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 uppercase block tracking-wider">
                          {sector.subtitle}
                        </span>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                          {sector.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {sector.description}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                        Benefícios Críticos de Operação:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {sector.benefits.map((b, idx) => (
                          <div key={idx} className="flex gap-2 items-start">
                            <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-300 leading-relaxed">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Engineering Specs Box */}
                  <div className="lg:col-span-5 bg-slate-950 border border-slate-800/80 rounded-xl p-5 sm:p-6 space-y-5">
                    <h4 className="font-display font-bold text-xs text-slate-400 tracking-wider uppercase border-b border-slate-900 pb-2.5 flex items-center gap-1.5">
                      <Shield className="h-4 w-4 text-orange-500" />
                      Especificação de Engenharia Durinoxx
                    </h4>

                    <div className="space-y-4">
                      
                      {/* Alloy Type */}
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono block">LIGA METÁLICA RECOMENDADA:</span>
                        <span className="text-sm font-semibold text-white block mt-0.5">
                          {sector.specs.recommendedInox}
                        </span>
                      </div>

                      {/* Temperature */}
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono block">FAIXA DE TRABALHO TÉRMICO:</span>
                        <span className="text-sm font-semibold text-slate-300 block mt-0.5">
                          {sector.specs.avgTemp}
                        </span>
                      </div>

                      {/* Normas regulamentadoras */}
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono block">NORMAS E REQUISITOS ATENDIDOS:</span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {sector.specs.standards.map((s, idx) => (
                            <span
                              key={idx}
                              className="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono font-medium px-2 py-0.5 rounded"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    <div className="pt-4 border-t border-slate-900">
                      <a
                        href="#calculadora"
                        className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-center font-medium text-xs text-white py-3 rounded-lg block transition-colors"
                      >
                        Simular Dimensionamento para este Setor
                      </a>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Industry Segments Card Grid */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-mono text-orange-400 uppercase font-bold tracking-widest block">
              DEMAIS SEGMENTOS ATENDIDOS
            </span>
            <h3 className="font-display font-bold text-xl text-white mt-1">
              Aplicações Especializadas de Processo
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalIndustries.map((ind, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800/80 p-4 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <h4>{ind.title}</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed pl-4">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
