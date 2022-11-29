import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div className='page_wrapper'>
      <Banner
        page={'home'}
        title={
          <>
            <span>Chez vous, </span>
            <span>partout et ailleurs</span>
          </>
        }
      />
      <Gallery />
    </div>
  );
};

export default Home;
