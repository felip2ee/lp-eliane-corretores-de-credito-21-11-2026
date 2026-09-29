import React from 'react';
import ComparisonTable from '../components/lp/ComparisonTable';
import PriceCard from '../components/lp/PriceCard';

const CorretorDinheiroLP = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-white">
      {/* Global Typography Wrapper:
          - Headings use font-display (Montserrat)
          - Body uses font-sans (Open Sans)
      */}

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 px-6 overflow-hidden">
        {/* Black Friday Hook */}
        <div className="container mx-auto mb-8 flex items-center justify-center gap-3 text-accent font-display text-sm md:text-base font-bold uppercase tracking-widest animate-pulse">
          <span>[ÍCONE: Cronômetro]</span>
          <span>Pare de comprar coisas. Invista em habilidades.</span>
        </div>
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

        {/* Revelation Section */}
        <section className="py-20 border-t border-accent/10 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              O que os bancos escondem de você está dentro da <span className="text-accent">Caixa Preta</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              Existe um código invisível que separa quem implora por crédito de quem domina a mesa.
              Não é sobre score, não é sobre garantias e não é sobre ter um "contato" no banco.
              <br /><br />
              É sobre entender a engenharia por trás da aprovação.
            </p>

            <div className="relative w-full max-w-2xl mx-auto aspect-video bg-dark border-2 border-accent/20 rounded-xl flex items-center justify-center text-accent font-display italic shadow-2xl mb-12">
              [IMAGEM: Convite VIP]
            </div>

            <div className="bg-primary/30 p-8 rounded-2xl border border-accent/30 inline-block">
              <p className="font-display text-xl md:text-2xl font-bold text-white">
                📅 Marque na agenda: 21 de Novembro
              </p>
              <p className="text-gray-300 mt-2">
                O dia em que a Caixa Preta será aberta.
              </p>
            </div>
          </div>
        </section>

        {/* Authority Section */}
        <section className="py-20 border-t border-accent/10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-md aspect-[4/5] bg-secondary rounded-2xl border-2 border-accent/30 flex items-center justify-center text-accent font-display italic overflow-hidden shadow-2xl">
                [IMAGEM: Eliane Leadership]
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="text-left order-1 md:order-2">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Quem vai te guiar nesse caminho.
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <span className="text-white font-bold">Eliane Moreira</span> é especialista no mercado financeiro com mais de 16 anos de experiência.
                  Ela não apenas estuda o sistema, ela opera dentro dele.
                </p>
                <p>
                  Ao longo de sua trajetória, Eliane participou da estruturação de mais de <span className="text-accent font-bold">R$ 400 milhões</span> em operações de crédito aprovadas.
                  Sua expertise transformou a realidade de centenas de empresários que, como você, estavam cansados de ouvir "não" dos bancos.
                </p>
                <p>
                  Hoje, ela abre a Caixa Preta para ensinar a engenharia financeira necessária para que você pare de pedir crédito e passe a pular as etapas burocráticas, acessando os recursos que o seu negócio realmente precisa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Pricing Section */}
      <section id="checkout" className="py-24 bg-dark/50 border-t border-accent/10">
        <div className="container mx-auto px-6 text-center">
          <PriceCard />
        </div>
      </section>
    </div>
  );
};

export default CorretorDinheiroLP;
