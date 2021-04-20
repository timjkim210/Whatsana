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
        this.props.createProject(this.state);
        this.props.history.push('/home');
    }



    render() {
        return (
            <div className="create-proj-container">
                <div className="create-proj-first-half">
                    <div className="create-close-header">
                        <div></div>
                        <button><Link to="/home">X</Link></button>

                    </div>

                    <form onSubmit={this.handleSubmit} className="create-proj-form">

                        <h1>New Project</h1>

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

                        <button value="submit">Create Project</button>

                    </form>

                </div>

                <div className="create-proj-second">

                </div>


            </div>
        )
    }
}

export default CreateProjectForm;