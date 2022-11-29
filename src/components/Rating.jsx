import '../styles/rating.css';
import { ReactComponent as Star } from '../assets/star.svg';

const Rating = ({ rating }) => {
  const starsColor = ['gray', 'gray', 'gray', 'gray', 'gray'];
  for (let starsNumber = 0; starsNumber < rating; starsNumber++) {
    starsColor[starsNumber] = 'primary';
  }

  return (
    <div className='rating_wrapper'>
      <span className='rating_stars'>
        {starsColor.map((starColor, index) => {
          return <Star key={`star-${index}`} alt='rating_star' className={'rating_star ' + starColor} />;
        })}
      </span>
    </div>
  );
};

export default Rating;
