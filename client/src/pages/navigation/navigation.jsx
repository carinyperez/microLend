import React, {Component} from 'react'; 
import { Menu, MenuItem } from "@progress/kendo-react-layout";
import './navigation.styles.scss'; 
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom'; 

class Navigation extends React.Component {
    render() {
        return (
            <div className='nav'> 
                <Link to='/'>
                    <img src={logo} alt='logo'>
                    </img>
                </Link>
                <div className='menu'>
                <Link to='/lend'>Lend</Link>
                <Link to='/borrow'>Borrow</Link>
                <Link to='/mentors'>Mentors</Link>
                <Link to='/about'>About</Link>
                </div>
                {/* <Menu className='menu'> 
                    <MenuItem 
                        text='Lend'
                        url='/lend'
                    />
                    <MenuItem text='Borrow' url='/borrow'/>
                    <MenuItem text='Mentors' url='/mentors'/>
                    <MenuItem text='About us' url='/about'/>
                </Menu> */}
            </div>

        )
    }
}

export default Navigation; 