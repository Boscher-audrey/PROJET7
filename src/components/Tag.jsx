import '../styles/tag.css';

const Tag = ({ title }) => {
  return (
    <div className='tag_wrapper'>
      <li className='tag_title_container'>
        <ul>{title}</ul>
      </li>
    </div>
  );
};

export default Tag;
