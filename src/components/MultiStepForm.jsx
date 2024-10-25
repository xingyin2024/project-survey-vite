/**
 * This component represents a multi-step form that collects user information such as preference of pet & season, personality, favorite music & artist. It uses React's useState hook to manage form data and track the current step.
 * The form has validation for each step to ensure the user enters valid data before moving to the next step.
 * Once submitted, the form data is displayed, and the user can choose to reset the form and start over.
 * This component demonstrates step-by-step form handling with React state management.
 */

import { useState } from "react";
import "./Questions.css";

import { Welcome } from "./Welcome";
import { PetPreference } from "./Q1";
import { SeasonPreference } from "./Q2";
import { Personality } from "./Q3";
import { TimePreference } from "./Q4"
import { FavoriteMusic } from "./Q5"; 
import { Artist } from "./Q6"; 



// Component: MultiStepForm
export const MultiStepForm = () => {
  // State to store form data for each field (petPreference, seasonPreference, personality,...)
  const [formData, setFormData] = useState({
    petPreference: "",
    seasonPreference: "",
    personality: "",
    timePreference: "",
    favoriteMusic: "", 
    favoriteArtist: "", 
  });

  // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State to track the current step (0 for welcome screen and 1-6 for questions)
  const [currentStep, setCurrentStep] = useState(0);
  
  // ---
  const [validationMessage, setValidationMessage] = useState("");
  // ---

  // Function to update form data based on the provided field (key) and value
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
    setValidationMessage("");
  };
  
  // Function to move to the first step in the form
  const startForm = () => {
    setCurrentStep(1); // Set current step to 1 when the form starts
  };


  // Function to determine personality type based on the slider value
  const getPersonalityType = (value) => {
    if (value < 50) {
      return `
      you are ${100 - value}% extroverted.
      `;
    } else if (value > 50) {
      return `
      you are ${value}% introverted.
      `;
    } else {
      return `
      you are equally extroverted and introverted.
      `;
    }
  }

  // Function to combine validation and checks current step and provides feedback if invalid
  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.petPreference.trim() === "" ? "Please select dog or cat or none!" : null;
      case 2:
        return formData.seasonPreference.trim() === "" ? "Please select your favorite season!" : null;
      case 3:
        return formData.personality.trim() === "" ? "Please rate your personality!" : null;
      case 4:
        return formData.timePreference.trim() === "" ? "Please select what time of day suits you!" : null;
      case 5:
        return formData.favoriteMusic.trim() === "" ? "Please select your favorite type of music!" : null;
      case 6:
        return formData.favoriteArtist.trim() === "" ? "Please select your favorite artist!" : null;      
      default:
        return null;
    }
  };
  
  // Function to move to the next step in the form
  const nextStep = () => { 
    const validationMessage = validateStep();

    !validationMessage ? setCurrentStep(currentStep + 1) : setValidationMessage(validationMessage);
   }

  // Function to move back to the previous step in the form
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Function to submit the form, log the form data, and display it
  const submitForm = () => {
    setFormSubmitted(true);

    const formattedData = `
    Pet: ${formData.petPreference}
    Season: ${formData.seasonPreference}
    Personality: ${formData.personality}
    Time of day: ${formData.timePreference}
    Favorite Music: ${formData.favoriteMusic}
    Favorite Artist: ${formData.favoriteArtist}
    `;

    alert(formattedData);
  };

  // Function to reset the form data and start the process over
  const startOver = () => {
    setFormData({
      petPreference: "",
      seasonPreference: "",
      personality: "",
      timePreference: "", 
      favoriteMusic: "", 
      favoriteArtist: "", 
    });
    setFormSubmitted(false);
    setCurrentStep(0);
    setValidationMessage("");
  };

  // ---
  // ---

  return (
    <div>
      {/* Display the welcome page and the form data after submission */}
      {formSubmitted ? (
        <div className="result-form">
          <h2>Thank you for taking the survey and here is your answear!</h2>
          <hr />
          <p>You prefer {formData.petPreference}</p>
          <p>You favorite season is {formData.seasonPreference}</p>
          <p>And you think {getPersonalityType(formData.personality)}</p>
          <p>How fun it is! Same like me 🌞 </p>
          <p>Time of day: {formData.timePreference}</p>
          <p>Favorite Music: {formData.favoriteMusic}</p>
          <p>Favorite Artist: {formData.favoriteArtist}</p>
          <hr />
          <h3>Hope you enjoy the survey</h3>
          <p>❤️❤️❤️</p>
          <button className="button-header" onClick={startOver}>Start Over</button>
        </div>
      ) : (
        currentStep === 0 && <Welcome startForm={startForm} />
      )}

      {currentStep === 1 && (
        <PetPreference value={formData.petPreference} updateFormData={updateFormData} />
      )}

      {currentStep === 2 && (
        <SeasonPreference value={formData.seasonPreference} updateFormData={updateFormData} />
      )}

      {currentStep === 3 && (
        <Personality value={formData.personality} updateFormData={updateFormData} />
      )}

      {currentStep === 4 && (
        <TimePreference value={formData.timePreference} updateFormData={updateFormData} />
      )}

      {currentStep === 5 && (
        <FavoriteMusic value={formData.favoriteMusic} updateFormData={updateFormData} />
      )}

      {!formSubmitted && currentStep === 6 && (
        <Artist value={formData.favoriteArtist} updateFormData={updateFormData} />
      )}

      {/* Navigation buttons for moving between steps */}
      {!formSubmitted && currentStep > 0 && (
        <div className="cta-box">
          {currentStep > 1 && <button className="button-qa prev-step" onClick={prevStep}>Previous</button>}

          {currentStep < 6 ? (
            <button
              className={`button-qa ${validateStep() ? "disabled-btn" : "next-step"}`} onClick={nextStep}
              disabled={!!validationMessage}
            >
              Next
            </button>
          ) : (
            <button
              className={`button-qa ${validateStep() ? "disabled-btn" : "submit-btn"}`}
              onClick={submitForm}
              disabled={!!validationMessage}
            >
              Submit Form
            </button>
          )}
          
          
        </div>
    
      )}
      {validationMessage && <p className="validation-message">{validationMessage}</p>}
    </div>

  );

};