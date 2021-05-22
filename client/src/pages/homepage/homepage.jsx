import home from "../../assets/home.png";
import loan from "../../assets/loan.png";
import borrow from "../../assets/borrow.png";
import mentors from "../../assets/mentors.png";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home">
        <img src={home} alt='home'></img>
        <p>
          {" "}
          With microLend, you can lend as little as $25 
          <br/>
          and make a big change in someone's life
        </p>
      </div>
      <div className='content'>
        <div className='loan'> 
          <p><img src={loan} alt='loan'></img></p>
          <h1>Lender</h1>
          <div className='line'></div>
          <h2>Find a borrower</h2>
          <p>Browse by category and find a cause to support</p>
          <h2>Pay with Cash or Crypto</h2>
          <p>Fund with either cash or crypto account</p>
          <h2>Get repaid</h2>
          <p>microLend borrowers have a 99% repayment rate</p>
        </div>
        <div className='borrow'> 
          <p><img src={borrow} alt='borrow'></img></p>
          <h1>Borrower</h1>
          <div className='line'></div>
          <br/>
          <h3>Apply</h3>
          <p>Fill out our online application</p>
          <h2>Fundraise</h2>
          <p>Go public on microLend to share your campaign with millions of lenders online</p>
          <h2>Repay</h2>
          <p>Repay your loan to be eligible for more loans</p>
        </div>
        <div className='mentors'> 
          <p><img src={mentors} alt='mentors'></img></p>
          <h1>Mentors</h1>
          <div className='line'></div>
          <br/>
          <h2>Find a mentor</h2>
          <p>Choose a mentor from the list of mentors</p>
          <h2>Send a message</h2>
          <p>Send a request to the mentor for guidance</p>
          <h2>Get trained</h2>
          <p>Our mentors can help with things like business strategy,market research, business planning</p>
        </div>
      </div>
      <div className="causes">
        <h1>Support casues you care about</h1>
      </div>
    </div>
  );
};
export default HomePage;
