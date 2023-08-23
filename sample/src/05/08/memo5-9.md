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
