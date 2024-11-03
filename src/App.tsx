import Profile from "./components/Profile/Profile";
import profileImg from "./assets/images/profileImg.png";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chats from "./components/Chats/Chats";
import Main from "./components/Main/Main";
import Favourites from "./components/Favourites/Favourites";
import Ads from "./components/Ads/Ads";
import MyAds from "./components/Profile/MyAds/MyAds";
import Ad from "./components/Main/Ad/Ad";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CreateAds from "./components/Profile/CreateAds/CreateAds";
import PersonalData from "./components/Profile/PersonalData/PersonalData";
import Supporting from "./components/Profile/Help/Help";
import Balance from "./components/Profile/Balance/Balance.jsx";
import ReturnSup from "./components/Profile/ReturnSup.jsx";
/*
import Promotion from "./components/Ads/Ads";
import Support from "./components/Ads/Ads";
import ThemeColor from "./components/Ads/Ads";
import LogOut from "./components/Ads/Ads";
*/

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
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/profile" element={<Profile userImg={userData.profileImg} userName={userData.userName} userCity={userData.userCity} userDescription={userData.userDescription} cntAds={userData.cntAds} cntMoney={userData.cntMoney} cntFavourites={userData.cntFavourites} />} />
          <Route path="/profile/myAds" element={<MyAds />} />


          <Route path="/profile/balance" element={<Balance money="" />} />
          <Route path="/profile/support" element={<Supporting />} />
          <Route path="/profile/returnsup" element={<ReturnSup Obr="" formLink={"https://forms.yandex.ru/u/6723b7ad73cee78f6876e5eb/"}/>} />
          {/*
          <Route path="/profile/promotion" element={<Promotion />} />
          <Route path="/profile/support" element={<Support />} />
          пока не ясно куда ведет
          <Route path="/profile/themeColor" element={<ThemeColor />} />
          <Route path="/profile/logOut" element={<LogOut />} />
          */}

          <Route path="/ad/:id" element={<Ad />} />
          <Route path="/profile/myAds/createAds" element={<CreateAds />} />
          <Route path="/profile/personalData" element={<PersonalData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
