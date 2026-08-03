import React, { Component } from "react";
import { config } from "react-spring";
import "./examplee.css";
import "../Carouselee/portfolio-sub/Ev.css";
import "../Carouselee/portfolio-sub/Photo.css";
import "../Carouselee/portfolio-sub/Web.css";
import "../Carouselee/portfolio-sub/Pay-per.css";
import HorizontalCarousel from "./VerticalCarousele"; // Correct path
import SliderLine from "./SliderSizess"; // Correct path

import "./Krgallery.css";
import "./portfolio-sub/graphic-design.css";
import web1 from "../../../images/web-1.webp";
import web2 from "../../../images/web-2.webp";
import web3 from "../../../images/web-3.webp";
import web4 from "../../../images/web-4.webp";
import web5 from "../../../images/web-5.webp";
import web6 from "../../../images/web-6.webp";
import web7 from "../../../images/web-7.webp";
import web8 from "../../../images/web-8.webp";
import silverbees from "../../../images/silverbees1.webp";
import dishareal from "../../../images/disharealty.webp";
import divine from "../../../images/divinebees.webp";
import virgin from "../../../images/virginvalley.webp";
import osho1 from '../../../images/osho_logo.webp'
import osho2 from '../../../images/osho-ban1.webp'
import osho3 from '../../../images/osho_ban2.webp'
import osho4 from '../../../images/osho4.webp'
import osho5 from '../../../images/osho5.webp'
import per4 from "../../../images/per-4.webp";
import per5 from "../../../images/swasthik.webp";
import per6 from "../../../images/uyir.webp";
import per7 from "../../../images/littletown waffles.webp";

import myvillage from '../../../images/myvillage.webp';
import myvillagelogo from '../../../images/My Village Logo.webp';

import skykapture from '../../../images/Sky Kapture.webp';
import skykapturelogo from '../../../images/SkykaptureLogo.webp';

import perL1 from "../../../images/per-l1.webp";
import perL4 from "../../../images/per-l4.webp";
import town from "../../../images/town.webp";

import uyirorg from "../../../images/uyirorg.webp";
import ev1 from "../../../images/ev-1.webp";
import ev2 from "../../../images/ev-2.webp";
import cor1 from "../../../images/cor1.webp";
import cor2 from "../../../images/cor2.webp";
import ev5 from "../../../images/ev-5.webp";
import ev6 from "../../../images/ev-6.webp";
import birthday2 from "../../../images/birthday1.webp";
import birthday1 from "../../../images/birthday2.webp";
import bg2 from "../../../images/bg-text2.svg";


import pv1 from "../../../images/watch1.webp";
import pv2 from "../../../images/watch6.webp";
import pv3 from "../../../images/watch2.webp";
import pv4 from "../../../images/watch3.webp";
import pv5 from "../../../images/ck2.webp";
import pv6 from "../../../images/ck1.webp";
import pv7 from "../../../images/pv1.webp";
import pv8 from "../../../images/RR-Mahal.webp";
import pv9 from "../../../images/pv9.webp";

import trimaia1 from "../../../images/trimaia 1.webp";
import trimaia2 from "../../../images/trimaia 2.webp";
import trimaia3 from "../../../images/trimaia 3.webp";
import nss1 from "../../../images/nss 1.webp";
import nss2 from "../../../images/nss 2.webp";
import allione from "../../../images/alli one.webp";
import allitwo from "../../../images/alli two.webp";
import allithree from "../../../images/alli three.webp";
import allifour from "../../../images/alli four.webp";
import allifive from "../../../images/alli five.webp";
import maz1 from "../../../images/maz 1.webp";
import maz2 from "../../../images/maz 2.webp";
import wise1 from "../../../images/wise 1.webp";
import wise2 from "../../../images/wise 2.webp";
import wise3 from "../../../images/wise 3.webp";
import mahaone from "../../../images/maha One.webp";
import mahatwo from "../../../images/maha two.webp";
import swasthik1 from "../../../images/Swasthik1.webp";
import swasthik2 from "../../../images/Swasthik2.webp";
import swasthik3 from "../../../images/Swasthik3.webp";
import cosmos1 from "../../../images/Cosmos 2.webp";
import cosmos2 from "../../../images/cosmos1.webp";
import cosmos3 from "../../../images/Cosmos 3.webp";
import vesat1 from "../../../images/vesat2.webp";
import vesat2 from "../../../images/vesat1.webp";
import disha1 from "../../../images/disha1.webp";
import disha2 from "../../../images/disha2.webp";
import jat1 from "../../../images/jat 1.webp";
import jat2 from "../../../images/jat 2.webp";
import ssv1 from "../../../images/ssv 1.webp";
import ssv2 from "../../../images/ssv 2.webp";
import gr1 from "../../../images/gr 1.webp";
import gr2 from "../../../images/gr 2.webp";
import Swasthik from "./resource/Swasthik";
import Reva from "./resource/Reva";
import KK from "./resource/Kk";
import Videos from "./resource/Video";
import { OurCommunity } from "../../Page1/OurCommunity/OurCommunity";
import Footerel from "../../Page2/Lfooter/Lfooter";
import { Link } from "react-router-dom";
import Vesat from "./resource/Vesat";
import Aarudhra from "./resource/Aarudhra";
import GoodHomes from "./resource/GoodHomes";
import Horizon from "./resource/Horizon";

const slides = [
  {
    key: 1,
    content: (
      <div className="key-2">
        <div className="webdesign-section">
          <div className="row first-row">
            <div className="col-6 col-sm-3 order-sm-2 order-1 poster-padding-col">
              <img className="web-img" src={trimaia1} />
            </div>
            <div className="col-12 col-sm-6 order-sm-1 order-2 posters-col">
              <img className="web-img" src={trimaia2} />
            </div>
            <div className="col-6 col-sm-3 poster-padding-col">
              <img className="web-img" src={trimaia3} />
            </div>
          </div>
          <div className="row second-row">
            <div className="col-8 poster-padding-col">
              <img className="design-img" src={nss1} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={nss2} />
            </div>
          </div>
          <div className="row first-row">
            <div className="col-4  poster-padding-col">
              <img className="design-img" src={allione} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={allitwo} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={allithree} />
            </div>
          </div>
          <div className="row second-row">
            <div className="col-8 poster-padding-col">
              <img className="design-img" src={allifour} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={allifive} />
            </div>
          </div>
          <div className="row second-row">
            <div className="col-4  poster-padding-col">
              <img className="design-img" src={osho2} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={osho1} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={osho3} />
            </div>
          </div>
          <div className="row second-row">
            <div className="col-8 poster-padding-col">
              <img className="design-img" src={osho4} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={osho5} />
            </div>
          </div>
          <div className="row first-row">
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={maz1} />
            </div>
            <div className="col-8 poster-padding-col">
              <img className="design-img" src={maz2} />
            </div>
          </div>
          <div className="row second-row">
            <div className="col-7 poster-padding-col">
              <img className="design-img" src={wise1} />
            </div>
            <div className="col-3 poster-padding-col">
              <img className="design-img" src={wise2} />
            </div>
            <div className="col-2 poster-padding-col">
              <img className="design-img" src={wise3} />
            </div>
          </div>
          <div className="row first-row">
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={mahatwo} />
            </div>
            <div className="col-8 poster-padding-col">
              <img className="design-img" src={mahaone} />
            </div>
          </div>
          <div className="row second-row">
            <div className="col-4  poster-padding-col">
              <img className="design-img" src={swasthik1} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={swasthik2} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={swasthik3} />
            </div>
          </div>
          <div className="row second-row">
            <div className="col-8 poster-padding-col">
              <img className="design-img" src={disha1} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={disha2} />
            </div>
          </div>
          <div className="row first-row">
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={jat1} />
            </div>
            <div className="col-8 poster-padding-col">
              <img className="design-img" src={jat2} />
            </div>
          </div>
          <div className="row second-row">
            <div className="col-4  poster-padding-col">
              <img className="design-img" src={cosmos1} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={cosmos2} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={cosmos3} />
            </div>
          </div>
          <div className="row first-row">
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={vesat1} />
            </div>
            <div className="col-8 poster-padding-col">
              <img className="design-img" src={vesat2} />
            </div>
          </div>
          
          <div className="row second-row">
            <div className="col-8 poster-padding-col">
              <img className="design-img" src={ssv1} />
            </div>
            <div className="col-4 poster-padding-col">
              <img className="design-img" src={ssv2} />
            </div>
          </div>
          
          <div className="row first-row">
            <div className="col-6 poster-padding-col">
              <img className="design-img" src={gr1} />
            </div>
            <div className="col-6 poster-padding-col">
              <img className="design-img" src={gr2} />
            </div>
          </div>
          
        </div>
        <OurCommunity />
        <Footerel />
      </div>
    ),
  },
  {
    key: 2,
    content: (
      <div className="key-2 " id="top">
        <div className=" service-container6">
          <div className="row web-sec Gw-head">
            <div className="col-12">
              <Link target="_blank" to="https://gowthamarchitects.com/">
                <img className="web-img" src={web5} />
              </Link>
            </div>
            <div className="col-12 osho-text">
              <h4 className="web-h">Gowtham Architects</h4>
              <p className="web-p">
                Gowtham Architects, a top Coimbatore firm with a 40-years of
                legacy. We partnered with them to build a WordPress website
                enhanced with GSAP animations, showcasing their impressive
                portfolio and providing a dynamic user experience.
              </p>
            </div>
          </div>
        </div>


        <div className=" service-container4">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://jattechno.com/">
                <img className="web-img" src={web3} />
              </Link>
            </div>
            <div className="col-12 mr-text">
              <h4 className="web-h">Jat Techno Spintex Mills</h4>
              <p className="web-p">
                JAT Techno Spintex Mill, a textile manufacturing leader,
                required a strong online presence. We built a WordPress website
                equipped with a CMS to effectively showcase their expertise in
                transforming raw materials into high-quality textile products.
              </p>
            </div>
          </div>
        </div>

        <div className=" service-container5">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://www.rrthoranammahal.com/">
                <img className="web-img" src={web4} />
              </Link>
            </div>
            <div className="col-12 osho-text">
              <h4 className="web-h">RR Thoranam Mahal</h4>
              <p className="web-p">
                RR Thoranam Mahal, a Coimbatore-based premier wedding venue,
                required a digital platform that would captivate potential
                clients. We delivered a seamless React-powered website that lets
                potential clients easily explore options for unforgettable
                celebrations
              </p>
            </div>
          </div>
        </div>

        <div className=" service-container2">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://www.oshobodybuilders.in/">
                <img className="web-img" src={web1} />
              </Link>
            </div>
            <div className="col-12 mr-text">
              <h4 className="web-h">Osho Body Builders</h4>
              <p className="web-p">
                Osho Body Builders, a leader in custom commercial vehicle
                bodies, partnered with us to develop a dynamic website using
                React. The platform highlights their expertise and features a
                robust CMS for streamlined content management.
              </p>
            </div>
          </div>
        </div>

        <div className=" service-container3">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://mrdistributionservicescbe.com/">
                <img className="web-img" src={web2} />
              </Link>
            </div>
            <div className="col-12 osho-text">
              <h4 className="web-h">MR Distribution Services</h4>
              <p className="web-p">
                MR Distribution Services, based in RS Puram, trusted us to
                create a digital platform that reflects their commitment to
                providing diverse investment opportunities. Through React
                development, we built a user-centric website that simplifies the
                investment journey.{" "}
              </p>
            </div>
          </div>
        </div>

        

      

        <div className=" service-container7">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://bankvallet.com/">
                <img className="web-img" src={web6} />
              </Link>
            </div>
            <div className="col-12 mr-text">
              <h4 className="web-h">Bankvallet</h4>
              <p className="web-p">
                Bankvallet, a fintech pioneer, simplifies loans by assessing
                eligibility and connecting customers with lenders. We created a
                WordPress website that aligns with their mission, providing a
                reliable platform to optimize loan approvals and enhance
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className=" service-container8">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://srimurugavilassweets.in/">
                <img className="web-img" src={web7} />
              </Link>
            </div>
            <div className="col-12 osho-text pb-5">
              <h4 className="web-h">Sri Muruga Vilas Sweets</h4>
              <p className="web-p">
                Sri Muruga Vilas Sweets is renowned for its delectable range of
                over 12 traditional Indian sweets and savories. We created a
                WordPress website that showcases their rich heritage and
                commitment to quality, inviting customers to indulge in their
                sweet delights.
              </p>
            </div>
          </div>
        </div>

        <div className=" service-container7">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://gearsandpiston.com/">
                <img className="web-img" src={web8} />
              </Link>
            </div>
            <div className="col-12 mr-text">
              <h4 className="web-h">Gears and Piston</h4>
              <p className="web-p">
                Gears and Piston offers top-notch bike servicing, from water and
                foam washes to comprehensive tune-ups. Our React-powered website
                provides a seamless user experience, making it easy to book
                their services.
              </p>
            </div>
          </div>
        </div>

        <div className=" service-container8">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://silverbees.co.in/">
                <img className="web-img" src={silverbees} />
              </Link>
            </div>
            <div className="col-12 osho-text pb-5">
              <h4 className="web-h">Silverbees</h4>
              <p className="web-p">
              Silverbees is renowned for its exquisite collection of handcrafted silver jewelry. We created a WordPress website that highlights their craftsmanship, heritage, and dedication to quality, inviting customers to explore and cherish their timeless designs.
              </p>
            </div>
          </div>
        </div>

        <div className=" service-container7">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://disharealty.com/">
                <img className="web-img" src={dishareal} />
              </Link>
            </div>
            <div className="col-12 mr-text">
              <h4 className="web-h">Disha Realty</h4>
              <p className="web-p">
              DishaRealty is a trusted name in real estate, offering premium flats and apartments designed for modern living. We created a WordPress website that showcases their prime properties, commitment to quality, and seamless buying experience, inviting customers to find their dream home with ease.
              </p>
            </div>
          </div>
        </div>

        <div className=" service-container8">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://thedivineharvest.in/">
                <img className="web-img" src={divine} />
              </Link>
            </div>
            <div className="col-12 osho-text pb-5">
              <h4 className="web-h">The Divine Harvest</h4>
              <p className="web-p">
              The Divine Harvest is renowned for its premium selection of pure honey and ghee. We created a WordPress website that showcases their commitment to quality and natural goodness, inviting customers to experience the richness of their handcrafted products.
              </p>
            </div>
          </div>
        </div>

        <div className=" service-container7">
          <div className="row web-sec">
            <div className="col-12">
              <Link target="_blank"  to="https://virginvalleyresort.com/">
                <img className="web-img" src={virgin} />
              </Link>
            </div>
            <div className="col-12 mr-text">
              <h4 className="web-h">Virgin Valley Resort</h4>
              <p className="web-p">
              Virgin Valley Resort in Ooty offers a serene escape amidst misty valleys and lush landscapes. Experience a perfect blend of luxury and tranquility with modern comforts and breathtaking views.We created a WordPress website that showcases their commitment to quality and natural goodness, inviting customers to experience the richness of their handcrafted products.
              </p>
            </div>
          </div>
        </div>

        <OurCommunity />
        <Footerel />
      </div>
    ),
  },
  {
    key: 3,
    content: (
      <div className="key-3" id="top">
        <div className="service-container9">
         
          <Swasthik />

          <div className="row pay-per-main  pay-vid-pd">
            <div className="col-0 col-sm-1"></div>
            <div className="col-12 col-sm-5 order-2  order-sm-1 pay-text-col">
              <img className="pay-per-logo" src={perL1} />
              <h3 className="pay-per-head">Traffic ad </h3>
              <p className="pay-per-para">
              Swasthik Architectural Studio specializes in providing innovative architectural and interior design solutions that transform spaces. Through our digital marketing efforts, we’ve elevated their brand visibility, generated quality leads, and connected them with clients seeking creative design excellence.
              </p>
              <div className="pay-sub">
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head">40,098</h3>
                  <h6 className="pay-sub-p">Reaches</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head">₹42.12</h3>
                  <h6 className="pay-sub-p">CPC</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head">124</h3>
                  <h6 className="pay-sub-p"> Leads </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 order-1  order-sm-2 pay-per-img-head2">
              <img className="pay-per-img2" src={per5} />
            </div>
          </div>

          
          <Reva />

          <div className="row pay-per-main  pay-vid-pd ">
            <div className="col-0 col-sm-1"></div>
            <div className="col-12 col-sm-5  order-2  order-sm-1 pay-text-col">
              <img className="pay-per-logo" src={perL4} />
              <h3 className="pay-per-head">Lead ad</h3>
              <p className="pay-per-para">
                Zyme Restaurant aimed to increase foot traffic and drive
                in-store sales. Our lead generation campaign focused on enticing
                potential customers with irresistible offers and highlighting
                the restaurant's unique dining experience.
              </p>
              <div className="pay-sub">
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head"> 25,000</h3>
                  <h6 className="pay-sub-p">Reaches</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head"> 60,000</h3>
                  <h6 className="pay-sub-p">Impressions</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head">165</h3>
                  <h6 className="pay-sub-p"> Results</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6  order-1  order-sm-2  pay-per-img-head2">
              <img className="pay-per-img2" src={per4} />
            </div>
          </div>

          
          <div>
            <KK />
          </div>

          <div className="row pay-per-main  pay-vid-pd ">
            <div className="col-0 col-sm-1"></div>
            <div className="col-12 col-sm-5  order-2  order-sm-1 pay-text-col">
              <img className="pay-per-logo" src={uyirorg} />
              <h3 className="pay-per-head">Lead ad</h3>
              <p className="pay-per-para">
              Our focused approach to digital marketing has helped Uyir achieve exceptional growth in website traffic, creating a strong online presence for their organic products.
              </p>
              <div className="pay-sub">
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head">  129,869</h3>
                  <h6 className="pay-sub-p">Reaches</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head">  ₹0.31</h3>
                  <h6 className="pay-sub-p">CPC</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head">47,528</h3>
                  <h6 className="pay-sub-p"> Link Clicks</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6  order-1  order-sm-2  pay-per-img-head2">
              <img className="pay-per-img2" src={per6} />
            </div>
          </div>

          <div>
            <Vesat/>
          </div>

          <div className="row pay-per-main  pay-vid-pd ">
            <div className="col-0 col-sm-1"></div>
            <div className="col-12 col-sm-5  order-2  order-sm-1 pay-text-col">
              <img className="pay-per-logo" src={town} />
              <h3 className="pay-per-head">Lead ad</h3>
              <p className="pay-per-para">
              Through strategic digital marketing, we’ve helped Little Town Waffle expand their franchise network, connecting with aspiring entrepreneurs and driving significant business growth.
              </p>
              <div className="pay-sub">
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head"> 14,889</h3>
                  <h6 className="pay-sub-p">Reaches</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head">₹48.02</h3>
                  <h6 className="pay-sub-p">CPC</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head"> 76</h3>
                  <h6 className="pay-sub-p">Leads</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6  order-1  order-sm-2  pay-per-img-head2">
              <img className="pay-per-img2" src={per7} />
            </div>
          </div>

          <div>
            <Aarudhra/>
          </div>

          <div className="row pay-per-main  pay-vid-pd ">
            <div className="col-0 col-sm-1"></div>
            <div className="col-12 col-sm-5  order-2  order-sm-1 pay-text-col">
              <img className="pay-per-logo" src={myvillagelogo} />
              <h3 className="pay-per-head">Lead ad</h3>
              <p className="pay-per-para">
              My Village Eco Rural Resort offers a unique countryside escape with family friendly activities, traditional village experiences, and nature inspired stays. Through our targeted Meta lead generation campaign, we reached families and travelers looking for memorable getaways, generating high-quality inquiries at an efficient cost and boosting bookings for the resort.
              </p>
              <div className="pay-sub">
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head"> 48,077</h3>
                  <h6 className="pay-sub-p">Reaches</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head">₹43.22</h3>
                  <h6 className="pay-sub-p">Cost Per Lead</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head"> 39</h3>
                  <h6 className="pay-sub-p">Lead Form Submissions</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6  order-1  order-sm-2  pay-per-img-head2">
              <img className="pay-per-img2" src={myvillage} />
            </div>
          </div>



          <div>
            <GoodHomes/>
          </div>


          <div className="row pay-per-main  pay-vid-pd ">
            <div className="col-0 col-sm-1"></div>
            <div className="col-12 col-sm-5  order-2  order-sm-1 pay-text-col">
              <img className="pay-per-logo" src={skykapturelogo} />
              <h3 className="pay-per-head">Lead ad</h3>
              <p className="pay-per-para">
              Sky Kapture specializes in premium architectural, residential, and commercial interior design solutions, creating functional spaces with modern aesthetics. Through our targeted Meta lead generation campaign, we connected with homeowners and businesses planning interior transformations, generating high-intent inquiries while strengthening the brand's digital presence.
              </p>
              <div className="pay-sub">
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head"> 76,888+</h3>
                  <h6 className="pay-sub-p">Reaches</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head">₹225.54</h3>
                  <h6 className="pay-sub-p">Cost Per Lead</h6>
                </div>
                <div className="pay-sub-box">
                  <h3 className="pay-sub-head"> 90</h3>
                  <h6 className="pay-sub-p">Lead Form Submissions</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6  order-1  order-sm-2  pay-per-img-head2">
              <img className="pay-per-img2" src={skykapture} />
            </div>
          </div>

          <div>
            <Horizon/>
          </div>
          
        </div>
        <OurCommunity />
        <Footerel />
      </div>
    ),
  },
  {
    key: 4,
    content: (
      <div className="key-4" id="top">


<div className="row ev-contain ">
          <div className="col-12 ev-text-head">
            <h3>Corporate events</h3>
            <p>
              {" "}
              Our corporate events are designed to impress and engage. Let us
              handle the details while you focus on your business.
            </p>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-8">
                <img className="ev1" src={cor2} />
              </div>
              <div className="col-4">
                <img className="ev2" src={cor1} />
              </div>
            </div>
          </div>
        </div>

        <div className="row ev-contain ev-top">
          <div className="col-12 ev-text-head">
            <h3>Weddings</h3>
            <p>
              Your wedding day is a once-in-a-lifetime event. Let us create a
              celebration that reflects your love story.
            </p>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-8">
                <img className="ev1" src={ev1} />
              </div>
              <div className="col-4">
                <img className="ev2" src={ev2} />
              </div>
            </div>
          </div>
        </div>

        

        <div className="row ev-contain ev-top">
          <div className="col-12 ev-text-head">
            <h3>Reception</h3>
            <p>
              Our expert planning ensures your reception is unforgettable. We
              craft beautiful settings and seamless transitions that impress
              your guests.
            </p>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-8">
                <img className="ev1" src={ev5} />
              </div>
              <div className="col-4">
                <img className="ev2" src={ev6} />
              </div>
            </div>
          </div>
        </div>

        <div className="row ev-contain ev-top ev-bottom">
          <div className="bg2-cont">
            <img className="bg-txt2" src={bg2} alt="" />
          </div>
          <div className="col-12 ev-text-head">
            <h3>Birthday Parties</h3>
            <p>
              Make every birthday a memorable one. Our creative team transforms
              ordinary celebrations into extraordinary experiences.
            </p>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-8">
                <img className="ev1" src={birthday1} />
              </div>
              <div className="col-4">
                <img className="ev2" src={birthday2} />
              </div>
            </div>
          </div>
        </div>
        <OurCommunity />
        <Footerel />
      </div>
    ),
  },
  {
    key: 5,
    content: (
      <div className="key-5" id="top">
        <div className="row">
          <div className="col-12">
            <div className="container-fluid gal-containers" id="main-content">
              <div>
                <div className="pv-head pv-gal-row">
                  <h4>Photography</h4>
                  <p>
                    Our portfolio captures life's essence through stunning
                    portraits, breathtaking landscapes, unforgettable moments,
                    and captivating product imagery.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="webdesign-section">
                    <div className="row first-row">
                      <div className="col-6 col-sm-3  poster-padding-col">
                        <img className="web-img" src={pv1} />
                      </div>
                      <div className="col-12 col-sm-6 order-3 order-sm-2 posters-col">
                        <img className="web-img" src={pv2} />
                      </div>
                      <div className="col-6 col-sm-3 order-2 order-sm-3 poster-padding-col">
                        <img className="web-img" src={pv3} />
                      </div>
                    </div>
                    
                    <div className="row second-row">
                      <div className="col-12 col-sm-5 poster-padding-col">
                        <img className="design-img" src={pv4} />
                      </div>
                      <div className="col-6 col-sm-3 poster-padding-col">
                        <img className="design-img2 mt-2 mt-sm-0" src={pv5} />
                      </div>
                      <div className="col-6 col-sm-4 poster-padding-col">
                        <img className="design-img mt-2 mt-sm-0" src={pv6} />
                      </div>
                    </div>
                    <div className="row first-row">
                      <div className="col-6 col-sm-3  poster-padding-col">
                        <img className="design-img" src={pv7} />
                      </div>
                      <div className="col-6 col-sm-3 poster-padding-col">
                        <img className="design-img" src={pv8} />
                      </div>
                      <div className="col-12 col-sm-6 poster-padding-col">
                        <img className="design-img mt-2 mt-sm-0" src={pv9} />
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div className="pv-head pv-gal-row pb-1 pt-3">
                  <h4>Videography</h4>
                  <p>
                    {" "}
                    Our videos tell captivating stories, from dynamic event
                    coverage to cinematic narratives. Let us transport you with
                    every frame.
                  </p>
                </div>
              </div>
              <Videos />
            </div>
          </div>
        </div>
        <OurCommunity />
        <Footerel />
      </div>
    ),
  },
];

const GradientStages = [0, 25, 50, 75, 100];

export default class HorizontalSlider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    sliderValue: GradientStages[0],
  };

  handleSliderChange = (newValue) => {
    const index = GradientStages.indexOf(newValue);
    this.setState({ sliderValue: newValue, goToSlide: index });
  };

  handleSlideChange = (newIndex) => {
    const newValue = GradientStages[newIndex];
    this.setState({ sliderValue: newValue, goToSlide: newIndex });
  };

  render() {
    return (
      <div>
        <div className="slide-creative-container" id="top">
          <div className="carousel-main-container">
            <HorizontalCarousel
              slides={slides}
              offsetRadius={this.state.offsetRadius}
              showNavigation={this.state.showNavigation}
              animationConfig={this.state.config}
              goToSlide={this.state.goToSlide}
              onSlideChange={this.handleSlideChange}
            />
            
          </div>
          <div className="Horizontal-scrollbar-container">
            <SliderLine
              currentValue={this.state.sliderValue}
              onSliderChange={this.handleSliderChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
