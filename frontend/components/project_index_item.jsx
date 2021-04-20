import React from 'react';
import { Link } from 'react-router-dom';


class ProjectIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleStar = this.toggleStar.bind(this);
    }

    toggleStar(e) {
        if (e.target.id === "star-button") {
        this.props.project.favorite = !this.props.project.favorite;
        this.props.updateProject(this.props.project)
        const solidStar = document.createElement('i')
        solidStar.setAttribute("id", "solid-star-button")
        solidStar.setAttribute("class","fas fa-star");

        e.target.parentNode.appendChild(solidStar);
        e.target.remove();
        } else {
        this.props.project.favorite = !this.props.project.favorite;
        this.props.updateProject(this.props.project)
        const star = document.createElement('i')
        star.setAttribute("id", "star-button")
        star.setAttribute("class","far fa-star");

        e.target.parentNode.parentNode.append(star);
        e.target.parentNode.remove()
        }
    }

    render() {
         return(
             
                <div>
                <li>
                    <Link to={`projects/${this.props.project.id}`}><i id="project-icon" class="fas fa-list"></i> {this.props.project.name} </Link> <div onClick={this.toggleStar}><span>{(this.props.project.favorite === true) ? (<i id="solid-star-button" class="fas fa-star"></i>) : (<i id='star-button' class="far fa-star"></i>)}</span></div>
                </li>
                </div>
            
        )
    }
}

export default ProjectIndexItem;
