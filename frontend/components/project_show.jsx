import React from 'react';
import { Link } from 'react-router-dom';
import { fetchProject } from '../actions/project_actions';
import { fetchTasks } from '../actions/task_actions';
import ProjectEditModal from './project_edit_modal';
import TaskIndex from '../components/Tasks/task_index'



class ProjectShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
    }

    handleDropdown() {
            let dropdownContent = document.querySelector('.dropdown-content');
            if (dropdownContent.style.display === "") {
                dropdownContent.style.display = "block"
            } else {
                dropdownContent.style.display = "";
            }
        }
    

    componentDidMount() {
        this.props.fetchProject(this.props.projectId);
        this.props.fetchTasks(this.props.projectId);
        this.props.fetchUsers()
    }
   

    showModal() {
        this.handleDropdown();
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    };

    render() {
        let name = this.props.project ? this.props.project.name : ''
        if (!this.props.project) {
            return null;
        }
        return (
            <div>
                <div class="project-show-header">
                    <p> <i id="project-icon" class="fas fa-list"></i> {name} <button onClick={this.handleDropdown} class="dropdown-btn"><i class="fas fa-chevron-down"></i></button></p>
                    <div id="myDropdown" className="dropdown-content">
                        <li onClick={this.showModal} > Edit project details</li> 
                        <Link onClick={() => this.props.deleteProject(this.props.project.id)} to="/home">Delete Project</Link>
                    </div>
                    <ProjectEditModal onClose={this.showModal} show={this.state.show} updateProject={this.props.updateProject} project={this.props.project} />
                    
                </div>

                <div className="task-list">
                    <button>Add Task</button>
                    <div className="task-table-header">
                        <h4>Task name</h4>
                        <h4>Assignee</h4>
                        <h4>Due Date</h4>
                        <h4></h4>
                    </div>
                     <h2 className="task-list-heading">To Do</h2>
                    <ul>
                        <TaskIndex projectId={this.props.projectId} deleteTask={this.props.deleteTask} users={this.props.users} tasks={this.props.tasks} project={this.props.project} createTask={this.props.createTask} currentUser={this.props.currentUser} fetchUsers={this.props.fetchUsers} fetchTasks={this.props.fetchTasks}/>
                    </ul> 
                </div>
                
            </div>
        )
    }
}

export default ProjectShow;