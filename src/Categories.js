import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {/* data에 category를 통해 목록 가져오기  */}
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;