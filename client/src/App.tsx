import React, { useState } from 'react';
import PageRoutes from './routes/PageRoutes';
import {BrowserRouter } from 'react-router-dom';
import Header1 from './components/headers/Header1';
import Header2 from './components/headers/Header2';
import Footer from './components/footer/Footer';
// import LoginRegisterPage from './LoginRegisterPage';
// import HowToUsePage from './HowToUsePage';

const App: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // setIsLoggedIn(true);

  return (
    <BrowserRouter>
    {isLoggedIn ? <Header2 /> : <Header1 />}
    <PageRoutes/>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;

