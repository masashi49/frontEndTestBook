const hoge = () => {
  let listUser = [
    { id: 1, name: 'Alice', status: 'active' },
    { id: 2, name: 'Bob', status: 'inactive' },
    { id: 3, name: 'Charlie', status: 'active' },
    { id: 4, name: 'Dave', status: 'active' },
  ];

  // id:1, id:3, id:4 が hit する
  const フィルター = listUser.filter(
    (listUserのn個目, n番目, listUserの実態) =>
      listUserのn個目.status === 'active'
  );

  //  { id: 4, name: 'Dave', status: 'active' }
  const ファインド = listUser.find(
    (listUserのn個目) => listUserのn個目.id === 4
    //(listUserのn個目) => listUserのn個目.id === 9  undefinedになる
  );

  // idに3があったら、配列の中で何番目にあるかを数字で返すkaesu 0から数えて2となる
  const ファインドインデックス = listUser.findIndex(
    (listUserのn個目) => listUserのn個目.id === 3
  );

  const listUser2 = [...listUser];
  // splice(0から数えてn番めから, n個消し去る);
  listUser2.splice(2, 1); // 2番目(3つめ)から1つ消す。(id: 3の箇所だけ消える)

  let listProduct = [
    { name: 'Product 1', quantity: 5 },
    { name: 'Product 2', quantity: 3 },
    { name: 'Product 3', quantity: 7 },
  ];

  const 初期値 = 0;
  const quantityの合計 = listProduct.reduce(
    (
      前の呼び出しからの累積値で初回は初期値,
      処理中の現在の要素,
      現在の要素のインデックス,
      listProduct配列そのもの
    ) => 前の呼び出しからの累積値で初回は初期値 + 処理中の現在の要素.quantity,
    初期値
  );

  let 食べ物 = [
    { id: 1, name: 'Apple', type: 'fruit' },
    { id: 2, name: 'Orange', type: 'fruit' },
    { id: 3, name: 'Banana', type: 'fruit' },
    { id: 4, name: 'Tomato', type: 'vegetable' },
    { id: 5, name: 'Carrot', type: 'vegetable' },
  ];

  // ['fruit','vegetable']
  let types = [
    ...new Set( // Setは重複するものを持てない
      食べ物.map((食べ物のn個目, n番目, 食べ物の実態) => 食べ物のn個目.type)
    ),
  ];

  let numbers = [1, 2, 2, 3, 4, 4, 5];
  const hugeee = [new Set(numbers)];
  const hugee2 = [...new Set(numbers)];

};

export const ContactNumber = () => {
  const list = hoge();
  return (
    <fieldset>
      <legend>連絡先</legend>
      <div>
        <label>
          電話番号
          <input type='text' name='phoneNumber' />
        </label>
      </div>
      <div>
        <label>
          お名前
          <input type='text' name='name' />
        </label>
      </div>
    </fieldset>
  );
};
