import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experiencia',
  description: 'Puedes ver mi currículum haciendo clic en el siguiente botón.',
  download_button: 'Descargar CV',
  present: 'Presente',
  month: 'mes | meses',
  year: 'año | años',
  list: [
    {
      company: 'Paytour',
      position: 'Developer Full Stack',
      url: 'https://lp.paytour.com.br/',
      startDate: '2023-06',
      endDate: 'Presente',
      highlights: [
        'Desarrollar y mantener interfaces con Vue.js y APIs con PHP.',
        'Uso de MySQL y MongoDB, pruebas automatizadas.',
        'Creación de informes gerenciales y sus respectivas consultas SQL.',
        'Control de versiones con Git usando GitFlow.'
      ],
      description:
        ''
    },
    {
      company: 'SyWo',
      position: 'Developer Full Stack',
      url: 'https://www.sywo.com.br',
      startDate: '2022-01',
      endDate: '2023-06',
      highlights: [
        'Crear y mantener interfaces con Vue.js o React.js.',
        'Construcción y mantenimiento de APIs con PHP (Laravel), Node.js (Express) y Python (Django).',
        'Bases de datos MySQL y PostgreSQL y sus respectivas consultas SQL.',
        'Control de versiones con Git, siguiendo la estrategia GitFlow.'
      ],
      description:
        ''
    }
  ]
}

export default experience
