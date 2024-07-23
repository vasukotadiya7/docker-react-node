import { useEffect } from "react";

function App() {
  const get = async () => {
    await fetch("/msg")
      .then((res) => res.json())
      .then((json) => {
        alert(json);
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  get();
  return <>Welcome to react web</>;
}

export default App;
