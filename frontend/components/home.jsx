import React from 'react';
import { Link } from 'react-router-dom';

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

                        <ul>
                            {
                                this.props.projects.map(project => {
                                    return <li>{project.name}</li>
                                })
                            }
                        

                        <li><Link to="/projects/new">Create New Project</Link></li>

                        </ul>

                    </div>

                </div>
            )
        }

    }
}

export default Home;
