import Card from './Card';
import '../styles/gallery.css';
import propertiesDatas from '../data/data.json';

const Gallery = () => {
  return (
    <div className='gallery_wrapper'>
      {propertiesDatas.map((property) => {
        return <Card key={property.id} property={property} />;
      })}
    </div>
  );
};

export default Gallery;
