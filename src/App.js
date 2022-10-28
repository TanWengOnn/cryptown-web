import { useEffect, useState } from "react"
import axios from "axios";
import './App.css';

import { fetchCryptoList, fetchCryptoDetail, login, signup } from "./functions/APIs"

function App() {
  const [crypto, setCrypto] = useState(null)

  useEffect(() => {
    const fetchAPI = async () => {
      // let json = await fetchCryptoList()
      // let json = await fetchCryptoDetail('POST from docker')
      // let json = await login('test@gmail.com', 'password@12345')
      let json = await signup('test@gmail.com', 'test', 'password@12345', 'password@12345')
      setCrypto(json)
    }
    
    fetchAPI()
  }, [])

  return (
    <div>
      <h2>{crypto && (<div>{JSON.stringify(crypto)}</div>)}</h2>
    </div>
  );
}

export default App;
