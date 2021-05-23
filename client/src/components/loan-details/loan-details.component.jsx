import './loan-details.styles.scss'; 
import story from '../../assets/story.jpeg'
import card1 from '../../assets/card1.jpeg'; 
import './loan-details.styles.scss';
import Avatar from 'react-avatar';

const LoanDetails = () => {
    return (
        <div>
            <h1 className='blue'>Loan Request</h1> 
            <div className='loan-details-container'> 
            <div className='loan-images'> 
                <img src={card1}></img>
                <br/>
                <img src={story}></img>
            </div>
            <div className='loan-amount'>
                <p className='blue'>An-Nisa UI Islam</p>
                <p>Pakistan</p>
                <p ><span className='blue'>Created:</span> 2 days ago</p>
                <p><span className='blue'>Amount raised:</span> $40 of $100</p>
            </div>
            <div className='loan-desc'>
                <h1 className='blue'>Description</h1>
                <p>An-Nisa UI Islam is an afterschool group in Pakistan. 
                Teachers use laptops to teach students about web development, design. 
                It is important to introduce students in rural cities to technology. 
                Most of these students do not have internet at home so school 
                is the only way for them to learn about technology.  </p>
            </div>
            <div className='loan-details'>
                <h1 className='blue'>Loan Details</h1>
                <p>Loan length: <span className='red'>38 months</span></p>
                <p>Repayment schedule: <span className='blue'>Monthly</span></p>
                <p>Disbursed date: <span className='blue'>May 24, 2021</span> </p>
                <p>Funding Modal: <span className='blue'>Fixed</span></p>
                <p>Is borrower paying interest: <span className='blue'>No</span></p>
                <p>Facilitated by: <span className='blue'>Economic Development Fund</span></p>
                <p>Risk Rating: <span className='blue'>Low</span></p>
            </div>
        </div>
        <div className='loaners'>
                <h1>Loaners</h1>
                <p>People who have donated for this cause</p>
                <Avatar name="Jeremy Y" round size='50px'/>
                <Avatar name="Cariny P" round size='50px'/>
                <Avatar name="Xter B" round size='50px'/>
                <Avatar name="Bolaji O" round size='50px'/>
                <Avatar name="Jenna T" round size='50px'/>
            </div>
        </div>
        
    )

}

export default LoanDetails; 
