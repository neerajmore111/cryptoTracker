import React from 'react';
import { useSelector } from 'react-redux';

const formatNumber = (num) =>
  num.toLocaleString(undefined, { maximumFractionDigits: 2 });

const CryptoTable = () => {
  const cryptoData = useSelector((state) => state.crypto);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr   className="text-sm text-gray-400 uppercase border-b border-gray-700 "  >
            <th >#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((asset, index) => (
            <tr key={asset.symbol} className="border-b border-gray-800" >
              <td  >{index + 1}</td>
              <td  ><img src={asset.logo} alt={asset.symbol} className="w-6 h-6" /></td>
              <td >{asset.name}</td>
              <td >{asset.symbol}</td>
              <td >${formatNumber(asset.price)}</td>
              <td className={asset.change1h >= 0 ? 'text-green-500' : 'text-red-500'}>{asset.change1h}%</td>
              <td className={asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}>{asset.change24h}%</td>
              <td className="text-green-500">{asset.change7d}%</td>
              <td>${formatNumber(asset.marketCap)}</td>
              <td>${formatNumber(asset.volume24h)}</td>
              <td>{asset.circulatingSupply}</td>
              <td>{asset.maxSupply}</td>
              <td><img src={asset.chart} alt="chart" className="h-10" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;





// <table className="w-full mt-4 text-left table-auto min-w-max  ">
//   <thead>
//     <tr className="text-sm text-gray-400 uppercase border-b border-gray-700">

//       <th className="p-4">#</th>
//       <th className="p-4">Logo</th>
//       <th className="p-4">Name</th>
//       <th className="p-4">Symbol</th>
//       <th className="p-4">Price</th>
//       <th className="p-4">1h %</th>
//       <th className="p-4">24h %</th>
//       <th className="p-4">7d %</th>
//       <th className="p-4">Market Cap</th>
//       <th className="p-4">24h Volume</th>
//       <th className="p-4">Circulating Supply</th>
//       <th className="p-4">Max Supply</th>
//       <th className="p-4">7D Chart</th>

//     </tr>
//   </thead>
//   <tbody>
//   {cryptoData.map((asset, index) => (
//       <tr key={asset.symbol} className="border-b border-gray-800">
//          <td>{index + 1}</td>
//               <td className="p-4"><img src={asset.logo} alt={asset.symbol} className="w-6 h-6" /></td>
//               <td className="p-4">{asset.name}</td>
//               <td className="p-4">{asset.symbol}</td>
//               <td className="p-4">${formatNumber(asset.price)}</td>
//               <td className={asset.change1h >= 0 ? 'text-green-500' : 'text-red-500'}>{asset.change1h}%</td>
//               <td className={asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}>{asset.change24h}%</td>
//               <td className="text-green-500">{asset.change7d}%</td>
//               <td className="p-4">${formatNumber(asset.marketCap)}</td>
//               <td className="p-4">${formatNumber(asset.volume24h)}</td>
//               <td className="p-4">{asset.circulatingSupply}</td>
//               <td className="p-4">{asset.maxSupply}</td>
//               <td className="p-4"><img src={asset.chart} alt="chart" className="h-10" /></td>
//       </tr>
//     ))}
//   </tbody>
// </table>