import '../styles/banner.css';

const Banner = ({ page, title }) => {
  return (
    <div className={'banner_wrapper ' + page}>
      <div className='banner_container'>{title && <h1 className='banner_title'>{title}</h1>}</div>
    </div>
  );
};

export default Banner;
