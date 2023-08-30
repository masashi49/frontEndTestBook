File 　ファイル名
Stmts 命令網羅率
Branch 分岐網羅率
Funcs 行網羅率
Uncovered Line 網羅されていない行

```
// jest.config.ts

export default {
  collectCoverage: true,
  coverageDirectory: "coverage" // coverageディレクトリに出力する
}

```

## test のスキップ

x をつけると、テストのスキップが可能

```
xtest(("",()=>{
 ~~~~
}))
```

## coverage レポートを開く

コマンド : `open coverage/lcov-report/06/index.html`

`jest --coverage` コマンドを叩くと html が更新される。

## レポートの見方
- 1xや6x
  - 関数開始行にxのついた数字がある、これはこの関数がテストで何回呼ばれたかを示す
