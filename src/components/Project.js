import React from 'react'
import githubIcon from '../assets/github-icon.png'

const Project = ({ title, descriptions, imgProject, githubLink, liveLink }) => {
    return (
        <div className="projects__container-project">
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className='projects__container-project-img'>
                <img src={imgProject} alt=""/>
            </a>
            <div className="projects__container-project-box">
                <h2 className='projects__container-project-title'>{title}</h2>
                <p className='projects__container-project-description'>
                    {descriptions}
                </p>
                <div className="projects__container-project-controllers">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="" />
                    </a>
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <button className='projects__container-project-btn'>View project</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;