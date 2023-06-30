test('テスト名', () => {
  //expect(1).toBeTruthy();
  expect('a').toBeTruthy();
  expect('').not.toBeTruthy();
});

test('null', () => {
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect(null).toBeFalsy();
  expect(null).not.toBeTruthy();
  expect(undefined).not.toBeTruthy();
});

test('テスト名', () => {
  const value = 2 + 2;
  expect(value).toBe(4);
  expect(value).toEqual(4);

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(4);

  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4);

  expect(0.1 + 0.2).not.toBe(0.3); // 小数点の計算は気をつける
  expect(0.1 + 0.2).toBeCloseTo(0.3); // 小数点の計算は気をつける
  expect(0.1 + 0.2).toBeCloseTo(0.3, 15); // 小数点の計算は気をつける
  expect(0.1 + 0.2).not.toBeCloseTo(0.3, 16); // 0.30000000000000004aa
});
