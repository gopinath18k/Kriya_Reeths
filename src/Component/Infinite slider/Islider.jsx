// import React from 'react'
// import './Lslider.css'
// import {  useEffect } from 'react';
// import sl1 from "../../images/sl-1.webp";
// import sl2 from "../../images/sl-2.webp";
// import sl3 from "../../images/sl-3.webp";
// import sl4 from "../../images/sl-4.webp";
// import sl5 from "../../images/sl-5.webp";
// import sl6 from "../../images/sl-6.webp";
// import sl7 from "../../images/sl-7.webp";
// import sl8 from "../../images/sl-8.webp";
// import sl9 from "../../images/sl-9.jpeg";

// const Scroller = ({ direction = "left", speed = "normal", children }) => {
//     useEffect(() => {
//       if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//         addAnimation();
//       }
  
//       function addAnimation() {
//         const scrollers = document.querySelectorAll(".scroller");
  
//         scrollers.forEach((scroller) => {
//           scroller.setAttribute("data-animated", true);
  
//           const scrollerInner = scroller.querySelector(".scroller__inner");
//           const scrollerContent = Array.from(scrollerInner.children);
  
//           scrollerContent.forEach((item) => {
//             const duplicatedItem = item.cloneNode(true);
//             duplicatedItem.setAttribute("aria-hidden", true);
//             scrollerInner.appendChild(duplicatedItem);
//           });
//         });
//       }
//     }, []);
  
//     return (
//       <div className={`scroller`} data-direction={direction} data-speed={speed}>
//         <div className="scroller__inner">{children}</div>
//       </div>
//     );
//   };
  
//   const App = () => {
//     return (
//       <div>
//         <h1 style={{ textAlign: "center" }}>Infinite Scroll Animation</h1>
  
//         {/* Text Scroller */}
//         <Scroller speed="fast">
//           <ul className="tag-list scroller__inner">
//             <img src={sl1} className='slider-imgee'/>
//             <img src={sl2} className='slider-imgee'/>
//             <img src={sl3} className='slider-imgee'/>
//             <img src={sl4} className='slider-imgee'/>
//             <img src={sl6} className='slider-imgee'/>
            
//           </ul>
//         </Scroller>
  
//         {/* Image Scroller */}
//         <Scroller direction="right" speed="slow">
//           <div className="scroller__inner">
//             <img src={sl1}alt="" />
//             <img src={sl2} alt="" />
//             <img src={sl3} alt="" />
//             <img src={sl4} alt="" />
//             <img src={sl5} alt="" />
//             <img src={sl6} alt="" />
//             <img src={sl7} alt="" />
//             <img src={sl8} alt="" />
//           </div>
//         </Scroller>
  
//         {/* Tutorial Link */}
//         <a className="yt" href="https://youtu.be/pKHKQwAsZLI">
//           Watch the tutorial
//         </a>
//       </div>
//     );
//   };
  
//   export default App;