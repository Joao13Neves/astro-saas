# Arquitetura Angular Standalone

Este projeto **usa em todos seu** artefato o Angular Standalone.

## Bootstrap

```ts
bootstrapApplication(AppComponent, appConfig);
```

Providers globais ficam em `src/app/app.config.ts`:

- `provideRouter(routes)`
- `provideHttpClient()`
- `provideBrowserGlobalErrorListeners()`

Rotas ficam em `src/app/app.routes.ts`. Features exportam `Routes` em `{feature}.routes.ts`.

## Pastas


| Pasta              | Responsabilidade                                      |
| ------------------ | ----------------------------------------------------- |
| `src/app/core`     | Shell, auth, guards, navegação, serviços de aplicação |
| `src/app/shared`   | UI reutilizável, models, validators, utils            |
| `src/app/features` | Domínio (login, dashboard…). Cada feature é lazy      |


Não recriar `CoreModule` / `SharedModule`. Shared exporta **componentes**, não módulos.

## Rotas

```ts
{
  path: 'login',
  loadChildren: () =>
    import('./features/login/login.routes').then((m) => m.LOGIN_ROUTES),
}
```

- Lazy load por feature (`loadChildren` / `loadComponent`).
- Guards funcionais (`CanActivateFn`), nunca classes `CanActivate`.
- `data` de rota tipado com `satisfies`.



## Injeção

- `inject()` no campo da classe. Sem constructor injection.
- Serviços: `providedIn: 'root'` por padrão.
- Provider no componente só quando o estado for local à árvore.



## Geração

```bash
ng g c path/nome --standalone
ng g s path/nome
ng g g path/nome --functional
```

Schematics do `angular.json` já estão com `standalone: true`.

## Proibido

- `@NgModule`
- `declarations` / `bootstrap: [AppComponent]` em módulo
- `RouterModule.forRoot` / `forChild` em classes módulo
- Importar um “módulo barrel” só para reexportar Angular modules



## Dados mocados

- Os dados ficaram `temporariamente mocados`, pois os valores muitos deles serão dinâmicos e a maior parte quem terá a responsabilidade de fornecer será o backend, o frontend fará apenas a renderização e exibição, trazendo mais performance para a estrutura frontend.

