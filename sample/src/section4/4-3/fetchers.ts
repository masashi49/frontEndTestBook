// webAPIサーバーを通じたデータ取得と更新と取得
// スタブを使い、偽のレスポンスでテストする
// テストコード → テスト対象関数 → スタブapi

export type Profile = {
  id: string;
  name?: string;
  age?: number;
  email: string;
};

export function getMyProfile(): Promise<Profile> {
  return fetch('https://myapi.testing.com/my/profile').then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  });
}
