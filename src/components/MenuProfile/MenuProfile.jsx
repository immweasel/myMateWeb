import "./MenuProfile.css"
import MenuProfileItem from "../MenuProfileItem/MenuProfileItem"
import logoBalance from "../../assets/icons/balance.svg"
import logoUser from "../../assets/icons/user.svg"
import logoPromotion from "../../assets/icons/promotion.svg"
import logoAds from "../../assets/icons/ads.svg"
import logoPush from "../../assets/icons/push.svg"
import logoColor from "../../assets/icons/color.svg"
import logoHelp from "../../assets/icons/help.svg"
import logoExit from "../../assets/icons/exit.svg"

export default () => {
    return <div className="menu-profile-wrapper">
        <MenuProfileItem
            title="Баланс"
            logo={logoBalance}
        />
        <MenuProfileItem
            title="Личные данные"
            logo={logoUser}
        />
        <MenuProfileItem
            title="Мои объявления"
            logo={logoAds}
        />
        <MenuProfileItem
            title="Продвижение"
            logo={logoPromotion}
        />
        <MenuProfileItem
            title="Push-уведомления"
            logo={logoPush}
            condition="Включены"
        />
        <MenuProfileItem
            title="Цвет темы"
            logo={logoColor}
            condition="Стандарт"
        />
        <MenuProfileItem
            title="Помощь"
            logo={logoHelp}
        />
        <MenuProfileItem
            title="Выйти из аккаунта"
            logo={logoExit}
        />
    </div>
}