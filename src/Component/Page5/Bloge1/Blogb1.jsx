import { useEffect } from "react";
import blog1 from "../../../images/blog3.webp";
import tony from "../../../images/tony.webp";
import "../Bloge/Blogb.css";
import bg1 from "../../../images/bg-text1.svg";
import bg2 from "../../../images/bg-text2.svg";
import FloatingLabelInput from "../../Page1/Placeholder/Place";
import Footere from "../../Page1/Footer/Footer";


const Blogbe1 = () => {
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
          <h4 className="mt-2">Benefits of Social Media Marketing(Smm)</h4>
          <p className="mt-3">
          Social media is the space for connection; it's the greatest way to exchange ideas and spread knowledge these days. It also helps us launch and market our services and goods to consumers, driving traffic to websites and building brand awareness. Therefore, social media marketing is an important component of a comprehensive marketing plan. Other than when you keep an eye on the brand you can build followers into loyal customers.
          </p>
          <div className="mt-5"></div>
         
          <p className="sub-head-par">
          Gain Knowledge and talents:
          </p>
          <p>
          Similar-minded entrepreneurs utilise social media to advertise their companies, making it simple for us to reference their content and add our ideas. 
Quora and LinkedIn, for instance, are excellent resources where we can obtain advice and answers from numerous industry experts.
86% of job seekers use social media as a job search platform today requiring a skilled person for a job is expensive and time-consuming 
Professionals use LinkedIn, a platform with a wealth of free tools for their needs.
It offers Native meeting possibilities for competent professionals who have the same goals to conduct interviews.
According to LinkedIn, 49% of people are aware that social networks offer career chances.
          </p>
          <p className="sub-head-par">
           Direct customer services:.
          </p>
          <p>
          In addition to the various communication channels like email, phone and calls social media platforms provide for even greater connection as we can get public comments and feedback.
We can identify both favourable and negative consumer feedback in comments. 
When we apologise to unhappy consumers, we have the opportunity to make the issues right, which increases their trust and loyalty.
Half of users expect brands to respond within three hours.t.
          </p>

          <p className="sub-head-par">
          Knowing a valuable Audience
          </p>
          <p>
          According to Statista, an internet user spends 145   minutes per day.
It is easy to know the customer's opinion of your brand by the comments they post.
The post performs well which helps you to analyse the idea of what customers think about the brand, this is called social listing.
Finding notable clients primarily involves maintaining consistency in the posts' timing, content videos, and updates.



          </p>

          <p className="sub-head-par">
          Easy to Retarget:

          </p>
          <p>
          When users enter a search query related to their needs search engine will analyse the keywords in the query.
Google uses a quality score for each keyword which determines the ad relevancy.
Facebook pixel and ad words will retarget the audience by who visits the website.
Ad Extensions will give additional pieces of information like phone numbers, demographics are used to retarget the audience.



          </p>

          <p className="sub-head-par">
          Go with Trends:
          </p>
          <p>
          Everyone has a personal account in social media is becoming common now this is replacing a newspaper.
By this, we can easily learn what are the trends happening in the industry.
Hashtags #, phrases associated with the industry will help to display the ad at the top of Funnel.
Collaboration with influencers and affiliate marketing is also one of the trends to acquire the full benefits of social media.

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

export default Blogbe1;
