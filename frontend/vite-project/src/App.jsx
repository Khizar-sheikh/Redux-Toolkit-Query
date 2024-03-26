import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetails/ProductDetail';
import Cart from './components/Cart/Cart';
import { useGetProductsQuery } from './features/products/productApi';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList products={products} />} />
        <Route path="/products/:productId" element={<ProductDetail products={products} />} />
        <Route path="/cart" element={<Cart />} products={products} />
      </Routes>
    </Router>
  );
};

export default App;
