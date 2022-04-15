import React, { useState } from 'react';
import Project from '../components/Project';
import ButtonProject from '../components/ButtonProject';
import rightBackground from '../assets/background-right.png'
import recipesImg from '../assets/recipe.PNG'
import musicImg from '../assets/music.PNG'
import moviesImg from '../assets/movies.PNG'
import blur15 from '../assets/blur15.png'
import blur16 from '../assets/blur16.png'

const ProjectsSection = () => {
    const [project, setProject] = useState(0);

    const projectRecipes = {
        id: 0,
        title: "Recipes",
        descriptions: "This project is a so-called 'CRUD' application. You can register, login and add, edit, delete recipes. Technologies I mainly used: React.js, React Router, Node.js, MongoDB, Mongoose, Express.js, Styled Component",
        imgProject: recipesImg,
        githubLink: "https://github.com/Mikus215/recipe-mern-crud",
        liveLink: "https://food-project-recipes.netlify.app/"
    }

    const projectMusic = {
        id: 1,
        title: "Music",
        descriptions: "Music application, we can move the time of songs, Select next songs from lists and skip forward and backward. Technologies I mainly used: React.js, SASS",
        imgProject: musicImg,
        githubLink: "https://github.com/Mikus215/music",
        liveLink: "https://music-app-h.netlify.app/"
    }

    const projectMovies = {
        id: 2,
        title: "Movies",
        descriptions: "On the site, you can check the rating of the year's films. In this one, I learned to use an API that is not mine. Technologies I mainly used: React.js, Styled Component",
        imgProject: moviesImg,
        githubLink: "https://github.com/Mikus215/films-project",
        liveLink: "https://filmsapi.netlify.app/"
    }

    return (
        <div className="projects">
            <img src={blur15} alt="" className='projects__blur15'/>
            <img src={blur16} alt="" className='projects__blur16'/>
            <img src={rightBackground} alt="" className="projects__img-background" />
            <h1 className="projects__title">projects</h1>
            <div className="projects__buttons">
                <ButtonProject title={projectRecipes.title} id={projectRecipes.id} isActive={project} setProject={setProject}/>
                <ButtonProject title={projectMusic.title} id={projectMusic.id} isActive={project} setProject={setProject}/>
                <ButtonProject title={projectMovies.title} id={projectMovies.id} isActive={project} setProject={setProject}/>
            </div>
            {project === 0 ? ( <Project {...projectRecipes}/> ) : ''}
            {project === 1 ? ( <Project {...projectMusic}/> ) : ''}
            {project === 2 ? ( <Project {...projectMovies}/> ) : ''}
        </div>
    );
}

export default ProjectsSection;