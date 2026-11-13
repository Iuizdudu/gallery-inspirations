import React from 'react';
import { GitPullRequest, ExternalLink, Github, FolderPlus, Globe } from 'lucide-react';
import { useLanguage } from '../../locales/translations';
import { GITHUB_REPO_URL, DEPLOY_URL } from '../../data/config';
import StarBorder from '../../components/StarBorder/StarBorder';

export const GuidePage: React.FC = () => {
  const { language, t } = useLanguage();
  const isPt = language === 'pt-BR';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12">
      <header className="space-y-3 pb-6 border-b border-[#1E1E1E]">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-[#365dff]">
          <GitPullRequest className="w-3.5 h-3.5" />
          <span>{isPt ? 'GUIA DE CONTRIBUIÇÃO' : 'CONTRIBUTION GUIDE'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
          {t.guideTitle}
        </h1>
        <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
          {t.guideSubtitle}
        </p>
      </header>

      {/* 5-Step Process for References */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
          {isPt
            ? '1. Como Adicionar uma Nova Referência (5 Etapas)'
            : '1. How to Add a New Reference (5 Steps)'}
        </h2>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-xs font-mono text-[#365dff] shrink-0 font-semibold">
              01
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">
                {isPt ? 'Acesse o Repositório Oficial' : 'Open the Official Repository'}
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {isPt
                  ? 'Visite o repositório oficial no GitHub. Todo o catálogo é aberto e versionado em TypeScript, com deploy contínuo na Vercel.'
                  : 'Visit the official GitHub repository. The entire catalog is open-source and typed in TypeScript with continuous deployment on Vercel.'}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-xs font-mono text-[#365dff] shrink-0 font-semibold">
              02
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">
                {isPt ? 'Faça um Fork e Crie uma Branch' : 'Fork the Repo & Create a Branch'}
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {isPt ? (
                  <>
                    Crie um fork para a sua conta no GitHub, clone localmente, execute{' '}
                    <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">npm install</code>{' '}
                    e crie uma branch descritiva para a sua contribuição.
                  </>
                ) : (
                  <>
                    Fork the repository to your GitHub account, clone locally, run{' '}
                    <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">npm install</code>{' '}
                    and create a descriptive branch for your contribution.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-xs font-mono text-[#365dff] shrink-0 font-semibold">
              03
            </div>
            <div className="space-y-2 flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-white">
                {isPt ? 'Adicione sua Referência' : 'Add Your Reference'}
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {isPt ? (
                  <>
                    Abra o arquivo{' '}
                    <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">src/data/references.ts</code>{' '}
                    e insira um novo objeto no array <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#E4E4E7] font-mono">REFERENCES</code>:
                  </>
                ) : (
                  <>
                    Open{' '}
                    <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">src/data/references.ts</code>{' '}
                    and append a new object to the <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#E4E4E7] font-mono">REFERENCES</code> array:
                  </>
                )}
              </p>
              <pre className="p-3 bg-[#090909] border border-[#222222] rounded-lg text-[11px] text-[#A1A1AA] font-mono overflow-x-auto">
{`{
  id: "stripe-press",
  title: "Stripe Press",
  categoryId: "landing", // ID em src/data/categories.ts
  url: "https://press.stripe.com/",
  descriptionPt: "Publicações sobre ideias e inovação com tipografia editorial.",
  descriptionEn: "Publications on ideas and innovation with editorial typography.",
  popularity: 96, // Opcional (1-100)
}`}
              </pre>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-xs font-mono text-[#365dff] shrink-0 font-semibold">
              04
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">
                {isPt ? 'Validação Técnica Local' : 'Local Type & Build Check'}
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {isPt ? (
                  <>
                    Garanta que o link HTTPS funciona e execute{' '}
                    <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">npm run lint</code>{' '}
                    e <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">npm run build</code>{' '}
                    para confirmar que não há erros de TypeScript.
                  </>
                ) : (
                  <>
                    Verify the HTTPS URL works and run{' '}
                    <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">npm run lint</code>{' '}
                    and <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">npm run build</code>{' '}
                    to ensure zero TypeScript errors.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2E2E2E] flex items-center justify-center text-xs font-mono text-[#365dff] shrink-0 font-semibold">
              05
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">
                {isPt ? 'Envie um Pull Request' : 'Submit a Pull Request'}
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {isPt
                  ? 'Abra o Pull Request direcionado à branch main. Após aprovação, a atualização entra automaticamente no ar na Vercel.'
                  : 'Open a Pull Request targeting the main branch. Once merged, changes are automatically deployed to Vercel.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Category Creation Guide */}
      <section className="space-y-6 pt-4 border-t border-[#1E1E1E]">
        <div className="flex items-center gap-2.5">
          <FolderPlus className="w-5 h-5 text-[#365dff]" />
          <h2 className="text-xl font-bold text-[#F5F5F5] tracking-tight">
            {isPt
              ? '2. Como Criar uma Nova Categoria'
              : '2. How to Create a New Category'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
          {isPt
            ? 'Caso sua referência não se encaixe nas categorias atuais, você pode criar uma nova categoria em 3 passos simples. A Sidebar, a Home e o Command Palette (Ctrl + K) atualizam automaticamente:'
            : 'If a reference does not fit any existing category, you can add a new category in 3 straightforward steps. The Sidebar, Home page, and Ctrl + K Command Palette update automatically:'}
        </p>

        <div className="space-y-4">
          {/* Cat Step 1 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] space-y-2">
            <h3 className="text-sm font-semibold text-white">
              {isPt
                ? 'A. Registre a categoria em src/data/categories.ts'
                : 'A. Register the category in src/data/categories.ts'}
            </h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              {isPt ? (
                <>
                  Adicione um novo objeto ao array{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">CATEGORIES</code>{' '}
                  com ID único em kebab-case, slug da URL, nomes e descrições bilíngues:
                </>
              ) : (
                <>
                  Append a new object to the{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">CATEGORIES</code>{' '}
                  array with a unique kebab-case ID, URL slug, and bilingual names/descriptions:
                </>
              )}
            </p>
            <pre className="p-3 bg-[#090909] border border-[#222222] rounded-lg text-[11px] text-[#A1A1AA] font-mono overflow-x-auto">
{`{
  id: "ai-interfaces",
  slug: "ai-interfaces",
  namePt: "Interfaces de IA",
  nameEn: "AI Interfaces",
  descriptionPt: "Padrões visuais, prompts e fluxos para produtos com IA.",
  descriptionEn: "UI patterns, prompt flows, and visual craft for AI products.",
  iconName: "Cpu", // Nome do ícone mapeado em CategoryIcon.tsx
}`}
            </pre>
          </div>

          {/* Cat Step 2 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] space-y-2">
            <h3 className="text-sm font-semibold text-white">
              {isPt
                ? 'B. Configure o ícone em src/components/Icons/CategoryIcon.tsx'
                : 'B. Map the icon in src/components/Icons/CategoryIcon.tsx'}
            </h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              {isPt ? (
                <>
                  Use um dos ícones do <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#E4E4E7] font-mono">lucide-react</code> já registrados (ex.:{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">Layout</code>,{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">Sparkles</code>,{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">Cpu</code>,{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">Code2</code>,{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">Palette</code>) ou adicione um novo <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#E4E4E7] font-mono">case</code> no arquivo{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">src/components/Icons/CategoryIcon.tsx</code>.
                </>
              ) : (
                <>
                  Pick any already-registered <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#E4E4E7] font-mono">lucide-react</code> icon (e.g.,{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">Layout</code>,{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">Sparkles</code>,{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">Cpu</code>,{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">Code2</code>,{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">Palette</code>) or add a new <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#E4E4E7] font-mono">case</code> inside{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">src/components/Icons/CategoryIcon.tsx</code>.
                </>
              )}
            </p>
          </div>

          {/* Cat Step 3 */}
          <div className="p-5 rounded-xl bg-[#121212] border border-[#262626] space-y-2">
            <h3 className="text-sm font-semibold text-white">
              {isPt
                ? 'C. Inclua de 1 a 3 referências iniciais'
                : 'C. Add 1 to 3 initial references'}
            </h3>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              {isPt ? (
                <>
                  Adicione ao menos uma referência em{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">src/data/references.ts</code>{' '}
                  apontando <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#E4E4E7] font-mono">categoryId: &quot;ai-interfaces&quot;</code>{' '}
                  para que a nova categoria não apareça vazia na interface.
                </>
              ) : (
                <>
                  Add at least one reference in{' '}
                  <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#365dff] font-mono">src/data/references.ts</code>{' '}
                  with <code className="px-1.5 py-0.5 bg-[#181818] rounded text-[#E4E4E7] font-mono">categoryId: &quot;ai-interfaces&quot;</code>{' '}
                  so the new category is populated right away.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Direct CTAs */}
      <section className="pt-4 flex flex-wrap items-center gap-4">
        <StarBorder
          as="a"
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          color="#365dff"
          trailColor="#5c7eff"
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
          <span>{isPt ? 'Abrir Repositório no GitHub' : 'Open GitHub Repository'}</span>
          <ExternalLink className="w-4 h-4 text-[#94A3B8]" />
        </StarBorder>

        <a
          href={DEPLOY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121212] hover:bg-[#181818] border border-[#262626] hover:border-[#365dff]/60 text-xs font-semibold text-[#E4E4E7] hover:text-white transition-all"
        >
          <Globe className="w-4 h-4 text-[#365dff] shrink-0" />
          <span>{isPt ? 'Acessar Deploy na Vercel' : 'Open Vercel Deployment'}</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#71717A]" />
        </a>
      </section>
    </div>
  );
};
