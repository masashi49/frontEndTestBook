/**
 * jest.useFakeTimers : jestに偽のタイマーを使用するよう指示
 * jest.setSystemTime : 偽のタイマーで使用される現在システム時刻を設定
 * jest.useRealTimers : jestに真のタイマーを使用するように指示
 */

import { greetByTime } from '.';

describe('テスト名', () => {
  beforeAll(() => {
    console.log('beforeAll'); // 初回テスト時に走る
  });
  afterAll(() => {
    console.log('afterAll'); // 全テスト完了で走る
  });
  beforeEach(() => {
    console.log('beforeEach');
    jest.useFakeTimers(); // テストのたびに、偽のタイマーを使用します
  });
  afterEach(() => {
    console.log('afterEach');
    jest.useRealTimers(); // テストが終わるたびに、タイマーを本物に戻します
  });
  test('朝8時', () => {
    jest.setSystemTime(new Date(2022, 7, 20, 8, 0, 0));
    expect(greetByTime()).toBe('おはよう');
  });
  test('14時', () => {
    jest.setSystemTime(new Date(2022, 7, 20, 14, 0, 0));
    expect(greetByTime()).toBe('こんにちわ');
  });
  test('18時', () => {
    jest.setSystemTime(new Date(2022, 7, 20, 18, 0, 0));
    expect(greetByTime()).toBe('こんばんわ');
  });
  test('20時', () => {
    jest.setSystemTime(new Date(2022, 7, 20, 20, 0, 0));
    expect(greetByTime()).toBe('こんばんわ');
    console.log('test');
  });
});
