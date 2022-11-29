import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/index.css';
import './utils/styles/colors.css';
import './utils/styles/font.css';
import './utils/styles/responsive.css';
import './styles/globalStyle.css';

import About from './pages/About';
import Property from './pages/Property';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='app_container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<Home />} />
              <Route path='*' element={<Error />} />
              <Route path='property/:id' element={<Property />} />
              <Route path='about' element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
