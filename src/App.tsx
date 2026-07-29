/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SectorId } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import TechComparison from './components/TechComparison';
import GermanTechnology from './components/GermanTechnology';
import ProductCatalog from './components/ProductCatalog';
import ApplicationSectors from './components/ApplicationSectors';
import QuoteCalculator from './components/QuoteCalculator';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { SheetsProvider } from './context/SheetsContext';

export default function App() {
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [prefilledSector, setPrefilledSector] = useState<SectorId | 'other'>('biogas');
  const [prefilledVolume, setPrefilledVolume] = useState<string>('');

  // Handle configuration pass-through from the interactive calculator to the lead form
  const handleSelectConfig = (summary: string, sector: SectorId, volume: number) => {
    setPrefilledMessage(summary);
    setPrefilledSector(sector);
    setPrefilledVolume(`${volume} m³`);

    // Smooth scroll down to the contact lead form
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Direct CTA buttons to request proposal
  const handleOpenQuote = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearPrefill = () => {
    setPrefilledMessage('');
    setPrefilledSector('other');
    setPrefilledVolume('');
  };

  return (
    <SheetsProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-orange-500/30 selection:text-white">
        
        {/* 1. Frosted Navigation Header */}
        <Header onOpenQuote={handleOpenQuote} />

        {/* 2. Hero Presentation Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 3. Tech Comparison (Inox vs. Ferro) */}
        <TechComparison />

        {/* 4. German Stallkamp Technology & Compliance */}
        <GermanTechnology />

        {/* 5. Integrated Products & Catalog Tab showcase */}
        <ProductCatalog />

        {/* 6. Main Industrial Application Sectors */}
        <ApplicationSectors />

        {/* 7. Interactive Dimensional Simulator / ROI Calculator */}
        <QuoteCalculator onSelectConfig={handleSelectConfig} />

        {/* 8. Conversion Lead Form (Contact Form) */}
        <ContactForm
          prefilledMessage={prefilledMessage}
          prefilledSector={prefilledSector}
          prefilledVolume={prefilledVolume}
          onClearPrefill={handleClearPrefill}
        />

        {/* 9. Comprehensive Professional Footer */}
        <Footer />

      </div>
    </SheetsProvider>
  );
}

