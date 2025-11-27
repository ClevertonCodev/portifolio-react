# Portfolio - Cleverton Santos

Portfolio pessoal desenvolvido com Next.js 15, React 19 e TypeScript. Uma aplicação moderna e responsiva que apresenta projetos, experiências profissionais, educação e informações de contato, com suporte completo a múltiplos idiomas (Português, Inglês e Espanhol).

## 🚀 Tecnologias

- **Next.js 15.5.6** - Framework React para produção
- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first
- **Next Auth 4.24.11** - Autenticação para Next.js

## ✨ Funcionalidades

- 🌐 **Multi-idioma**: Suporte completo para Português (PT), Inglês (EN) e Espanhol (ES)
- 📱 **Design Responsivo**: Interface adaptável para todos os dispositivos
- 🎨 **UI Moderna**: Design glassmorphism com efeitos visuais elegantes
- 📄 **Seções Completas**:
  - **Hero Section**: Apresentação pessoal com links para redes sociais
  - **Experiência**: Histórico profissional detalhado
  - **Projetos**: Portfólio de projetos principais e secundários
  - **Sobre**: Informações sobre educação e conquistas
  - **Contato**: Formulário de contato e informações de redes sociais
- 🔄 **Context API**: Gerenciamento de estado para idioma selecionado
- 💾 **LocalStorage**: Persistência da preferência de idioma do usuário
- 🎯 **SEO Otimizado**: Metadata configurada para melhor indexação

## 📁 Estrutura do Projeto

```
portifolio-react/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz da aplicação
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── home/             # Componentes das seções principais
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── ContactSection.tsx
│   ├── icons/            # Componentes de ícones SVG
│   ├── AppNavbar.tsx     # Barra de navegação
│   ├── AppFooter.tsx     # Rodapé
│   ├── LanguageSelector.tsx  # Seletor de idioma
│   └── GlassButton.tsx   # Botão com efeito glassmorphism
├── contexts/             # Contextos React
│   └── LanguageContext.tsx  # Contexto para gerenciamento de idioma
├── data/                 # Dados e conteúdo
│   └── i18n/            # Arquivos de internacionalização
│       ├── pt/          # Conteúdo em Português
│       ├── en/          # Conteúdo em Inglês
│       ├── es/          # Conteúdo em Espanhol
│       └── profiles.ts  # Links de perfis sociais
├── hooks/               # Custom hooks
│   └── useLocalizedData.ts  # Hook para dados localizados
├── types/               # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
├── utils/               # Utilitários
│   └── dateUtils.ts    # Funções de formatação de data
└── public/             # Arquivos estáticos
    ├── images/         # Imagens do projeto
    └── cv.pdf         # Currículo em PDF
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 22.x
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/ClevertonCodev/portifolio-react.git
cd portifolio-react
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm run start` - Inicia o servidor de produção (após build)
- `npm run lint` - Executa o linter ESLint

## 🌍 Internacionalização

O projeto utiliza um sistema de internacionalização customizado baseado em Context API. Os conteúdos estão organizados por idioma na pasta `data/i18n/`:

- **Português (pt)**: Idioma padrão
- **Inglês (en)**: Tradução completa disponível
- **Espanhol (es)**: Tradução completa disponível

A preferência de idioma é salva no `localStorage` do navegador e persiste entre sessões.

## 🎨 Estilização

O projeto utiliza Tailwind CSS 4 com classes customizadas para:
- Cores primárias e neutras
- Efeitos glassmorphism
- Animações e transições
- Design responsivo

Fontes utilizadas:
- **Poppins** (Google Fonts) - Fonte principal
- **Font Awesome** - Ícones sociais
- **Devicon** - Ícones de tecnologias

## 📦 Build de Produção

Para criar uma build otimizada para produção:

```bash
npm run build
npm run start
```

A aplicação será gerada em modo `standalone` conforme configurado no `next.config.ts`, otimizada para deploy em plataformas como Vercel, Docker, ou servidores Node.js.

## 🔧 Configuração

### Personalização de Conteúdo

Para personalizar o conteúdo do portfólio, edite os arquivos em `data/i18n/[idioma]/`:
- `pt_hero.ts` / `en_hero.ts` / `es_hero.ts` - Seção hero
- `pt_experience.ts` / `en_experience.ts` / `es_experience.ts` - Experiências profissionais
- `pt_projects.ts` / `en_projects.ts` / `es_projects.ts` - Projetos
- `pt_about.ts` / `en_about.ts` / `es_about.ts` - Informações sobre
- `pt_contact.ts` / `en_contact.ts` / `es_contact.ts` - Informações de contato

### Links de Perfis Sociais

Edite `data/i18n/profiles.ts` para atualizar os links das redes sociais.

## 📝 Licença

Este projeto é de uso pessoal. Todos os direitos reservados.

## 👤 Autor

**Cleverton Santos**
- LinkedIn: [cleverton-santos-5548a1233](https://www.linkedin.com/in/cleverton-santos-5548a1233/)
- GitHub: [ClevertonCodev](https://github.com/ClevertonCodev)
- Email: clevertonsantoscodev@gmail.com

---

Desenvolvido com ❤️ usando Next.js e React

