import { useEffect, useState } from 'react';

import useWindowDimensions from '../../hooks/useWindow';

// components
import Header from '../Header';
import News from '../News';
import RecommendList from '../Footer';
import Overlay from '../UI/Overlay';

import s from './index.module.scss';

// constants
const MOBILE_SCREEN = 886;

const RootLayout = () => {
  const [mobileNavIsActive, setMobileNavIsActive] = useState<boolean>(false);
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (windowWidth >= MOBILE_SCREEN) {
      setMobileNavIsActive(false);
    }
  }, [windowWidth]);

  return (
    <div className={s.container}>
      <Header
        isMobileNavActive={mobileNavIsActive}
        onToggleMobileNav={setMobileNavIsActive}
      />
      <News />
      <RecommendList />
      <Overlay isOverlayActive={mobileNavIsActive} />
    </div>
  );
};

export default RootLayout;
