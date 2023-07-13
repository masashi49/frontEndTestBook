/** uiコンポーネントテスト
MPAとSPA
マルチページアプリケーション
シングルページアプリケーション

SPAはユーザーの操作をもとに、最小限のデータ取得や更新を行う。
データ取得の負荷も少ないメリットもある。

ビルディングブロックのようなUIコンポーネント
データを表示すること
ユーザーの操作内容の伝播
関連するAPIをつなぐ。
データを置き換える。

これらが意図通りに動くかを確認するのがUIコンポーネントテスト。
UICはwebアクセシビリティテストも補える。

jestの実行環境では、DOMを操作するAPIがない。そのためjsdomを使用する。

TestingLibraryの役割
コンポーネントのレンダリング
レンダリングされた要素から、好きなこ要素を取得
レンダリングした要素にインタラクションを与える

TestingLibraryの基本原則
テストがソフトウェアに使用方法ににている。
  - 人間の操作を表している。ホバー。クリック、選択している

カスタムマッチャー
従来のjestを使用してUIコンポーネントをテストするが、DOMの状態はjestだけでは不十分。
そこで使うのがtestting-library/jest-dom。これはカスタムマッチャートいい、便利なマッチャーが多数追加される。

user-event
ユーザーの操作に近いシュミレートを行うために、@testing-library/user-eventを使用する。
fireEventはイベント発火のみ。

**/

type Props = {
  name: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ name, onSubmit }: Props) => {
  return (
    <form
      //もともとform要素にはonSubmitというイベントが存在しているのでそれ
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.(event); // こちらは親からpropsされたただの関数、?.はオプショナルチェイニング
      }}
    >
      <h2>アカウント情報</h2>
      <p>${name}</p>
      <div>
        <button>編集する</button>
      </div>
    </form>
  );
};
