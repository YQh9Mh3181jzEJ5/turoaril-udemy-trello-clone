function App() {
  const list = [1, 2, 3, 4];
  const datalist = [
    { name: "Taro", age: 20 },
    { name: "Jiro", age: 21 },
  ];

  const words = [
    "apple",
    "banana",
    "pineapple",
    "orange",
    "grape",
    "peach",
    "lemon",
  ];

  const result = words.filter((word) => word.length < 6);

  const items = ["item1", "item2", "item3", "item4", "item5"];
  items.splice(0, 1);
  const removed = items.splice(0, 1);
  console.log(removed);
  items.splice(1, 0, removed[0]);

  return (
    <div>
      {/* map関数 */}
      <h1>map-practice</h1>
      {list.map((number) => (
        <div>{number * 2}</div>
      ))}
      {datalist.map((data) => (
        <div>
          {data.name}
          <span> {data.age}</span>
        </div>
      ))}
      <hr />
      {/* filter関数 */}
      {/* 条件を満たした要素だけを残す関数 */}
      {/* 条件を満たさない要素を削除する */}
      <h1>filter-practice</h1>
      <div>{result}</div>
      <hr />
      {/* splice関数 */}
      {/* 配列から要素を削除する関数 */}
      <h1>splice-practice</h1>
    </div>
  );
}

export default App;
