import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(-1);
  const [advice, setAdvice] = useState("Hello World");
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

export default App;

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> peices of advice
    </p>
  );
}
