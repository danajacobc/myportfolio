import js from '../assets/skills/javascript.png'
import ts from '../assets/skills/typescript.png'
import node from '../assets/skills/node-js.png'
import react from '../assets/skills/react.png'
import redux from '../assets/skills/redux.png'
import angular from '../assets/skills/angular.png'
import express from '../assets/skills/express-js.png'
import sequelize from '../assets/skills/sequelize.png'
import postgreSQL from '../assets/skills/postgre.png'
import tailwind from '../assets/skills/tailwind.svg'
import git from '../assets/skills/git.png'
import mySQL from '../assets/skills/mySQL.png'


export interface Skill {
    name: string,
    img: string
}

export const skillsArray: Skill[] = [
{
    name: "JavaScript",
    img: js,
},
{
    name: "TypeScript",
    img: ts,
},
{
    name: "Node.js",
    img: node,
},
{
    name: "React",
    img: react,
},
{
    name: "Redux",
    img: redux,
},
{
    name: "Angular",
    img: angular,
},
{
    name: "Sequelize",
    img: sequelize,
},
{
    name: "Express",
    img: express,
},
{
    name: "Tailwind CSS",
    img: tailwind,
},
{
    name: "Git",
    img: git,
},
{
    name: "PostgreSQL",
    img: postgreSQL,
},
{
    name: "MySQL",
    img: mySQL,
},
]