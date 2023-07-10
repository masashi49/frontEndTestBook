import { httpError } from '../../fetchers/fixtures';
import * as Fetchers from './fetchers'; // 本体をimport
import { getGreet } from './index';

jest.mock('./fetchers'); // 1行目でimportしていた本体を、まるごとmock化して置き換える。exportされているメソッドを全てmockとして扱える。

describe('全部テスト', () => {
  test('テスト名', async () => {
    // Fetchers.getMyProfilをスパイする。
    // mockResolvedValueOnceはプロミスが成功時に使う。idとemailを含むオブジェクトを返す。
    jest.spyOn(Fetchers, 'getMyProfile').mockResolvedValueOnce({
      id: 'xxxxxxxx-2345',
      email: 'sadfasdf.jp',
    });
    await expect(getGreet()).resolves.toBe('Hello, anonymous user!');
  });

  test('テスト名', async () => {
    jest.spyOn(Fetchers, 'getMyProfile').mockResolvedValueOnce({
      id: 'xxxxxxxx-2345',
      email: 'sadfasdf.jp',
      name: 'Taro',
    });
    await expect(getGreet()).resolves.toBe('hello Taro');
  });

  test('エラーです', async () => {
    jest.spyOn(Fetchers, 'getMyProfile').mockRejectedValueOnce(httpError);
    //toMatchObject
    await expect(getGreet()).rejects.toMatchObject({
      err: { message: 'internal server error' },
    });
  });

  test('toMatchObject', () => {
    const received = { a: 1, b: 2, c: 3 };
    //toMatchObject一部が完全一致
    expect(received).toMatchObject({ a: 1, b: 2 }); // 通る
    expect(received).toMatchObject({ a: 1, b: 3 }); // 通らない
  });

  //例外のthrowは、trycatchでも検査できる
  test('エラーです', async () => {
    jest.spyOn(Fetchers, 'getMyProfile').mockRejectedValueOnce(httpError);
    try {
      await getGreet();
    } catch (err) {
      expect(err).toMatchObject({
        err: { message: 'internal server error' },
      });
    }
  });
});
