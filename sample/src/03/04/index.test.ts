import { add, sub } from '.';

describe('四則演算', () => {
  describe('add', () => {
    test('返り値は、第一引数と第二引数の「和」である', () => {
      expect(add(50, 50)).toBe(100);
    });
    test("合計の上限は、'100'である", () => {
      expect(add(70, 80)).toBe(100);
    });
  });
  describe('sub', () => {
    test('返り値は、第一引数と第二引数の「差」である', () => {
      expect(sub(51, 50)).toBe(1);
    });
    test("返り値の合計は、下限が'0'である", () => {
      expect(sub(70, 80)).toBe(0);
    });
  });

  test('テスト名', () => {
    expect(add(100, 40)).toBe(100);
    expect(add(10, 89)).toBe(99);
  });

  test('subtest', () => {
    expect(sub(100, 400)).toBe(0);
    expect(sub(100, 400)).toBe(0);
  });

  test('エラー投', () => {
    expect(() => add(-10, 110)).toThrow(); // エラーである
    expect(() => add(-10, 110)).toThrow('入力値は100までa'); // エラーテキストはこれ
    expect(() => add(10, 110)).toThrow('入力値は100までb');
  });
  // test('エラー投げない', () => {
  //  expect(() => add(10, 40)).toThrow();
  // });
  // 意図通りにエラーが投げられるかを確認しよう
});
