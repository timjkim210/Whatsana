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
    this.onClose(e)
     let dropdownContent = document.querySelector('.dropdown-content');
            if (dropdownContent.style.display === "") {
                dropdownContent.style.display = "block"
            } else {
                dropdownContent.style.display = "";
            }
  }

  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="modal">
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
        </div>
      </div>
    )
            
        
  }
}

export default ProjectEditModal