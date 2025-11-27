import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'You can download my resume by clicking the button below.',
  download_button: 'Download CV',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'Paytour',
      position: 'Developer Full Stack',
      url: 'https://lp.paytour.com.br/',
      startDate: '2023-06',
      endDate: 'Present',
      highlights: [
        'Develop and maintain interfaces using Vue.js and APIs with PHP.',
        'Use of MySQL and MongoDB, automated testing.',
        'Creation of management reports and their respective SQL queries.',
        'Automated testing, SQL report generation, and versioning with Git using GitFlow.'
      ],
      description:
        ""
    },
    {
      company: 'SyWo',
      position: 'Developer Full Stack',
      url: 'https://www.sywo.com.br',
      startDate: '2022-01',
      endDate: '2023-06',
      highlights: [
        'Create and maintain interfaces with Vue.js or React.js.',
        'Build and maintain APIs with PHP (Laravel), Node.js (Express), and Python (Django).',
        'MySQL and PostgreSQL databases and their respective SQL queries.',
        'Version control with Git, following the GitFlow strategy.'
      ],
      description:
        ''
    }
  ]
}

export default experience
