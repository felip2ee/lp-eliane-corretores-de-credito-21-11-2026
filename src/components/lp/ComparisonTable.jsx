import React from 'react';

const ComparisonTable = () => {
  const amadorData = [
    { feature: 'Abordagem', value: 'Pede crédito no escuro' },
    { feature: 'Critério', value: 'Depende da vontade do gerente' },
    { feature: 'Conhecimento', value: 'Acredita em promessas fáceis' },
    { feature: 'Resultado', value: 'Crédito negado ou caro' },
  ];

  const profissionalData = [
    { feature: 'Abordagem', value: 'Domina a regra do jogo' },
    { feature: 'Critério', value: 'Sabe exatamente o que o banco quer' },
    { feature: 'Conhecimento', value: 'Independência técnica total' },
    { feature: 'Resultado', value: 'Crédito aprovado no valor máximo' },
  ];

  return (
    <section className="py-20 px-6 bg-dark">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Do Amadorismo ao <span className="text-accent">Profissionalismo</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Amador Column */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-3xl p-8 transition-all hover:border-gray-600">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-gray-400 uppercase tracking-widest">
                O Amador
              </h3>
              <div className="h-1 w-12 bg-gray-600 mx-auto mt-2"></div>
            </div>
            <div className="space-y-6">
              {amadorData.map((item, idx) => (
                <div key={idx} className="flex flex-col border-b border-gray-800 pb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase mb-1">{item.feature}</span>
                  <span className="text-gray-300 text-lg">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Corretor de Dinheiro Column */}
          <div className="bg-primary border-2 border-accent rounded-3xl p-8 shadow-[0_0_30px_rgba(220,164,82,0.2)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-dark font-bold px-4 py-1 rounded-bl-xl text-xs uppercase">
              Nível High Ticket
            </div>
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-accent uppercase tracking-widest">
                Corretor de Dinheiro
              </h3>
              <div className="h-1 w-12 bg-accent mx-auto mt-2"></div>
            </div>
            <div className="space-y-6">
              {profissionalData.map((item, idx) => (
                <div key={idx} className="flex flex-col border-b border-secondary pb-4">
                  <span className="text-xs font-bold text-accent/70 uppercase mb-1">{item.feature}</span>
                  <span className="text-white text-lg font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
