import Html from '../assets/skills/html.svg'
import Css from '../assets/skills/css.svg'
import Javascript from '../assets/skills/js.svg'
import TypeScript from '../assets/skills/ts.svg'
import React from '../assets/skills/react.svg'
import Jquery from '../assets/skills/jquery.svg'
import Redux from '../assets/skills/redux.svg'
import Nextjs from '../assets/skills/next.svg'
import Sass from '../assets/skills/sass.svg'

import MongoDb from '../assets/skills/mongodb.svg'
import FireBase from '../assets/skills/firebase.svg'

import Figma from '../assets/skills/figma.svg'
import PhotoShop from '../assets/skills/photoshop.svg'
import Canva from '../assets/skills/canva.svg'

import Netlify from '../assets/skills/netlify.svg'
import Heroku from '../assets/skills/heroku.svg'
import Vercel from '../assets/skills/vercel.svg'

import Git from '../assets/skills/git.svg'
import Gitlab from '../assets/skills/gitlab.svg'
import Github from '../assets/skills/github.svg'
import Vscode from '../assets/skills/vscode.svg'
import Intellij from '../assets/skills/intellij.svg'
import Postman from '../assets/skills/postman.svg'




export const frontendSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "React",
    "JQuery",
    "Redux",
    "Next",
    "Sass"
  ];

export const databaseSkills=[
    "MongoDB",
    "Firebase"
]

export const UISkills=[
    "Figma",
    "Photoshop",
    "Canva"
]

export const deploymentSkills=[
    "Netlify",
    "Heroku",
    "Vercel"
]

export const toolsskills=[
    "Git",
    "Github",
    "Gitlab",
    "Vscode",
    "Intellij",
    "Postman"
]

export const skillsImage=(image)=>{
    const logoImage=image.toLowerCase()
    switch(logoImage){
        case 'html':
            return Html
        case 'css' :
            return Css
        case 'javascript':
            return Javascript
        case 'typescript':
            return TypeScript
        case 'react':
            return React
        case 'jquery':
            return Jquery
        case 'redux':
            return Redux 
        case 'next':
            return Nextjs
        case 'sass':
            return Sass
        case 'mongodb':
            return MongoDb
        case 'firebase':
            return FireBase
        case 'figma':
            return Figma
        case 'photoshop':
            return PhotoShop
        case 'canva':
            return Canva
        case 'netlify':
            return Netlify
        case 'heroku':
            return Heroku
        case 'vercel':
            return Vercel
        case 'git':
            return Git
        case 'github':
            return Github
        case 'gitlab':
            return Gitlab
        case 'vscode':
            return Vscode
        case 'intellij':
            return Intellij
        case 'postman':
            return Postman
    }

}  


export const Skills=[
    {
        title:'Frontend Development',
        images:frontendSkills,
        slide:true,
        mobileSlide:true

    },
    {
        title:'Database',
        images:databaseSkills,
        slide:false,
        mobileSlide:false
    },
    {
        title:'User Interface/User Experience Design',
        images:UISkills,
        slide:true,
        mobileSlide:true
    },
    {
        title:'Deployments',
        images:deploymentSkills,
        slide:true,
        mobileSlide:true
    },
    {
        title:'Other Tools',
        images:toolsskills,
        slide:true,
        mobileSlide:true
    },
]