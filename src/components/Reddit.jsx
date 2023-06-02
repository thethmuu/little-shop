import { useState, useEffect } from 'react';
import './Reddit.css';

export default function Reddit() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  // depenedency array

  return (
    <section>
      <h1 className='title'>Store Products</h1>

      <ul className='product-list'>
        {products.length > 0 ? (
          products.map((product) => (
            <li className='product' key={product.id}>
              <img className='product-img' src={product.image} alt='' />
              {product.title}
            </li>
          ))
        ) : (
          <p className='loading'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              style={{ width: '24px', height: '24px' }}
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
              />
            </svg>
            Loading...
          </p>
        )}
      </ul>
    </section>
  );
}

// component lifecycle
// - mounted
// - unmounted
