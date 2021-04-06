import React from 'react';

class ProjectEditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.project.id,
            name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

//     componentDidMount() {
//         debugger
//     this.props.fetchProject(this.props.match.params.project.id)
//   }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.updateProject(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Project Details</h1>


                <label>Name:
                    <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInput('name')}
                    />
                </label>

                <button value="submit">Update</button>

            </form>
        )
            
        
    }
}

export default ProjectEditModal