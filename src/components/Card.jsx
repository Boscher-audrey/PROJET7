import { Link } from 'react-router-dom';
import '../styles/card.css';

const Card = ({ property }) => {
  const { title, cover, id } = property;
  return (
    <Link to={`/property/${id}`} className='card_wrapper'>
      <img src={cover} alt='Card_Image' className='card_image' />
      <div className='card_title_wrapper'>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default Card;
