import { CircularProgress, Container, Grid2 } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryBar from '../components/CategoryBar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = (url = '') => {
    const baseUrl = 'https://fakestoreapi.com/products';
    setLoading(true);
    axios
      .get(baseUrl + url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };
  return (
    <Container>
      {!loading ? (
        <Grid2 container justifyContent="center" spacing={4} mt={10}>
          <CategoryBar
            getProducts={getProducts}
            selected={selected}
            setSelected={setSelected}
          />
          {products.map((product) => (
            <Grid2 item key={product.id}>
              <ProductCard product={product} text="Add" />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Grid2 container justifyContent="center" alignItems={'center'} mt={15}>
          <CircularProgress />
        </Grid2>
      )}
    </Container>
  );
};

export default Home;
