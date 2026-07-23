import { useEffect } from "react";
import blog1 from "../../../images/blog1.webp";
import tony from "../../../images/tony.webp";
import "./Blogb.css";
import bg1 from "../../../images/bg-text1.svg";
import bg2 from "../../../images/bg-text2.svg";
import FloatingLabelInput from "../../Page1/Placeholder/Place";
import Footere from "../../Page1/Footer/Footer";

const Blogbe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="container-fluid blogb-main">
      <div className="row">
        <div className="col-8 ">
          <div className="beer1-head">
            <img className="beer1" src={blog1} alt="" />
          </div>
        </div>
        <div className="col-3 beer2-head">
          <div className="tony-headb">
            <div>
              <img className="tonyb" src={tony} alt="" />
            </div>
            <div className="tony-textb ">
              <h6>Kriya & Reeths</h6>
              <p>Coimbatore</p>
            </div>
          </div>
          <img className="beer2" src={blog1} alt="" />
        </div>
      </div>

      <div className="blogb-head">
        <div className="blogb-head-sub">
          <h6>Digital Marketing</h6>
          <h4 className="mt-2">Digital Marketing : A Boon Or Bane</h4>
          <p className="mt-3">
            In today's evolving technologies digital marketing is exposed as a
            powerful tool for businesses to reach targeted customers and
            generate traffic worldwide. Like many other platforms, digital
            marketing has its techniques and strategies to bring one’s business
            online instantly and easily and it also has its own set of
            advantages and disadvantages, let us discuss in this blog.
          </p>
          <div className="mt-5"></div>
          <h5 className="sub-head-blog sub-head-blog ">Top 5 Boon to Grow Business Online Through Digital Marketing</h5>
          <p className="sub-head-par">
             It Is a Translucent Lense of Marketing.
          </p>
          <p>
            With digital marketing, we can easily analyse our competitors and
            through this, a customer is very clear about what are the amenities,
            services or products they buy, it is also marketing ethics to
            compare our products with others, hence it is very transparent for
            both sellers and buyers.
          </p>
          <p className="sub-head-par">
             Generate Leads and Traffic to the Website.
          </p>
          <p>
            Through placing an advertisement on social media sites like Google,
            Facebook, Instagram, and Linkedin. We can connect with prominent
            clients and global audiences, engage them with our offerings, and
            turn leads into sales. It is both economical and time-efficient.
          </p>

          <p className="sub-head-par">
           Easy Way of Retargeting.
          </p>
          <p>
          Based on the user's previous interactions with your website, the retargeting platform shows them personalized and relevant ads. These ads are designed to encourage the user to return to your website and complete the desired action, such as making a purchase or filling out a form.


          </p>

          <p className="sub-head-par">
           Lean Management.

          </p>
          <p>
          Lean management principles provide several advantages in digital marketing, it is focused on optimisation and a customer-centric approach by improving overall campaign effectiveness, strategies and A/B tests between our ads which has more reach among clients.


          </p>

          <p className="sub-head-par">
           24/7 Time Zone.
          </p>
          <p>
          We can work, think and grow our business by running ads through digital marketing on social media platforms hence we don't need to wait for any time.
          </p>

          <h5 className="mt-4 ">Banes of digital marketing</h5>

          <p className="sub-head-par">
           Ad Blocker.
          </p>
          <p>
          To combat the overwhelming amount of ads, many users employ ad blockers. This makes it difficult for businesses to reach a target audience, resulting in a waste of effort we put into an ad.
          </p>
          <p className="sub-head-par">
           Privacy Concerns.
          </p>
          <p>
          Collecting more data about customers for targeting has raised significant privacy concerns. Many individuals were uncomfortable with digital marketers accessing the data.

          </p>
          <p className="sub-head-par">
      
            Constant adaptation.
          </p>
          <p>
          The concept of algorithms, techniques and strategies is constantly evolving hence, it emerges a users to make changes in their business it takes time to adopt the new digital- landscape.

          </p>
          <div className="pb-5"></div>




        </div>
      </div>

      <div className="section6 mt-5">
        <div className="bg1-cont">
          <img className="bg-txt11" src={bg1} alt="" />
        </div>
        <div className="community-head">
          <div className="community-hd1">
            <h1 className="hd1-two">
              <span className="hd1-one ">Join Our</span>Community
            </h1>
          </div>
          <p>
          Give us a call. Our Door is always open!
          </p>
          <div className="float-input">
            <FloatingLabelInput />
          </div>
          <div className="com-but">Submit</div>
        </div>
        <div className="bg2-cont">
          <img className="bg-txt2" src={bg2} alt="" />
        </div>
      </div>
      <Footere/>
    </div>
  );
};

export default Blogbe;
