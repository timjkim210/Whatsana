import React from 'react';

class ProjectEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.project.id,
      name: '',
      due_date: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  closeModal(e) {
    e.preventDefault;
    this.onClose(e)
     let dropdownContent = document.querySelector('.dropdown-content');
            if (dropdownContent.style.display === "") {
                dropdownContent.style.display = "block"
            } else {
                dropdownContent.style.display = "";
            }
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <>
      <div className="backdrop">
      </div>
      <div className="modal">
        <section className="modal-header">
          <h1>Project Details</h1>
          <button onClick={this.closeModal}>X</button>
        </section>

        <form className="modal-form">
          

          <section className='edit-project-name'>
          <label for="name">Name</label>
          <input 
              for
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleInput('name')}
          />
          </section>

          <section className="owner-and-due-date">
                      <label for="date-inp">Due date</label>

              <input 
                id="date-inp"
                type="date"
                onChange={this.handleInput('due_date')}
                placeholder="Add due date"
                />          </section>

          <div className="project-description">
            <label for="about">Description</label>
            <textarea 
                id="description"
                value={this.state.description}
                onChange={this.handleInput('description')}
            />
          </div>     
          

          <button onClick={this.handleSubmit} id="edit-project-submit" value="submit">Save Changes</button>

        </form>
        </div>
        </>
    )
            
        
  }
}

export default ProjectEditModal