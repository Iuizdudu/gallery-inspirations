import React from 'react';
import { GitPullRequest, GitFork, GitCommit, ExternalLink, Terminal, ShieldCheck, Github } from 'lucide-react';
import { useLanguage } from '../../locales/translations';
import { GITHUB_REPO_URL } from '../../data/config';
import StarBorder from '../../components/StarBorder/StarBorder';

export const GuidePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-10">
      <header className="space-y-3 pb-6 border-b border-[#1E1E1E]">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#3B82F6]">
          <GitPullRequest className="w-3.5 h-3.5" />
          <span>GUIA DE CONTRIBUIÇÃO</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
          {t.guideTitle}
        </h1>
        <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
          {t.guideSubtitle}
        </p>
      </header>

      {/* 5-Step Process */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
          O Fluxo de Contribuição em 5 Etapas
        </h2>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-xs font-mono text-[#3B82F6] shrink-0 font-semibold">
              01
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">Acesse o Repositório Oficial</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Clique no botão de contribuição ou visite diretamente o repositório oficial no GitHub. Todo o código do catálogo é público e de código aberto.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-xs font-mono text-[#3B82F6] shrink-0 font-semibold">
              02
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">Faça um Fork do Projeto</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Crie um fork do repositório para a sua conta pessoal no GitHub e clone o repositório em sua máquina local de desenvolvimento.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-xs font-mono text-[#3B82F6] shrink-0 font-semibold">
              03
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white">Adicione sua Referência</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Abra o arquivo <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#3B82F6] font-mono">src/data/references.ts</code> e adicione o objeto da sua referência no array, respeitando o modelo de tipos TypeScript:
              </p>
              <pre className="p-3 bg-[#090909] border border-[#222222] rounded-lg text-[11px] text-[#A1A1AA] font-mono overflow-x-auto">
{`{
  id: "nome-da-referencia",
  title: "Nome do Recurso",
  categoryId: "landing",
  url: "https://site-oficial.com/",
  descriptionPt: "Descrição concisa em português...",
  descriptionEn: "Concise description in English...",
  popularity: 90
}`}
              </pre>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-xs font-mono text-[#3B82F6] shrink-0 font-semibold">
              04
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">Commit e Validação</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Faça o commit de suas alterações garantindo que o link funcione e a descrição esteja clara. Teste a execução local com <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#3B82F6] font-mono">npm run build</code>.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-xs font-mono text-[#3B82F6] shrink-0 font-semibold">
              05
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">Envie um Pull Request</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Submeta o Pull Request no repositório oficial. Nossos mantenedores revisarão os metadados e farão a integração na próxima versão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="pt-4">
        <StarBorder
          as="a"
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          color="#38BDF8"
          trailColor="#60A5FA"
          duration={3.5}
          stars={1}
          trailLength={0.35}
          thickness={1.5}
          radius={12}
          glow={0.7}
          hover="lap"
          sparkle={true}
          clickPulse={true}
          theme="dark"
          backgroundColor="#141416"
          borderColor="rgba(255, 255, 255, 0.15)"
          className="inline-flex items-center gap-2 !px-5 !py-3 text-xs font-semibold text-white shadow-xl shadow-black/50"
        >
          <Github className="w-4 h-4 text-white shrink-0" />
          <span>Abrir Repositório no GitHub</span>
          <ExternalLink className="w-4 h-4 text-[#94A3B8]" />
        </StarBorder>
      </section>
    </div>
  );
};
