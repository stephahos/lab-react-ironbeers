import React from "react";
import { Link, Navbar } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Random() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log("response.data", response.data);
        setRandomBeer(response.data);
      });
  }, []);

  return (
    <div>
      <header className="header">
        <Link to="/">Home</Link>
      </header>
      <h1>Random Beer Details</h1>
      {!randomBeer && <h3>Beer not found!</h3>}

      {randomBeer && (
        <>
          <img src={randomBeer.image_url} alt="beerimage" className="beerimg" />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>Created by :{randomBeer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default Random;
