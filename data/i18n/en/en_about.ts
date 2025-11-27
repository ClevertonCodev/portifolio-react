import type { About } from '@/types'

const about: About = {
  title: 'about',
  summary:
    'In my daily life, I enjoy facing challenges that require logic and creativity, always striving to improve my skills and keep up with the best industry practices. In addition to backend and frontend development, I have experience integrating APIs. I am always open to new opportunities and collaborations!',
  education: {
    title: 'Education',
    list: [
      {
        title: 'Systems Analysis and Development',
        institution: 'Estácio de Sá',
        url: 'https://estacio.br/?srsltid=AfmBOop0RMjrV359sTFVar47kjb1RjFJlb2iEB11Mf9t_ltMdc0S64U3',
        description:
          'This course trains professionals to create, test, and manage computational systems. With a practical approach, it covers programming, databases, and software engineering, preparing students for software, web, and mobile development.',
        startDate: '2021-10',
        endDate: '2024-12',
        courses: []
      },
      {
        title: 'Technical Degree in Internet Informatics (Web Development)',
        institution: 'Metrópole Digital UFRN',
        url: 'https://www.metropoledigital.ufrn.br/portal/ensino/tecnico',
        description:
          'The Technical Degree in Internet Informatics prepares professionals to work in the development of digital solutions. The curriculum includes: Programming and system development for web and mobile devices. Creation of interfaces and applications focused on e-commerce and digital marketing. Development and maintenance of websites and software.',
        startDate: '2022-02',
        endDate: '2023-12',
        courses: []
      }
    ]
  },
  achievements: {
    title: 'Skills',
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
