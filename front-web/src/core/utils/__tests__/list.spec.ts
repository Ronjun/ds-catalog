import { generateList } from '../list';

test('should generate a list when amount exists', () => {
  const amount = 5;

  const result = generateList(amount);

  expect(result).toEqual([0,1,2,3,4]);
});

test('should generate an empty list when amount is zero', () => {
  const amount = 0;

  const result = generateList(amount);

  expect(result).toEqual([]);
});