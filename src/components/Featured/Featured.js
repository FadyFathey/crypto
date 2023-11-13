import React, { useEffect, useState } from "react";
import "./Featured.css";
import BTC from "../assets/btc-img.png";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";
import Error from "../error/error";
import { Link } from "react-router-dom";
const Featured = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

  const [data, setData] = useState(null);
  const [errorData, setErrorData] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => (response ? setData(response.data) : ""))
      .catch((error) =>
        error ? setErrorData(error) && errorData === true : null
      );
  }, [data]);
  return (
    <div id="Featured" className="featured">
      <div className="container">
        <div className="left">
          <h2>Explore top crypto's like Bitcoin, Dogecoin</h2>
          <p>See all available assets Cryptocurrencies and, NFT's</p>
          {/* <Link to="/allcurrencies"></Link> */}
          <button className="btn">See More Coins</button>
        </div>
        {data ? (
          data.map((e) => (
            <div className="right">
              <div key={e} className="top">
                <img src={e.image} alt="api img" />
              </div>
              <div>
                <h5>{e.name}</h5>
                <p>{e.current_price}</p>
              </div>

              {e.price_change_percentage_24h.toFixed(2) < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon" />
                  {e.price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {e.price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          ))
        ) : (
          <Error apiError={errorData} />
        )}
      </div>
    </div>
  );
};

export default Featured;
