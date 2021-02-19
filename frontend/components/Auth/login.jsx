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
        this.handleDemo = this.handleDemo.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.login(this.state)
        .then(() => this.props.history.push('/home'))
    };

    handleDemo() {
        this.props.login({
            email: 'demo_user@demo_login.com',
            password: '123456'
        }).then(() => this.props.history.push('/home'))
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
            <div className="login-page-box">
            <div className="form-container">
                <div className="form-container-top">

                        <Link to="/"><img src={window.whatsanaLogo} /></Link>

                    <div>
                        {
                                this.props.errors.length > 0 ? (<p>{this.renderErrors()}</p>) : (<h3></h3>)
                        }
                    </div>
                    

                
                
                <button className="demo" onClick={() => this.handleDemo()}>Demo Login</button>

                </div>

                <div className="border">
                    <p>or</p>
                </div>
                
                <form className='form' onSubmit={this.handleSubmit}>

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
                    

                    <button className="submit" >Log In</button>

                </form>

                <p className="p">Don't have an account? <Link onClick={this.clearErrors} className="signup" to="/signup">Sign Up</Link> </p>
            </div>
            </div>
        )
    }
}

export default Login;