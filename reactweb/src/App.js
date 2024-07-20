import { useEffect } from "react";

function App() {
  const get = async () => {
    await fetch("http://localhost:8080")
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
  useEffect(() => {
    // get();
    // axios
    //   .get("http://localhost:8080")
    //   .then((res) => {
    //     console.log(res.json());
    //     alert(res.json());
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return <>Hii</>;
}

export default App;
