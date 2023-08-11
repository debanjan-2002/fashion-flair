import{ useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './routes/PageRoutes';
import Header1 from './components/headers/Header1';
import Header2 from './components/headers/Header2';
import Footer from './components/footer/Footer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if authentication token is present in local storage
    const authToken = localStorage.getItem('auth'); // Make sure the key matches the one you used

    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <BrowserRouter>
      {isLoggedIn ? <Header2 /> : <Header1 />}
      <PageRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
