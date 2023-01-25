/* eslint-disable react/jsx-props-no-spreading */
import { FilterOutlined, ShoppingOutlined } from '@ant-design/icons';
import { AppliedFilters, ProductGrid, ProductList } from '@/components/product';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from '@/selectors/selector';
import {FiltersToggle} from '@/components/common'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Shop = () => {
  useDocumentTitle('Shop | SHOPPERS');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredProducts: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);
  const [sort, setSort] = React.useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <main className="content">
      <section className="product-list-wrapper">
        <div style={{'display':'flex','alignItems':'center','justifyContent':'space-between'}}>
          <div>
            <FiltersToggle>
              <button className="button-muted button-small" type="button">
                Filters &nbsp;
                <FilterOutlined />
              </button>
            </FiltersToggle>
          </div>
          <div >
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Relevance</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={sort}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="Best Selling">Best Selling</MenuItem>
                <MenuItem value="Price Low to High">Price Low to High</MenuItem>
                <MenuItem value="Price High to Low">Price High to Low</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <AppliedFilters filteredProductsCount={store.filteredProducts.length} />
        <ProductList {...store}>
          <ProductGrid products={store.filteredProducts} />
        </ProductList>
      </section>
    </main>
  );
};

export default Shop;
