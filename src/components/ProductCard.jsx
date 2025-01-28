import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/reducer/basketReducer';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.baskets);

  const handleAdd = () => {
    const isAdded = basket.some((item) => item.id === product.id);
    if (isAdded) {
      alert('This product already added!');
    } else {
      dispatch(add([...basket, { ...product, quantity: 1 }]));
    }
  };

  return (
    <Card sx={{ width: 350 }}>
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
        <Typography variant="body2" color="textSecondary">
          {product.category}
        </Typography>
        <IconButton
          aria-label="Add to Cart"
          color="primary"
          onClick={handleAdd}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
