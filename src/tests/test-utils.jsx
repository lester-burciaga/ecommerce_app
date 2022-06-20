import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '../../node_modules/@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from "react-router-dom";

/** TESTING NOTE 
 * 
 * Before running the test you must need to change the path of import redux/toolkit
 * on the reducers files:
 * from
 * @redux/toolkit
 * to 
 * "../../node_modules/@reduxjs/toolkit";
 * can't find a fix for this issue yet
 *  
*/

import cartReducer from '@redux/cartSlice';
import userReducer from '@redux/authSlice';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { user: userReducer, cart: cartReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}><MemoryRouter>{children}</MemoryRouter></Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
