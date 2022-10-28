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

const fetchCryptoDetail = async (cryptoId) => {
    const response = await axios.post('https://localhost:5000/api/crypto/cryptoDetail', 
    {
        'cryptoId': cryptoId
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

const login = async (email, password) => {
    const response = await axios.post('https://localhost:5000/api/user/login', 
    {
        'email': email,
        'password': password
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


const signup = async (email, username, password, confirm_password) => {
    const response = await axios.post('https://localhost:5000/api/user/signup', 
    {
        'email': email,
        'username': username,
        'password': password,
        'confirm_password':confirm_password
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
export { fetchCryptoList, fetchCryptoDetail, login, signup}