import { render, screen, within } from '@testing-library/react';
import { ArticleList } from './ArticleList';
import { items } from './fixture';

test('should first', () => {
  render(<ArticleList items={items} />);

  expect(screen.getAllByRole('listitem')).toHaveLength(3);
  expect(
    screen.getByText(
      'テストを書く時、TypeScript を使うことで、テストの保守性が向上します…'
    )
  ).toBeTruthy();
});

/*

liタグは暗黙的にlistitemを持っている
 - liタグにわざわざ role="listitem"は不要
 - <div role="listitem">とすれば、テストが成功することを確認。
 - どのタグがどのroleを持っているか、確認しておく必要がある。
   - https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques
     - ARIAってそもそも何？を学ぶ

 getAllByRoleはliが１つの時でも使えることを確認した。
 注意がいるのは、テスト対象でないliも取得してしまう。

正しいhtmlを実装し、getByRoleはそのタグが元々もっているものを使用するのが良い。
<div role="listitem">リスト項目 1</div> これよりも
<li>リスト項目 1</li> こっち使うほうが正しいhtml。


## within 5-14
対象を絞り込んで要素を取得することができる。
getByLabelTextで場所を絞り込み、withinは、さらに詳細な調査目的で使う。
絞り方はいろいろあるが、getByRole や getByTextといったアクセシビリティに基づくセレクタを使うのが良い；
getByRole、getByText、getByLabelText、data-testid idなど全部使えない場合、最終手段としてquerySelectorを使う。
const element = document.querySelector('div > span.my-specific-class');
*/

test('5-14', () => {
  render(<ArticleList items={items} />); // 毎回書くのがしんどいのでbeforeEacするのがよい

  //const list = screen.getByRole('list'); // ulが2つある場合は失敗する。

  //複数あるときはgetByLabelTextなどで属性を拾い、識別する。
  //const list = document.getElementById('messages'); 型が HTMLElement | null となってしまい、list && ~　が必要となる。
  const list = screen.getByLabelText('articleListUlul'); // aria-label を使用して特定の要素を絞るのもいいだろう。
  expect(list).toBeInTheDocument();
  expect(within(list).getAllByRole('listitem')).toHaveLength(3);
});

test('5-15', () => {
  render(<ArticleList items={[]} />);

  const list = screen.queryByRole('list');
  expect(list).not.toBeInTheDocument();
  expect(list).toBeNull();
  expect(screen.getByText('投稿記事がありません')).toBeInTheDocument();
});
