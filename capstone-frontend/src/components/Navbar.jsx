import React from 'react'
import { Link } from 'react-router';
// import { useCartStore } from '../store/CartStore';
import userSlice from '../store';
import '../styles/navbar.css';

const Navbar = () => {
  // const { items } = useCartStore();
  // const totalPrice = items?.reduce((total, item) => total + item.price, 0);
  const {isAdmin,setIsAdmin, isLoggedIn, setIsLoggedIn } = userSlice();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  }

  return (
    <nav className='navbar'>
      <Link to={'/'}>Logo</Link>
      <div className='nav-links-container'>
        <Link to={'/admin/product/create'}>Create Product</Link>
      </div>
      <div className='auth-container'>
        {!isLoggedIn ? <Link to={'/auth'}>Login</Link> : <button onClick={() => {handleLogout()}}>Logout</button>}
      </div>
    </nav>
  )
}

export default Navbar;
