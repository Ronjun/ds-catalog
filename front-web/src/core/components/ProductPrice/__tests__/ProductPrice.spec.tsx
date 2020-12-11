import React from 'react';
import { render, screen} from '@testing-library/react';
import ProductPrice from '../index';

test('should render product price when number is given', () => {

  const price = 1200;

  render(
    <ProductPrice price = {price} />
  );

  const currencyElement = screen.getByText('R$');
  const priceElement = screen.getByText('1.200,00');
  expect(currencyElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
  
});

test('should render product price when price is zero', () => {

  const price = 0;

  render(
    <ProductPrice price = {price} />
  );

  const currencyElement = screen.getByText('R$');
  const priceElement = screen.getByText('0,00');
  expect(currencyElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
  
});

test('should render product price whithout thousand separator when number is under 1000', () => {

  const price = 200;

  render(
    <ProductPrice price = {price} />
  );

  const currencyElement = screen.getByText('R$');
  const priceElement = screen.getByText('200,00');
  expect(currencyElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
  
});

test('should render product price when number is negative', () => {

  const price = -1200;

  render(
    <ProductPrice price = {price} />
  );

  const currencyElement = screen.getByText('R$');
  const priceElement = screen.getByText('-1.200,00');
  expect(currencyElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
  
});
