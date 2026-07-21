import React, { useEffect } from "react";
import blog1 from "../../../images/blog2.png";
import beer2 from "../../../images/beer-2.png";
import tony from "../../../images/tony.png";

import "../Bloge/Blogb.css";
import bg1 from "../../../images/bg-text1.svg";
import bg2 from "../../../images/bg-text2.svg";
import FloatingLabelInput from "../../Page1/Placeholder/Place";
import Footere from "../../Page1/Footer/Footer";

const Blogbe2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
          <h4 className="mt-2">What Is the Significance of Digital Marketing in Today’s Evolution</h4>
          <p className="mt-3">
          After the COVID-19 pandemic, every sector of businesses entered online platforms like medicines, dress, groceries etc. As per statistics, nearly 60% of small-medium businesses use digital marketing and plan to invest more in hence, the Global digital marketing and advertising market is forecast to hit $1.5 trillion by 2030. (source: colorlib.com)

          </p>
          <div className="mt-5"></div>
         
          <p className="sub-head-par">
          1. Brand Awareness: 
          </p>
          <p>
          If you are launching a new company, you must first establish brand awareness and provide clarity regarding the goods and services we offer. Only then will people be aware of the brand. 
The probability of a sale decreased in the absence of brand awareness. These internet marketing techniques will make it simple for us to get clients to your business. 
Because "Brand Awareness" is a distinct goal in Facebook and AdWords, we can easily advertise and sponsor our brand on Google Search Engine Result Page (SERP).

          </p>
          <p className="sub-head-par">
          2. Highly Automotive:

          </p>
          <p>
          Shortly, 87% of companies plan to invest in marketing automation, while only 2% say they don’t plan to use it.
Remember, More than 70% of successful companies use automation because it benefits them in many ways when it comes to growth.
Chatbots and AI-driven Customer Support: Chatbots can automate responses to common customer queries, providing instant support and assistance.
Email marketing platforms allow for the automation of email campaigns, including sending personalized messages during their birthdays by segmenting email lists.
45% of marketers send emails weekly.
Without human intervention, videos and posts are automatically posted on Facebook and YouTube on schedule.

          </p>

          <p className="sub-head-par">
          3. Cost-Effective:

          </p>
          <p>
          Digital marketing costs less than traditional marketing like printing and advertisements on TV.
While doing manual bidding we can gradually understand our competitor's bidding value and it is also a time-consuming process. But in automatic bidding, Google always keeps higher than our competitor
Automatic bidding with CPC(Cost Per Click), in this we can fix the maximum amount we can spend, up to the cost we will be in the auction otherwise we automatically down to the second rank in SERP.






          </p>

          <p className="sub-head-par">
          
4. Increase ROI(Return On Investment):


          </p>
          <p>
          Marketers who plan their marketing are 331% more successful than those who don’t. So ROI also increase.
Return on investment calculation in digital marketing;




          </p>

          <p className="sub-head-par">
          📱Go with Trends:
          </p>
          <p>
          Everyone has a personal account in social media is becoming common now this is replacing a newspaper.
By this, we can easily learn what are the trends happening in the industry.
Hashtags #, phrases associated with the industry will help to display the ad at the top of Funnel.
Collaboration with influencers and affiliate marketing is also one of the trends to acquire the full benefits of social media.

          </p>
          <p className="sub-head-par">
          5. Data Analyses:
          </p>
          <p>
          We can analyse and optimise our websites easily using Google Analytics, Google Search Console, and Google Tag Manager accounts mostly all these tools are interlinked.



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

export default Blogbe2;
