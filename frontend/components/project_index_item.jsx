import React from 'react';
import { Link } from 'react-router-dom';


const ProjectIndexItem = (props) => {
    
        return(
            <li>
                 <Link to={`projects/${props.project.id}`}><i id="project-icon" class="fas fa-list"></i> {props.project.name}</Link>
            </li>
        )
    
}

export default ProjectIndexItem;