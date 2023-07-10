import { greet, sayGoodBye } from './index';

jest.mock('./index.ts', () => ({
  ...jest.requireActual('./index'), // 本来の実装を取得
  // saiGoodBeyだけスタブ↓ (greetは本来のまま)
  sayGoodBye: (name: string) => `Good bye ${name}`, // 未実装テストも、強制的に実行を変更する
}));

test('テスト名', () => {
  expect(greet('Taro')).toBe('hello Taro');
});

test('2', () => {
  const message = `${sayGoodBye('Taro')} See you.`;
  expect(message).toBe('Good bye Taro See you.');
});









