import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileDashboard from "../ProfileDashboard/ProfileDashboard";
import MenuProfile from "../MenuProfile/MenuProfile";
import "./Profile.css"

export default ({userImg, 
    userName, 
    userCity, 
    userDescription, 
    cntAds, 
    cntMoney, 
    cntFavourites}) => {
    return <div className="profile">
        <ProfileInfo
        userImg={userImg}
        userName={userName}
        userCity={userCity}
        userDescription={userDescription}
        />
        <ProfileDashboard
        cntAds={cntAds}
        cntMoney={cntMoney}
        cntFavourites={cntFavourites}
        />
        <MenuProfile/>
    </div>
}