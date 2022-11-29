import { Link } from 'react-router-dom';
import '../styles/error.css';
// Gestion des erreurs si pas de data

const Error = () => {
  return (
    <div className='page_wrapper'>
      <div className='error_container'>
        <h1 className='error_title'>404</h1>
        {/* <img className='error_image' src={Error404} alt='freelance' /> */}
        <h2 className='error_title'>Oups ! La page que vous demandez n'existe pas.</h2>
        <Link to='/'>Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default Error;
