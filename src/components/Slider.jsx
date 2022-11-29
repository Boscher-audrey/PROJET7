import '../styles/slider.css';
import { ReactComponent as ArrowBack } from '../assets/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../assets/arrow_forward.svg';
import { useEffect, useState } from 'react';

// Ajouter une modale au clic sur l'image pour l'agrandir

const Slider = ({ pictures }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const picturesLength = pictures.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === picturesLength ? 0 : activeIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, picturesLength]);

  return (
    <div className='slider_wrapper'>
      {pictures.map((picture, index) => {
        return (
          <div
            key={`picture-${index}`}
            className={index === activeIndex ? 'slider_img_container is_active' : 'slider_img_container is_inactive'}>
            <img src={picture} alt='slider_img' className='slider_img' />
          </div>
        );
      })}

      {picturesLength > 1 && (
        <>
          <div>
            <ArrowBack
              alt='arrow_back'
              className='arrow_back'
              onClick={() => setActiveIndex(activeIndex < 1 ? picturesLength : activeIndex - 1)}
            />
            <ArrowForward
              alt='arrow_forward'
              className='arrow_forward'
              onClick={() => setActiveIndex(activeIndex === picturesLength ? 0 : activeIndex + 1)}
            />
          </div>

          <div className='dots_container'>
            {pictures.map((picture, index) => {
              return (
                <span
                  key={`dot-${index}`}
                  className={index === activeIndex ? 'dot is_active' : 'dot'}
                  onClick={() => setActiveIndex(index)}></span>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
