import { Container, Grid2 } from '@mui/material';
import EmptyBasketTotal from '../components/EmptyBasketTotal';
import FilledBasketTotal from '../components/FilledBasketTotal';
import BasketCard from '../components/BasketCard';

const Basket = () => {
  return (
    <Container>
      {/* count gelecek */}
      {true ? (
        <>
          <Grid2 container justifyContent="center" spacing={4} mt={10}>
            {/* MAP YAPILACAK */}
            <Grid2 item>
              <BasketCard />
            </Grid2>
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
