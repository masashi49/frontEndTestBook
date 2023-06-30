import { timeout, wait } from '.';

describe('非同期処理', () => {
  describe('wait', () => {
    test('テスト名', () => {
      // return をしないと、testが同期的に正常として終了してしまう
      // Promiseをreturnすることで、Promiseの解決をまってtest結果を出してくれる
      return wait(50).then((req) => {
        expect(req).toBe(50);
      });
    });
    test('テスト名', () => {
      return expect(wait(50)).resolves.toBe(50); //resolves で成功としてthenをおこなってくれる
    });

    // async awaitを使うと、動機的に作れる。
    test('テスト名', async () => {
      const req = await wait(50);
      expect(req).toBe(50);
    });
    // expectの中でawaitを使うと記述のほとんどを省略できる。
    test('テスト名', async () => {
      expect(await wait(50)).not.toBe(55);
    });

    test('指定時間待つと、経過時間をもって resolve される', () => {
      return wait(50).then((duration) => {
        expect(duration).toBe(50);
      });
    });
    test('指定時間待つと、経過時間をもって resolve される', () => {
      return expect(wait(50)).resolves.toBe(50);
    });
    test('指定時間待つと、経過時間をもって resolve される', async () => {
      await expect(wait(50)).resolves.toBe(50);
    });
    test('指定時間待つと、経過時間をもって resolve される', async () => {
      expect(await wait(50)).toBe(50);
    });
  });

  ///////////////

  test('テスト名', async () => {
    timeout(3).catch((req) => {
      // rejectすると、catchされるんだったね
      expect(req).toBe(3);
    });
  });

  test('テスト名', () => {
    return expect(timeout(50)).rejects.toBe(50);
    //expect(await timeout(50)).rejects.toBe(50);
  });
  test('テスト名', async () => {
    await expect(timeout(50)).rejects.toBe(50);
  });

  //////////////
  test('テスト名', async () => {
    //expect.assertions(1);
    try {
      await timeout(2);
    } catch (req) {
      expect(req).toBe(2);
    }
  });

  describe('timeout', () => {
    test('指定時間待つと、経過時間をもって reject される', () => {
      return timeout(50).catch((duration) => {
        expect(duration).toBe(50);
      });
    });
    test('指定時間待つと、経過時間をもって reject される', () => {
      return expect(timeout(50)).rejects.toBe(50);
    });
    test('指定時間待つと、経過時間をもって reject される', async () => {
      await expect(timeout(50)).rejects.toBe(50);
    });
  });
});

test('指定時間待つと、経過時間をもって reject される', async () => {
  expect.assertions(1); // 1回アサーションしなさい
  try {
    await timeout(50); // timeout関数のつもりが、wait関数にしてしまった
    // ここで終了してしまい、テストは成功する
  } catch (err) {
    // アサーションは実行されない
    expect(err).toBe(50);
  }
});

test('テスト名', async () => {
  expect.assertions(1);
  try {
    await timeout(50);
  } catch (err) {
    expect(err).toBe(50);
  }
});

test('return していないため、Promise が解決する前にテストが終了してしまう', () => {
  // 失敗を期待して書かれたアサーション
  //expect(wait(2)).resolves.toBe(2);
  // 正しくはアサーションを return する
  return expect(wait(2000)).resolves.toBe(2000);
});
