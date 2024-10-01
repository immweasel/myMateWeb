import "./ProfileInfo.css"
import arrowRight from "../../assets/icons/rightArrow.png"

export default ({userImg, userName, userCity, userDescription}) => {
    return <div className="user-info">
        <div className="user-info__img">
            <img src={userImg} alt="" />
        </div>
        <a href="#" className="user-info__name">
            <h2 >
                {userName}
            </h2>
            <img src={arrowRight} alt="" />
        </a>
        <span className="user-info__city">
            {userCity}
        </span>
        <div className="user-info__about-me">
            <span className="user-info__about-me_title">
                О себе:
            </span>
            <p className="user-info__about-me_description">
                {userDescription}
            </p>
        </div>
    </div>
}