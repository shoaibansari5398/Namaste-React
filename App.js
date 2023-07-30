import React from "react";
import ReactDOM from "react-dom/client";

// JSX (Transpiled befoore it reahes the JS Engine) - PARCEL - BABEL
//JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTMLElement(Readable

// const jsxHeading = <h1>This is Hello From JSX</h1>;
// console.log(jsxHeading);

const Title = () => <h1>Namaste React</h1>;

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1>This is h1</h1>
      <h2>This is h2</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
