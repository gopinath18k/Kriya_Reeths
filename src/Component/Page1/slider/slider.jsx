import React, { useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import sl1 from "../../../images/sl-1.webp";
import sl2 from "../../../images/sl-2.webp";
import sl3 from "../../../images/sl-3.webp";
import sl4 from "../../../images/sl-4.webp";
import sl5 from "../../../images/sl-5.webp";
import sl6 from "../../../images/sl-6.webp";
import sl7 from "../../../images/sl-7.webp";
import sl8 from "../../../images/sl-8.webp";
import sl9 from "../../../images/sl-9.jpeg";
import sl10 from "../../../images/sl-10.jpeg";
import sl11 from "../../../images/sl-11.jpeg";
import sl12 from "../../../images/sl-12.jpeg";
import sl13 from "../../../images/sl-13.jpeg";
import sl14 from "../../../images/sl-14.jpeg";
import sl15 from "../../../images/sl-15.jpeg";
import sl16 from "../../../images/sl-16.jpeg";
import sl17 from "../../../images/sl-17.jpeg";
import './slider.css';

function Slidere() {
  const row1 = [sl1, sl2, sl3, sl4, sl5, sl6, sl7, sl8, sl9, sl10];
  const row2 = [sl11, sl12, sl13, sl14, sl15, sl16, sl17, sl8, sl9];

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {[...row1, ...row2].map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {[...row2, ...row1].map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Slidere;

const AppContainer = styled.div`
  width: 100%;
  height: 86vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1500px) {
    height: 75vh;
  }

  @media (max-width: 768px) {
    height: 55vh;
  }

  @media (max-width: 440px) {
    height: 48vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: ${scrollX} 20s linear infinite;
  will-change: transform;
  transform: translateZ(0);
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  &:hover ${MarqueeGroup}, &:hover ${MarqueeGroup2} {
    animation-play-state: paused;
  }
`;

const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const Image = styled.img`
  height: 240px;
  width: auto;
  object-fit: contain;
  border-radius: 0.5rem;

  @media (max-width: 440px) {
    height: 170px;
  }
`;
