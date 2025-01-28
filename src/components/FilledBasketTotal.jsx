import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clear } from '../redux/reducer/basketReducer';

const FiiledBasketTotal = () => {
  const { basket } = useSelector((state) => state.baskets);
  const dispatch = useDispatch();

  const subTotal = basket.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleEmptyCart = () => {
    dispatch(clear());
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" my={5}>
        <Typography variant="h4">
          Subtotal: {subTotal.toFixed(2) + '€'}
        </Typography>
        <div>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="error"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
        </div>
      </Box>
    </>
  );
};

export default FiiledBasketTotal;
