// jest.fnを使ったモック関数を使用し、スパイを実装する
// 入力したデータを検証し、レスポンスするバリテーションを実装する

export class ValidationError extends Error {}

export function checkLength(value: string) {
  if (value.length === 0) {
    throw new ValidationError('1文字以上');
  }
}
