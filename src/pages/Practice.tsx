import axios from 'axios';
import React, { useState, useEffect } from 'react';

type api = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: boolean;
    rate: number;
  };
  title: string;
};

const Practice = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.log('error', error);
      });
    // axios
    //   .get('https://fakestoreapi.com/products')
    //   .then((response) => setData(response.data));
  }, []);

  return (
    <div>
      {data.map((item: api) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              textOverflow: 'hidden',
            }}
          >
            {loading ? <h1>...Loading Questions</h1> : null}
            <div style={{ width: '30%' }}>{item.title}</div>
            <div>{item.category}</div>
            <div>{item.price}</div>
            <div>{item.rating.count}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Practice;
