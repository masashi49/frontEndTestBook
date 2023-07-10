import { render, screen } from '@testing-library/react';
import { Form } from '.';

test('初めてのテスト', () => {
  render(<Form name='taro' />); // まずはレンダーしてnode内にhtmlを読ませる
  expect(screen.getByRole('heading'));
});
