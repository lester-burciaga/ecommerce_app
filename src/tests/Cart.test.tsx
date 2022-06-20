import { render, screen } from './test-utils';

import Cart from '@pages/Cart';

describe('<Cart />', () => {
  test('display empty cart message when no products added', () => {
    render(<Cart />);

    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toHaveTextContent(/your cart is empty/i);
  });
});
