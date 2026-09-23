# Componentização

Extrair componente quando o bloco:

- aparece em mais de um lugar; ou
- tem responsabilidade visual própria (card, nav item, gráfico); ou
- deixa a página com mais de ~80 linhas de template.

## Smart vs presentational

- **Página (smart):** busca dados, conecta serviços, passa inputs.
- **Bloco (presentational):** recebe `input()`, emite `output()`, sem HTTP.

Páginas não desenham tabelas, gráficos ou itens de menu inline.

## Reuso por configuração

Listas, nav e tabelas usam arrays tipados — não copiar markup.

```ts
const OrdersCellClass = {
  Total: 'orders-cell--total',
} as const;

readonly columns: readonly TableColumn<Order>[] = [
  { header: TableHeader.TicketNumber, key: 'number' },
  { header: TableHeader.Priority, value: (row) => TICKET_PRIORITY_LABELS[row.priority] },
  { header: TableHeader.Subject, key: 'total', cellClass: OrdersCellClass.Total },
];
```

```scss
:host ::ng-deep .orders-cell--total {
  --app-table-cell-font-weight: 800;
  --app-table-cell-color: var(--color-secundary-black);
}
```

Novos títulos entram em `TableHeader`. Estilo extra de célula fica no **filho** via `cellClass` + SCSS local. A markup da tabela fica só em `app-table`.

Nav do shell é data-driven (`UserNavItem[]`). Outro perfil (admin) reusa o mesmo `SidebarComponent`.

## Projeção

Use `ng-content` para chrome reutilizável (widget, botão, formulário). Não crie variantes de card só para trocar o miolo.

## Proibido duplicar

- Mesma função de cálculo em dois componentes → `shared/utils`.
- Mesmo card/header de widget → `DashboardWidgetComponent`.
- Mesmo item de menu → `NavItemComponent`.
- Mesmo ícone SVG inline em várias telas → `app-icon`.
- Mesma estrutura de inputs e botões.



## Tamanho

Se dois widgets compartilham título + kebab, o chrome é um componente. O gráfico/tabela é outro.