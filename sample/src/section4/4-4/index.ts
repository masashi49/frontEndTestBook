import { getMyArticles } from '../../04/fetchers';

export async function getMyArticleLinksByCategory(category: string) {
  // データを取得する関数
  const data = await getMyArticles();
  // 取得したデータのうち、指定したタグが含まれる記事に絞り込む
  const articles = data.articles.filter((article) => {
    console.log(article);
    console.log(category);
    return article.tags.includes(category);
  });
  console.log(articles ? '0' : '1');
  if (!articles.length) {
    // 該当記事がない場合、null を返す
    return null;
  }
  // 該当記事がある場合、一覧向けに加工したデータを返す
  return articles.map((article) => ({
    title: article.title,
    link: `/articles/${article.id}`,
  }));
}
