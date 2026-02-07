import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-black">
      <main className="mx-auto flex w-full max-w-2xl flex-col gap-12 px-6 py-16 text-base leading-relaxed">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em]">igor</p>
          <div className="space-y-3">
            <p>construo coisas.</p>
            <p>principalmente com software.</p>
            <p>uso esse site pra escrever, pensar e guardar ideias.</p>
            <p>às vezes projetos aparecem no caminho.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
            <a
              href="https://github.com/igorbiccas"
              className="inline-flex items-center gap-2 underline underline-offset-4"
              aria-label="GitHub @igorbiccas"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.06 1.03-2.78-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.06a9.25 9.25 0 0 1 5 0c1.91-1.33 2.75-1.06 2.75-1.06.55 1.42.2 2.46.1 2.72.64.72 1.03 1.65 1.03 2.78 0 3.96-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
              @igorbiccas
            </a>
            <a
              href="https://flowcorp.vercel.app"
              className="underline underline-offset-4"
            >
              flowcorp.vercel.app
            </a>
          </div>
        </section>

        <hr className="border-black" />

        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em]">agora</p>
          <div className="space-y-3">
            <p>estou trabalhando em produtos digitais.</p>
            <p>aprendendo em público.</p>
            <p>testando, errando, ajustando.</p>
            <p>nada aqui é definitivo.</p>
          </div>
        </section>

        <hr className="border-black" />

        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em]">notas</p>
          <div className="space-y-3">
            <p>textos curtos.</p>
            <p>rascunhos.</p>
            <p>perguntas melhores que respostas.</p>
            <p>escrevo pra entender o que estou fazendo.</p>
            <p>se ajudar alguém, ótimo.</p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default App;
