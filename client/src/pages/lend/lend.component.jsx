import React from "react";
import "./lend.css";
import Cards from "../../components/cards/cards.component";
import card1 from "../../assets/card1.jpeg";

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
        />
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
      </div>
    </div>
  );
};

export default Lend;
