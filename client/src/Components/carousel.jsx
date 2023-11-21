import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const CardCarousel = ({ cards, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const play = <FontAwesomeIcon icon={faPlay} />;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [cards.length, interval]);

  return (
    <div>
      <div className="cardmax">
        <img
          className="cardbanner"
          src={cards[currentIndex]?.Bannerurl}
          alt=""
        />
        <div className="title">
          <img
            className="cardlogo"
            src={cards[currentIndex]?.cardlogo}
            alt=""
          />
          <h4>{cards[currentIndex]?.name}</h4>
          <div className="cardmaxDesc" style={{ display: "flex" }}>
            <li>{cards[currentIndex]?.year} |</li>
            <li> {cards[currentIndex]?.seasons} |</li>
            <li>{cards[currentIndex]?.genre}</li>
          </div>

          <h5 style={{ fontFamily: "Poppins" }}>{cards[currentIndex]?.desc}</h5>
          <div className="watchnow">
            <button>
              {" "}
              <span>{play}</span> <p>Watch Now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
