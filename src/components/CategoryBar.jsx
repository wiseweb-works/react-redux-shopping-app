import { useEffect, useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material/';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLoading,
  setProducts,
  setSelected,
} from '../redux/reducer/productReducer';

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.product);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    const baseUrl = 'https://fakestoreapi.com/products/categories';
    axios
      .get(baseUrl)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((e) => console.log(e));
  };

  const getProducts = (url = '') => {
    const baseUrl = 'https://fakestoreapi.com/products';
    dispatch(setLoading(true));
    axios
      .get(baseUrl + url)
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((e) => console.log(e))
      .finally(() => dispatch(setLoading(false)));
  };

  const handleClick = (e) => {
    dispatch(setSelected(e.target.value));
    getProducts(e.target.value && `/category/${e.target.value}`);
  };
  return (
    <FormControl sx={{ width: '100vw', m: 1 }}>
      <RadioGroup
        row
        sx={{ justifyContent: 'center' }}
        name="controlled-radio-buttons-group"
        value={selected}
        onChange={handleClick}
      >
        <FormControlLabel value="" control={<Radio />} label="All" />
        {categories?.map((categorie, i) => (
          <FormControlLabel
            key={i}
            sx={{ textTransform: 'capitalize' }}
            value={categorie}
            control={<Radio />}
            label={categorie}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CategoryBar;
