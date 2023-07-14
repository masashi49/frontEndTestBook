import { render, screen } from '@testing-library/react';
import { ArticleList } from './ArticleList';
import { items } from './fixture';

beforeEach(() => {
  render(<ArticleList items={items} />); // 毎回書くのがしんどいのでbeforeEacするのがよい
});

test('should first', () => {
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

// 次は5-14

































*/
