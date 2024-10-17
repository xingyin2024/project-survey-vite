/**
 * OBS! The content of this component needs to be update! This is just an example from Diego's Technigo-useStateClass! 
 ** /
 
 /**
 * This component is used to collect and update the user's age in a multi-step form.
 * It demonstrates how to handle form inputs in React using the useState hook indirectly (from a parent component).
 * The Age component receives the current age value and an update function as props, and updates the form data whenever the user inputs a number.
 * This file helps students understand how controlled components work and how to pass down state and functions between components in React.
 */

 import "./Questions.css"


export const Age = ({ updateFormData, value }) => {
  // Function to handle user input and update the form's age field
  const handleAgeChange = (e) => {
    // Call updateFormData to update the "age" field with the input's current value
    updateFormData("age", e.target.value);
  };

  return (
    <div className="flex-container">

      <p className="qa-label">
        <div className="center-content-qa">
          <p>2.</p>

          <label htmlFor="number">Age:</label>

        </div>
      </p>
      
      <p className="qa-input">
        <div className="center-content-qa">

          <input placeholder="Answer" type="number" value={value} onChange= {handleAgeChange} />
          
          <button className="button-qa">Next question</button>
        </div>
      </p>

    </div>
  );
};

/**
 * Summary:
 * This component provides an input field for the user's age and updates the form state through the handleAgeChange function as the user types.
 * The component receives both the current age value and the update function as props, making it a good example of controlled inputs and props usage in React.
 */
