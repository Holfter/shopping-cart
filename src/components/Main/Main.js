import React, { useState } from 'react';
import './Main.css';
import Product from '../Product/Product';
function Main(props) {
  const { products, onAdd, showAndHide } = props;
  const [allProducts, setAll] = useState(products);
  const [sort, setSort] = useState('');

  const setSortAndProducts = (sort, products) => {
    setAll(products);
    setSort(sort);
  };

  //Function that handles the 'sort by'
  const sortArray = (type) => {
    const types = {
      alphabetical: 'alphabetical',
      lowToHighPrice: 'lowToHighPrice',
      highToLowPrice: 'highToLowPrice',
      lowToHighScore: 'lowToHighScore',
      highToLowScore: 'highToLowScore',
    };
    const sortProperty = types[type];
    if (sortProperty === 'alphabetical') {
      const alphaSort = [...allProducts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setSortAndProducts(sortProperty, alphaSort);
    } else if (sortProperty === 'lowToHighPrice') {
      const sorted = [...allProducts].sort((a, b) => a['price'] - b['price']);
      setSortAndProducts(sortProperty, sorted);
    } else if (sortProperty === 'highToLowPrice') {
      const sorted = [...allProducts].sort((a, b) => b['price'] - a['price']);
      setSortAndProducts(sortProperty, sorted);
    } else if (sortProperty === 'lowToHighScore') {
      const sorted = [...allProducts].sort((a, b) => a['score'] - b['score']);
      setSortAndProducts(sortProperty, sorted);
    } else if (sortProperty === 'highToLowScore') {
      const sorted = [...allProducts].sort((a, b) => b['score'] - a['score']);
      setSortAndProducts(sortProperty, sorted);
    } else {
      const sorted = [...allProducts].sort(
        (a, b) => a[sortProperty] - b[sortProperty]
      );
      setSortAndProducts(sortProperty, sorted);
    }
  };
  return (
    <main className={showAndHide === true ? 'main' : 'main marg'}>
      <div className="main-top">
        <div className="shopTitle">Shop</div>
        <div className="sortBy">
          <div>Sort by:</div>
          <div
            className={
              sort === 'lowToHighPrice' || sort === 'highToLowPrice'
                ? 'select btn active'
                : 'select btn'
            }
          >
            <div>
              <span>
                {sort === 'lowToHighPrice'
                  ? 'Price: Low To High'
                  : sort === 'highToLowPrice'
                  ? 'Price: High to Low'
                  : 'Price'}
              </span>
            </div>
            <div className="activeBtn">
              <span onClick={() => sortArray('lowToHighPrice')}>
                Low To High
              </span>
              <span onClick={() => sortArray('highToLowPrice')}>
                High To Low
              </span>
            </div>
          </div>

          <div
            className={
              sort === 'lowToHighScore' || sort === 'highToLowScore'
                ? 'select btn active'
                : 'select btn'
            }
          >
            <div>
              <span>
                {sort === 'lowToHighScore'
                  ? 'Score: Low To High'
                  : sort === 'highToLowScore'
                  ? 'Score: High to Low'
                  : 'Score'}
              </span>
            </div>
            <div className="activeBtn">
              <span onClick={() => sortArray('lowToHighScore')}>
                Low To High
              </span>
              <span onClick={() => sortArray('highToLowScore')}>
                High To Low
              </span>
            </div>
          </div>
          <div
            className={sort === 'alphabetical' ? 'btn active' : 'btn'}
            onClick={() => sortArray('alphabetical')}
          >
            Alphabetical Order
          </div>
        </div>
      </div>
      <div className="row">
        {allProducts.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}

export default Main;
