import poke from '../assets/projects/pokemon.png'
import tis from '../assets/projects/tis.png'

export interface MyProjects {
    id: number,
    name: string,
    img: string,
    description: string,
    github: string,
    link: string,
    deploy?: string,
}

export const projectsArray: MyProjects[] = [
    {
        id: 1,
        name: 'Pokemon App',
        img: poke,
        description: 'Single Page Application que tenía como objetivo poner en práctica recursos básicos UX/UI, afirmar y concretar conceptos adquiridos, mejorar prácticas y utilizar el workflow de GIT. En ella se podrán buscar pokemons, visualizar su información, filtrarlos, ordenarlos y crear nuevos pokemons.' ,
        github: 'https://github.com/danajacobc/PI-pokemon',
        link: 'https://youtu.be/AN7VSrtOmBc?si=GqUQDkj1zmTTSzAx', 
    },
    {
        id: 2,
        name: 'Trip In Sight',
        img: tis,
        description: 'Aplicación e-commerce con el objetivo de vender tours turísticos.' ,
        github: 'https://github.com/danajacobc/TripInSight',
        link: 'https://youtu.be/oNFEe1YHrhA?si=BjPsA9yUH86AibyD',
        deploy: 'https://tripinsight-peb3.onrender.com/'
    },
    {
        id: 3,
        name: 'Proximamente',
        img: poke,
        description: 'Single Page Application que tenía como objetivo poner en práctica recursos básicos UX/UI, afirmar y concretar conceptos adquiridos, mejorar prácticas y utilizar el workflow de GIT. En ella se podrán buscar pokemons, visualizar su información, filtrarlos, ordenarlos y crear nuevos pokemons.' ,
        github: 'https://github.com/danajacobc/PI-pokemon',
        link: 'https://youtu.be/AN7VSrtOmBc?si=GqUQDkj1zmTTSzAx', 
    },
    {
        id: 4,
        name: 'Muy pronto',
        img: tis,
        description: 'Aplicación e-commerce con el objetivo de vender tours turísticos.' ,
        github: 'https://github.com/danajacobc/TripInSight',
        link: 'https://youtu.be/oNFEe1YHrhA?si=BjPsA9yUH86AibyD',
        deploy: 'https://tripinsight-peb3.onrender.com/'
    },
]