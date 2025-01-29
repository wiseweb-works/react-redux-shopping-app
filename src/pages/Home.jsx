import { CircularProgress, Container, Grid2 } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLoading,
  setProducts,
  setSelected,
} from '../redux/reducer/productReducer';
import ProductCard from '../components/ProductCard';
import CategoryBar from '../components/CategoryBar';

const Home = () => {
  const dispatch = useDispatch();
  const { products, selected, loading } = useSelector((state) => state.product);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    dispatch(setLoading(true));
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((e) => console.log(e))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <Container>
      {!loading ? (
        <Grid2 container justifyContent="center" spacing={4} mt={10}>
          <CategoryBar
            getProducts={getProducts}
            selected={selected}
            setSelected={(value) => dispatch(setSelected(value))}
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
