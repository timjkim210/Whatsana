import React from 'react';

class ProjectEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.project.id,
      name: ''
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

  closeModal() {
    this.props.show = !this.props.show
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
        <form onSubmit={this.handleSubmit}>
          <section className="modal-header">
          <h1>Project Details</h1>
          <button onClick={this.handleSubmit}>X</button>
          </section>

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
            <span>User</span>
            <span>Due Date</span>
          </section>

          <textarea cols="30" rows="10"></textarea>
          

          <button className="edit-project-submit" value="submit">Update</button>

        </form>
        </div>
        </>
    )
            
        
  }
}

export default ProjectEditModal