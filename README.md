# cryptoTracker
cryptoTacker 

#  Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit application that simulates real-time tracking of cryptocurrency prices — inspired by platforms like CoinMarketCap.

##  Features

- Simulated real-time updates (price, % changes, volume) using `setInterval`
-  Interactive, responsive table UI displaying:
  - Logo, Name, Symbol
  - Price
  - % changes (1h, 24h, 7d) with color-coding
  - Market Cap, 24h Volume
  - Circulating & Max Supply
  - Static 7D price chart (image)
-  Centralized state management via Redux Toolkit
-  Tailwind CSS styling

##  Demo

SEE live on vercle = 

## 🛠️ Tech Stack

- **Frontend:** React+vite, Tailwind CSS
- **State Management:** Redux Toolkit
- **Other:** Simulated WebSocket using `setInterval`
 
##  Project Structure
  /public
  /charts
    btc.svg (and others)
  /logos
    btc.png (and others)

src/
├── App.js
├── index.js
├── index.css
├── components/
│   └── CryptoTable.js
├── redux/
│   ├── store.js
│   └── cryptoSlice.js
└── utils/
    └── sampleData.js


## ⚙️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone 
   cd crypto-price-tracker

   install depences npm i 

   run the cmd npm run dev 
