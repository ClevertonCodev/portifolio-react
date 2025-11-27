import type { About } from '@/types'

const about: About = {
  title: 'Acerca de',
  summary:
    'En mi día a día, me gusta enfrentar desafíos que requieren lógica y creatividad, siempre buscando mejorar mis habilidades y seguir las mejores prácticas del mercado. Además del desarrollo backend y frontend, tengo experiencia en la integración de APIs. ¡Siempre estoy abierto a nuevas oportunidades y colaboraciones!',
  education: {
    title: 'Educación',
    list: [
      {
        title: 'Análisis y Desarrollo de Sistemas',
        institution: 'Estácio de Sá',
        url: 'https://estacio.br/?srsltid=AfmBOop0RMjrV359sTFVar47kjb1RjFJlb2iEB11Mf9t_ltMdc0S64U3',
        description:
          'El curso forma profesionales para crear, probar y gestionar sistemas computacionales. Con un enfoque práctico, abarca programación, bases de datos e ingeniería de software, preparando para actuar en el desarrollo de software, web y móvil.',
        startDate: '2021-10',
        endDate: '2024-12',
        courses: []
      },
      {
        title: 'Técnico en Informática para Internet (Desarrollo Web)',
        institution: 'Metrópole Digital UFRN',
        url: 'https://www.metropoledigital.ufrn.br/portal/ensino/tecnico',
        description:
          'El curso Técnico en Informática para Internet prepara profesionales para actuar en el desarrollo de soluciones digitales. La formación abarca: Programación y desarrollo de sistemas para web y dispositivos móviles. Creación de interfaces y aplicaciones orientadas al comercio electrónico y marketing digital. Desarrollo y mantenimiento de sitios web y software.',
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
}

export default about

