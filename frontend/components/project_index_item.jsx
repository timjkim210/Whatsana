import React from 'react';
import { Link } from 'react-router-dom';


const ProjectIndexItem = (props) => {
    
        return(
            <li>
                 <Link to={`projects/${props.project.id}`}><i id="project-icon" class="fas fa-list"></i> {props.project.name} <i id='star-button' class="far fa-star"></i><i id='solid-star-button' class="fas fa-star"></i></Link> 
            </li>
        )
    
}

export default ProjectIndexItem;