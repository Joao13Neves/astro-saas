# UI e fidelidade ao Figma

## Fonte da verdade

Implementar telas a partir do frame do Figma, não de memória.

- Arquivo: [AstroSuporte](https://www.figma.com/design/y7OMDkLbZEIAwQfkw6i9LE/AstroSuporte)
- Conferir espaçamento, raios, pesos de fonte, cores e hierarquia.

## Tokens

Cores e gradientes vivem em `:root` (`src/styles/styles.scss`).

```scss
color: var(--color-primary-blue);
background: var(--color-gradient-left-menu);
```

Não hardcodar hex em componente salvo quando o token ainda não existe — nesse caso, **adicionar o token** e usar a variável.

Fonte: Inter (já no `index.html`).

## Ícones

Somente via `app-icon` + `AppIconName`. Não colar SVG solto em páginas.

## CSS

- BEM: `.sidebar__item`, `.sidebar__item--active`.
- Desktop first (frame 1440×820).
- Breakpoints pelo mixin `mq` em `src/styles/_mixins.scss`.
- Sem Angular Material neste projeto.

## Acessibilidade mínima

- Botões com `aria-label` quando só têm ícone.
- Tabelas com `<th>` e escopo.
- Contraste dos tokens do Figma; não “melhorar” cores por conta.

## Fora do frame atual

Não implementar dark mode, Dashboard admin ou cadastros só porque existem no arquivo. Cada tela tem um frame e um escopo.
