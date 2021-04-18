import React from 'react'

class TaskIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        if (this.props === undefined) {
            return null;
         }
        return(
            <li className="task-index-item">
                <p>{this.props.task.name}</p>
                <p>{this.props.users.map(user => {
                    if (user.id === this.props.task.assignee_id) {
                        return user.full_name
                    }
                })}</p>
                <p>{this.props.task.due_date}</p>
                {/* <button onClick={this.props.deleteTask(this.props.task.id)}>Delete</button> */}
            </li>
        )
    }
}

export default TaskIndexItem;