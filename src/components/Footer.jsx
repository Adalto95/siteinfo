
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text-sky cursor-pointer" onClick={() => scrollToSection('inicio')}>
              Infostart
            </div>
            <p className="text-gray-400">
              Soluções completas para potencializar o seu negócio desde 2006.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/infostartautomacao" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/infostartautomacao/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UCuFO5_65GQVvWs6pKm5NDmQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Nossas Lojas</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span><strong className="text-white">BAEPENDI:</strong> Rua Cel José Eugênio Ferreira, 88 - Centro</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span><strong className="text-white">CONCEIÇÃO DO RIO VERDE:</strong> Rua Dilermando de Oliveira, 562 - Centro</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span><strong className="text-white">CRUZÍLIA:</strong> Rua Cel. Serafim Pereira, nº 60 A - Centro</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Contato</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>contato@infostart.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+55 (35) 3343-1876</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+55 (35) 99840-3179</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Links Rápidos</span>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('quemsomos')} className="block text-gray-400 hover:text-white transition-colors">Quem Somos</button>
              <button onClick={() => scrollToSection('solucoes')} className="block text-gray-400 hover:text-white transition-colors">Soluções</button>
              <button onClick={() => scrollToSection('downloads')} className="block text-gray-400 hover:text-white transition-colors">Downloads</button>
              <a href="https://docs.google.com/forms/d/1Falf7NzXjKwkY-Fi6986xgn0AsZDFjmB6-FAl5Pv0O0" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">Trabalhe Conosco</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Infostart. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
