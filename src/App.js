import React from "react";
import "bulma";

import Totp from "./components/totp";
import Faq from "./components/faq";

function App() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">React TOTP</h1>
          <h2 className="subtitle has-text-centered pt-2">
            The One-time Password Generator for when you have lost everything.
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="container is-centered" style={{ maxWidth: "400px" }}>
          <Totp />
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: "700px" }}>
          <Faq />
        </div>
      </section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Built with{" "}
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>{" "}
            by{" "}
            <a href="https://carl-fredrik.arvidson.io">Carl-Fredrik Arvidson</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
