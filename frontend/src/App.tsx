import { useEffect, useState } from "react";
import "./App.css";
import { InitiateStream } from "./wasm";

function App() {
  const [wasmLoaded, setWasmLoaded] = useState(false);

  useEffect(() => {
    InitiateStream()
      .then(() => setWasmLoaded(true))
      .catch((err) => console.error(err));
  });

  return (
    <div>
    {/*@ts-ignore*/}
      {wasmLoaded ? <h2> Go wasm says: <code>{window.hello()}</code></h2> : "Loading wasm..."}
    </div>
  );
}

export default App;
