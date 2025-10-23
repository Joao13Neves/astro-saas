# Astro Suporte (Angular 20)

Aplicação Angular moderna pensada como base para um SaaS de suporte. Este README foi otimizado para recrutadores e para onboarding rápido.

## Stack e principais decisões

- **Framework**: Angular 20 (standalone compatível, projeto em modo clássico)
- **Build/Dev**: Angular CLI e `@angular/build`
- **Linguagem**: TypeScript 5.8
- **Estilos**: SCSS global + CSS Custom Properties em `:root`
- **Gerenciador de pacotes**: npm (há `yarn.lock`, mas scripts usam npm)

## Requisitos

- Node.js LTS (18+ recomendado)
- npm 9+

## Como rodar localmente

```bash
npm install
npm start
# Abra http://localhost:4200
```

Scripts úteis (package.json):

- `npm start`: inicia `ng serve`
- `npm run build`: build de produção para `dist/`
- `npm run watch`: build contínuo modo dev
- `npm test`: executa testes unitários (Karma + Jasmine)

## Estrutura do projeto

```text
src/
  app/
    app.ts            # Componente raiz
    app.html          # Template raiz
    app.scss          # Estilos do app
  assets/
    icons/            # Ícones (favicons, etc.)
    img/              # Imagens (SVGs, etc.)
  styles/             # Módulos de estilo globais
    styles.scss       # Variáveis e tokens (CSS Custom Properties)
  styles.scss         # Entrada global de estilos (importa styles/styles.scss)
  index.html          # HTML host
```

## Estilos e Design System

- Variáveis de cor e gradientes definidos em `:root` no arquivo `src/styles/styles.scss`.
- O arquivo `src/styles.scss` importa o módulo acima, garantindo que as variáveis estejam disponíveis globalmente.

Exemplo de variáveis:

```css
:root {
  --color-primary-blue: #0d88f9;
  --color-gradient-left-menu: linear-gradient(180deg, #f7f7f8 0%, #f0f1f7 100%);
}
```

Uso no componente (SCSS):

```scss
body {
  background: var(--color-gradient-left-menu);
}
```

Boas práticas adotadas:

- Custom Properties em `:root` para tema global
- Gradientes definidos como tokens para reuso
- Import/organização em módulo de estilos dedicado

## Assets e favicon

- Assets estáticos são servidos de `public/` e `src/assets/` (configurado em `angular.json`).
- Recomenda-se usar SVG como favicon com fallback `.ico` quando necessário.

Exemplo no `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/assets/img/astro-logo.svg?v=1" /> <link rel="alternate icon" type="image/x-icon" href="/favicon.ico?v=1" />
```

Se preferir somente `.ico`, mova o arquivo final para `public/favicon.ico` e use:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

## Rotas e módulo principal

- Projeto com componente raiz `App` (`src/app/app.ts`) e template `app.html`.
- Rotas configuráveis em `src/app/app-routing-module.ts` (se aplicável).

## Qualidade de código

- Prettier configurado para HTML (parser Angular)
- TypeScript estrito recomendado (ajustável em `tsconfig.json`)

## Build e deploy

Build de produção:

```bash
npm run build
```

Saída em `dist/astro-saas/browser`.

Hospedagem estática comum:

- GitHub Pages, Netlify, Vercel (Static), Firebase Hosting ou Nginx/Apache.
- Garanta `base href="/"` no `index.html` e rotas compatíveis com fallback para `index.html`.

Exemplo Nginx (single-page app):

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Testes

```bash
npm test
```

- Framework: Jasmine
- Runner: Karma

## Próximos passos sugeridos

- Adicionar temas claro/escuro com Custom Properties
- Configurar ESLint + prettier-plugin-angular
- Pipeline CI com lint, testes e build (GitHub Actions)
- Adicionar testes de componentes (TestBed) e e2e (Playwright ou Cypress)

## Contatos

Se você está avaliando este projeto para uma vaga, fique à vontade para abrir issues ou solicitar mais detalhes sobre decisões técnicas.
