import { Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import BasketCard from '../components/BasketCard';
import EmptyBasketTotal from '../components/EmptyBasketTotal';
import FilledBasketTotal from '../components/FilledBasketTotal';

const Basket = () => {
  const { basket, count } = useSelector((state) => state.baskets);
  return (
    <Container>
      {count ? (
        <>
          <Grid container justifyContent="center" spacing={4} mt={10}>
            {basket.map((product) => (
              <Grid item key={product.id}>
                <BasketCard product={product} />
              </Grid>
            ))}
          </Grid>
          <FilledBasketTotal />
        </>
      ) : (
        <>
          <Grid
            container
            justifyContent="center"
            alignItems={'center'}
            mt={15}
          >
            <EmptyBasketTotal />
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Basket;
