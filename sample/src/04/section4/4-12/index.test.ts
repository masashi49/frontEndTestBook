import { greet } from './index';

test('1', () => {
  expect(greet('Taro')).toBe('hello Taro');
});

test('2', () => {
  jest.mock('./index.ts', () => {
    return {
      greet: () => 'bbby',
    };
  });
  expect(greet('Taro')).toBe('bbby');
});
