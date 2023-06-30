export function greet(name: string) {
  return `hello ${name}`;
}

export function sayGoodBye(name: string) {
  throw new Error('未実装');
}

/*

webAPIを使ったテストでは、失敗と成功の両方のテストが必要
テストしたい対象はwebAPIではなく、「取得したデータに関連する処理」
取得したデータの代用品がモックである。

スタブ
 - 代用
 - comopnent , 値を返す関数 , 入力

スタブはテスト対象が依存している値に不都合がある時に使用する。
 - apiが失敗を返す
 - apiに固定値を返すようにするなど

スパイ
 - 記録
 - 呼び出し回数
 - 実行回数、関数の引数
 - 出力

スタブやスパイはjest.mockやjest.fn、jest.spyOnを使用して作る。

*/
