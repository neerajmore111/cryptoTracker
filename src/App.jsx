
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import CryptoTable from './Component/cryptoTable';
import { updateCrypto } from './Redux/cryptoSlice';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  const cryptoData = useSelector((state) => state.crypto);

  useEffect(() => {
    const interval = setInterval(() => {
      const updates = cryptoData.map((item) => ({
        symbol: item.symbol,
        price: +(item.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2),
        change1h: +(Math.random() * 2 - 1).toFixed(2),
        change24h: +(Math.random() * 4 - 2).toFixed(2),
        volume24h: item.volume24h + Math.floor(Math.random() * 1000000 - 500000),
      }));
      dispatch(updateCrypto(updates));
    }, 1500);

    return () => clearInterval(interval);
  }, [cryptoData, dispatch]);








  return (
    <> 
      <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4">Crypto Price Tracker</h1>
      <CryptoTable/>
    </div>
   
    </>
  )
}

export default App
