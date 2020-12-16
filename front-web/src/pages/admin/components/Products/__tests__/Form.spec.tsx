import React from 'react';
import { render, screen, wait, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import Form from '../Form';
import { Router } from 'react-router-dom';
import history from 'core/utils/history';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { categoriesResponse } from './fixtures';
import { ToastContainer } from 'react-toastify';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as {},
  useParams: () => ({
    productId: 'create'
  })
}));

const server = setupServer(
  rest.get('http://localhost:8080/categories', (req, res, ctx) => {
    return res(ctx.json(categoriesResponse))
  }),
  rest.post('http://localhost:8080/products', (req, res, ctx) => {
    return res(ctx.status(201))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should render form', async() => {
  render(
    <Router history={history}>
      <ToastContainer />
      <Form />
    </Router>
  )

  const submitButton = screen.getByRole('button', {name: /salvar/i});
  const nameInput = screen.getByTestId("name");
  const priceInput = screen.getByTestId("price");
  const imgUrlInput = screen.getByTestId("imgUrl");
  const descriptionInput = screen.getByTestId("description");
  const categoriesInput = screen.getByLabelText("Categorias");

  userEvent.type(nameInput, 'Computador');
  await selectEvent.select(categoriesInput, ['Computadores', 'Eletrônicos']);
  userEvent.type(priceInput, '5000');
  userEvent.type(imgUrlInput, 'image.jpg');
  userEvent.type(descriptionInput, 'Good pc');
  
  userEvent.click(submitButton);

  await waitFor(() => expect(screen.getByText('Produto salvo com sucesso!')).toBeInTheDocument());
  expect(history.location.pathname).toBe("/admin/products");
  expect(screen.getByText(/cadastrar um produto/i)).toBeInTheDocument();
});

test('should render form with error message', async () => {
  render(
    <Router history={history}>
      <Form />
    </Router>
  );
  const submitButton = screen.getByRole('button', { name: /salvar/i });
  userEvent.click(submitButton);

  await waitFor(() => expect(screen.getAllByText('Campo Obrigatório')).toHaveLength(5));

  const nameInput = screen.getByTestId("name");
  const priceInput = screen.getByTestId("price");
  const imgUrlInput = screen.getByTestId("imgUrl");
  const descriptionInput = screen.getByTestId("description");
  const categoriesInput = screen.getByLabelText("Categorias");

  userEvent.type(nameInput, 'Computador');
  await selectEvent.select(categoriesInput, ['Computadores', 'Eletrônicos']);
  userEvent.type(priceInput, '5000');
  userEvent.type(imgUrlInput, 'image.jpg');
  userEvent.type(descriptionInput, 'Good pc');

  await waitFor(() => expect(screen.queryAllByText('Campo Obrigatório')).toHaveLength(0));

})