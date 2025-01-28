import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
} from '@mui/material';

const BasketCard = () => {
  return (
    <Card sx={{ width: 350 }}>
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
        <Box display="flex" alignItems="center">
          <Button type="button" size="small">
            -
          </Button>
          <Typography>Adet</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </Box>
        <Button variant="contained" type="button" color="error">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasketCard;
