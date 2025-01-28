import { Container, Grid2 } from '@mui/material';
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
          <Grid2 container justifyContent="center" spacing={4} mt={10}>
            {basket.map((product) => (
              <Grid2 item key={product.id}>
                <BasketCard product={product} />
              </Grid2>
            ))}
          </Grid2>
          <FilledBasketTotal />
        </>
      ) : (
        <>
          <Grid2
            container
            justifyContent="center"
            alignItems={'center'}
            mt={15}
          >
            <EmptyBasketTotal />
          </Grid2>
        </>
      )}
    </Container>
  );
};

export default Basket;
