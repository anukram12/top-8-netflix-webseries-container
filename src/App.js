import React from "react";
import "./App.css";
import Card from "./Card";
import Sdata from "./Sdata";

const App = () => {
  return (
    <>
      <h1 className="heading_style">List of top 5 Netflix Series </h1>
      <div className="app">
        {Sdata.map((val, index) => {
          return (
            <Card
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
