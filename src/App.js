import React from "react";
import Header from "./Header";
import Schedule from "./Schedule";
import data from "./data.json";

const App = () => (
  <>
    <Header rooms={data.rooms} />
    <Schedule data={data} />
  </>
);

export default App;
