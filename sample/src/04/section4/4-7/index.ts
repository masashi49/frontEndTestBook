// 現在時刻に依存したロジックのテスト

export function greetByTime(): string {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'おはよう';
  }
  if (hour < 18) {
    return 'こんにちわ';
  }
  return 'こんばんわ';
}
