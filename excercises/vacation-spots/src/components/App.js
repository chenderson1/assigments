import React from "react";
import Card from "./Card";
import AppCss from "../index.css";

let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },
  {
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },
  {
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },
  {
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },
  {
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
];

const App = () => {
  const mappedSpots = vacationSpots.map(spot => {
    let color;
    let expensive;
    if (spot.timeToGo === "Spring") {
      color = { backgroundColor: "green" };
    } else if (spot.timeToGo === "Summer") {
      color = { backgroundColor: "orange" };
    } else if (spot.timeToGo === "Fall") {
      color = { backgroundColor: "grey" };
    } else if (spot.timeToGo === "Winter") {
      color = { backgroundColor: "blue" };
    }

    if (spot.timeToGo === "Spring") {
      color = { backgroundColor: "green" };
    } else if (spot.timeToGo === "Summer") {
      color = { backgroundColor: "orange" };
    } else if (spot.timeToGo === "Fall") {
      color = { backgroundColor: "grey" };
    }

    if (spot.price < 500) {
      expensive = "$";
    } else if (spot.price < 1000) {
      expensive = "$$";
    } else if (spot.price > 1000) {
      expensive = "$$$";
    }

    return (
      <Card
        place={spot.place}
        price={spot.price}
        timeToGo={spot.timeToGo}
        bgColor={color}
        expensive={expensive}
      />
    );
  });

  return (
    <div className="container">
      <div className="card-wrapper">{mappedSpots}</div>
    </div>
  );
};

export default App;
