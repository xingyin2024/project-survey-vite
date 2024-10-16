// import { useState } from "react";
import "./index.css";

import { Welcome } from "./components/Welcome";
import { MultiStepForm } from "./components/MultiStepForm";


export const App = () => {
  console.log("hello!")
  return (
    <>
      <Welcome />
      <MultiStepForm />
    </>
  
  );
};
