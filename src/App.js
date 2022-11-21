import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';
import Shops from './pages/Shop/Shops';
import HashLoader from "react-spinners/HashLoader";
import Cart from './pages/Cart/Cart';
import Search from './pages/Header/Nav1/Search';
import CartDetail from './pages/Cart/CartDetail';
import CheckOut from './pages/CheckOut/CheckOut';
import OrderPlace from './pages/OrderPlace/OrderPlace';
import LoveCart from './pages/LoveCart/LoveCart';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import { ToastContainer } from 'react-toastify';
import PrivateAuth from './pages/Shared/PrivateAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageProducts from './pages/Dashboard/ManageProducts';
import ManageReview from './pages/Dashboard/ManageReview';
import ManageUsers from './pages/Dashboard/ManageUsers';
import History from './pages/Dashboard/History';
import AddProducts from './pages/Dashboard/AddProducts';

function App() {
  const [loading, setLoading] = useState(false)

  // loading spinner
  useEffect(() => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 3000)

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
              <Route path='/search' element={<Search></Search>}></Route>
              <Route path='/cart/:cartId' element={<Cart></Cart>}></Route>
              <Route path='/cart' element={<Cart></Cart>}></Route>
              <Route path='/cartDetail' element={<CartDetail></CartDetail>}></Route>
              <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
              <Route path='/orderplace' element={<OrderPlace></OrderPlace>}></Route>
              <Route path='/lovecart' element={<LoveCart></LoveCart>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
              <Route path='dashboard' element={
              <PrivateAuth>
                <Dashboard></Dashboard>
              </PrivateAuth>}
            >
              <Route index element={<ManageUsers></ManageUsers>}></Route>
              <Route path='manageReviews' element={<ManageReview></ManageReview>}></Route>
              <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
              <Route path='addProducts' element={<AddProducts></AddProducts>}></Route>
              <Route path='history' element={<History></History>}></Route>
            </Route>
            </Routes>
            <ToastContainer />
            <Footer></Footer>
          </>
      }
    </div>
  );
}

export default App;
