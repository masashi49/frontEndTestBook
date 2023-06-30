import { httpError } from '../../04/fetchers/fixtures';
import * as Fetchers from './fetchers';
import { getGreet } from './index';

// getMyProfile はapiのリクエストが発生する。getMyProfileをスタブし、データ取得に関わることをモックできる
jest.mock('./fetchers');

test('テスト名a', async () => {
  ///FetchersオブジェクトのgetMyProfile。という意味
  jest.spyOn(Fetchers, 'getMyProfile').mockResolvedValueOnce({
    id: 'xxxxxxx-12345',
    email: 's@hoge.jp',
  });
  expect(getGreet()).resolves.toBe('Hello , anonymous user'); // resolvesはPromise成功時
});

test('テスト名b', () => {
  jest.spyOn(Fetchers, 'getMyProfile').mockResolvedValueOnce({
    id: 'xxxxxxx-12345',
    email: 's@hoge.jp',
    name: 'taro',
  });
  expect(getGreet()).resolves.toBe('hello taro'); // resolvesはPromise成功時
});

test('テスト名c', async () => {
  jest.spyOn(Fetchers, 'getMyProfile').mockRejectedValueOnce(httpError);
  await expect(getGreet()).rejects.toMatchObject({
    err: { message: 'internal server error' },
  });
});
