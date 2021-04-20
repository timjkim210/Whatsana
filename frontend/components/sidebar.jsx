import React from 'react'
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    hide(e) {
        this.props.hide && this.props.hide(e)
    }

    handleClick(e) {
        e.preventDefault;
        this.hide(e);
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    

    render() {
        if (this.props === undefined) {
            return null;
        } else {
             return (
            <div>
                <div id="sidebar" class="home-sidebar">
                        <div className="logo-and-close">
                            <h1><Link to="/home">Whatsana</Link></h1> <span onClick={this.handleClick}><i id="chevron" class="fas fa-chevron-left"></i><i class="fas fa-bars"></i></span>
                        </div>
                        <div className='main-side-nav'>
                            <ul>
                            <li><Link to="/home"><i class="fas fa-home"></i> Home</Link></li>
                            <li><i class="far fa-check-circle"></i> My Tasks</li>
                            </ul>
                        </div>
                        <div className="tims-links">
                            <h3>Tim's Links</h3>
                            <li><a href="https://github.com/timjkim210">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/timothy-kim-0a818a99/">LinkedIn</a></li>
                            <li><a href="https://angel.co/u/timothy-kim-26">AngelList</a></li>
                        </div>
                        <div className="favorites">
                            <h3>Favorites</h3>
                            <ul>
                                {this.props.projects.map(project => {
                                    if (project.favorite === true) {
                                        return <li><div className="colored-bullet"></div><Link to={`projects/${project.id}`}>{project.name}</Link></li>;
                                    }
                                })}
                            </ul>
                        </div>
                        <div className="side-team-projects"></div>
                </div>
            </div>
        )
                            }
    }
}
