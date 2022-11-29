import { useNavigate, useParams } from 'react-router-dom';
import propertiesDatas from '../data/data.json';
import Slider from '../components/Slider';
import Collapse from '../components/Collapse';
import '../styles/property.css';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import { useEffect } from 'react';

const Property = () => {
  const { id: propertyId } = useParams();
  const navigate = useNavigate();

  const property = propertiesDatas.find((data) => data.id === propertyId);

  useEffect(() => {
    if (!property) {
      navigate('*');
    }
  }, [propertyId]);

  if (property) {
    const { title, pictures, description, host, rating, location, equipments, tags } = property;
    return (
      <div className='page_wrapper'>
        <Slider pictures={pictures} />
        <div className='property_infos_container'>
          <div className='property_infos'>
            <h1 className='property_infos_title'>{title}</h1>
            <p className='property_infos_text'>{location}</p>

            <div className='property_tags'>
              {tags.map((tag, index) => {
                return <Tag key={`${tag}-${index}`} title={tag} />;
              })}
            </div>
          </div>

          <div className='property_infos'>
            <div className='property_host_container'>
              <p className='property_infos_text'>{host.name}</p>
              <img src={host.picture} alt='property_host_picture' className='property_host_picture' />
            </div>

            <Rating rating={rating} />
          </div>
        </div>
        <div className='property_collapse_wrapper'>
          <div className='property_collapse_container left'>
            <Collapse title='Description' content={description} />
          </div>
          <div className='property_collapse_container right'>
            <Collapse title='Equipements' content={equipments} />
          </div>
        </div>
      </div>
    );
  }
};

export default Property;
