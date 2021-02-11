import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        debugger
        this.props.login(this.state)
        .then(() => this.props.history.push('home'))
    };



    render() {
        return (
            <div className="form-container">

                <h1>Whatsana</h1>

                <button className="demo">Demo Login</button>

                <div className="border">
                    <p>or</p>
                </div>
                
                <form>

                    <label className="label"> Email address </label>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    

                    <label className="label"> Password </label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    

                    <button className="submit" onClick={this.handleSubmit}>Log In</button>

                </form>

                <p className="p">Don't have an account? <Link className="signup" to="/signup">Sign Up</Link> </p>
            </div>
        )
    }
}

export default Login;