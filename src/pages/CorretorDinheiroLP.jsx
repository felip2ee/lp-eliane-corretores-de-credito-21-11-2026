import React from 'react';
import ComparisonTable from '../components/lp/ComparisonTable';

const CorretorDinheiroLP = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-white">
      {/* Global Typography Wrapper:
          - Headings use font-display (Montserrat)
          - Body uses font-sans (Open Sans)
      */}

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 px-6 overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left z-10">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Você não precisa de mais crédito. <br />
              <span className="text-accent">Você precisa da regra do jogo.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Pare de tentar a sorte com o seu gerente. Domine a engenharia financeira que destrava os maiores limites do mercado e posicione-se como um Corretor de Dinheiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#checkout" className="bg-accent hover:bg-accentHover text-dark font-bold py-4 px-8 rounded-full text-center transition-all transform hover:scale-105 text-lg shadow-lg shadow-accent/20">
                QUERO DOMINAR A REGRA DO JOGO
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-secondary rounded-2xl border-2 border-accent/30 flex items-center justify-center text-accent font-display italic overflow-hidden shadow-2xl">
              [IMAGEM: Eliane Portrait]
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-primary/50 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
      </section>

      <main className="container mx-auto px-6 pb-24">
        <ComparisonTable />
      </main>
    </div>
  );
};

export default CorretorDinheiroLP;
