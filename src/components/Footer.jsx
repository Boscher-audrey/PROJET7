import { ReactComponent as Logo } from '../assets/logo.svg';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className='footer_wrapper'>
      <Logo alt='Kasa_Logo_Footer' />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
