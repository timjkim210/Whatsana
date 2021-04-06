import React from 'react';
import { Link } from 'react-router-dom';


const ProjectIndexItem = (props) => {
    
        return(
            <li>
                <i class="fas fa-list"></i> <Link to={`projects/${props.project.id}`}>{props.project.name}</Link>
            </li>
        )
    
}

export default ProjectIndexItem;