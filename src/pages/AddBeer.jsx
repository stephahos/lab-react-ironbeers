import React from "react";
import { Link, Navbar } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstbrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    try {
      // <== HANDLER FUNCTION
      // Prevent page reload on submit
      e.preventDefault();
      // Create the body for the POST request
      const body = {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      };

      axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
        .then((response) => {
          // Reset the state
          console.log(response);
          setName("");
          setTagline("");
          setDescription("");
          setFirstbrewed("");
          setBrewersTips("");
          setAttenuationLevel(1);
          setContributedBy("");

          navigate("/beers");
        });
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <div>
      <header className="header">
        <Link to="/">Home</Link>
      </header>

      <div className="AddBeerPage">
        <h3>Add New Beer</h3>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <label>FirstBrewed</label>
          <input
            type="text"
            name="firstBrewed"
            onChange={(e) => setFirstbrewed(e.target.value)}
            value={firstBrewed}
          />

          <label>BrewersTips</label>
          <input
            type="text"
            name="brewersTips"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewersTips}
          />

          <label>AttenuationLevel</label>
          <input
            type="text"
            name="attenuationLevel"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuationLevel}
          />

          <label>contributedBy</label>
          <input
            type="text"
            name="contributedBy"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributedBy}
          />

          <button type="submit">Create Beer</button>
        </form>
      </div>
    </div>
  );
}

export default AddBeer;
