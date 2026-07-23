import { useEffect } from "react";

import "./Careers.css";
import greybg from "../../images/grey-text.svg";

import bg1 from "../../images/bg-text1.svg";
import bg2 from "../../images/bg-text2.svg";
import Footerel from "../Page2/Lfooter/Lfooter";
import Examplesscr from "./Service-carousel/example";

const Careers = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container-fluid Careers-cont">
      <div className="ab-section1" data-aos="zoom-in" data-aos-duration="1300">
        <h1 className="head2">Careers</h1>

        <p className="head3-p">
          We're always on the lookout for talented individuals who are
          passionate about digital marketing. Our team is a dynamic blend of
          creativity, strategy, and innovation. If you're eager to make a mark
          in the digital world, explore our career opportunities.
        </p>
      </div>
      <div className="service-exampless">
        <div className="bg1-cont">
          <img className="bg-txt11" src={bg1} alt="" />
        </div>
        <div className="bg2-cont">
          <img className="bg-txt2" src={bg2} alt="" />
        </div>
        <Examplesscr />
      </div>

      <div className="ab-section7">
        <div className="bg1-cont">
          <img className="bg-txt11" src={greybg} alt="" />
        </div>

        <div className="community">
          <div
            className="community-hd1"
            data-aos="zoom-in"
            data-aos-duration="1300"
          >
            <h1 className="hd1-two">Have questions? </h1>
          </div>
          <p className="mt-5 carrer-mail-text" data-aos="zoom-in" data-aos-duration="1300">
            For general inquiries about career paths and company culture,
            contact us at: <a className="mail-link" href="mailto:hr@kriyareeths.com">hr@kriyareeths.com.
            </a>
          </p>
          <p className="carrer-mail-text"  data-aos="zoom-in" data-aos-duration="1300">
            If you have specific questions about a particular opening, feel free
            to reach  out to our recruiting team at: <a className="mail-link" href="mailto:careers@kriyareeths.com"> careers@kriyareeths.com.</a>
          </p>
        </div>
      </div>
      <Footerel />
    </div>
  );
};

export default Careers;
