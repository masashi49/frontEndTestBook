import { getMyArticleLinksByCategory } from '.';
import * as Fetchers from '../../04/fetchers';
import { getMyArticlesData, httpError } from '../../04/fetchers/fixtures';

jest.mock('../../04/fetchers');

// まずはプロミスを返す関数をmock化する。
function mockGetMyArticles(status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, 'getMyArticles')
      .mockRejectedValueOnce(httpError); // mockRejectedValueOnceはリジェクトして返す
  }
  return jest
    .spyOn(Fetchers, 'getMyArticles')
    .mockResolvedValueOnce(getMyArticlesData); //mockResolvedValueOnceはresolveにして返す
}

test('指定したタグをもつ記事が一件もない場合、null が返る', async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory('playwright');
  expect(data).toBeNull();
});

test('指定したタグをもつ記事が一件以上ある場合、リンク一覧が返る', async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory('testing');
  expect(data).toMatchObject([
    {
      link: '/articles/howto-testing-with-typescript',
      title: 'TypeScript を使ったテストの書き方',
    },
    {
      link: '/articles/react-component-testing-with-jest',
      title: 'Jest ではじめる React のコンポーネントテスト',
    },
  ]);
});

test('テスト失敗', () => {
  mockGetMyArticles(500);
});
