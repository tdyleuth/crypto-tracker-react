import React from 'react';

const Crypto = ({ image, name, symbol, price, volume }) => {
    return (
        <div className='crypto-container'>
            <div className='crypto-row'>
                <div className='crypto'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='crypto-symbol'>{symbol}</p>
                </div>
                <div className='crypto-data'>
                    <p className='crypto-price'>${price}</p>
                    <p className='crypto-volume'>${volume.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Crypto;
