import React from "react";
import "./lend.css";
import Cards from "../../components/cards/cards.component";
import card1 from "../../assets/card1.jpeg";
import card2 from "../../assets/card2.jpeg";
import card3 from "../../assets/card3.jpeg";
import card4 from "../../assets/card4.jpeg";

const Lend = () => {
  return (
    <div>
      <div className="treading">Trending Now</div>
      <div className="grid-treading">
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
        {/* <Cards
          title="An-Nisa UI Islam"
          image={card1}
          button="View loan"
          amount="$100"
          desc="This loan will help buy computers for an after-school program"
          percentage="50"
        />
        <Cards
          title="An-Nisa UI Islam"
          image={card1}
          button="View loan"
          amount="$100"
          desc="This loan will help buy computers for an after-school program"
          percentage="50"
        />
        <Cards
          title="An-Nisa UI Islam"
          image={card1}
          button="View loan"
          amount="$100"
          desc="This loan will help buy computers for an after-school program"
          percentage="50"
        /> */}
      </div>
      <div className="subNav">
        <span className="selected">Mission</span>
        <span className="spanSpace">COVID 19</span>
        <span className="spanSpace">Farmers</span>
        <span className="spanSpace">Women</span>
        <span className="spanSpace">Children</span>
      </div>
      <div className="grid-more">
        <Cards
          title="An-Nisa UI Islam"
          image={card1}
          button="View loan"
          amount="$100"
          desc="This loan will help buy computers for an after-school program"
          percentage="50"
          current='$50'
        />
        <Cards
          title="An-Nisa UI Islam"
          image={card1}
          button="View loan"
          amount="$100"
          desc="This loan will help buy computers for an after-school program"
          percentage="50"
          current='$50'
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
        {/* <Cards
          title="An-Nisa UI Islam"
          image={card1}
          button="View loan"
          amount="$100"
          desc="This loan will help buy computers for an after-school program"
          percentage="50"
          current='$50'
        />
        <Cards
          title="An-Nisa UI Islam"
          image={card1}
          button="View loan"
          amount="$100"
          desc="This loan will help buy computers for an after-school program"
          percentage="50"
          current='$50'
        />
        <Cards
          title="An-Nisa UI Islam"
          image={card1}
          button="View loan"
          amount="$100"
          desc="This loan will help buy computers for an after-school program"
          percentage="50"
          current='$50'
        /> */}
      </div>
    </div>
  );
};

export default Lend;
