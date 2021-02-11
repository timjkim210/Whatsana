import React from 'react';

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

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={this.handleSubmit}>Log Out</button>
            </div>
        )
    }
}

export default Home;
