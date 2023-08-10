import React from 'react';
import PageRoutes from './routes/PageRoutes';
import {BrowserRouter } from 'react-router-dom';
import Header1 from './components/headers/Header1';
// import Header2 from './components/headers/Header2';
import Footer from './components/footer/Footer';
// import LoginRegisterPage from './LoginRegisterPage';
// import HowToUsePage from './HowToUsePage';
// const [isLoggedIn, setIsLoggedIn] = useState(false);
const App: React.FC = () => {
  
  // setIsLoggedIn(true);
  //use effect - local stored - token exists or not

  return (
    <BrowserRouter>
    <Header1/>
    {/* {isLoggedIn ? <Header2 /> : <Header1 />} */}
    <PageRoutes/>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;

