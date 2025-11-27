import type { Projects } from '@/types';

const projects: Projects = {
  title: 'Projetos',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'Ingressaê',
      techstack: ['Vue.js', 'PHP', 'Mysql', 'MongoDb'],
      image: 'ingrassae.png',
      description:
        'O Ingressaê é um módulo da Paytour, um e-commercer para venda de ingressos de eventos de qualquer porte. Desenvolvido para oferecer uma experiência intuitiva e segura, ele permite que organizadores gerenciem lotes, combos, formulários, disponibilidade de ingressos e pagamentos de forma prática e eficiente.',
      src: '',
      url: 'https://loja-ingressa-e.paytour-dev.com.br/',
      status: 'Restrito'
    },
    {
      name: 'Portifólio',
      techstack: ['Vuejs', 'TypeScript', 'Tailwind CSS'],
      image: 'portifolio.png',
      description:
        'Desenvolvi um portfólio moderno e responsivo para apresentar meus projetos e habilidades. Utilizei Vue.js para a construção da interface, Typescript para um código mais robusto e Tailwind CSS para um design limpo e eficiente. O portfólio permite navegação intuitiva e uma experiência otimizada em diferentes dispositivos.',
      src: 'https://github.com/ClevertonCodev/portifolio',
      url: 'https://www.clevertonsantos.com/',
      status: ''
    },
    {
      name: 'Integração com Google Coisas legais para fazer',
      techstack: ['Vue.js', 'PHP', 'Mysql', 'MongoDb'],
      image: 'ttd.png',
      description: "Integração com o Google Things To Do para publicação automática de atividades turísticas, utilizando PHP 8.1+, SFTP seguro com chaves RSA/DSA, Vue.js, persistência em MySQL/MongoDB. Arquitetura MVC com Service Layer e Repository Pattern, infraestrutura em Docker e Ansible.",
      src: '',
      url: '',
      status: 'Restrito'
    },
    {
      name: 'Integração Google Places API (Maps)',
      techstack: ['Vue.js', 'PHP', 'Mysql', 'MongoDb'],
      image: 'maps.png',
      description: "Integração com Google Places API para geolocalização e busca de locais turísticos, com obtenção de Place ID, fotos e detalhes para integração no Google Things To Do. Desenvolvido em PHP 8.1+, Vue.js e Google Maps API, com cache inteligente de 24h, processamento assíncrono e arquitetura MVC otimizada para alta performance.",
      src: '',
      url: '',
      status: 'Restrito'
    },
    {
      name: 'Integração Seguro Aventura',
      techstack: ['Vue.js', 'PHP', 'Mysql', 'MongoDb'],
      image: 'seguro.png',
      description: "Sistema de gestão de seguros para atividades de aventura, com emissão automática de apólices via API externa, validação inteligente de formulários e controle de participantes. Desenvolvido em PHP 8.1+, Vue.js e MySQL, inclui exportação Excel, relatórios detalhados, logs de auditoria e arquitetura MVC com Service Layer.",
      src: '',
      url: '',
      status: 'Restrito'
    },
  ],
  other: [
    {
      name: 'Autenticação OAuth2',
      techstack: ['React.js', 'Typescript', 'Bootstrap', 'Laravel.php' , 'MySQL'],
      description:
        'Implementação de login social, permitindo autenticação rápida e segura com Google e Facebook. A integração foi feita utilizando OAuth, garantindo uma experiência de login simplificada para os usuários. No Laravel, as credenciais de autenticação são processadas e armazenadas de forma segura, enquanto o React gerencia a interface e a experiência do usuário. O fluxo de login é responsivo e otimizado para diferentes dispositivos.',
      url: '',
      src: 'https://github.com/ClevertonCodev/Projeto_socialLogin'
    },
    {
      name: 'Perguntas frequentes',
      techstack: ['Nest.js', 'Typescript', 'Prisma', 'Docker'],
      description:
        'Desenvolvi uma API de perguntas frequentes (FAQ) utilizando NestJS, um framework moderno para Node.js que facilita a construção de aplicações escaláveis e bem estruturadas.',
      url: '',
      src: 'https://github.com/ClevertonCodev/perguntas-frequentes'
    },
    {
      name: 'Gestão de entregas',
      techstack: ['React.js', 'Typescript', 'UI'],
      description:
        'Desenvolvi a interface de um sistema de entrega e rastreamento utilizando tecnologias modernas para garantir uma experiência fluida e intuitiva. O frontend permite que os usuários acompanhem o status das entregas em tempo real, visualizem detalhes do pedido e obtenham atualizações sobre a localização do pacote. A interface foi projetada para ser responsiva, proporcionando uma experiência otimizada em dispositivos móveis e desktops.',
      url: '',
      src: 'https://github.com/ClevertonCodev/Projeto-adm-lets'
    },
    {
      name: 'E-commerce',
      techstack: ['Python', 'Django'],
      description:
        'Desenvolvi parte  de um e-commerce utilizando Django como backend, garantindo uma estrutura robusta e escalável. O sistema permite que os usuários naveguem pelos produtos, adicionem itens ao carrinho e concluam suas compras de forma intuitiva.',
      url: '',
      src: 'https://github.com/ClevertonCodev/django-ecommerce'
    },
  ]
};

export default projects;

