## snapshot

その時のテストの snapshot が取れる
expect(screen.getByRole{~~~}).toMatchSnapShot();
Dom 構成がどうなっているかが保存される。
Dom だけで、css が適用された見た目部分はわからない。
commit 前に走らせる自動 test で snapshot を行えば、
`testは通っているけど意図せぬ変更` があったというのは検知できそう。
VRT が入っていないリポジトリにはいいかも。

## 個人で小さい開発を行う場合

Jest と Chromatic を使えばよさそう。

Jest:
各関数やコンポーネントが期待通りに動作するかを確認
予期せず DOM の更新に気づく

Chromatic:
Storybook をつかって VRT できる。コンポーネントの見た目の変化に気づける。

Chromatic と reg-suit の違い。

以下 chatGPT

---

### reg-suit：

#### 設定の柔軟性：

reg-suit は設定が非常に柔軟であり、プラグインを使って様々なストレージオプションや通知オプションを組み合わせて使用することができます。

#### ストレージの選択：

reg-suit では、スクリーンショットの差分を保存する場所を選択できます。Amazon S3、Google Cloud Storage など、複数のオプションから選ぶことができます。

#### コスト：

reg-suit 自体は無料のオープンソースツールですが、スクリーンショットを保存するために選択したクラウドストレージサービスのコストは考慮する必要があります。

#### セットアップの複雑さ：

reg-suit は柔軟ですが、その分、セットアップには少しだけ時間と知識が必要になる場合があります。

### Chromatic：

#### 使いやすさ：

Chromatic は Storybook と密に統合されており、セットアップが非常に簡単です。Storybook のプロジェクトに追加するだけで、すぐにビジュアルレグレッションテストを開始できます。

#### 管理された環境：

Chromatic はクラウドベースのサービスであり、スクリーンショットの保存や差分の管理が Chromatic によって完全に管理されます。これにより、セットアップやメンテナンスの手間が少なくなります。

#### コスト：

Chromatic には無料プランがありますが、プロジェクトの規模によっては有料プランを検討する必要があります。

#### GitHub/GitLab/Bitbucket の統合：

Chromatic は GitHub、GitLab、Bitbucket との深い統合を提供しており、プルリクエストやマージリクエスト内でビジュアルの変更を簡単に確認できます。
