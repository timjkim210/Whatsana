import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.signup(this.state)
            .then(() => this.props.history.push('/home'))
    }



    render() {
        return (
            <div>
                <h2>Welcome to Whatsana!</h2>
                <form action="">
                    <label> What's your full name?
                        <input 
                        type="text"
                        value={this.state.full_name}
                        onChange={this.handleInput('full_name')}
                        
                        />
                    </label>

                    <label> Email
                        <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}

                        />
                    </label>

                    <label> Password
                        <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        />
                    </label>

                    <button onClick={this.handleSubmit}>Sign Up</button>

                </form>
            </div>
        )
    }
}

export default Signup;