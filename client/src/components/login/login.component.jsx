import React from 'react'; 
import './login.styles.scss'; 
import {connect} from 'react-redux'; 
import signup from '../../redux/reducers/auth/auth.actions'; 
import {withRouter} from 'react-router-dom'; 
import axios from 'axios'; 

class Login extends React.Component {
    constructor() {
        super(); 
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault(); 
        const {username, email, password} = this.state;
        this.props.signup({username, email, password});
        setTimeout(() => this.props.history.push('/loan-application'), 3000);
    }
    handleChange = event => {
        event.preventDefault(); 
        const {name, value} = event.target; 
        this.setState({[name]: value}) 
    }
    render() {
        const {username, email, password} = this.state; 
        return (
      <div className='login-container'>
       <div className='login'> 
            <h1>Login</h1>
            <form className='login-form' onSubmit={this.handleSubmit}>
                <label>Username
                </label>
                <input
                        type='text'
                        name='username'
                        value={username} 
                        onChange={this.handleChange}
                        required
                />
                <label>Email
                </label>
                <input
                    type='email'
                    name='email'
                    value={email} 
                    onChange={this.handleChange}
                    required
                />
                <label>Password
                <input
                    type='password'
                    name='password'
                    value={password} 
                    onChange={event => this.handleChange(event)}
                    required
                />
                </label>
                <button>Login</button>
            </form>
        </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth 
})

export default withRouter(connect(mapStateToProps, {signup})(Login));