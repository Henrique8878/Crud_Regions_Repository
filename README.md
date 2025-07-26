# 📚 Regiões CRUD

- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Configuração do Ambiente](#-configuração-do-ambiente)
- [💬 Pré requisitos](#pré-requisitos)
- [📌 Primeira configuração](#primeira-configuração-faça-isso-uma-única-vez)
- [🔗 Como rodar o projeto](#como-rodar-o-projeto-no-dia-a-dia)

Bem-vindo ao repositório oficial do **Regiões CRUD**, um projeto de cadastro e gerenciamento de regiões.

## 📖 Sobre o Projeto

O **Regiões CRUD** é uma plataforma focada em facilitar o cadastro, edição e exclusão de regiões, com o objetivo de fornecer uma interface simples e intuitiva para usuários que precisam gerenciar informações geográficas. Este projeto é uma excelente oportunidade para praticar habilidades de desenvolvimento web, incluindo front-end e back-end.

## 🚀 Configuração do Ambiente

Este guia mostra como configurar e rodar o projeto localmente.

### Pré-requisitos

Garanta que você tenha as seguintes ferramentas instaladas:

- **Node.js v22.17.1**
- **npm v10.9.2**
- **git version 2.50.1.windows.1**
- **IDE para desenvolvimento - VSCODE ou alguma de sua preferência**

### Primeira Configuração (Faça isso uma única vez)

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Henrique8878/Crud_Regions_Repository.git (Na branch master)

    ```

2.  **Crie os arquivos de ambiente:**
    - Na **raiz do projeto**, crie um arquivo .env.development com a variável de ambiente -> VITE_API_URL=url do seu back-end -> ex:http://localhost:5035.

---

### Como Rodar o Projeto no Dia a Dia

Instale as dependências e rode o projeto com os seguintes comandos: npm install ou npm i
Rode o projeto com o comando npm run dev

> **Nota:** O projeto foi desenvolvido de forma responsiva com o uso de Tailwind CSS e Shad-cn, utilizando o Vite como bundler e o aplicatibo Responsively App para testes de responsividade. Foram testadas uma tela de Iphone 12 Pro 390X844, uma tela de Ipad 768X1024 e uma tela de Desktop 1440X900. Na aplicação, existe um Side Bar logo a esquerda do título Regiões CRUD no menu superior, que pode ser utilizado para navegar entre as páginas de cadastro, edição e listagem de regiões. A aplicação também possui um botão de Dark Mode, que pode ser utilizado para alternar entre o modo claro e escuro.
