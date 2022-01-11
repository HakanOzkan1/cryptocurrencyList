import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <p className='coin-symbol'>{symbol}</p>
          <h1 className='coin-name'>{name}</h1>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange?.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange?.toFixed(2)}%</p>
          )}
          <p className='coin-volume'>
             ${marketcap?.toLocaleString()}
          </p>
          <p className='coin-marketcap'>${volume?.toLocaleString()+"M"}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;