import React from 'react';
import './navigation.styles.scss';
import logo from '../../assets/logo.png';
import { withRouter, Link, useHistory } from 'react-router-dom';
import { Menu, MenuItem } from '@progress/kendo-react-layout';


function Navigation(props){
    const history = useHistory()    
    const onSelect = (event) => {
        history.push(event.item.data.route)
    }
        return (
            <div className='nav'>
                <Link className='imageLink' to='/'>
                    <img src={logo} alt='logo'>
                    </img>
                </Link>
                <Menu onSelect={onSelect} class='menu'>
                    <MenuItem text="Loan" data={{
                        route: "/lend"
                    }} />
                    <MenuItem text="Borrow" data={{
                        route: "/borrow"
                    }} />
                    <MenuItem text="Mentors" data={{
                        route: "/mentors"
                    }} />
                    <MenuItem text="Login" data={{
                        route: "/about"
                    }} />
                </Menu>
            </div>
        )
    }


export default withRouter(Navigation);