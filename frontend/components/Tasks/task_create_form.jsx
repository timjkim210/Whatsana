import React from 'react'

class TaskCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                <input 
                type="text"
                placeholder="Add Task..."
                value={this.state.name}
                onChange={this.handleInput('name')}
                />

                <button value="submit">Create Task</button>
                </form>
                
            </div>
        )
    }
}


export default TaskCreateForm;