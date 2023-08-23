TestingLibrary の getByRole は、HYML 要素のロールを参照する。

## getByRole は HTML のロールと同じ

必要に応じて公式を参照しましょう。

button は暗黙的に button というロールを持っている

```
// わざわざroleをしなくてよい
<buttopn role="button">ボタン</button>

// 理由があれば、下記でもOK
<div role="button">~~~</div>
```

input のロールは、type 属性名称がロール名称に一致するとは限らない。

```
<input tyle="text">     // role="textbox"
<input tyle="checkbox"> // role="checkbox"
<input tyle="radio">    // role="radio"
<input tyle="number">   // role="spinbutton"
```

## h 属性の絞り込み

h 属性は `headigロール` を持っている。
h1~h6 まで、すべで heading で同じとなっている。
なので、h 属性が複数存在するページの場合、`screen.getByRole("heading")` とすると失敗してしまう。
(screen.getByAallRole("heading)は成功する)

```
<h1>見出し1</h1> // role="heading"
<h2>見出し2</h2> // role="heading"
```

これを見分けるために、`level` を使用する

```
screen.getByRole("heading" , {level:1}) // h1が取れる
screen.getByRole("heading" , {level:2}) // h2が取れる

<div role="heading" aria-level="1">見出し</div> // h属性を使えない場合はこのように指定する
```

## アクセシブルネーム

Accessible Name は HTML の name 属性とは関係がない。
スクリーンリーダーで読み上げられるテキストを示す。

```
<button>送信</button> // アクセシブルネームは 送信
<button><img alt="送信" src="画像.png"></button> //アクセシブルネームは送信

<button><img src="画像.png"></button> // アクセシブルネームがない！必ず指定しよう
```

アクセシブルネームは様々な要因が絡んで決定されるので、下記を読んでまずは確認をしよう。
(算出の仕様はこちら : [Accessible Name and Description Computation 1.2](https://www.w3.org/TR/accname-1.2/))

## ロール名、アクセシブルネーム名を確認する

主に 2 つの方法があります。

- ブラウザの拡張機能を使用する
- テストコード上で確認する

```
export const Form = ({ title, handleOnSubmit }) => {
  return (
    <form onSubmit={(event) => {~処理~}}>
      <h1>タイトル</h1>
      <p>{title}</p>
      <button>決定</button>
    </form>
  );
};
```
