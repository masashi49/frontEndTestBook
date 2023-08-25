import { fireEvent,logRoles,render,screen } from '@testing-library/react';
import { Form } from './Form';

test('名前の表示', () => {
  render(<Form name='taro' />);
  expect(screen.getByText('taro')).toBeInTheDocument();
});

test('ボタンの表示', () => {
  render(<Form name='taro' />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('見出しの表示', () => {
  render(<Form name='taro' />);
  expect(screen.getByRole('heading')).toHaveTextContent('アカウント情報');
});

test('ボタンを押下すると、イベントハンドラーが呼ばれる', () => {
  const mockFn = jest.fn();
  render(<Form name='taro' onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole('button'));
  expect(mockFn).toHaveBeenCalled();
});

test('Snapshot: taitoru 「リスト」が表示される', () => {
  const { container } = render(<Form title='リスト' />);
  expect(container).toMatchSnapshot();
});

test('logRoles: アクセシブルネームを確認する', () => {
  const { container } = render(<Form title='リスト' />);
  logRoles(container);
});
