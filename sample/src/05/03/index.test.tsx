import {fireEvent, render, screen } from '@testing-library/react';
import { Form } from '.';

test('初めてのテスト', () => {
  render(<Form name='taro' />); // まずはレンダーしてnode内のhtmlを読ませる
  expect(screen.getByRole('heading')); // ヘッダーがある
  expect(screen.getByRole('heading')).toHaveTextContent('アカウント情報'); // ヘッダーのテキストはアカウント情報である
  //ロールを読み取ってテストするとアクセシビリティが身に付く
});

test('should first',  () => {
  const mockFn = jest.fn()
  render (<Form name='taro' onSubmit={mockFn}/>)
  fireEvent.click(screen.getByRole("button"))
  expect(mockFn).toHaveBeenCalled()
 })
