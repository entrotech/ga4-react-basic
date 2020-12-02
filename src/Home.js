import React from "react";
import analytics from "./hooks/analytics";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() =>
          analytics.sendEvent({
            category: "General",
            action: "click",
            label: "Click Me",
            value: 7,
          })
        }
      />
    </div>
  );
}

export default Home;
