import "./MenuProfile.css";
import MenuProfileItem from "./items/MenuProfileItem";
import logoBalance from "../../assets/icons/balance.svg";
import logoUser from "../../assets/icons/user.svg";
import logoPromotion from "../../assets/icons/promotion.svg";
import logoAds from "../../assets/icons/ads.svg";
import logoPush from "../../assets/icons/push.svg";
import logoColor from "../../assets/icons/color.svg";
import logoHelp from "../../assets/icons/help.svg";
import logoExit from "../../assets/icons/exit.svg";

const menuItems = [
  { title: 'Баланс', icon: logoBalance, link: 'balance' },
  { title: 'Личные данные', icon: logoUser, link: 'personalData' },
  { title: 'Мои объявления', icon: logoAds, link: 'myAds' },
  { title: 'Продвижение', icon: logoPromotion, link: 'promotion' },
  { title: 'Push-уведомления', icon: logoPush, link: 'push' },
  { title: 'Цвет темы', icon: logoColor, link: 'themeColor' },
  { title: 'Помощь', icon: logoHelp, link: 'support' },
  { title: 'Выйти из аккаунта', icon: logoExit, link: 'logOut' }
];

export default function MenuProfile() {
  return (
    <div className="menu_profile_wrapper">
      {menuItems.map((item) => (
        <MenuProfileItem key={item.link} title={item.title} icon={item.icon} link={item.link} />
      ))}
    </div>
  );
}
