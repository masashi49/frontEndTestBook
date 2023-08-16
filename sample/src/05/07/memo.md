#### まずは api 通信部分の mock を作る

- test では postMyAddressMock の代わりに、mockPostMyAddress を呼び出すようにしておく
- api通信を行うmockは、汎用的(/mock/api/とか)で使うもの、その時だけ(./)で使うものでディレクトリを分けるのがいいと思う。

#### ui の操作処理を作る。各項目の入力。

- 初期値を input に入力する関数を用意する。初期値はデフォルト値を作っておく。return にはそれぞれ何を入れたかの値を返すしておく。

#### 成功用のテストを書く

- const mockFn = mockPostMyAddress();して、mockPostMyAddress の動きがわかるようにする。
- form をレンダーし、値を入力する関数を動かし、submit までさせる。このとき、submit 用の関数は formData に入る想定をしている入力 value を返しておく。
- mockFn が動いているので、toHaveBeenCalledWith で引数が何だったかを検証する。
- mockPostMyAddress のレスポンスから、表示を確認する。(getByText でテキストを引っ掛ける)

#### 失敗用のテストを書く
- 入力が失敗するよう、関数に食わせる値を変更し、初期値を上書きする。
