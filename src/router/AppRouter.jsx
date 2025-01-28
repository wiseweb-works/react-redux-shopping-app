import { BrowserRouter, Route, Routes } from 'react-router';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Basket from '../pages/Basket';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
