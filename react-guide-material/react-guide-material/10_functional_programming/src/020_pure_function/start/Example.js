  // 関数型（純粋関数）
  // POINT fn(決まった引数) -> 決まった戻り値
  // POINT 関数外の状態（データ）は参照・変更しない。
  // POINT 関数外に影響を及ぼさない。
  // ・引数で渡された値を変更しない。
  // 不変性()
  // 上記の要件を満たさない操作は「副作用」と呼ぶ。

const Example = () => {
  const val1 = 3, val2 = 9;
  let result;
  const add = (val1) => {
    result = val1 + val2; // これは関数外に影響を及ぼしているので純粋関数とは呼ばない
    return val1 + val2;
  }
  
  return (
    <>
      <h3>純粋関数</h3>
      <p>fn(決まった引数) には 決まった戻り値 を返す</p>
      <div>純粋関数:add(val1, val2)</div>
      <div>{add(val1, val2)}</div>
    </>
  );
};

export default Example;
