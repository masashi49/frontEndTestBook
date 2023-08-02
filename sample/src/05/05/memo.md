## fieldset は暗黙のロールとして group をもっている。

fieldset の中に legand があれば、それが暗黙的にアクセシブルネームとして扱われる。
`expect(screen.getByRole({name : "利用規約の同意"})` として取れる。

`UIコンポーネントのテストを書けば、その分アクセシビリティに配所する機会が増える。`

## useEvent
testing-library/user-eventを使うと、よりユーザーの動きに近いテストが可能。
userEbent.setup()で、インスタンスを作成して使用する。
