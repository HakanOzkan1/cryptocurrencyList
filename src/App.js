import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("market_cap_desc")

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${order}&per_page=100&page=1`)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error))

  }, [order]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>{
    return coin.name.toLowerCase().includes(search.toLowerCase()) ||  coin.symbol.toLowerCase().includes(search.toLowerCase())
  }
    
  );

  return (
    <><div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">All Cryptocurrencies</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search a currency" />
        </form>
      </div>
    </div>
    <div className="coin-container2">
        <div className="coin-row2">
          <p className="coin-name2">Name</p>
          <div className='coin-data2'>
            <p className="coin-price2" onClick={()=>{
            order === "price_desc" ? setOrder("price_asc") : setOrder("price_desc");
          }}>Price</p>
          <p className="coin-change2" onClick={()=>{
            order === "hour_24_desc" ? setOrder("hour_24_asc") : setOrder("hour_24_desc");
          }}>24h</p>
          <p className="coin-volume2" onClick={()=>{
            order === "volume_desc" ? setOrder("volume_asc") : setOrder("volume_desc");
          }}>Volume</p>
          <p className="coin-market2" onClick={()=>{
            order === "market_cap_desc" ? setOrder("market_cap_asc") : setOrder("market_cap_desc");
          }}>Market Cap</p>
        </div>
          </div>
          
      </div>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}

export default App;
