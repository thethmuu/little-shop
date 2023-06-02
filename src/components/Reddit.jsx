import { useState, useEffect } from 'react';
import './Reddit.css';

export default function Reddit() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('https://www.reddit.com/r/reactjs.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const newPosts = data.data.children.map((obj) => obj.data);
  //       setPosts(newPosts);
  //     });
  // }, []);

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
        {products.map((product) => (
          <li className='product' key={product.id}>
            <img className='product-img' src={product.image} alt='' />
            {product.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

// component lifecycle
// - mounted
// - unmounted
