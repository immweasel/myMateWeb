import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import icons from './icons';

interface NavigationItem {
  text: string;
  iconKey: keyof typeof icons;
  link: string;
}

const navigationItems: NavigationItem[] = [
  { text: 'Главная', iconKey: 'main', link: '/' },
  { text: 'Избранное', iconKey: 'favourites', link: '/favourites' },
  { text: 'Объявления', iconKey: 'adsNavigation', link: '/ads' },
  { text: 'Чаты', iconKey: 'chats', link: '/chats' },
  { text: 'Профиль', iconKey: 'profile', link: '/profile' },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="main">
      {navigationItems.map((item) => (
        <Link to={item.link} key={item.link} className="linkNoUnderline">
          <div className="navigationItem">
            <img
              src={location.pathname === item.link ? icons[item.iconKey].default : icons[item.iconKey].gray}
              alt={item.text}
              className="navigationItemIcon"
            />
            <p className={location.pathname === item.link ? 'navigationItemText' : 'navigationItemTextGray'}>{item.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
