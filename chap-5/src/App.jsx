import React from "react";
import Pizza from "./components/Pizza";
import { pizzaData } from "./data.js";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main>
      <Header />
      <Menu />
      <Footer />
    </main>
  );
}
