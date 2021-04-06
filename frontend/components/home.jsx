import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        };

    handleSubmit(e) {
        e.preventDefault()
        this.props.logout()
            .then(() => this.props.history.push('/login'))
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        if (!this.props.projects) {
            return null;
        } else {
            return (
                <div className="home-box">
                    <div className="home-sidebar">
                        <div className="logo-and-close">
                            <h1>Whatsana</h1>
                            <i class="fas fa-bars"></i>
                        </div>
                        <div className='main-side-nav'></div>
                        <div className="favorites"></div>
                        <div className="side-team-projects"></div>






                    </div>
                    <div className="homebox-not-sidebar">
                        <h1>Home</h1>
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
