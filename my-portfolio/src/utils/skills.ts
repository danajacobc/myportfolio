import js from '../assets/skills/javascript.png'
import ts from '../assets/skills/typescript.png'

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
}
]