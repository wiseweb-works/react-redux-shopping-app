import { CircularProgress, Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/reducer/productReducer';
import ProductCard from '../components/ProductCard';
import CategoryBar from '../components/CategoryBar';

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container>
      {!loading ? (
        <Grid container justifyContent="center" spacing={4} mt={10}>
          <CategoryBar />
          {products.map((product) => (
            <Grid item key={product.id}>
              <ProductCard product={product} text="Add" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container justifyContent="center" alignItems={'center'} mt={15}>
          <CircularProgress />
        </Grid>
      )}
    </Container>
  );
};

export default Home;
