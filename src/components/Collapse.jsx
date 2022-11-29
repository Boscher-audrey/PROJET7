import '../styles/collapse.css';
import Dropdown from '../assets/dropdown.svg';
import { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={'collapse_wrapper'}>
      <li className={'collapse_title_container'} onClick={() => setIsOpen(!isOpen)}>
        <h1>{title}</h1>
        <img src={Dropdown} alt='dropdown' className={isOpen ? 'collapse_dropdown' : undefined} />
      </li>
      {isOpen && (
        <div className='collapse_content_container'>
          {Array.isArray(content) ? (
            <ul className='collapse_content_list'>
              {content.map((item, index) => {
                return <li key={`collapse-content-${index}`}>{item}</li>;
              })}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
