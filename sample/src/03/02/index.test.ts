import { add, sub } from "./index";

describe("四則演算", () => {
  describe("add", () => {
    test("1 + 1 は 2", () => {
      expect(add(1, 1)).toBe(2);
    });
    test("1 + 2 は 3", () => {
      expect(add(1, 2)).toBe(3);
    });
  });
  describe("sub", () => {
    test("1 - 1 は 0", () => {
      expect(sub(1, 1)).toBe(0);
    });
    test("2 - 1 は 1", () => {
      expect(sub(2, 1)).toBe(1);
    });
  });


  test('テスト名a', () => {
    expect(add(10,10)).toBe(20);
  });

  test('テスト名d', () => {
    expect(sub(10,4)).toBe(6);
  });



});

// アサーション　expect(検証値).toBe(期待値)
// マッチャー　toBe(期待値)
