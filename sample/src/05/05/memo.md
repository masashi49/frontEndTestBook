## fieldset は暗黙のロールとして group をもっている。

fieldset の中に legand があれば、それが暗黙的にアクセシブルネームとして扱われる。
`expect(screen.getByRole({name : "利用規約の同意"})` として取れる。

`UIコンポーネントのテストを書けば、その分アクセシビリティに配所する機会が増える。`

## useEvent

testing-library/user-event を使うと、よりユーザーの動きに近いテストが可能。
userEbent.setup()で、インスタンスを作成して使用する。

## role を持たない

input type="password"は role を持たない
getByRole("password")で取れない。

## 利用規約のテキスト部分

正規表現で確認できる。
`当サービスの<a href="/terms">利用規約</a>を確認し、これに同意します`
expect(screen.getByText(/を確認し、これに同意します/i)).toBeInTheDocument()

## 正規表現

/hoge/g <- g は、一致するもの全てをターゲットにする
/hoge/i <- i は、大文字と小文字を区別しないようにする

- `/yamada/i` は yamada でも YaMaDa でも OK

## form のアクセシブルネーム

下記のようになった場合、先のものが name となる。
h1~h6 の強さは関係ない、 aria-labelledby で登録されているものが name となる。

```html
//h2がname
<form aria-labelledby="{headingId}">
  <h2 id="{headingId}">新規アカウント登録</h2>
  <h4 id="{headingId}">新規登録</h4>
</form>
```

```html
//h4がname
<form aria-labelledby="{headingId}">
  <h4 id="{headingId}">新規登録</h4>
  <h2 id="{headingId}">新規アカウント登録</h2>
</form>
```

```html
/spanがname
<form aria-labelledby="{headingId}">
  <span id="{headingId}">新規登録</span>
  <h2>テスト</h2>
</form>
```
