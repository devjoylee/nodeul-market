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
    {
      id: 2,
      name: '닭가슴살',
      category: '육류',
      price: 1500,
      amount: 5,
      image:
        'https://img-cf.kurly.com/shop/data/goodsview/20210106/gv00000063313_1.jpg',
      description: '수지스 냉장 닭가슴살 5개 있어여',
    },
    {
      id: 3,
      name: '두유',
      category: '유제품',
      price: 1000,
      amount: 20,
      image:
        'https://shop2.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop2.daumcdn.net%2Fshophow%2Fp%2FB5099232161.jpg%3Fut%3D20201027002331',
      description: '두유 같이 먹어용',
    },
    {
      id: 4,
      name: '사과',
      category: '과일',
      price: 1000,
      amount: 10,
      image:
        'https://img1.tmon.kr/cdn2/deals/2019/02/18/1833260358/1833260358_front_tXcjNIShGQ.jpg',
      description: '아침 사과 함께 해요~',
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
