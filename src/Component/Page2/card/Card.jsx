import './Card.css';
import achiv1 from '../../../images/Rudra Priya DME.webp'
import achiv2 from '../../../images/achiv2.webp'
import achiv3 from '../../../images/Sheik DME.webp'

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

const CardContainer = () => {
  const cards = [
    {
      imageSrc: achiv1,
      title: 'Digital Skills: Advanced Digital Marketing',
      description: 'Our team is strengthened by a member with expertise in advanced digital marketing strategies, including SEO, social media, and data-driven campaigns.'
    },
    {
      imageSrc: achiv2,
      title: 'Google Digital Marketing & E-commerce',
      description: 'Our team includes a digital marketing professional skilled in turning data into actionable insights. '
    },
    {
      imageSrc: achiv3,
      title: 'Digital Skills: Digital Marketing',
      description: 'Our team is strengthened by a member with expertise in digital marketing strategies, online advertising, and audience engagement.'
    },
  ];

  return (
    <div className="card-container" data-aos="zoom-in-up"
    data-aos-duration="1300">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        
        />
      ))}
    </div>
  );
};

export default CardContainer;
