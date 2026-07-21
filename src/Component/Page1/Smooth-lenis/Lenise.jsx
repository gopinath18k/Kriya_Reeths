// import { useEffect } from 'react';
// import Lenis from '@studio-freight/lenis';

// const SmoothScrolle = ({ children }) => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.5, // Slightly longer duration for smoother feel
//       easing: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2, // Smooth cubic easing
//       direction: 'vertical',
//       gestureDirection: 'vertical',
//       smooth: true,
//       smoothTouch: true, // Ensures smooth scrolling on touch devices
//       wheelMultiplier: 1.2, // Adjusts sensitivity to the mouse wheel
//       touchMultiplier: 2, // Adjusts sensitivity to touch input
//       infinite: false, // Disables infinite scroll (if not needed)
//     });

//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return <div>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//     <h1>NO Matter What</h1>
//   </div>;
// };

// export default SmoothScrolle;
