// components
import Header from '../Header';
import News from '../News';
import RecommendList from '../Footer';

import s from './index.module.scss';
import { useState } from 'react';

const RootLayout = () => {
  const [mobileNavIsActive, setMobileNavIsActive] = useState<boolean>(false);

  return (
    <div className={s.container}>
      <Header
        isMobileNavActive={mobileNavIsActive}
        onToggleMobileNav={setMobileNavIsActive}
      />
      <News />
      <RecommendList />
    </div>
  );
};

export default RootLayout;
