import React from 'react'

const ButtonProject = ({title, id ,isActive, setProject}) => {
    return <button className={`projects__button ${isActive !== id ? 'no-active' : ''}`} onClick={() => setProject(id)}>{title}</button>
}
 
export default ButtonProject;