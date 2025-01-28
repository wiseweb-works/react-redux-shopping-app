import { Typography } from '@mui/material';
import { Link } from 'react-router';

const EmptyBasketTotal = () => {
  return (
    <Typography variant="h5" color={'error'}>
      You have no items in your shopping cart,
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: 'blue',
        }}
      >
        start adding some!
      </Link>
    </Typography>
  );
};

export default EmptyBasketTotal;
