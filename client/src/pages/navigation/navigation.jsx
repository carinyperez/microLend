import React from 'react'; 
import './navigation.styles.scss'; 
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom'; 

class Navigation extends React.Component {
    render() {
        return (
            <div className='nav'> 
                <Link className='imageLink' to='/'>
                    <img src={logo} alt='logo'>
                    </img>
                </Link>
                <div className='menu'>
                <Link to='/lend'>Loan</Link>
                <Link to='/borrow'>Borrow</Link>
                <Link to='/mentors'>Mentorship</Link>
                <Link to='/about'>Login</Link>
                </div>
            </div>
        )
    }
}

export default Navigation; 