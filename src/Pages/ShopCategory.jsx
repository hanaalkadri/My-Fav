import React from 'react';

const ShopCategory = ({ category }) => {
  return (
    <div>
      <h1>Category: {category}</h1>
      <p>Products under the {category} category will be displayed here.</p>
    </div>
  );
};

export default ShopCategory;