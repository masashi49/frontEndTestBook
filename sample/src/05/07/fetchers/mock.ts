// 本当の処理をmock化しているファイル
// testではpostMyAddressMockの代わりに、mockPostMyAddressを呼び出すようにしておく

import * as Fetchers from '.';
import { httpError, postMyAddressMock } from './fixtures';

export function mockPostMyAddress(status = 201) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, 'postMyAddress')
      .mockRejectedValueOnce(httpError);
  }
  return jest
    .spyOn(Fetchers, 'postMyAddress')
    .mockResolvedValueOnce(postMyAddressMock);
}
