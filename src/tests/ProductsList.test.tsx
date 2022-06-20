import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ProductsList from '@components/ProductsList';
import Dummy from '@images/contact.png';

const productList = [
  {
    id: 0,
    category: 'electronics',
    description: 'ipad testing description',
    image: Dummy,
    price: 30,
    title: 'ipad',
    amount: 3,
    qty: 0,
    rating: {
      rate: 2,
      count: 0,
    },
  },
  {
    id: 0,
    category: 'jewelery',
    description: 'one ring to rule them all...',
    image: Dummy,
    price: 999,
    title: 'power ring',
    amount: 1,
    qty: 0,
    rating: {
      rate: 4.5,
      count: 0,
    },
  },
];

describe('<ProductsList />', () => {
  test('should display products list', () => {
    render(<ProductsList items={productList} />, { wrapper: MemoryRouter });

    const ipadTitle = screen.getByText(/ipad/i);
    const ipadPrice = screen.getByText('$30');
    const ringTitle = screen.getByText(/power ring/i);
    const ringPrice = screen.getByText('$999');
    const buyButton = screen.getAllByText(/buy now/i);    

    expect(ipadTitle).toHaveTextContent(/ipad/i);
    expect(ipadPrice).toHaveTextContent('$30');
    expect(ringTitle).toHaveTextContent(/power ring/i);
    expect(ringPrice).toHaveTextContent('$999');
    expect(buyButton[0]).toBeInTheDocument();
  });
});
