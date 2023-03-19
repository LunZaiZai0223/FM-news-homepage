import s from './index.module.scss';

// svgs
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Menu } from '../../assets/images/icon-menu.svg';
import { ReactComponent as MenuClose } from '../../assets/images/icon-menu-close.svg';

interface Props {
  isMobileNavActive: boolean;
  onToggleMobileNav?: Function;
}

// constants
const LINK_LIST = [
  {
    title: 'Home',
    path: '#',
  },
  {
    title: 'New',
    path: '#',
  },
  {
    title: 'Popular',
    path: '#',
  },
  {
    title: 'Trending',
    path: '#',
  },
  {
    title: 'Categories',
    path: '#',
  },
];

const Header = (props: Props) => {
  const { isMobileNavActive = false, onToggleMobileNav } = props;

  return (
    <header>
      <nav className={s.nav}>
        <h1>
          <Logo />
        </h1>
        <ul
          className={`${s['link-list']} ${isMobileNavActive ? s.active : ''}`}
        >
          {LINK_LIST.map(({ title, path }, index) => {
            return (
              <li key={index} className={`${s['link-item']}`}>
                <a href={path} rel="noopener noreferrer">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
        <div
          className={`${s.menu}`}
          {...(onToggleMobileNav && {
            onClick: () => onToggleMobileNav(!isMobileNavActive),
          })}
        >
          {isMobileNavActive ? <MenuClose /> : <Menu />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
