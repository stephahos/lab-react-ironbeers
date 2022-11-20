import { Link, Navbar } from "react-router-dom";
import React, { useState } from "react";
import SomBeers from "../assets/beers.png";
import randombeer from "../assets/random-beer.png";
import newbeer from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/"></Link>
      <div>
        <img src={SomBeers} alt="image" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est minus
          tenetur quisquam explicabo esse vel error doloribus facilis, itaque
          eum modi sunt voluptas maxime ratione quae nesciunt vitae sit tempora.
        </p>
        <Link to="/beers">Beers</Link>
      </div>
      <div>
        <img src={randombeer} alt="image" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe totam
          obcaecati voluptatem eum, beatae voluptates maiores pariatur itaque
          inventore atque consequuntur consectetur, at accusantium iure numquam
          iusto. Vitae, tempore quia.
        </p>
        <Link to="/random-beer">Random Beer</Link>
      </div>
      <div>
        <img src={newbeer} alt="image" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          est repellendus non? Numquam, laborum consequatur magnam mollitia
          officia recusandae sequi ipsum inventore consequuntur. Impedit ipsum
          ullam quos possimus voluptatibus nam?
        </p>
        <Link to="/AddBeer">Add New Beer</Link>
      </div>
    </div>
  );
}

export default Home;
