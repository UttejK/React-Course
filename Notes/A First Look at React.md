# Course-Introduction

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

## What is React?

**Simple words:** React is a JavaScript Library for Building User Interfaces.

**Crazy Explanation:** Extremely popular, Declarative, Component-Based, State-Driven *JavaScript Library for building user interfaces*, Created by Facebook.

- **Based on Components**: Components are the **building blocks** of user interfaces in React.
- **Declarative**: 
	- We describe how components look like and how they work using a declarative syntax called JSX. 
	- **Declarative** simply means telling react what a component should look like, based on current state/data.
	- React is an **abstraction** away from the **DOM**: we never touch the DOM.
	- **JSX**, a syntax that combines HTML, CSS, JavaScript as well as referencing other components.
- **State-Driven**:
	- React Reacts to state changes by re-rendering the UI.
	![[State.png]]

- **JavaScript Library**:
	- React is only a JavaScript library and not a framework, as it is only the **view** layer. We need to pick multiple external libraries to build complete applications.
	- Multiple frameworks have been built on top of react, eg., **next.js, remix**, etc.
	- Many large companies such as **PayPal, Tesla, Netflix, IMDB, Airbnb, Drop Box**, etc. have already adopted react into their workflow.

## Pure React

This is how you would write pure react in a html file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello React!</title>
  </head>
  <body>
    <div id="root"></div>

    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>

    <script>
      function App() {
        // const time = new Date().toLocaleTimeString();
        const [time, setTime] = React.useState(new Date().toLocaleTimeString());

        React.useEffect(function () {
          setInterval(function () {
            setTime(new Date().toLocaleTimeString());
          }, 1000);
        }, []);

        return React.createElement("header", null, `Hello React! It's ${time}`);
      }

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(React.createElement(App));
    </script>
  </body>
</html>

```

## How to set up a new project

There are two options to setup a react project:

### Create React App (create-react-app)
- "**Complete starter kit**" for react applications.
- Everything a developer needs is already configured *(i.e., ESLint, Prettier, Jest, etc.)*.
- **Uses slow and outdated technologies** *(i.e., Webpack)*.
- Best used for tutorials or experiments
- **Not Recommended** for Real-World Applications.

### Vite
- **Modern build tool** that contains a template for setting up react applications.
- The Developer has to manually configure ESLint, and other Developer essential tools.
- Extremely fast **Hot Module Replacement** *(HMR)* and bundling.
- **Recommended** for Real-World Applications.

### React Frameworks
The React team now advices to use a **React Framework** for new projects. Such as **Remix**, and **Next.js**.

