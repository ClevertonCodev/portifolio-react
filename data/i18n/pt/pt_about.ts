import type { About } from '@/types';

const about: About = {
  title: 'sobre',
  summary:
    'No meu dia a dia, gosto de enfrentar desafios que exigem lógica e criatividade, sempre buscando aprimorar minhas habilidades e acompanhar as melhores práticas do mercado. Além do desenvolvimento backend e frontend, tenho experiência na integração de APIs. Estou sempre aberto a novas oportunidades e colaborações!',
  education: {
    title: 'Escolaridade',
    list: [
      {
        title: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Estácio de Sá',
        url: 'https://estacio.br/?srsltid=AfmBOop0RMjrV359sTFVar47kjb1RjFJlb2iEB11Mf9t_ltMdc0S64U3',
        description:
          'O curso forma profissionais para criar, testar e gerenciar sistemas computacionais. Com foco prático, aborda programação, banco de dados e engenharia de software, preparando para atuar no desenvolvimento de software, web, mobile.',
        startDate: '2021-10',
        endDate: '2024-12',
        courses: []
      },
      {
        title: 'Técnico em Informática para Internet (Desenvolvimento Web)',
        institution: 'Metrópole Digital UFRN',
        url: 'https://www.metropoledigital.ufrn.br/portal/ensino/tecnico',
        description:
          'O curso Técnico em Informática para Internet prepara profissionais para atuar no desenvolvimento de soluções digitais. A formação abrange: Programação e desenvolvimento de sistemas para web e dispositivos móveis. Criação de interfaces e aplicativos voltados para e-commerce e marketing digital. Desenvolvimento e manutenção de sites e software.',
        startDate: '2022-02',
        endDate: '2023-12',
        courses: []
      }
    ]
  },
  achievements: {
    title: 'Habilidades',
    list: [
      { name: 'PHP', icon: 'devicon-php-plain colored' },
      { name: 'Laravel', icon: 'devicon-laravel-original' },
      { name: 'Nest.js\nExpress.js', icon: 'devicon-nodejs-plain' },
      { name: 'JavaScript\nTypeScript', icon: 'fa-brands fa-js' },
      { name: 'Python\nDjango', icon: 'fa-brands fa-python' },
      { name: 'C#', icon: 'devicon-csharp-plain' },
      { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
      { name: 'React.js', icon: 'fa-brands fa-react' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain colored' },
      { name: 'Docker', icon: 'fa-brands fa-docker' },
      { name: 'Git', icon: 'fa-brands fa-git-alt' },
      { name: 'MySQL\nPostgres\nMongoDB', icon: 'fa-solid fa-database' },
    ]
  }
};

export default about;

