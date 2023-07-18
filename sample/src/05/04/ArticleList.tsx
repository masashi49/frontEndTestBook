import { ArticleListItem, ItemProps } from './ArticleListItem';

type Props = {
  items: ItemProps[];
};

export const ArticleList = ({ items }: Props) => {
  return (
    <div>
      <h2>記事一覧</h2>
      <h2>記事一覧</h2>
      {items.length ? (
        <>
          <ul aria-label="articleListUlul">
            {items.map((item) => (
              <ArticleListItem {...item} key={item.id} />
            ))}
          </ul>
          <ul>
            <li>hello</li>
          </ul>
        </>
      ) : (
        <p>投稿記事がありません</p>
      )}
    </div>
  );
};
