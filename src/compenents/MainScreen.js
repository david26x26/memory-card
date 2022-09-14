import React from "react";
import Button from "./Button";

const MainScreen = () => {
  const levelText = ["Easy", "Medium", "Hard"];
  return (
    <div className="mainscreen text-center">
      <h1 className="mainscreen--title">Memory Gamer</h1>
      <div>
        <Button label="Easy" action="" />
        <Button label="Start" action="" />
      </div>
      <p>Made with</p>
    </div>
  );
};

export default MainScreen;
