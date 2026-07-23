import "./Slider.css";
import { useRef } from "react";
import sl1 from '../../../images/sl-1.png'
import sl2 from '../../../images/sl-2.png'
import sl3 from '../../../images/sl-3.png'

import sl4 from '../../../images/sl-4.png'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function Ppc() {
  return (
    <section>
      <ParallaxText baseVelocity={-5}>
        <img className="sl-img" src={sl1} alt="" />
        <img className="sl-img"  src={sl2} alt="" />
        <img className="sl-img"  src={sl3} alt="" />
        <img className="sl-img"  src={sl4} alt="" />
      </ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity </ParallaxText>
    </section>
  );
}

