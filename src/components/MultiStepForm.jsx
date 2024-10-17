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

import { useState } from "react";
import "./Questions.css";

import { Welcome } from "./Welcome";
import { PetPreference } from "./Q1";
import { SeasonPreference } from "./Q2";
import { Personality } from "./Q3";
import { TimePreference } from "./Q4";
import { FavoriteMusic } from "./Q5"; 
import { Artist } from "./Q6"; /***OBS! this part needs to be updated!  ***/ 



// Component: MultiStepForm
export const MultiStepForm = () => {
  console.log("MultiStepForm ok")

  // State to store form data for each field (petPreference, seasonPreference, personality,...)
  const [formData, setFormData] = useState({
    petPreference: "",
    seasonPreference: "",
    personality: "",
    timePreference: "",
    favoriteMusic: "", /***OBS! this part needs to be updated!  ***/
    favoriteArtist: "", /***OBS! this part needs to be updated!  ***/
  });

  // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State to track the current step (0 for welcome screen and 1-6 for questions)
  const [currentStep, setCurrentStep] = useState(0);
  
  // ---
  // ---

  // Function to update form data based on the provided field (key) and value
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
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

  // Function to move to the next step in the form, with validation at each step
  const nextStep = () => {
    if (currentStep < 6) {
      switch (currentStep) {
        case 1:
          if (formData.petPreference.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please select dog or cat or none");
          break;
        
        case 2:
          if (formData.seasonPreference.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please select your favorite season");
          break;
        
        case 3: /***OBS! this part needs to be updated!  ***/
          if (formData.personality.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please rate your personality between 1 to 100");
          break;
        
        case 4: /***OBS! this part needs to be updated!  ***/
          if (formData.timePreference.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please select what time of day suits you!");
          break;
        
        case 5: /***OBS! this part needs to be updated!  ***/
          if (formData.favoriteMusic.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please select your favorite type pf music!");
          break;
        
        default:
          setCurrentStep(currentStep + 1);
      }
    }
  };

  // Function to move back to the previous step in the form
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Function to submit the form, log the form data, and display it
  const submitForm = () => {
    console.log(formData)

    setFormSubmitted(true);

    const formattedData = `
    Pet: ${formData.petPreference}
    Season: ${formData.seasonPreference}
    Personality: ${formData.personality}
    /***OBS! this part below needs to be updated!  ***/
    Age: ${formData.age}
    Favorite Album: ${formData.favoriteAlbum}
    Favorite Artist: ${formData.favoriteArtist}
    `;

    alert(formattedData);
  };

  // Function to reset the form data and start the process over
  const startOver = () => {
    setFormData({
      petPreference: "",
      seasonPreference: "",
      personality: 50,
      age: "", /***OBS! this part needs to be updated!  ***/
      favoriteAlbum: "", /***OBS! this part needs to be updated!  ***/
      favoriteArtist: "", /***OBS! this part needs to be updated!  ***/
    });
    setFormSubmitted(false);
    setCurrentStep(0);
  };

  // ---
  // ---

  return (
    <div>
      {/* Display the welcome page and the form data after submission */}
      {formSubmitted ? (
        <div className="header-welcome-form">
          <h2>Thank you for taking the survey and here is your answear!</h2>
          <hr />
          <p>You prefer {formData.petPreference}</p>
          <p>You favorite season is {formData.seasonPreference}</p>
          <p>And you think {getPersonalityType(formData.personality)}</p>
          <p>How fun it is! Same like me 🌞 </p>
          {/***OBS! this part below needs to be updated!  ***/}
          <p>Age: {formData.age}</p>
          <p>Favorite Album: {formData.favoriteAlbum}</p>
          <p>Favorite Artist: {formData.favoriteArtist}</p>
          <hr />
          <h2>Hope you enjoy the survey ❤️❤️❤️</h2>
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

      {/***OBS! currentStep === 4-6 needs to be updated!  ***/}
      {currentStep === 4 && (
        <Age value={formData.age} updateFormData={updateFormData} />
      )}
      {currentStep === 5 && (
        <Album value={formData.favoriteAlbum} updateFormData={updateFormData} />
      )}
      {!formSubmitted && currentStep === 6 && (
        <Artist value={formData.favoriteArtist} updateFormData={updateFormData} />
        // {/***OBS! currentStep === 4-6 needs to be updated!  ***/}
      )}

      {/* Navigation buttons for moving between steps */}
      {!formSubmitted && currentStep > 0 && (
        <div className="cta-box?">
          {currentStep > 1 && <button className="button-qa prev-step" onClick={prevStep}>Previous</button>}
          {currentStep < 6 ? (
            <button className="button-qa next-step" onClick={nextStep}>Next</button>
          ) : (
            <button className="button-qa" onClick={submitForm}>Submit Form</button>
          )}
        </div>
      )}
      
    </div>

  );

};