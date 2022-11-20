import React from "react";
import { Link, Navbar } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Beers() {
  const [beers, setBeers] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  const handleChange = async (event) => {
    setQuery(event.target.value);
    const responseQuery = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
    );

    console.log("responseQuery", responseQuery.data);
    setBeers(responseQuery.data);
  };

  return (
    <div>
      <header className="header">
        <Link to="/">Home</Link>
      </header>
      <div>
        <input value={query} onChange={handleChange} />
      </div>

      <div>
        <h2>List of Beers</h2>
        {beers.map((beer) => (
          <div key={beer._id} className="card">
            <img src={beer.image_url} className="beerimg" alt="beer" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beers;
