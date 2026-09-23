# Documentação técnica — Astro SaaS (front-end)

Leitura **obrigatória** para qualquer agent ou desenvolvedor antes de alterar o código.

## Ordem de leitura

1. [Arquitetura Standalone](./arquitetura-standalone.md)
2. [Padrões de código](./padroes-codigo.md)
3. [Componentização](./componentizacao.md)
4. [Performance](./performance.md)
5. [UI e Figma](./ui-e-figma.md)

## Regras absolutas

- O projeto é **100% Angular Standalone**. Não criar `NgModule`, `*Module` nem `declarations`.
- Seguir TypeScript **strict** e tipagem forte. Sem `any`.
- Componentizar ao máximo. Sem duplicar markup, estilos ou funções.
- Todo componente usa `ChangeDetectionStrategy.OnPush`.
- UI nova deve ser fiel ao Figma (tokens, espaçamento, tipografia).
- Nomes em português apenas no texto visível ao usuário.

## Referência de design

- Arquivo Figma: [AstroSuporte](https://www.figma.com/design/y7OMDkLbZEIAwQfkw6i9LE/AstroSuporte)
- Dashboard Usuário: node `1492-276`
