// import { useState } from "react";
import "./index.css";
import { Header } from "./components/Header";
import { Result } from "./components/Result";
import { QuestionOne } from "./components/QuestionOne";


export const App = () => {
  console.log("hello!")
  return (
    <>
      <Header />
      <QuestionOne />
      <Result />
    </>
  
  );
};
