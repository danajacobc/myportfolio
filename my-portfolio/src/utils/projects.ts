// imagenes del proyecto
import poke from '../assets/projects/pokemon.png'
import tis from '../assets/projects/tis.png'
import logo from '../assets/logo/fondopantalla-djc.png'
// imagenes de las tecno
import git from '../assets/skills/git.png'
import node from '../assets/skills/node-js.png'
import ts from '../assets/skills/typescript.png'
import js from '../assets/skills/javascript.png'
import reactImg from '../assets/skills/react.png'
import reduxImg from '../assets/skills/redux.png'
//import angular from '../assets/skills/angular.png'
import tailwind from '../assets/skills/tailwind.svg'
import postgreSQL from '../assets/skills/postgre.png'
import express from '../assets/skills/express-js.png'
import sequelize from '../assets/skills/sequelize.png'
import mySQL from '../assets/skills/mySQL.png'


export interface MyProjects {
    id: number,
    name: string,
    img: string,
    description: string,
    github: string,
    link: string,
    deploy: string,
    skills: string[],
}

export const projectsArray: MyProjects[] = [
    {
        id: 2,
        name: 'Trip In Sight',
        img: tis,
        description: 'Aplicación e-commerce con el objetivo de vender tours turísticos, realizada para poner en práctica conocimientos adquiridos junto con un equipo de desarrolladores.' ,
        github: 'https://github.com/danajacobc/TripInSight',
        link: 'https://youtu.be/oNFEe1YHrhA?si=BjPsA9yUH86AibyD',
        deploy: 'https://tripinsight-peb3.onrender.com/',
        skills: [js, node, reactImg, reduxImg, express, sequelize, git, tailwind, mySQL],
        
    },
    {
        id: 1,
        name: 'Pokemon App',
        img: poke,
        description: 'Single Page Application realizado como proyecto individual para poner en práctica conocimientos adquiridos.' ,
        github: 'https://github.com/danajacobc/PI-pokemon',
        link: 'https://youtu.be/AN7VSrtOmBc?si=GqUQDkj1zmTTSzAx',
        deploy: '',
        skills: [js, node, reactImg, reduxImg, postgreSQL, express, sequelize, git],
    },
    {
        id: 3,
        name: 'Portfolio Personal',
        img: logo,
        description: 'Desarrollo de mi portfolio personal.' ,
        github: 'https://github.com/danajacobc/PI-pokemon',
        link: 'https://youtu.be/AN7VSrtOmBc?si=GqUQDkj1zmTTSzAx',
        deploy: '',
        skills: [ts, reactImg, tailwind, git],

    },
]