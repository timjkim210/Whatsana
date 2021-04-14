import React from 'react';
import TaskIndexItem from './task_index_item'
import TaskCreateForm from './task_create_form'

class TaskIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {this.props.tasks.map(task => {
                    return <TaskIndexItem task={task} key={task.id} />
                })}

                <TaskCreateForm createTask={this.props.createTask} project={this.props.project}/>
            </ul>
        )
    }
}


export default TaskIndex;
    