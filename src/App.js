import { useState, useEffect } from "react";

function App() {
  const limit = 10;
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers?limit=${limit}`)
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const [bucks, setBucks] = useState(1);
  const [price, setPrice] = useState(1);
  const [symbol, setSymbol] = useState("");
  const bucksChange = (event) => setBucks(event.target.value);
  const selectCoin = (event) => {
    const selectedCoin = coins.find((coin) => coin.id === event.target.value);
    setSymbol(selectedCoin.symbol);
    setPrice(selectedCoin.quotes.USD.price);
    setBucks(1);
  };
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={selectCoin}>
          <option value="0">Choose coin</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <span>Input USD: </span>
      <input
        type="number"
        value={bucks}
        onChange={bucksChange}
        placeholder="how much you have..."
      ></input>
      <div>
        <span>You can buy </span>
        <span>{bucks / price}</span>
        <span> {symbol}</span>
      </div>
    </div>
  );
}

export default App;
