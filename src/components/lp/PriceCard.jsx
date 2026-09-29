import React from 'react';

const PriceCard = () => {
  return (
    <div className="relative w-full max-w-md mx-auto p-8 rounded-3xl bg-dark border-2 border-accent/30 text-center shadow-2xl transition-all hover:border-accent/50 group">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-dark font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
        Oferta Especial Black Friday
      </div>

      <h3 className="font-display text-2xl font-bold text-white mb-6">Investimento</h3>

      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <span className="text-gray-400 line-through text-xl">
          R$ 9.997
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-gray-300 text-lg font-sans">por apenas</span>
          <span className="font-display text-5xl md:text-6xl font-bold text-accent">
            R$ 5.997
          </span>
        </div>
      </div>

      <a
        href="#checkout"
        className="block w-full bg-accent hover:bg-accentHover text-dark font-bold py-5 px-8 rounded-full text-center transition-all transform hover:scale-105 text-xl shadow-lg shadow-accent/20 uppercase tracking-tight"
      >
        Quero meu acesso agora
      </a>

      <p className="text-gray-400 text-sm mt-6 italic">
        Acesso imediato à metodologia Corretor de Dinheiro
      </p>
    </div>
  );
};

export default PriceCard;
