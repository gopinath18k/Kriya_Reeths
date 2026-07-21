import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const useLocoScroll = (start = true) => {
  useEffect(() => {
    if (!start) return;

    const scrollContainer = document.querySelector('[data-scroll-container]');

    if (!scrollContainer) {
      console.error('Error: [data-scroll-container] not found in the DOM.');
      return;
    }

    try {
      const locoScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        multiplier: 1.5,
      });

      const updateScroll = () => locoScroll.update();
      window.addEventListener('resize', updateScroll);

      return () => {
        locoScroll.destroy();
        window.removeEventListener('resize', updateScroll);
      };
    } catch (error) {
      console.error('LocomotiveScroll initialization error:', error);
    }
  }, [start]);
};

export default useLocoScroll;
