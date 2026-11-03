import { useEffect } from "react";

import "./Careers.css";
import greybg from "../../images/grey-text.svg";

import bg1 from "../../images/bg-text1.svg";
import bg2 from "../../images/bg-text2.svg";
import Footerel from "../Page2/Lfooter/Lfooter";
import Examplesscr from "./Service-carousel/example";

const Careers = () => {

  const handleMailRedirect = (e, email, subject) => {
    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      e.preventDefault();
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container-fluid Careers-cont">
      <div className="ab-section1" data-aos="zoom-in" data-aos-duration="1300">
        <h1 className="head2">Careers</h1>

        <p className="head3-p">
          At Kriya & Reeths, we welcome creative thinkers, passionate marketers, and talented professionals who are eager to learn, innovate, and grow. As a digital marketing and creative agency in Coimbatore, we bring together design, strategy, technology, and imagination to deliver meaningful results for our clients. Whether your expertise lies in graphic design, logo creation, SEO, social media marketing, website development, or content creation, explore our career opportunities and become part of a team that values creativity, collaboration, and continuous growth.
        </p>
      </div>
      <div className="service-exampless">
        <div className="bg1-cont">
          <img className="bg-txt11" src={bg1} alt="website development company in coimbatore" />
        </div>
        <div className="bg2-cont">
          <img className="bg-txt2" src={bg2} alt="branding agency in coimbatore" />
        </div>
        <Examplesscr />
      </div>

      <div className="ab-section7">
        <div className="bg1-cont">
          <img className="bg-txt11" src={greybg} alt="performance marketing in coimbatore" />
        </div>

        <div className="community">
          <div
            className="community-hd1"
            data-aos="zoom-in"
            data-aos-duration="1300"
          >
            <h2 className="hd1-two">Have questions? </h2>
          </div>
          <p className="mt-5 carrer-mail-text" data-aos="zoom-in" data-aos-duration="1300">
            For general inquiries about career paths and company culture,
            contact us at:{" "}
            <a
              className="mail-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@kriyareeths.com&su=General%20Career%20Inquiry%20-%20Kriya%20%26%20Reeths"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleMailRedirect(e, "hr@kriyareeths.com", "General Career Inquiry - Kriya & Reeths")}
            >
              hr@kriyareeths.com
            </a>.
          </p>
          <p className="carrer-mail-text" data-aos="zoom-in" data-aos-duration="1300">
            If you have specific questions about a particular opening, feel free
            to reach out to our recruiting team at:{" "}
            <a
              className="mail-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@kriyareeths.com&su=Job%20Opening%20Inquiry%20-%20Kriya%20%26%20Reeths"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleMailRedirect(e, "careers@kriyareeths.com", "Job Opening Inquiry - Kriya & Reeths")}
            >
              careers@kriyareeths.com
            </a>.
          </p>
        </div>
      </div>
      <Footerel />
    </div>
  );
};

export default Careers;
