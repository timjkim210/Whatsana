import React from 'react';
import { Link } from 'react-router-dom';


class ProjectIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleStar = this.toggleStar.bind(this);
    }

    toggleStar(e) {
        if (e.target.id === "star-button") {
            debugger
        const solidStar = document.createElement('i')
        solidStar.setAttribute("id", "star-button")
        solidStar.setAttribute("class","far fa-star");

        e.target.parentNode.appendChild(solidStar);
        e.target.remove();
        } else {
            debugger
            e.target.parentNode;

        const solidStar = document.createElement('i')
        solidStar.setAttribute("id", "star-button")
        solidStar.setAttribute("class","far fa-star");

        e.target.parentNode.append(solidStar);
        e.target.remove()
            }
        }

        

            
            

        



    render() {
         return(
             <div>
                 
                <li>
                    <Link to={`projects/${this.props.project.id}`}><i id="project-icon" class="fas fa-list"></i> {this.props.project.name} </Link> <div onClick={this.toggleStar}><span><i id='star-button' class="far fa-star"></i></span></div>
                </li>
            </div>
        )
    }
}

export default ProjectIndexItem;
