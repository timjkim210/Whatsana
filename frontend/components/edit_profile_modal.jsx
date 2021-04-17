import React from 'react';

class EditProfileModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.currentUser.id,
            full_name: this.props.currentUser.full_name,
            pronouns: '',
            role: '',
            team: '',
            email: this.props.currentUser.email,
            about: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value})
    }
  }

  handleSubmit(e) {
      e.preventDefault;
      this.props.updateUser(this.state);
      this.onClose(e);
      let homeDropdownContent = document.querySelector('.home-dropdown-content');
            if (homeDropdownContent.style.display === "") {
                homeDropdownContent.style.display = "block"
            } else {
                homeDropdownContent.style.display = "";
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
            <>
            <div className="profile-backdrop">
            </div>
            <div className="profile-modal">
                 <form onSubmit={this.handleSubmit}>
          <section className="profile-modal-header">
          <h1>My Profile Settings</h1>
          <button onClick={this.handleSubmit}>X</button>
          </section>

          <div className="profile-inputs">

            <div className="profile-input">
                <label for="full_name">Your full name</label>
                <input 
                    for
                    type="text"
                    id="full_name"
                    value={this.props.currentUser.full_name}
                    onChange={this.handleInput('full_name')}
                />
            </div>

            <div className="profile-input">
                <label for="pronouns">Pronouns</label>
                <input 
                    for
                    type="text"
                    id="pronouns"
                    value={this.state.pronouns}
                    onChange={this.handleInput('pronouns')}
                />
            </div>

            <div className="profile-input">
                <label for="role">Role</label>
                <input 
                    for
                    type="text"
                    id="role"
                    value={this.state.role}
                    onChange={this.handleInput('role')}
                />
            </div>

            <div className="profile-input">
                <label for="team">Department/Team</label>
                <input 
                    for
                    type="text"
                    id="team"
                    value={this.state.team}
                    onChange={this.handleInput('team')}
                />
            </div>

            <div className="profile-input" id="email-field">
                 <label for="email">Email</label>
                <input 
                    for
                    type="text"
                    id="email"
                    value={this.props.currentUser.email}
                    onChange={this.handleInput('email')}
                />
            </div>
        </div>
            
        <div className="about-me">
            <label for="about">About Me</label>
            <textarea 
                id="about"
                value={this.state.about}
                onChange={this.handleInput('about')}
            />
        </div>          

        <button className="save-changes" value="submit">Save Changes</button>

        </form>
    </div>
            </>
        )
    }
}

export default EditProfileModal;
