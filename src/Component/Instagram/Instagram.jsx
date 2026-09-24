import insta from '../../images/insta.webp';
import './instagram.css';

const Instagram = () => {
  const instagramUrl = 'https://www.instagram.com/teamkriya/';

  return (
    <div>
      <div className='insta-cont'>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
          <div className='insta-icon-wrapper'>
            <img className='insta-icon' src={insta} alt="Instagram" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Instagram;
