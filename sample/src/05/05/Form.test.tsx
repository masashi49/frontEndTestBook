import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

const user = userEvent.setup();

test('サインアップボタンが存在し、初期値はdisagbledである', async () => {
  render(<Form />);
  const button = screen.getByRole('button', { name: 'サインアップ' });
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test('チェックすると、buttonの属性はenabledに変化する', async () => {
  render(<Form />);
  const button = screen.getByRole('button', { name: 'サインアップ' });
  await user.click(screen.getByRole('checkbox'));
  expect(button).toBeEnabled();
});

test('form のアクセシブルネームは、見出しを引用している', () => {
  render(<Form />);
  expect(screen.getByRole('form', { name: '新規登録' })).toBeInTheDocument();
});

test('should first', async () => {
  render(<Form />);
  expect(screen.getByRole('heading', { name: '新規登録' })).toBeInTheDocument();
  expect(
    screen.getByRole('group', { name: 'アカウント情報の入力' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('group', { name: '利用規約の同意' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'サインアップ' })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'サインアップ' })).toBeDisabled();
  await user.click(screen.getByRole('checkbox'));
  expect(
    screen.getByRole('button', { name: 'サインアップ' })
  ).not.toBeDisabled();
});

//////////////////////////

test('主要エリアが表示されている', () => {
  render(<Form />);
  expect(
    screen.getByRole('heading', { name: '新規アカウント登録' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('group', { name: 'アカウント情報の入力' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('group', { name: '利用規約の同意' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'サインアップ' })
  ).toBeInTheDocument();
});

test('「サインアップ」ボタンは非活性', () => {
  render(<Form />);
  expect(screen.getByRole('button', { name: 'サインアップ' })).toBeDisabled();
});

test('「利用規約の同意」チェックボックスを押下すると「サインアップ」ボタンは活性化', async () => {
  render(<Form />);
  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByRole('button', { name: 'サインアップ' })).toBeEnabled();
});

test('Snapshot: 新規アカウント登録フォームが表示される', () => {
  const { container } = render(<Form />);
  expect(container).toMatchSnapshot();
});
