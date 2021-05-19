import React, {Component} from 'react'; 
import { Menu, MenuItem } from "@progress/kendo-react-layout";
import './navigation.styles.scss'; 
import logo from '../../assets/logo.png';

class Navigation extends React.Component {
    render() {
        return (
            <div className='nav'> 
                <img src={logo} alt='logo'></img>
                <Menu className='menu'> 
                    <MenuItem text='Lend'/>
                    <MenuItem text='Borrow'/>
                    <MenuItem text='Mentors'/>
                    <MenuItem text='About us'/>
                </Menu>
            </div>

        )
    }
}

export default Navigation; 