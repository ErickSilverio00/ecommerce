# Matheus Calçados - Template de E-commerce 🛍️

Este é um projeto de estudo desenvolvido para a loja fictícia **Matheus Calçados**. O objetivo foi criar um template de e-commerce funcional utilizando **React.js**, simulando todas as funcionalidades essenciais de um e-commerce real. 

O projeto não possui backend e utiliza mocks de produtos e **Local Storage** para persistência local. Além disso, conta com a integração de teste do **Mercado Pago** para pagamentos fake.

---

## 🌟 Funcionalidades Principais

- **Home com Banner**: Uma página inicial atrativa com destaque para banners promocionais.
- **Busca de Produtos**: Pesquisa de produtos com filtros por categoria e palavras-chave.
- **Categorias**: Produtos organizados por categorias.
- **Favoritos**: Adição e remoção de produtos na lista de favoritos.
- **Carrinho de Compras**: Adicionar, remover e gerenciar produtos no carrinho.
- **Conta do Usuário**: Gerenciamento de dados simulados do usuário.
- **Pagamentos Fake**: Simulação de pagamentos utilizando o SDK do Mercado Pago.
- **Persistência Local**: Dados salvos no navegador via Local Storage.

---

## 📂 Estrutura de Pastas

A estrutura de pastas do projeto foi organizada para facilitar a escalabilidade e a manutenção:

- **`assets`**: Arquivos estáticos, como imagens e ícones.
- **`components`**: Componentes reutilizáveis da interface.
- **`hooks`**: Hooks personalizados para gerenciamento de estado e lógica.
- **`mocks`**: Dados mockados de produtos e categorias.
- **`pages`**: Páginas principais do e-commerce.
- **`routes`**: Configuração das rotas do React Router.
- **`services`**: Serviços e integrações, como o Mercado Pago.
- **`stores`**: Gerenciamento de estado utilizando a biblioteca Zustand.
- **`styles`**: Estilos globais e temas.
- **`templates`**: Estruturas de layout reutilizáveis.
- **`utils`**: Funções utilitárias para lógica do projeto.

---

## 🚀 Tecnologias e Bibliotecas

### **Frontend**
- **React.js**: Biblioteca principal para construção da interface.
- **React Router Dom**: Gerenciamento de rotas.
- **Styled Components**: Estilização dos componentes.
- **Material-UI (MUI)**: Componentes visuais modernos e responsivos.
- **Swiper**: Slider/carrossel para banners.
- **Yup**: Validação de formulários.
- **React Toastify**: Exibição de notificações.
- **Zustand**: Gerenciamento de estado leve e eficiente.
- **Lottie React**: Animações utilizando arquivos JSON.

### **Integrações**
- **Mercado Pago**: SDK para simulação de pagamentos.

### **Testes**
- **@testing-library/react**: Biblioteca para testes de componentes React.

---

## 🛠️ Instalação e Execução

### Pré-requisitos:
- Node.js 18+
- Gerenciador de pacotes (NPM ou Yarn)

### Passos para executar:
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
    ```bash
    REACT_APP_MERCADO_PAGO_PUBLIC_KEY=sua_key
    REACT_APP_ACCESS_TOKEN_MERCADO_PAGO=seu_token
    ```
4. Execute o projeto:
    ```bash
    npm start
    ```

## 🔗 Próximos Passos

- 🚀 **Implementação de um Backend Real**: Expandir o projeto para incluir um servidor com banco de dados.
- 🌐 **Integração com APIs Externas**: Adicionar dados dinâmicos por meio de integrações com APIs.
- 📱 **Melhoria na Responsividade e Acessibilidade**: Garantir uma experiência de usuário otimizada em todos os dispositivos.

---

## 👨‍💻 Autor

Desenvolvido por **Erick Silvério** como um estudo de caso para a loja **Matheus Calçados**.

Sinta-se à vontade para **contribuir**, **reportar problemas** ou **dar sugestões**! 😊

🔗 **Entre em Contato**  
Você pode me encontrar no [LinkedIn](https://www.linkedin.com/in/erick-silv%C3%A9rio-024576248/) para conversar sobre o projeto ou futuras colaborações!