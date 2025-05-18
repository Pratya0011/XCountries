import { useState } from "react";
import "./App.css";
import CountryList from "./Components/CountryList.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountryList />
    </>
  );
}

export default App;
