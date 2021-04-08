import React from 'react'

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

    

    render() {
        return (
            <div>
                <div id="sidebar" class="home-sidebar">
                        <div className="logo-and-close">
                            <h1>Whatsana </h1> <span onClick={this.handleClick}><i id="chevron" class="fas fa-chevron-left"></i><i class="fas fa-bars"></i></span>
                        </div>
                        <div className='main-side-nav'></div>
                        <div className="favorites"></div>
                        <div className="side-team-projects"></div>
                </div>
            </div>
        )
    }
}
