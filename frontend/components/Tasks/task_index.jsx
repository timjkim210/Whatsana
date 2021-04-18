import React from 'react';
import TaskIndexItem from './task_index_item'
import TaskCreateForm from './task_create_form'

class TaskIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchTasks(this.props.projectId);
    }

    render() {
         if (this.props === undefined) {
            return null;
         }
        return (
            <ul>
                {this.props.tasks.map(task => {
                    return <TaskIndexItem users={this.props.users} key={task.id} projectId={this.props.projectId} deleteTask={this.props.deleteTask} task={task} key={task.id} currentUser={this.props.currentUser} fetchUsers={this.props.fetchUsers} users={this.props.users} />
                })}

                <TaskCreateForm projectId={this.props.projectId} users={this.props.users} createTask={this.props.createTask} project={this.props.project} currentUser={this.props.currentUser} fetchUsers={this.props.fetchUsers} />
            </ul>
        )
    }
}


export default TaskIndex;
