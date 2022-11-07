// import React, { useState  } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
// import Login from './views/login/login';
import FavPage from "./views/favouritePage/fav";
import CryptoList from "./views/cryptoList/Coin";

import AppList from "./views/appList/appList";
import Forum from "./views/forumPage/forum";
import NewsPage from "./views/news/news";
import Profile from "./views/profilePage/profile";
// import Banner from "./views/Banner/Banner";

function App() {
  // const [token, setToken] =  useState();

  // if(!token){
  //   return <Login setToken={setToken} />
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/fav" element={<FavPage />}></Route>
          <Route path="/cryptoList" element={<CryptoList />}></Route>
          <Route path="/forum" element={<Forum />}></Route>
          <Route path="/appList" element={<AppList />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
