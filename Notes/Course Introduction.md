# A First Look at React
---

## The Rise of Single-Page Applications

Before around 2010, almost all the websites were rendered on the Server. So in server side rendering a website is basically assembled on the backend, on a web server, based on data and templates. The resulting HTML, CSS, and JavaScript code, is then sent to the client side, to the web browser that requested the page. The browser then takes this code and displays it. A typical example for SSR Websites, would be all the websites built with WordPress.

The JS that was used here was very simple and was meant to add minimal interactions with the web. And jQuery was used for this.

The Developers would go on to write more and more JS, which led to the rise of single page applications, that would run most of the JavaScript on the Client side.

So in client side rendering, generally the work of rendering the webpage is shifted from the server to the client. Which turned the famous web pages term into web applications

## Why Do Frontend Frameworks Exist?

JavaScript front-end frameworks exists because: 

> 1. Keeping a user interface in sync with data is **really hard** and a **lot of work**.
> 
> 2. They enforce a **correct** way of structuring and writing code (therefore contributing to solving the problem of **spaghetti code**).
>  
> 3. They give developers and teams a **consistent** way of building front-end applications.

## React vs Vanilla JavaScript
---
*Example*: **React Code**

```jsx
import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}

```

*Example*: **Vanilla JavaScript Code**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Vanilla JS Advice</title>
  </head>
  <body>
    <h1 class="advice"></h1>
    <button class="btn">Get advice</button>
    <p>You have read <strong class="count"></strong> pieces of advice</p>

    <script>
      // Manually selecting DOM elements (which require a class or ID in markup)
      const adviceEl = document.querySelector(".advice");
      const btnEl = document.querySelector(".btn");
      const countEl = document.querySelector(".count");

      const getAdvice = async function () {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();

        // Updating values
        advice = data.slip.advice;
        count = count + 1;

        // Manually updating DOM elements
        countEl.textContent = count;
        adviceEl.textContent = advice;
      };

      // Setting initial values
      let count = 0;
      let advice;
      getAdvice();

      // Attaching an event listener
      btnEl.addEventListener("click", getAdvice);
    </script>
  </body>
</html>
```

