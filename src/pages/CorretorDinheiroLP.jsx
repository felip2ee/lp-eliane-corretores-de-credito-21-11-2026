import React from 'react';

const CorretorDinheiroLP = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-white">
      {/* Global Typography Wrapper:
          - Headings use font-display (Montserrat)
          - Body uses font-sans (Open Sans)
      */}
      <header className="py-12 px-6 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-accent mb-4">
          Corretor de Dinheiro High Ticket
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Bem-vindo à estrutura da nova LP de High Ticket.
        </p>
      </header>

      <main className="container mx-auto px-6 pb-24">
        <section className="bg-secondary p-8 rounded-2xl shadow-xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
            Seção de Exemplo
          </h2>
          <p className="text-base md:text-lg">
            Este componente serve como shell inicial para a implementação do projeto.
          </p>
        </section>
      </main>
    </div>>
  );
};

export default CorretorDinheiroLP;
