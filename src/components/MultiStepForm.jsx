/**
 * OBS! The content needs to be update! This is just an example from Diego's Technigo-useStateClass! 
 ** /

/**
 * This component represents a multi-step form that collects user information such as name, age, email,
 * favorite band, album, and artist. It uses React's useState hook to manage form data and track the current step.
 * The form has validation for each step to ensure the user enters valid data before moving to the next step.
 * Once submitted, the form data is displayed, and the user can choose to reset the form and start over.
 * This component demonstrates step-by-step form handling with React state management.
 */


import { Welcome } from "./Welcome";
import { Age } from "./Q1.jsx"
/* import { Q2 } from "./Q2";
import { Q3 } from "./Q3";
import { Q4 } from "./Q4";
import { Q5 } from "./Q5";
import { Q6 } from "./Q6";
import { useState } from "react"; */


// Component: MultiStepForm
export const MultiStepForm = () => {
  /* the connent below needs to be update */
  return (
  <div>
    <Welcome />
    <h1>this is h1 text</h1>
    <h2>this is h2 text</h2>
    <p>this is p text</p>

    <Age />
  </div>
  )

}
  
  
  
  
  
  
  
  
  










/**
 * Summary:
 * This multi-step form demonstrates how to manage complex form data across multiple steps with React's useState hook.
 * It validates input at each step and conditionally renders different components based on the current step.
 * The form collects user information and, upon submission, displays the data. The user can reset the form and start over.
 * This component is useful for teaching how to manage multi-step forms, form validation, and state management.
 */
