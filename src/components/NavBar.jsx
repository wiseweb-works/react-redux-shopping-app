import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import logo from '../assets/cw.svg';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={() => navigate('/')}
        >
          <img src={logo} alt="logo" width="24" height="24" />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
            flexGrow: 1,
          }}
          onClick={() => navigate('/')}
        >
          Clarusway Shopping
        </Typography>
        <Button color="inherit" onClick={() => navigate('/basket')}>
          <Badge badgeContent="0" color="error">
            <ShoppingCart />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
