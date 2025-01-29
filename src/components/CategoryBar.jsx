import { useEffect } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material/';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelected,
  getCategories,
  fetchWithCategorie,
  fetchProducts,
} from '../redux/reducer/productReducer';

const CategoryBar = () => {
  const dispatch = useDispatch();
  const { selected, categories } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleClick = (e) => {
    dispatch(setSelected(e.target.value));
    if (e.target.value) {
      dispatch(fetchWithCategorie(e.target.value));
    } else {
      dispatch(fetchProducts());
    }
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
