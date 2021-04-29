import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Crypto from './components/Crypto';
require('dotenv').config();

function App() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_COINGECKO_API)
            .then((res) => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCrypto = coins.filter((crypto) =>
        crypto.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className='crypto-app'>
            <div className='crypto-search'>
                <h1 className='crypto-title'>Crypto Tracker</h1>
                <form>
                    <input
                        type='text'
                        placeholder='Search for crypto...'
                        className='crypto-input'
                        onChange={handleChange}
                    />
                </form>
            </div>
            {filteredCrypto.map((crypto) => {
                return (
                    <Crypto
                        key={crypto.id}
                        name={crypto.name}
                        image={crypto.image}
                        symbol={crypto.symbol}
                        volume={crypto.market_cap}
                        price={crypto.current_price}
                    />
                );
            })}
        </div>
    );
}

export default App;
