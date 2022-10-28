import axios from "axios";

    // const fetchCrypto = async () => {
    //     const response = await axios('https://localhost:5000/cryptown/api/crypto')
    //     const json = await response.data

    //     if (response.status === 200) {
    //         setCrypto(json)
    //     }
    // }

const fetchCryptoList = async () => {
    const response = await axios('https://localhost:5000/api/crypto/cryptoList')
    const json = await response.data

    if (response.status === 200) {
        return json 
    }
}

const fetchCryptoDetail = async () => {
    const response = await axios.post('https://localhost:5000/api/crypto/cryptoDetail', 
    {
        'cryptoId': 'POST from React'
    }, 
    {
        headers: {
            'Content-Type': 'application/json',
          }
    })



    const json = await response.data

    if (response.status === 200) {
        return json 
    }
}

export { fetchCryptoList, fetchCryptoDetail }