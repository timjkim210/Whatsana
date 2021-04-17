import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import Sidebar from './sidebar';
import EditProfileModal from './edit_profile_modal'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.state = { show: false };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.hideSidebar = this.hideSidebar.bind(this);
        this.showSidebar = this.showSidebar.bind(this);
        this.showModal = this.showModal.bind(this);
        };

    showModal() {
        this.handleDropdown();
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    };

    handleDropdown() {
        let homeDropdownContent = document.querySelector('.home-dropdown-content');
            if (homeDropdownContent.style.display === "") {
                homeDropdownContent.style.display = "block"
            } else {
                homeDropdownContent.style.display = "";
            }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.logout()
            .then(() => this.props.history.push('/login'))
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    hideSidebar() {
        console.log('Hi')
            let sidebar = document.getElementById('sidebar');
            // debugger
            if (sidebar.style.width === "" || sidebar.style.width === '17.5%') {
                sidebar.style.width = '0'
                document.getElementById('home-box').style.marginLeft = "0";
                document.getElementById('homebox-not-sidebar').style.marginLeft = "5%"
                document.getElementById('sidebar-open-btn').style.display = 'inline'
            };
        };

    showSidebar() {
            let sidebar = document.getElementById('sidebar');
            // debugger
            if (sidebar != null && sidebar.style.width === '0px') {
                console.log('Hi')
                sidebar.style.width = '17.5%';
                document.getElementById('homebox-not-sidebar').style.marginLeft = "220px"

            } 
    }

    render() {
        if (this.props === undefined) {
            return null;
        } else {
            return (
                <div id="home-box">
                    <Sidebar hide={this.hideSidebar} show={this.showSidebar}/>
                    <div id="homebox-not-sidebar">
                        <div className="home-header">
                            <h1 onClick={this.showSidebar} ><i id='sidebar-open-btn' class="fas fa-bars"></i> Home</h1>
                            {/* <button onClick={this.handleSubmit}>Log Out</button> */}
                            <div className="home-dropdown-container">
                                <button className="profile-btn"onClick={this.handleDropdown}>TK</button>
                                <div id="homeDropdown" className="home-dropdown-content">
                                    <li onClick={this.showModal}>My Profile Settings ...</li> 
                                    <li onClick={this.handleSubmit}>Logout</li>
                                </div>
                            </div>
                        </div>
                        <EditProfileModal updateUser={this.props.updateUser} onClose={this.showModal} show={this.state.show} currentUser={this.props.currentUser} />
                        <div className="project-list">
                            <h3>Projects</h3>
                            <ul>
                                {
                                    this.props.projects.map(project => {
                                        return <ProjectIndexItem project={project} key={project.id} />
                                    })
                                }
                            

                            <li id="create-project-btn"><Link to="/projects/new"><i class="fas fa-plus"></i>   New Project</Link></li>

                            </ul>
                        </div>

                    </div>

                </div>
            )
        }

    }
}

export default Home;
