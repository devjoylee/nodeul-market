import React from 'react';
import './styles/style.css';
import { Header, ItemList } from './components';

export interface iItemDetail {
  id: number;
  name: string;
  category: string;
  price: number;
  amount: number;
  image: string;
  description: string;
}

function App() {
  const items = [
    {
      id: 0,
      name: '당근',
      category: '야채',
      price: 3000,
      amount: 1,
      image:
        'https://static.megamart.com/product/image/0293/02931838/02931838_1_960.jpg',
      description: '오늘 갓 수확한 당근입니다!',
    },
    {
      id: 1,
      name: '감자',
      category: '야채',
      price: 3000,
      amount: 1,
      image:
        'https://pds.joins.com/news/component/htmlphoto_mmdata/201607/04/htm_2016070413930722912.jpg',
      description: '오늘 갓 수확한 감자입니다!',
    },
  ];

  return (
    <div>
      <Header />
      <ItemList items={items} />
    </div>
  );
}

export default App;
