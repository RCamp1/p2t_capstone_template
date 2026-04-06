import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <section className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App