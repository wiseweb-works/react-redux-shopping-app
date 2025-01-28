import { CircularProgress, Container, Grid2 } from '@mui/material';
import ProductCard from '../components/ProductCard';
import CategoryBar from '../components/CategoryBar';

const Home = () => {
  return (
    <Container>
      {/* loading gelecek */}
      {true ? (
        <Grid2 container justifyContent="center" spacing={4} mt={10}>
          <CategoryBar />
          {/* MAP Yapılacak */}
          <Grid2 item>
            <ProductCard text="Add" />
          </Grid2>
        </Grid2>
      ) : (
        <Grid2 container justifyContent="center" alignItems={'center'} mt={15}>
          <CircularProgress />
        </Grid2>
      )}
    </Container>
  );
};

export default Home;
