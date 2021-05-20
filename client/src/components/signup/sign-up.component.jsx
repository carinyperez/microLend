import React from 'react'; 
import './sign-up.styles.scss'; 

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
    }
    handleChange = event => {
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
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    value={username} 
                    onChange={this.handleChange}
                    label = 'Username'
                    required
                />
                <label>Email</label>
                <input
                    type='email'
                    name='email'
                    value={email} 
                    onChange={this.handleChange}
                    label='Email'
                    required
                />
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    value={password} 
                    onChange={this.handleChange}
                    label='Password'
                    required
                />
                <button>Sign Up</button>
            </form>
        </div>

        </div>
 

        )
    }
}

export default SignUp;