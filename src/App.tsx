import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import BalanceCard from "./components/BalanceCard/BalanceCard";
import profileImg from "./assets/images/profileImg.png";

function App() {
  return (
    <>
      {/* <div className="App">
        <Auth />
      </div> */}
      <Profile
       userImg={profileImg}
       userName="Маркова Анастасия"
       userCity="Москва"
       userDescription="Ищу уютную и комфортную квартиру. Я аккуратная, ответственная и спокойная. Предпочитаю тихую обстановку."
       cntAds="0"
        cntMoney="255"
        cntFavourites="12"
      />
      {/* <BalanceCard
      money={255}/> */}
    </>


  );
}

export default App;
