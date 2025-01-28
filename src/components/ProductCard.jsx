import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = () => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component="img"
        height={300}
        image=""
        title=""
        sx={{ objectFit: 'contain' }}
      />
      <CardContent sx={{ p: 1, mb: 1 }}>
        <Box display="flex" justifyContent="space-between" height={70}>
          <Typography variant="body1" gutterBottom>
            Title
          </Typography>
          <Typography variant="h6" pl={1} color="initial">
            Price
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
          Category
        </Typography>
        <IconButton aria-label="Add to Cart" color="primary">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
