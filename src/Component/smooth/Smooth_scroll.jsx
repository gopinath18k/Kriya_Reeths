// import React, { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import p1 from'../../images/achiv1.png'
// import './Smoothscroll.css'; // Include the stylesheet


// const SmoothScroll = () => {
//     const scrollRef = useRef(null);
  
//     useEffect(() => {
//       const locomotiveScroll = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//         // Additional options
//         multiplier: 1,
//         class: 'is-inview', // You can customize the class used for elements in view
//       });
  
//       return () => {
//         if (locomotiveScroll) locomotiveScroll.destroy();
//       };
//     }, []);
  
//     return (
//       <div ref={scrollRef} data-scroll-container>
//         <section data-scroll-section>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>
//           <div>hello</div>

//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
//           <img src={p1} className='scroll-img' alt="" />
          
          
          

//         </section>
//         <section data-scroll-section>
//           {/* More content here */}
//         </section>
//         {/* Add as many sections as you need */}
//       </div>
//     );
//   };
  
//   export default SmoothScroll;
  