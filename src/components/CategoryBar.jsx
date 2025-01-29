import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';

const CategoryBar = ({ getProducts, selected, setSelected }) => {
  const [categories, setCategories] = useState([]);

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
  const handleClick = (e) => {
    const value = e.target.value;
    setSelected(value);
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
