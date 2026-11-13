# (Feature Request) Gerar prompts copiáveis a partir das referências do acervo

> **Tipo:** Feature Request (`enhancement`, `ai-workflow`)  
> **Projeto:** [Gallery Inspirations](https://github.com/Iuizdudu/gallery-inspirations) · [App Online](https://gallery-inspirations.vercel.app/)

---

## Resumo

Adicionar ao acervo do **Gallery Inspirations** uma ação para copiar um prompt pronto, contextualizado com as referências de cada item ou seção, para ser utilizado diretamente no agente de IA do usuário.

---

## Problema

Atualmente, o Gallery Inspirations reúne referências de sites e inspirações organizadas em diversas categorias, como `Landing`, `SaaS`, `UI/UX`, `Onboarding`, `Component`, `Web`, `eCommerce`, `Mobile`, `Navbar`, `Footer`, `Motion`, `Branding` e outras.

Apesar de o acervo facilitar a descoberta e consulta dessas referências, ainda existe uma etapa manual para utilizá-las no agente de IA: o usuário precisa selecionar ou copiar os links, abrir o agente e explicar por conta própria como aquelas referências devem ser utilizadas.

Esse processo torna o fluxo menos prático e faz com que o usuário tenha que escrever repetidamente instruções semelhantes.

---

## Solução proposta

Disponibilizar uma ação visual, como um botão **"Copiar prompt"**, nos itens ou agrupamentos de referências do acervo.

Ao acionar o botão, o sistema deve montar e copiar automaticamente um prompt que reúna os links correspondentes e explique ao agente de IA como utilizá-los como referência.

O prompt deve deixar claro que os links servem como inspiração visual e funcional para a tarefa solicitada — e não como conteúdo para simplesmente copiar ou reproduzir integralmente.

---

## Exemplo de prompt gerado

```markdown
Utilize as referências abaixo como inspiração para desenvolver a interface solicitada.

Analise os elementos visuais e funcionais de cada referência, observando aspectos como layout, hierarquia visual, composição, tipografia, cores, espaçamentos, componentes e interações.

Aproveite as ideias que fizerem sentido para o contexto do projeto, adaptando-as de forma consistente à identidade visual e aos requisitos existentes. Não reproduza as páginas literalmente e não substitua funcionalidades já implementadas sem necessidade.

Referências:
- (Link da referência 1)
- (Link da referência 2)
- (Link da referência 3)
```

> *Os links acima são ilustrativos. O conteúdo real do prompt deve ser preenchido automaticamente com as referências associadas ao item ou seção selecionada.*

---

## Comportamento esperado

1. O usuário acessa uma categoria, seção ou item do acervo.
2. Encontra uma ação de **"Copiar prompt"** próxima às referências disponíveis.
3. Ao clicar, o sistema reúne os links relacionados e gera o prompt correspondente.
4. O prompt completo é copiado para a área de transferência.
5. A interface apresenta uma confirmação visual discreta, como **"Prompt copiado!"**.
6. O usuário pode colar o conteúdo diretamente no agente de IA que estiver utilizando.

---

## Critérios de aceitação

- [ ] Disponibilizar a ação de copiar prompt no contexto das referências do acervo.
- [ ] Incluir automaticamente no prompt todos os links pertencentes ao item ou agrupamento selecionado.
- [ ] Gerar instruções claras sobre como o agente deve analisar e utilizar as referências.
- [ ] Preservar os links originais, sem omitir referências.
- [ ] Copiar o prompt completo para a área de transferência.
- [ ] Exibir um feedback visual após a cópia.
- [ ] Manter a experiência visual consistente com a interface atual do Gallery Inspirations.
- [ ] Garantir que o recurso funcione nas versões desktop e mobile.

---

## Resultado esperado

Transformar o acervo em algo mais prático para o fluxo de trabalho com IA: em vez de apenas consultar e copiar referências manualmente, o usuário poderá obter, com um único clique, um prompt contextualizado e pronto para enviar ao seu agente de IA.
