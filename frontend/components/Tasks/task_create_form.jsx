import React from 'react'

class TaskCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            assignee_id: '',
            due_date: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault;
        this.props.createTask(this.props.project.id, this.state)
    }



    render() {
        if (this.props === undefined) {
            return null;
         }
        return (
            <div>
                <form className="create-task-form" onSubmit={this.handleSubmit}>

                <input 
                type="text"
                placeholder="Add Task..."
                value={this.state.name}
                onChange={this.handleInput('name')}
                />

                <select
                name="user"
                id="user"
                onChange={this.handleInput('assignee_id')}
                 >
                    <option disabled selected value>Assign a User</option>
                    {this.props.users.map(user => {
                        return <option key={user.id} value={user.id}>{user.full_name}</option>
                    })}
                </select>

                <input 
                type="date"
                onChange={this.handleInput('due_date')}
                />

                <button value="submit">Create Task</button>
                </form>
                
            </div>
        )
        // <option selected={(user.id === this.props.currentUser.id) ? "selected" : null}
    }
}


export default TaskCreateForm;