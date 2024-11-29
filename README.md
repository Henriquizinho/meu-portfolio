# Meu Portfólio Pessoal

## Descrição
Este é meu portfólio pessoal desenvolvido utilizando React e Vite. Ele inclui uma página inicial, um portfólio de projetos, uma página de contato e uma página de erro 404 personalizada.

## Tecnologias Utilizadas
- React
- Vite
- React Router Dom
- CSS/TailwindCSS

## Estrutura do Projeto

├── .react-router
├── app
│   ├── routes
│   │   ├── home.tsx
│   ├── welcome
│   │   ├── app.css
│   │   ├── root.tsx
│   │   ├── routes.ts
├── node_modules
├── public
│   ├── favicon.ico
├── src
│   ├── assets
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ProjectCard.jsx
│   ├── pages
│   │   ├── NewContact.jsx
│   │   ├── NewHome.jsx
│   │   ├── NewNotFound.jsx
│   │   ├── NewPortfolio.jsx
│   ├── App.jsx
├── .dockerignore
├── Dockerfile
├── Dockerfile.bun
├── Dockerfile.pnpm
├── package-lock.json
├── package.json
├── react-router.config.ts
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts


## Funcionalidades
- **Home:** Página inicial com uma breve introdução e habilidades.
- **Portfolio:** Exibição dos projetos com nome, descrição e link.
- **Contact:** Formulário para entrar em contato.
- **Navegação:** Navegação entre as páginas utilizando React Router Dom.
- **Componentes Reutilizáveis:** Cabeçalho, rodapé e cartões de projeto.
- **Página de Erro:** Página de erro personalizada para rotas inválidas.

## Como Executar Localmente
1. Clone o repositório:
   ```bash
   git clone [URL do repositório]
   cd meu-portfolio

npm install

http://localhost:3000
