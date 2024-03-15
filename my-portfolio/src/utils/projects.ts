import poke from '../assets/projects/pokemon.png'
import tis from '../assets/projects/tis.png'

export interface MyProjects {
    name: string,
    img: string,
    description: string,
    github: string,
    link: string,
    deploy?: string,
}

export const projectsArray: MyProjects[] = [
    {
        name: 'Pokemon App',
        img: poke,
        description: 'Single Page Application que tenía como objetivo poner en práctica recursos básicos UX/UI, afirmar y concretar conceptos adquiridos, mejorar prácticas y utilizar el workflow de GIT. En ella se podrán buscar pokemons, visualizar su información, filtrarlos, ordenarlos y crear nuevos pokemons.' ,
        github: 'https://github.com/danajacobc/PI-pokemon',
        link: 'https://youtu.be/AN7VSrtOmBc?si=GqUQDkj1zmTTSzAx', 
    },
    {
        name: 'Trip In Sight',
        img: tis,
        description: 'Diseñar y desarrollar en equipo implementando la metodología ágil Scrum, una aplicación e-commerce con el objetivo de vender tours turísticos, que incluía: registro y login con la integración de Auth0, filtrado y ordenamiento de tours, integración de Paypal como pasarela de pago, notificaciones por e-mail con la integración de Nodemailer, reseñas, diseño responsive, integración de Cloudinary, entre otras funcionalidades. Tenía como objetivo poner en práctica recursos básicos UX/UI, afirmar y concretar conceptos adquiridos, mejorar prácticas y utilizar el workflow de GIT. Durante mi participación en el proyecto, destaco la integración de Auth0 y Redux Toolkit, así como el desarrollo de diversos filtros y sistemas de ordenamiento. Mi rol también consistió en coordinar de manera efectiva el flujo de datos entre nuestro backend y el frontend, logrando así un sistema más fluido y eficiente.' ,
        github: 'https://github.com/danajacobc/TripInSight',
        link: 'https://youtu.be/oNFEe1YHrhA?si=BjPsA9yUH86AibyD',
        deploy: 'https://tripinsight-peb3.onrender.com/'
    },
]