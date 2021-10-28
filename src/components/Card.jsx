import React from 'react'

import cards from '../constants/card'
import queen from '../assets/queen.gif'
import jack from '../assets/jack.gif'
import king from '../assets/king.gif'
function Card(props) {
    const {  card,
  style,
  onCardClick=()=>undefined,
  className,
  disabled} = props;

 if (!card) {
    return (
      <div id={card} className="card" style={style}>
        <div>
          <div className="front" style={{ visibility: "hidden" }}>
            <br />
          </div>
        </div>
      </div>
    );
  }
    const cardNumber = card.substr(1);
  const sign = card[0];
  const getSymbols = () => {
    switch (sign) {
      case "S":
        return cards[cardNumber].map((o) => (
          <div key={o} className={o}>
            &spades;
          </div>
        ));
      case "H":
        return cards[cardNumber].map((o) => (
          <div key={o} className={o}>
            &hearts;
          </div>
        ));
      case "D":
        return cards[cardNumber].map((o) => (
          <div key={o} className={o}>
            &diams;
          </div>
        ));
      case "C":
        return cards[cardNumber].map((o) => (
          <div key={o} className={o}>
            &clubs;
          </div>
        ));
      default:
        throw { message: "Invalid sign" };
    }
  };

  const addIfKQJ = () => {
    let path = "";
    if (cardNumber === "K") {
      path = king;
    } else if (cardNumber === "J") {
      path = jack;
    } else if (cardNumber === "Q") {
      path = queen;
    } else {
      return "";
    }

    return <img className="face" src={path} alt="" width="80" height="120" />;
  };

  const getNumber = () => {
    switch (cardNumber) {
      case "A":
      case "1":
        return "A";
      case "K":
        return "K";
      case "Q":
        return "Q";
      case "J":
        return "J";
      default:
        return cardNumber;
    }
  };

  const cardHolderClassName =
    sign === "D" || sign === "H" ? "front red" : "front";

  const handleCardClick = (e) => {
    if (disabled) {
      return;
    }

    onCardClick(e,card);
  };

  return (
    <div
      id={card}
      className={className}
      style={style}
      onClick={handleCardClick}
    >
      <div className={cardHolderClassName}>
        <div className="index">
          {getNumber()}
          <br />
        </div>
        {addIfKQJ()}
        {getSymbols()}
      </div>
    </div>
  );
}

export default Card
