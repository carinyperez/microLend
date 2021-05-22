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
          <h2>Lender</h2>
          <div className='line'></div>
          <h3>Find a borrower</h3>
          <p>Browse by category and find a cause to support</p>
          <h3>Pay with Cash or Crypto</h3>
          <p>Fund with either cash or crypto account</p>
          <h3>Get repaid</h3>
          <p>microLend borrowers have a 99% repayment rate</p>
        </div>
        <div className='borrow'> 
          <p><img src={borrow} alt='borrow'></img></p>
          <h2>Borrower</h2>
          <div className='line'></div>
          <br/>
          <h3>Apply</h3>
          <p>Fill out our online application</p>
          <h3>Fundraise</h3>
          <p>Go public on microLend to share your campaign with millions of lenders online</p>
          <h3>Repay</h3>
          <p>Repay your loan to be eligible for more loans</p>
        </div>
        <div className='mentors'> 
          <p><img src={mentors} alt='mentors'></img></p>
          <h2>Mentors</h2>
          <div className='line'></div>
          <br/>
          <h3>Find a mentor</h3>
          <p>Choose a mentor from the list of mentors</p>
          <h3>Send a message</h3>
          <p>Send a request to the mentor for guidance</p>
          <h3>Get trained</h3>
          <p>Our mentors can help with things like business strategy,market research, business planning</p>
        </div>
      </div>
      {/* <div className="content">
        <h1>
          {" "}
          Fund a cause,
          <br />
          <span className="change">change a life</span>
        </h1>
        <p>
          {" "}
          With microLend, you can lend as little as $25 and make a big change in
          someone's life
        </p>
        <button>Find a cause</button>
      </div> */}
      <div className="causes">
        <h1>Support casues you care about</h1>
      </div>
    </div>
  );
};

export default HomePage;
