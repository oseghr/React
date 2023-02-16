import React from "react";
import Heading from "./Heading";
import Project from "./Project";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <h1>Hello Ose</h1>
      <h2>Welcome to my Site</h2>
      <section>
        <Project img="1" />
        <Project img="10" />
        <Project img="9" />
        <Project img="4" />
      </section>
    </div>
  );
}
