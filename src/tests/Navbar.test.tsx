import { render, screen } from './test-utils';

import Navbar from '@components/Navbar';

describe('<Navbar />', () => {
  test('display Navbar with Login and Signup buttons', () => {
    render(<Navbar />);

    const mainTitle = screen.getByText(/e-market/i);
    const homeLink = screen.getByText(/home/i);
    const productsLink = screen.getByText(/products/i);
    const aboutLink = screen.getByText(/about/i);
    const contactLink = screen.getByText(/contact/i);
    const loginButton = screen.getByText(/login/i);
    const signupButton = screen.getByText(/register/i);

    expect(mainTitle).toHaveTextContent(/e-market/i);
    expect(homeLink).toHaveTextContent(/home/i);
    expect(productsLink).toHaveTextContent(/products/i);
    expect(aboutLink).toHaveTextContent(/about/i);
    expect(contactLink).toHaveTextContent(/contact/i);
    expect(loginButton).toHaveTextContent(/login/i);
    expect(signupButton).toHaveTextContent(/register/i);
  });
});
