import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/reducer/basketReducer';

const BasketCard = ({ product }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.baskets);

  const handleUpdateCartQty = (productId, quantity) => {
    if (quantity === 0) {
      dispatch(remove(productId));
    } else {
      const updatedBasket = basket.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      dispatch(add(updatedBasket));
    }
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height={300}
        image={product.image}
        title={product.title}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent sx={{ p: 1, mb: 1 }}>
        <Box display="flex" justifyContent="space-between" height={70}>
          <Typography variant="body1" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h6" pl={1} color="initial">
            {product.price + '€'}
          </Typography>
        </Box>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box display="flex" alignItems="center">
          <Button
            type="button"
            size="small"
            onClick={() =>
              handleUpdateCartQty(product.id, product.quantity - 1)
            }
          >
            -
          </Button>
          <Typography>{product?.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() =>
              handleUpdateCartQty(product.id, product.quantity + 1)
            }
          >
            +
          </Button>
        </Box>
        <Button
          variant="contained"
          type="button"
          color="error"
          onClick={() => handleRemove(product.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasketCard;
