import React from "react";
import "./App.css";




//import your component
import FeaturesHeader from "./components/before/header";
import FeaturesFooter from "./components/before/footer";
import FeaturesMain from "./components/before/main";
function App() {
  return (
    <div>
      <FeaturesHeader/>
      <FeaturesMain/>
      <FeaturesFooter/>
    </div>
  );
}

export default App;
