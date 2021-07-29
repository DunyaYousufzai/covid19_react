import React from "react";
import { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setdata] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actual = await res.json();
      setdata(actual.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <section>
      <h1>live</h1>
      <h2> COVID 19 CORONAVIRUS TRACKER </h2>
      <ul>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>OUR</span> COUNTRY
              </p>
              <p className="card__total card__small">INDIA</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>TOTAL</span> COVERED
              </p>
              <p className="card__total card__small">{data.recovered}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>TOTAL</span> CONFIRMED
              </p>
              <p className="card__total card__small">{data.confirmed}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>TOTAL</span> DEATHS
              </p>
              <p className="card__total card__small">{data.deaths}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>TOTAL</span> ACTIVE
              </p>
              <p className="card__total card__small">{data.active}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>TOTAL</span> UPDATED
              </p>
              <p className="card__total card__small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Covid;
