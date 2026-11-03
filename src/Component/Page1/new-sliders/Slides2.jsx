import './Slides2.css';
import sl10 from "../../../images/sl-10.webp";
import sl11 from "../../../images/sl-11.webp";
import sl12 from "../../../images/sl-12.webp";
import sl13 from "../../../images/sl-13.webp";
import sl14 from "../../../images/sl-14.webp";
import sl15 from "../../../images/sl-15.webp";
import sl16 from "../../../images/sl-16.webp";
import sl17 from "../../../images/sl-17.webp"
import sl18 from "../../../images/sl-18.webp";
import sl19 from "../../../images/sl-19.webp";
import sl20 from "../../../images/sl-20.webp";
import sl21 from "../../../images/sl-21.webp";

const altKeywords = [
  "digital marketing company in coimbatore",
  "seo services in coimbatore",
  "social media marketing coimbatore",
  "website development company in coimbatore",
  "branding agency in coimbatore",
  "performance marketing in coimbatore",
  "graphic design company in coimbatore",
  "video production company in coimbatore"
];

const Slidesnew2 = () => {
  const images = [
    sl18, sl19, sl20, sl21, sl10, sl11, sl12, sl13, sl14, sl15, sl16, sl17,
    sl10, sl11, sl12, sl13, sl14, sl15, sl16, sl17,
    sl10, sl11, sl12, sl13, sl14, sl15, sl16, sl17,
    sl10, sl11, sl12, sl13, sl14, sl15, sl16, sl17
  ];

  return (
    <div>
      <div className="center">
        <div className="slider">
          <div className="items2">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                className="item"
                alt={altKeywords[index % altKeywords.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidesnew2;
