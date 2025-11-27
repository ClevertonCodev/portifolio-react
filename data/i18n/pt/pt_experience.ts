import type { Experience } from '@/types';

const experience: Experience = {
  title: 'Experiência',
  description: 'Você pode baixar meu currículo clicando no botão abaixo.',
  download_button: 'Baixar CV',
  present: 'Present',
  month: 'mes | meses',
  year: 'ano | anos',
  list: [
    {
      company: 'Paytour',
      position: 'Developer Full Stack',
      url: 'https://lp.paytour.com.br/',
      startDate: '2023-06',
      endDate: 'Present',
      highlights: [
        'Desenvolver e realizar manutenção da interfaces, com Vue.js e APIs com PHP.',
        'Utilização de MySQL e MongoDB',
        'Criação de relatórios gerenciais e suas respectivas consultas SQL',
        'Testes automatizados tanto para back-end quanto front-end, versionamento com Git usando GitFlow.'
      ],
      description: ''
    },
    {
      company: 'SyWo',
      position: 'Developer Full Stack',
      url: 'https://www.sywo.com.br',
      startDate: '2022-01',
      endDate: '2023-06',
      highlights: [
        'Criar e realizar manutenção de interfaces com Vue.js ou React.js.',
        'Construção e manutenção de APIs com PHP (Laravel), Node.js (Express) e Python (Django)',
        'Bancos de dados MySQL e PostgreSQL e suas respectivas consultas SQL.',
        'Controle de versão com Git, seguindo a estratégia GitFlow.'
      ],
      description: ''
    }
  ]
};

export default experience;

