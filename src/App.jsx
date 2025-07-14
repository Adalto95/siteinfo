
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Segments from '@/components/Segments';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import Downloads from '@/components/Downloads';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
      <Helmet>
        <title>Infostart - Sistema, Automação e Tecnologia para seu Negócio</title>
        <meta
          name="description"
          content="Potencialize seu negócio com as soluções da Infostart: sistema de gestão, automação comercial, maquininha de cartão, certificado digital e atendimento humanizado. Tecnologia para o varejo."
        />
        <meta name="keywords" content="maquina de cartão, sistema, tecnologia, automação, loja de informática, certificado digital, atendimento humanizado, automação comercial, software de gestão" />
        <link rel="icon" type="image/webp" href="/ico.webp" />
      </Helmet>
      
      <Navbar scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Segments />
        <Solutions />
        <Testimonials />
        <Downloads />
        <Contact />
      </main>
      
      <Footer scrollToSection={scrollToSection} />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}

export default App;
