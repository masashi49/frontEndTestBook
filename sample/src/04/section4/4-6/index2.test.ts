import * as Fetchers from '../../fetchers';

import { postMyArticle } from '../../fetchers';

import { httpError, postMyArticleData } from '../../fetchers/fixtures';
import { ArticleInput } from '../../fetchers/type';
import { checkLength } from './index';

jest.mock('../../04/fetchers');

// api通信のレスポンスをモックしておく
function mockPostMyArticle(input: ArticleInput, status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, 'postMyArticle')
      .mockRejectedValueOnce(httpError);
  }
  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest
      .spyOn(Fetchers, 'postMyArticle')
      .mockResolvedValue({ ...postMyArticleData, ...input });
  } catch (err) {
    return jest
      .spyOn(Fetchers, 'postMyArticle')
      .mockRejectedValueOnce(httpError);
  }
}

// tag,title,bodyはデフォルトでは通過する内容。inputに応じて上書きするので、引数を操作して通らないバージョンも作れる
function inputFactory(input?: Partial<ArticleInput>) {
  return {
    tags: ['testing'],
    title: 'あああ',
    body: 'body',
    ...input,
  };
}

test('テスト名', async () => {
  const input = inputFactory(); // デフォルトで通る
  //const input = inputFactory({title : "" , body:""}); // 通らない

  // api通信のモック(実際の関数を用いている)にinputを食わせる
  const mock = mockPostMyArticle(input);

  // モックされたpostMyArticleい値を入れる
  const data = await postMyArticle(input);

  expect(data).toMatchObject(expect.objectContaining(input));

  expect(mock).toHaveBeenCalled();
});

test('テスト名a', async () => {
  expect.assertions(2); // エラーを起こすときはexpect.assertionsしておく。
  const input = inputFactory({ title: '', body: '' }); // テスト用の関数を用いて、失敗するオブジェクトを作成
  const mock = mockPostMyArticle(input); // api通信のモック(実際の関数を用いている)にinputを食わせる

  // 失敗するはずなので、catchする
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({ err: { message: expect.anything() } });
  });
  expect(mock).toHaveBeenCalled(); // mockが呼び出された。
});
