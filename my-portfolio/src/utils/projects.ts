import poke from '../assets/projects/pokemon.png'

export interface MyProjects {
    name: string,
    img: string,
    description: string,
    github: string,
    link: string,
}

export const projectsArray: MyProjects[] = [
    {
        name: 'Pokemon App',
        img: poke,
        description: 'Single Page Application que tenía como objetivo poner en práctica recursos básicos UX/UI, afirmar y concretar conceptos adquiridos, mejorar prácticas y utilizar el workflow de GIT. En ella se podrán buscar pokemons, visualizar su información, filtrarlos, ordenarlos y crear nuevos pokemons.' ,
        github: 'https://github.com/danajacobc/PI-pokemon',
        link: 'https://youtu.be/AN7VSrtOmBc?si=GqUQDkj1zmTTSzAx', 
    },
]