import React from 'react';
import { Link } from 'react-router-dom';
import { fetchProject } from '../actions/project_actions';
import ProjectEditModal from './project_edit_modal';



class ProjectShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    handleDropdown() {
            
            let dropdownContent = document.querySelector('.dropdown-content');
            if (dropdownContent.style.display === "") {
                dropdownContent.style.display = "block"
            } else {
                dropdownContent.style.display = "none"
            }
        }
    

    componentDidMount() {
        fetchProject(this.props.match.params.projectId)
    }

    render() {
        return (
            <div class="dropdown">
                <p>{this.props.project.name}</p>
                <button onClick={this.handleDropdown} class="dropdown-btn"><i class="fas fa-chevron-down"></i></button>
                <div id="myDropdown" class="dropdown-content">
                    <Link to="/home">Edit project details</Link>
                    <Link onClick={() => this.props.deleteProject(this.props.project.id)} to="/home">Delete Project</Link>

                </div>
                <ProjectEditModal updateProject={this.props.updateProject} project={this.props.project} />


                
            </div>
        )
    }
}

export default ProjectShow;