import React from 'react';

// props(items) 통해 data 가져오기 
const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        // 목록 menuItem 변수에 담기
        const { id, title, img, desc, price } = menuItem;
        return (
          // 각 목록 표시
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

