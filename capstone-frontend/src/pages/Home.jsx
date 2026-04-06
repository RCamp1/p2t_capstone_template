import { useState, useEffect } from 'react'
import { getProducts } from '../services/ProductService'
import Products from '../components/Products';
import UploadForm from '../components/UploadForm';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [newUpload, setNewUpload] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [newUpload]);

  const handleUploadSuccess = () => {
    setNewUpload(prev => !prev);
  }

  return (
    <main className='main-content'>
      <h2>Home</h2>
      <Products products={products} />
      {/* Admin Product Upload Form */}
      <UploadForm onUploadSuccess={handleUploadSuccess} />
    </main>
  )
}

export default Home;
