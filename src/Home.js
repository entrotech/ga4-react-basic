import React from "react";
import analytics from "./hooks/analytics";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          analytics.sendEvent({
            category: "Action",
            action: "Click",
            label: "Click Me Button",
            value: 7,
          });

          console.log("You clicked me!");
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default Home;
