import React from "react";
import "./styles.css";

export default function App() {
  const linkRef = React.useRef();

  function handleClick(link) {
    console.count(`${link} clicked`);
  }

  function handleContainerClick(e) {
    handleLinkClick(e);
  }

  function handleLinkClick(e) {
    handleClick("link");
  }

  function handleSublinkClick(e) {
    e.stopPropagation();
    handleClick("sublink");
  }

  return (
    <div className="App">
      <h1>Nested interactive content</h1>

      <div className="container" onClick={handleContainerClick}>
        <img
          src="https://www.bellvest.ca/app/uploads/2018/05/Avatar-Female.jpg"
          alt=""
        />

        <a ref={linkRef} href="/#link" onClick={handleLinkClick}>
          <h2>Specialist</h2>
        </a>

        <a href="/#sublink" onClick={handleSublinkClick}>
          Nested sub-link
        </a>
      </div>
    </div>
  );
}
