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
                <div>
                    <h1>Home Page</h1>
                    <button onClick={this.handleSubmit}>Log Out</button>

                    <ul>
                        {
                            this.props.projects.map(project => {
                                return <li>{project.name}</li>
                            })
                        }
                    </ul>

                    <Link to="/projects/new">Create New Project</Link>



                </div>
            )
        }

    }
}

export default Home;
