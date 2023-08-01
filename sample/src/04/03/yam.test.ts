// テストしたい対象のメソッド
import { getGreet } from '.';

//エラー時に返したいもの

// fetchersの中身をオブジェクトで全て取得。（非同期関数を含む）
import * as Fetchers from '../fetchers';

// この宣言で、fetchers内のメソッドはすべてmocとして使用できる。
jest.mock('../fetchers');

// fetchersの中のメソッドをspyする。
jest.spyOn(Fetchers, 'getMyProfile');

test('テスト名', () => {
  // モックされたFetchersが持つgetMyProfileは、非同期成功でidとemailを返すとしておく。
  jest.spyOn(Fetchers, 'getMyProfile').mockResolvedValueOnce({
    id: '11111',
    email: 'hoge@hoe.jp',
  });
  // 名前がないのでこちらがかえる
  expect(getGreet()).resolves.toBe('Hello, anonymous user!');
});
  