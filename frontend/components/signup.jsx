import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearErrors = this.clearErrors.bind(this)

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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    clearErrors() {
        this.props.removeErrors();
    }



    render() {
        return (
            <div>
                <Link className="asana-logo" to="/"><img src={window.asanaLoginLogo} /></Link>

                <form className="sign-up-form">

                    <h2>Welcome to Whatsana!</h2>
                    <br/>
                    <br/>


                    <label> What's your full name?</label>

                        <input 
                        type="text"
                        value={this.state.full_name}
                        onChange={this.handleInput('full_name')}
                        />
                        <p>Please enter your name.</p>

                    <label> Email address </label>
                        <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        />
                        <p>Please enter your email address.</p>

                    <label> Password</label>
                        <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        />
                    <p>Password must be 6 characters or longer.</p>
                    

                    <button className="sign-up-btn" onClick={this.handleSubmit}>Sign Up</button>

                        <p className="sign-up-subscript">Wrong account? <Link onClick={this.clearErrors} className="login-link" to="/login">Log in</Link> instead.</p>
                        <p id="signup-error">{this.renderErrors()}</p>
                </form>
                
            </div>

        )
    }
}

export default Signup;