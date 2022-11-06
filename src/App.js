import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';
import Shops from './pages/Shop/Shops';
import HashLoader from "react-spinners/HashLoader";
function App() {
  const [loading, setLoading] = useState(false)

  // loading spinner
  useEffect(() => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 5000)

  }, [])

  return (
    <div>
      {
        loading ?
          <div className="loading-spinner">
            <HashLoader
              color={'#36d7b7'}
              loading={loading}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <>
            <Header></Header>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/shops' element={<Shops></Shops>}></Route>
            </Routes>
            <Footer></Footer>
          </>
      }
    </div>
  );
}

export default App;
