import React, { useState, useReducer, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import urheilijatContext from "../context/UrheilijatContext";

export default function AddUrheilija() {
  const [urheilija, setUrheilija] = useState({ etunimi: "", sukunimi: "" });
  const UrheilijatContext = useContext(urheilijatContext); //hooks

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      etunimi: urheilija.etunimi,
      sukunimi: urheilija.sukunimi,
    };

    /*axios.post("http://localhost:3000/urheilijat", data).then((res) => {
      const palautus = res;
      console.log(palautus);
    });*/
    UrheilijatContext.setUrheilija(data);
  };

  return (
    <>
      <div className="child-div">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div className="field1">
              <label> Nimi: </label>

              <input
                placeholder="Etunimi"
                onChange={(event) => setUrheilija(event.target.value)}
                value={urheilija.etunimi}
                name="etunimi"
              />

              <input
                placeholder="Sukunimi"
                onChange={(event) => setUrheilija(event.target.value)}
                value={urheilija.sukunimi}
                name="sukunimi"
              />
            </div>

            <button type="submit" id="submitBtn" className="submitBtn">
              {" "}
              Tallenna uusi urheilija
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
