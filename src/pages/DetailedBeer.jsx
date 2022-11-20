import React from "react";
import { Link, Navbar, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DetailedBeer(props) {
  const { beerId } = useParams();
  console.log("beerId", beerId);
  const [foundBeer, setFoundBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log("response.data", response.data);
        setFoundBeer(response.data);
      });
  }, []);

  return (
    <div>
      <header className="header">
        <Link to="/">Home</Link>
      </header>
      <Link to="/beers">Back</Link>
      <h1>Beer Details</h1>
      {!foundBeer && <h3>Beer not found!</h3>} {/* <== ADD  */}
      {/*  ADD  */}
      {foundBeer && (
        <>
          <img src={foundBeer.image_url} />
          <h3>{foundBeer.name}</h3>
          <p>{foundBeer.tagline}</p>
          <p>{foundBeer.first_brewed}</p>
          <p>{foundBeer.attenuation_level}</p>
          <p>{foundBeer.description}</p>
        </>
      )}
    </div>
  );
}

export default DetailedBeer;
