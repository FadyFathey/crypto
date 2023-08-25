import React, { useEffect, useState } from "react";
import "./currencies.css";
import axios from "axios";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import Error from "../error/error";
const Currencies = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en";

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
    <div>
      {data ? (
        data.map((e) => (
          <div className="right">
            <div key={e.id} className="top">
              <img src={e.image} alt="" />
            </div>
            <div>
              <h5>{e.name}</h5>
              <p>{e.current_price}</p>
            </div>

            {e.price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown classNameName="icon" />
                {e.price_change_percentage_24h}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {e.price_change_percentage_24h}%
              </span>
            )}
          </div>
        ))
      ) : (
        <Error apiError={errorData} />
      )}
    </div>
  );
};

export default Currencies;
