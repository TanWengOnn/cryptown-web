import { useEffect, useState } from "react"
import axios from "axios";
import './App.css';

import { fetchCryptoList, fetchCryptoDetail } from "./functions/APIs"

function App() {
  const [crypto, setCrypto] = useState(null)

  useEffect(() => {
    const fetchAPI = async () => {
      // let json = await fetchCryptoList()
      let json = await fetchCryptoDetail()
      setCrypto(json)
    }
    
    fetchAPI()
  }, [])

  return (
    <div>
      <h2>{crypto && (<div>{crypto.result}</div>)}</h2>
    </div>
  );
}

export default App;
