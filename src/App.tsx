import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import profileImg from "./assets/images/profileImg.png";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chats from "./components/Chats/Chats";
import Main from "./components/Main/Main";

const userData = {
  profileImg: profileImg,
  userName: "Маркова Анастасия",
  userCity: "Москва",
  userDescription: "Ищу уютную и комфортную квартиру. Я аккуратная, ответственная и спокойная. Предпочитаю тихую обстановку.",
  cntAds: "0",
  cntMoney: "255",
  cntFavourites: "12"
};

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/profile" element={<Profile userImg={userData.profileImg} userName={userData.userName} userCity={userData.userCity} userDescription={userData.userDescription} cntAds={userData.cntAds} cntMoney={userData.cntMoney} cntFavourites={userData.cntFavourites} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
