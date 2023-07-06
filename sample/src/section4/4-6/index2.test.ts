import * as Fetchers from '../../04/fetchers';

import { postMyArticle } from '../../04/fetchers';

import { httpError,postMyArticleData } from '../../04/fetchers/fixtures';
import { ArticleInput } from '../../04/fetchers/type';
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

  // 先にレスポンスをモックしておく
  const mock = mockPostMyArticle(input);

  // モックされたpostMyArticleい値を入れる
  const data = await postMyArticle(input);

  expect(data).toMatchObject(expect.objectContaining(input));

  expect(mock).toHaveBeenCalled();
});
