import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import Sidebar from './sidebar';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.hideSidebar = this.hideSidebar.bind(this);
        this.showSidebar = this.showSidebar.bind(this);
        };

    handleSubmit(e) {
        e.preventDefault()
        this.props.logout()
            .then(() => this.props.history.push('/login'))
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    hideSidebar() {
            let sidebar = document.getElementById('sidebar');
            debugger
            if (sidebar.style.width === "") {
                sidebar.style.width = '0'
                document.getElementById('home-box').style.marginLeft = "0";
                document.getElementById('homebox-not-sidebar').style.marginLeft = "5%"
                document.getElementById('sidebar-open-btn').style.display = 'inline'
            };
        };

    showSidebar() {
            let sidebar = document.getElementById('sidebar');
            debugger
            if (sidebar != null && sidebar.style.width === '0') {
                sidebar.style.width = '17.5%';
            } 
    }

    render() {
        if (!this.props.projects) {
            return null;
        } else {
            return (
                <div id="home-box">
                    <Sidebar hide={this.hideSidebar} show={this.showSidebar}/>
                    <div id="homebox-not-sidebar">
                        <h1 onClick={this.showSidebar()} ><i id='sidebar-open-btn' class="fas fa-bars"></i> Home</h1>
                        <button onClick={this.handleSubmit}>Log Out</button>
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
