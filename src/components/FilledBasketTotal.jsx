import { Box, Button, Typography } from '@mui/material';

const FilledBasketTotal = () => {
  return (
    <Box display="flex" justifyContent="space-between" my={5}>
      <Typography variant="h4">Subtotal: SubTotal</Typography>
      <div>
        <Button size="large" type="button" variant="contained" color="error">
          Empty Cart
        </Button>
      </div>
    </Box>
  );
};

export default FilledBasketTotal;
