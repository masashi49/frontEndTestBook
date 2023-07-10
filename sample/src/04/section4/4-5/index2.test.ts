// import * as Fetchers from '../../04/fetchers';
// import { getMyArticlesData, httpError } from '../../04/fetchers/fixtures';

import { checkConfig } from '../../05/checkConfig';

jest.mock('../../04/fetchers');

test('テスト名', () => {
  const mockFn = jest.fn(); // モック関数を作成。jest内にて、mockFnを関数だと認識させる。
  mockFn();
  expect(mockFn).toBeCalled();
});

test('テスト名2', () => {
  const mockFn = jest.fn();
  expect(mockFn).not.toBeCalled();
});

test('テスト4', () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(1); // toHaveBennCalledTimes(呼ばれた回数)
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(2);
});

test('関数の中にあっても検知できる', () => {
  const mockFn = jest.fn();
  function greet() {
    mockFn();
  }
  greet();
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test('引数を持たせる', () => {
  const huga = jest.fn();
  const hoge = (name: string) => {
    huga(name);
  };
  hoge('太郎');
  expect(huga).toHaveBeenCalledWith('太郎'); // toHaveBeenCalledWith引数を調べるまっちゃー
});

test('テスト名', () => {
  function greet(name: string, callback?: (message: string) => void) {
    callback?.(`hellos ${name}`);
  }
  const huga = jest.fn();
  greet('太郎3', huga);
  expect(huga).toHaveBeenCalledWith('hellos 太郎3');
  expect(huga).not.toHaveBeenCalledWith('hel 太郎4');
});

const config = {
  mock: true,
  feature: { spy: true },
};

export function ckeckconfig(callback?: (payload: object) => void) {
  callback?.(config);
}

test('テスト名', () => {
  const mockFn = jest.fn();
  checkConfig(mockFn);
  expect(mockFn).toHaveBeenCalledWith({ mock: true, feature: { spy: true } });
});

test('部分的なオブジェクトの検証', () => {
  const mockFn = jest.fn();
  checkConfig(mockFn);
  expect(mockFn).toHaveBeenCalledWith(
    expect.objectContaining({
      // objectContainingはオブジェクトの1部分を検証できる
      mock: true, // mock: true, があるよね。
    })
  );
});
