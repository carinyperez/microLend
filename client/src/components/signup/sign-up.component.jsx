import React from 'react'; 
import './sign-up.styles.scss'; 
import {connect} from 'react-redux'; 
import signup from '../../redux/reducers/auth/auth.actions'; 
import Alert from '../alert/alert.component'; 
import setAlert from '../../redux/reducers/alert/alert.actions';
import {withRouter} from 'react-router-dom'; 


class SignUp extends React.Component {
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
        // redux actions 
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
      <div className='signup-container'>
       <div className='signup'> 
            <h1>Sign Up</h1>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
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
                <Alert/>
                <button>Sign Up</button>
            </form>
        </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth 
})

export default withRouter(connect(mapStateToProps, {signup, setAlert})(SignUp));