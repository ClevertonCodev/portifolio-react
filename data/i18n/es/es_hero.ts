import type { Hero } from '@/types'
import profilesLinks from '../profiles'
const hero: Hero = {
  title: 'Hola, me llamo Cleverton Santos, Software Developer!',
  subtitle:
    'Soy Desarrollador Full Stack con sólida experiencia en la creación y mantenimiento de aplicaciones escalables para negocios digitales, trabajando en backend y frontend con enfoque en rendimiento y buenas prácticas. Domino PHP, Laravel, Vue.js, MySQL y tengo experiencia con React.js, Next.js, Node.js, Django y C#, lo que me permite trabajar de forma versátil en diferentes escenarios y stacks tecnológicos.\n Actualmente, trabajo en Paytour, desarrollando e-commerce de turismo y eventos, y he contribuido en SyWo – System World con proyectos modernos, aplicando Scrum, Kanban y Git/GitFlow. Soy graduado en Análisis y Desarrollo de Sistemas además de Técnico en Desarrollo Web, siempre busco nuevos desafíos y oportunidades para contribuir con proyectos innovadores.',
  name: 'Cleverton Santos',
  url: 'https://www.clevertonsantos.com/',
  contact_button: 'Contáctame',
  //Si un perfil tiene una cadena vacía '', el botón no se renderizará
  profiles: profilesLinks,
  home: 'Inicio'
}

export default hero
