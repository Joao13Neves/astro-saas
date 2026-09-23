# Performance de renderização

## Obrigatório

- `ChangeDetectionStrategy.OnPush` em todos os componentes.
- Estado via `signal` / `computed` / `input`. Evitar mutar objetos no lugar.
- `@for` com `track` estável (`id`, nunca `$index` se a lista reordena).
- Features lazy: `loadChildren` / `loadComponent`.
- Gráficos e blocos pesados: `@defer (on viewport)`.

## Evitar

- `*ngFor` / `*ngIf` (control flow novo é mais barato e explícito).
- Getters que alocam arrays no template a cada CD.
- `JSON.parse` / filtros em template.
- Bibliotecas de gráfico pesadas (Chart.js, Apex) para widgets simples — usar SVG próprio.
- `ChangeDetectorRef.detectChanges()` sem necessidade.

## Listas e busca

```ts
readonly query = signal('');
readonly tickets = computed(() =>
  filterTickets(this.source(), this.query()),
);
```

Debounce de busca fica no componente/serviço, não no template.

## Assinaturas

- `takeUntilDestroyed()` ou `toSignal()`.
- Não assinar no template além de `async`/`toSignal` já resolvido na classe.

## Estilos

- Estilos no componente (encapsulados).
- Tokens globais em `src/styles/styles.scss`.
- Evitar CSS global por feature.
