import { useEffect, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  });
  return (
    <div className="main-component">
      <div className="header">
        <h1>ROBO ACTIONS</h1>
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="card">
        <Card data={data} />
      </div>
    </div>
  );
};

export default App;
