import { Spring } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";
import "./Slidee.css"

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  delta,
  down,
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  let translateX = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateX = 0;
    } else if (index === totalPresentables - 1) {
      translateX = -100;
    }
  }

  return (
    <div>
      <Spring
      to={{
        transform: `translateY(0%) translateX(${translateX}%) scale(${distanceFactor})`,
        left: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor
      }}
      config={animationConfig}
    >
      {style => (
        <div className="single-Slide-Container"
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2)
          }}
        >
          <div className="Sliding-Card">
            {content}
          </div>
        </div>
      )}
    </Spring>
    
    </div>

  );
}

export default withGesture()(Slide);
