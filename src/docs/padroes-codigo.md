# Padrões de código

## TypeScript

- `strict` ligado. Sem `any`, sem `as unknown as`.
- Preferir uniões literais (`'urgente' | 'alta'`) a `string`.
- Interfaces de domínio com `readonly` nos campos imutáveis.
- Models em `*.models.ts` por contexto (`auth`, `ui`, `dashboard`).
- Funções puras em `shared/utils`. Sem lógica de negócio em template.

## Angular APIs

- Inputs: `input()` / `input.required()`.
- Outputs: `output()`.
- Estado derivado: `computed()`.
- Estado local: `signal()`.
- Injeção: `inject()`.
- Detecção: `ChangeDetectionStrategy.OnPush` em **todo** componente.

```ts
readonly title = input.required<string>();
readonly disabled = input(false);
readonly submitted = output<void>();
```

Não usar `@Input()` / `@Output()` em código novo.

## Templates

- Control flow: `@if`, `@for`, `@switch`.
- Listas: `@for (item of items(); track item.id)`.
- Sem `*ngIf`, `*ngFor`, `*ngSwitch`.
- Sem getters pesados no template (filtrar, mapear, formatar complexo).

## Forms

- `NonNullableFormBuilder`.
- `FormGroup<TControls>` tipado.
- Controles de UI recebem `FormControl<T>` via `input.required`.

## Nomenclatura

- Classes/arquivos em inglês: `DashboardUserComponent`, `auth.guard.ts`.
- Texto de UI em português: "Bom dia", "Chamados abertos".
- Seletores: prefixo `app-`.
- Classes CSS: BEM (`dashboard-widget__title`).

## Organização de arquivo

```
feature/
  feature.routes.ts
  pages/nome-da-pagina/
  components/nome-do-bloco/
  models/
  services/
  mocks/
```

Um componente = pasta com `.ts`, `.html`, `.scss`.
