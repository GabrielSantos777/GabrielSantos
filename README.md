# Portfolio Gabriel Santos

Portfolio pessoal desenvolvido em React para apresentar projetos de Full Stack, Data/BI e automacao, com foco em performance, design responsivo e conteudo centralizado em um unico arquivo de dados.


## Tecnologias

- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui + Radix UI
- React Router DOM
- TanStack Query

## Funcionalidades

- Secoes completas de apresentacao: Hero, Sobre, Skills, Projetos, Artigos e Contato
- Catalogo de projetos com filtros por categoria
- Renderizacao de artigos do Medium via feed RSS (com fallback entre provedores)
- Formulario de contato com envio via endpoint configuravel
- Tema com componentes reutilizaveis e layout responsivo


## Estrutura principal

```txt
src/
  components/           # Secoes e UI
  data/
    portfolio-data.ts   # Conteudo do portfolio (projetos, skills, contatos, etc.)
  pages/
    Index.tsx           # Pagina principal
```


## Licenca

Este projeto esta licenciado sob a **MIT License**.

Voce pode usar, copiar, modificar e distribuir este software, mantendo o aviso de copyright e de permissao.

Para mais detalhes, consulte o arquivo `LICENSE` na raiz do repositorio.
