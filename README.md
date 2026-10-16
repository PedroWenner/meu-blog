# Portfólio — Pedro Wenner

Site pessoal/portfólio com apresentação, experiência profissional, habilidades, projetos e contato. Disponível em **português e inglês**, com **tema claro/escuro**.

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Material UI](https://mui.com/) (Emotion) e Font Awesome
- [React Router](https://reactrouter.com/)
- [i18next](https://www.i18next.com/) / react-i18next
- ESLint + Prettier

## Funcionalidades

- Páginas: Sobre, Projetos (com página de detalhe), Experiência, Habilidades e Contato
- Internacionalização (PT/EN) com preferência salva no navegador
- Tema claro/escuro
- Layout responsivo
- Conteúdo orientado a dados (`src/data`), fácil de atualizar sem mexer nos componentes

## Como executar

Requer Node.js 20+.

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção (type-check + bundle)
npm run preview   # pré-visualiza o build
npm run lint      # análise estática
```

## Estrutura

```
src/
├── data/      # projetos, experiências, habilidades e contatos
├── i18n/      # traduções PT/EN
├── layout/    # estrutura da aplicação (AppShell)
├── pages/     # About, Projects, Experience, Skills, Contact
├── routes/    # rotas
└── theme/     # tema MUI e modo claro/escuro
```

## Contato

[LinkedIn](https://www.linkedin.com/in/pedro-wenner-54bb20350/) · [GitHub](https://github.com/PedroWenner) · pedro_wenner@outlook.com
