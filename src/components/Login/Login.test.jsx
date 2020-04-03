import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import store from '../../store';

import '@testing-library/jest-dom/extend-expect';
import Login from '.';

const renderComponent = () => (
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/login']}>
        <Route path="/login">
          <Login />
        </Route>
      </MemoryRouter>
    </Provider>,
  )
);

test('renders login page', async () => {
  const { getByText } = renderComponent();
  const login = getByText(/sign in/i);
  expect(login).toBeInTheDocument();
});

test.skip('calls "onClick" prop on button click', async () => {
  const { getByText } = renderComponent();
  fireEvent.click(getByText(/submit/i));
});
