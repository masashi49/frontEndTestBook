import { greetByTime } from './greetByTime';

// describe('テスト名', () => {
//   beforeEach(() => {
//     jest.useFakeTimers();
//   });
//   afterEach(() => {
//     jest.useRealTimers();
//   });
//   test('おはようテスト', () => {
//     jest.setSystemTime(new Date(2023, 4, 20, 11, 23, 49));
//     expect(greetByTime()).toBe('おはよう');
//   });
// });

describe('greetByTime(', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  // (1) 「おはよう」を返す関数
  test('朝は「おはよう」を返す', () => {
    jest.setSystemTime(new Date(2023, 4, 23, 8, 0, 0));
    expect(greetByTime()).toBe('おはよう');
  });
  // (2) 「こんにちは」を返す関数
  xtest('昼は「こんにちは」を返す', () => {
    jest.setSystemTime(new Date(2023, 4, 23, 14, 0, 0));
    expect(greetByTime()).toBe('こんにちは');
  });
  // (3) 「こんばんは」を返す関数
  test('夜は「こんばんは」を返す', () => {
    jest.setSystemTime(new Date(2023, 4, 23, 21, 0, 0));
    expect(greetByTime()).toBe('こんばんは');
  });
});
