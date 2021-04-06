import React from 'react';
import { Link } from 'react-router-dom';

class CreateProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            view: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault;
        this.props.createProject(this.state)
            .then(() => this.props.history.push('/home'))
    }



    render() {
        return (
            <div>
                <Link to="/home">X</Link>
                <h1>New Project</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>Project name</label>

                    <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInput('name')}
                    />

                    {/* <label for="view-select">Default view</label>
                    <select name="view" id="view-select" value={this.state.view}>
                        <option value="list">List</option>
                        <option value="board">Board</option>
                        <option value="timeline">Timeline</option>
                        <option value="calendar">Calendar</option>
                    </select> */}

                    <button value="submit">Create project</button>

                </form>


            </div>
        )
    }
}

export default CreateProjectForm;