import React from 'react';

class EditProfileModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pronouns: '',
            role: '',
            team: '',
            about: ''
        }
    }

    handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value})
    }
  }


    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <>
            <div className="profile-backdrop">
            </div>
            <div className="profile-modal">
                 <form onSubmit={this.handleSubmit}>
          <section className="profile-modal-header">
          <h1>My Profile Settings</h1>
          {/* <button onClick={this.handleSubmit}>X</button> */}
          </section>

          <div className="profile-inputs">
                <label for="name">Name</label>
                <input 
                    for
                    type="text"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleInput('name')}
                />


          </div>
        
          <section className='edit-project-name'>
          
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

export default EditProfileModal;
