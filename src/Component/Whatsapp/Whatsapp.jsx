import wp from '../../images/whatsapp.webp';
import './whatsapp.css';

const Whatsapp = () => {
  const phoneNumber = '7305979061'; // Your phone number in international format
  const message = 'Hello, I need more information!'; // Your pre-filled message

  // Encode the message
  const encodedMessage = encodeURIComponent(message);

  // Construct the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div>
      <div className='wp-cont'>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img className='wp-icon' src={wp} alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
}

export default Whatsapp;
