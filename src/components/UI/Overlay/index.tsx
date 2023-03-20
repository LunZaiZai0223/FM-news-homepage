import s from './index.module.scss';

import { createPortal } from 'react-dom';

interface Props {
  isOverlayActive: boolean;
}

const overlayRootEle: HTMLDivElement = document.getElementById(
  'overlay-root'
) as HTMLDivElement;

const Overlay = (props: Props) => {
  const { isOverlayActive } = props;

  return createPortal(
    <div className={`${s.overlay} ${isOverlayActive ? s.active : ''}`}></div>,
    overlayRootEle
  );
};

export default Overlay;
