function App() {
  const list = [1, 2, 3, 4];
  const datalist = [
    { name: "Taro", age: 20 },
    { name: "Jiro", age: 21 },
  ];

  return (
    <div>
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
    </div>
  );
}

export default App;
