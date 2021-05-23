import home from "../../assets/home.png";
import loan from "../../assets/loan.png";
import borrow from "../../assets/borrow.png";
import mentors from "../../assets/mentors.png";
import "./homepage.styles.scss";
import Cards from "../../components/cards/cards.component";
import card1 from "../../assets/card1.jpeg";
import card2 from "../../assets/card2.jpeg";
import card3 from "../../assets/card3.jpeg";
import card4 from "../../assets/card4.jpeg";


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home">
        <img src={home} alt="home"></img>
        <p>
          {" "}
          With microLend, you can lend as little as $25
          <br />
          and make a big change in someone's life
        </p>
      </div>
      <div className="content">
        <div className="loan">
          <p>
            <img src={loan} alt="loan"></img>
          </p>
          <h1>Lender</h1>
          <div className="line"></div>
          <h2>Find a borrower</h2>
          <p>Browse by category and find a cause to support</p>
          <h2>Pay with Cash or Crypto</h2>
          <p>Fund with either cash or crypto account</p>
          <h2>Get repaid</h2>
          <p>microLend borrowers have a 99% repayment rate</p>
        </div>
        <div className="borrow">
          <p>
            <img src={borrow} alt="borrow"></img>
          </p>
          <h1>Borrower</h1>
          <div className="line"></div>
          <br />
          <h3>Apply</h3>
          <p>Fill out our online application</p>
          <h2>Fundraise</h2>
          <p>
            Go public on microLend to share your campaign with millions of
            lenders online
          </p>
          <h2>Repay</h2>
          <p>Repay your loan to be eligible for more loans</p>
        </div>
        <div className="mentors">
          <p>
            <img src={mentors} alt="mentors"></img>
          </p>
          <h1>Mentors</h1>
          <div className="line"></div>
          <br />
          <h2>Find a mentor</h2>
          <p>Choose a mentor from the list of mentors</p>
          <h2>Send a message</h2>
          <p>Send a request to the mentor for guidance</p>
          <h2>Get trained</h2>
          <p>
            Our mentors can help with things like business strategy,market
            research, business planning
          </p>
        </div>
      </div>
      <h1>Support causes you care about</h1>
      <div className="causes">
        <Cards
          title="An-Nisa UI Islam"
          image={card1}
          button="View loan"
          amount="$100"
          desc="This loan will help buy computers for an after-school program"
          percentage="40"
          current='$40'
        />
        <Cards
          title="Rengvo"
          image={card2}
          button="View loan"
          amount="$200"
          desc="This loan will help buy seeds for next harvesting season"
          percentage="60"
          current='$120'
        />
        <Cards
          title="Mandingu"
          image={card3}
          button="View loan"
          amount="$25"
          desc="This loan will help plant fruit trees and the fruit will be sold"
          percentage="50"
          current='$13'
        />
        <Cards
          title="Del Sol Group"
          image={card4}
          button="View loan"
          amount="$2500"
          desc="This loan will help buy the materials to build a school"
          percentage="70"
          current='$1750'
        />
      </div>
    </div>
  );
};
export default HomePage;
