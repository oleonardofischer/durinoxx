import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ContactFormData, SectorId } from '../types';
import { Mail, Phone, Building2, User, Send, CheckCircle2, ShieldCheck, HelpCircle, MessageSquare } from 'lucide-react';

interface ContactFormProps {
  prefilledMessage: string;
  prefilledSector: SectorId | 'other';
  prefilledVolume: string;
  onClearPrefill: () => void;
}

export default function ContactForm({
  prefilledMessage,
  prefilledSector,
  prefilledVolume,
  onClearPrefill
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    sector: 'other',
    volumeRequired: '',
    message: '',
    agreedToTerms: true
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [protocolCode, setProtocolCode] = useState('');

  // Sync prefilled parameters from calculator
  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage,
        sector: prefilledSector,
        volumeRequired: prefilledVolume
      }));
    }
  }, [prefilledMessage, prefilledSector, prefilledVolume]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Nome completo é obrigatório.';
    if (!formData.company.trim()) newErrors.company = 'Nome da empresa é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail corporativo é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor, insira um e-mail corporativo válido.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefone para contato é obrigatório.';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'É necessário aceitar os termos de contato.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val
    }));

    // Clear error for that field
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const generatedProtocol = `DUR-${Math.floor(100000 + Math.random() * 900000)}`;
    setProtocolCode(generatedProtocol);

    const emailSubject = `[ORÇAMENTO DURINOXX] ${formData.company} - ${formData.fullName} (${generatedProtocol})`;
    const emailMessage = 
      `Nova solicitação de orçamento via site Durinoxx:\n\n` +
      `Protocolo: ${generatedProtocol}\n` +
      `Nome: ${formData.fullName}\n` +
      `Empresa: ${formData.company}\n` +
      `E-mail do Cliente: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Setor do Projeto: ${formData.sector}\n` +
      `Volume Requerido: ${formData.volumeRequired || 'Não informado'}\n\n` +
      `Mensagem / Especificações Técnicas:\n${formData.message || 'Sem detalhes adicionais'}\n`;

    try {
      // Send form data to info@durinoxx.com via FormSubmit AJAX service
      await fetch("https://formsubmit.co/ajax/info@durinoxx.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _replyto: formData.email,
          _autoresponse: `Olá ${formData.fullName},\n\nObrigado por solicitar um orçamento à Durinoxx!\n\nRecebemos suas especificações técnicas com o Protocolo #${generatedProtocol}.\nEm breve, um de nossos engenheiros especialistas entrará em contato com você para apresentar o estudo de viabilidade e proposta técnica.\n\nAtenciosamente,\nEquipe Durinoxx Engenharia em Inox\nwww.durinoxx.com.br`,
          Protocolo: generatedProtocol,
          Nome: formData.fullName,
          Empresa: formData.company,
          EmailCliente: formData.email,
          Telefone: formData.phone,
          Setor: formData.sector,
          VolumeEstimado: formData.volumeRequired || 'Não informado',
          MensagemDetalhes: formData.message || 'Sem detalhes'
        })
      });
    } catch (err) {
      console.warn("Auto-submit service unavailable, fallback to direct notification:", err);
    }

    // Also fallback / open mailto if required or just show modal
    setIsSubmitting(false);
    setShowSuccessModal(true);

    // Reset form
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      sector: 'other',
      volumeRequired: '',
      message: '',
      agreedToTerms: true
    });
    onClearPrefill();
  };

  return (
    <section id="contato" className="py-20 bg-slate-900 border-b border-slate-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Copy & Trust Builders */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2 font-mono">
                CENTRAL DE ENGENHARIA DE VENDAS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Inicie Seu Projeto Comercial Hoje
              </h2>
              <p className="text-slate-300 mt-4 text-sm sm:text-base leading-relaxed">
                Nossa equipe técnica é composta por engenheiros de aplicação de alta experiência industrial. Analisamos suas restrições de fluidos, layout de planta e requisitos de estanqueidade para entregar a solução definitiva em inox.
              </p>
            </div>

            {/* Quick stats / guarantees */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              
              <div className="flex gap-3.5 items-start">
                <div className="bg-emerald-500/10 text-emerald-400 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Retorno Técnico em 24 Horas</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Respondemos com dimensionamento prévio e estimativa técnica rápida para aprovações internas.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="bg-emerald-500/10 text-emerald-400 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Segurança e ART Registrada</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Todo orçamento de montagem Durinoxx é acompanhado de termo de responsabilidade técnica de engenharia civil/mecânica.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="bg-emerald-500/10 text-emerald-400 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Suporte ao Financiamento BNDES</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Facilidade de pagamento com homologação para financiamento via FINAME, Pronamp e linhas de crédito verde.</p>
                </div>
              </div>

            </div>

            {/* Contact cards */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3.5 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <div>
                  <span className="text-slate-500 block font-mono">E-MAIL DIRETO:</span>
                  <a href="mailto:info@durinoxx.com" className="text-white hover:underline font-semibold">
                    info@durinoxx.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <div>
                  <span className="text-slate-500 block font-mono">CENTRAL WHATSAPP:</span>
                  <a 
                    href="https://wa.me/5549991988570?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os!" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:underline font-semibold"
                  >
                    +55 49 99198.8570
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Column 2: Lead capture form */}
          <motion.div 
            className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            
            {prefilledMessage && (
              <div className="mb-6 bg-orange-500/10 border border-orange-500/30 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-2 text-orange-400 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 animate-pulse" />
                  <span><strong>Parâmetros do Simulador Carregados!</strong> Ajustamos o formulário para você.</span>
                </div>
                <button
                  onClick={onClearPrefill}
                  className="text-[10px] text-slate-400 hover:text-white underline font-mono"
                >
                  Limpar
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full name */}
                <div className="space-y-1">
                  <label htmlFor="fullName" className="text-xs font-semibold text-slate-300 block">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ex: João Silva"
                      className={`w-full bg-slate-900 border ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-orange-500'
                      } text-white rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[10px] text-red-500">{errors.fullName}</p>}
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label htmlFor="company" className="text-xs font-semibold text-slate-300 block">
                    Nome da Empresa *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Ex: Indústrias Aliança S/A"
                      className={`w-full bg-slate-900 border ${
                        errors.company ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-orange-500'
                      } text-white rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.company && <p className="text-[10px] text-red-500">{errors.company}</p>}
                </div>

              </div>

              {/* Row 2: Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300 block">
                    E-mail Corporativo *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Ex: joao@empresa.com.br"
                      className={`w-full bg-slate-900 border ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-orange-500'
                      } text-white rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-300 block">
                    Telefone de Contato *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ex: (11) 99999-9999"
                      className={`w-full bg-slate-900 border ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-orange-500'
                      } text-white rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
                </div>

              </div>

              {/* Row 3: Sector and Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Sector select */}
                <div className="space-y-1">
                  <label htmlFor="sector" className="text-xs font-semibold text-slate-300 block">
                    Setor do Projeto
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="agua">Armazenamento de Água / Saneamento</option>
                    <option value="biogas">Tratamento de Dejetos / Biogás</option>
                    <option value="quimico">Processamento Químico</option>
                    <option value="other">Outra Aplicação Industrial</option>
                  </select>
                </div>

                {/* Required Volume */}
                <div className="space-y-1">
                  <label htmlFor="volumeRequired" className="text-xs font-semibold text-slate-300 block">
                    Volume Estimado Requerido (m³)
                  </label>
                  <input
                    type="text"
                    id="volumeRequired"
                    name="volumeRequired"
                    value={formData.volumeRequired}
                    onChange={handleInputChange}
                    placeholder="Ex: 1500 m³"
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300 block">
                  Descrição Técnica ou Detalhes Adicionais
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Por favor, descreva as especificações do fluido (temperatura, agressividade química, viscosidade) e localidade da montagem para facilitar nossa análise de engenharia preliminar."
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              {/* Data security checkbox */}
              <div className="space-y-1 pt-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    className="rounded text-orange-500 focus:ring-orange-500 h-4 w-4 bg-slate-900 border-slate-800"
                  />
                  <span className="text-[11px] text-slate-400">
                    Concordo em fornecer esses dados para que a equipe de engenharia da Durinoxx elabore a proposta técnica e de orçamento personalizado, de acordo com a LGPD.
                  </span>
                </label>
                {errors.agreedToTerms && <p className="text-[10px] text-red-500">{errors.agreedToTerms}</p>}
              </div>

              {/* Submit CTA Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-white font-medium text-base py-3.5 px-6 rounded-xl block w-full text-center shadow-lg hover:shadow-orange-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando Dados Técnicos...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      <span>Solicitar Orçamento de Projeto</span>
                    </>
                  )}
                </button>
              </div>

            </form>

          </motion.div>

        </div>

      </div>

      {/* SUCCESS MODAL DIALOG */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
            <div className="flex flex-col items-center text-center space-y-4">
              
              {/* Giant icon */}
              <div className="bg-emerald-500/10 text-emerald-400 p-4 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <div>
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                  SOLICITAÇÃO RECEBIDA COM SUCESSO
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  Parâmetros de Engenharia Registrados!
                </h3>
              </div>

              <div className="bg-slate-950 px-4 py-2.5 rounded-lg border border-slate-800 font-mono text-xs text-slate-300">
                PROTOCOLO DE ATENDIMENTO: <strong className="text-orange-500">{protocolCode}</strong>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                Excelente! Sua configuração e dados de contato foram salvos com sucesso na nossa Central de Projetos Durinoxx.
              </p>

              <p className="text-slate-400 text-xs">
                Em breve, um de nossos engenheiros especialistas entrará em contato por e-mail ou telefone para enviar o estudo prévio de fundação, cálculo estrutural de anéis e proposta de orçamento personalizada.
              </p>

              <div className="pt-2 w-full space-y-2">
                <a
                  href={`https://wa.me/5549991988570?text=${encodeURIComponent(`Olá! Acabei de solicitar um orçamento no site (Protocolo #${protocolCode}). Gostaria de agilizar a análise técnica.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 w-full text-center transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Agilizar Atendimento via WhatsApp</span>
                </a>

                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs sm:text-sm py-2 px-6 rounded-lg block w-full text-center cursor-pointer transition-colors"
                >
                  Fechar
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
