import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavPage from "./views/favouritePage/fav";
import CryptoList from "./views/cryptoList/coin";
import AppList from "./views/appList/appList";
import Forum from "./views/forumPage/forum";
import NewsPage from "./views/news/news";
import Profile from "./views/profilePage/profile";
import CoinDetail from "./views/coinDetail/coinDetail";
import UserPosts from "./views/profilePage/userPostsPage/userPosts";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import NotFound from "./components/notFound/notFound";
import AuthLayout from "./components/authLayout/authLayout";
import MainLandingPage from "./views/landingpage/mainlanding-page";
import { useEffect } from "react";
import { googleAnalyticsActions } from "./views/google-analytics-init";
import RedirectBack from "./components/utils/redirectBack";

function App() {
  const { user } = useAuthContext();

  useEffect(() => {
    googleAnalyticsActions.initGoogleAnalytics("UA-250253272-1");
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLandingPage />}></Route>
          <Route path="/market" element={<CryptoList />}></Route>
          <Route path="/coinDetail/:id/:page" element={<CoinDetail />}></Route>
          <Route
            path="/forum"
            element={
              user ? <Forum /> : <Navigate to="/login?redirect=/forum" />
            }
          ></Route>
          <Route path="/appList" element={<AppList />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
          <Route
            exact
            path="/profile"
            element={
              user ? <Profile /> : <Navigate to="/login?redirect=/profile" />
            }
          ></Route>

          <Route
            path="/login"
            element={!user ? <AuthLayout /> : <RedirectBack />}
          ></Route>
          <Route
            path="/watchlist"
            element={
              user ? <FavPage /> : <Navigate to="/login?redirect=/watchlist" />
            }
          ></Route>
          <Route
            exact
            path="/profile/userPosts"
            element={
              user ? (
                <UserPosts />
              ) : (
                <Navigate to="/login?redirect=/profile/userPosts" />
              )
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
