import './footer.styles.scss'; 
import logo from '../../assets/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {FaMapMarkerAlt } from 'react-icons/fa';
import {MdSettingsCell } from 'react-icons/md';
import {FiTwitter } from 'react-icons/fi';
import {FaFacebookSquare } from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';



const Footer = () => {
    return (
        <div className='footer'> 
            <img src={logo} alt='logo'></img>
            <div className='footer-loan'>
                <h1>Loan</h1>
                <p>Find a borrower</p>
                <p>Pay with cash or crypto</p>
                <p>Get repaid</p>
            </div>
            <div className='footer-borrow'>
                <h1>Borrow</h1>
                <p>Apply</p>
                <p>Fundraise</p>
                <p>Repay</p>
            </div>
            <div className='footer-mentor'>
                <h1>Mentors</h1>
                <p>Find a mentor</p>
                <p>Send a message</p>
                <p>Get trained</p>
            </div>
            <div className='icons'>
                <p>
                <FaMapMarkerAlt/>
                <span>
                San Francisco, CA 
                </span>
                </p>
                <p> 
                <MdSettingsCell/>
                <span>510-510-5100</span>
                </p>
                <div className='social-media'>
                    <p>
                    <FiTwitter />
                    <FaFacebookSquare/>
                    <FaInstagramSquare />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer; 