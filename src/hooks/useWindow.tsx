import { useEffect, useState } from 'react';

interface WindowDimensions {
  windowWidth: number;
  windowHeight: number;
}

const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  return { windowHeight, windowWidth };
};

const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    windowWidth: windowDimensions.windowWidth,
    windowHeight: windowDimensions.windowHeight,
  };
};

export default useWindowDimensions;
