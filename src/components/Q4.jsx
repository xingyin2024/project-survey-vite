/**
 * OBS! The content of this component needs to be update! This is just an example from Diego's Technigo-useStateClass! 
 ** /
 
 /**
 * This component is used to collect and update the user's age in a multi-step form.
 * It demonstrates how to handle form inputs in React using the useState hook indirectly (from a parent component).
 * The Age component receives the current age value and an update function as props, and updates the form data whenever the user inputs a number.
 * This file helps students understand how controlled components work and how to pass down state and functions between components in React.
 */



 export const TimePreference = ({ updateFormData, value }) => {
    // Function to handle user input and update the form's timepref. field
    const handleTimeChange = (e) => {
      // Call updateFormData to update the timepref. field with the input's current value
      updateFormData("timePreference", e.target.value);
    };
  
    return (
      <div className="border-box-qa">
        <div className="qa-label flex-column">
          <p>4. </p>
          <p>Are you a early bird or a night owl?</p>
        </div>
              
        <div className="qa-input flex-row">
        <form className="flex-column">
          {/* Radio button for earlybird */}
          <label  className="radio-label" htmlFor="earlybird">
            <input
            type="radio"
            // name="petPreference"
            id="earlybird"
            value="early bird"
            checked={value === "early bird"}
            onChange={handleTimeChange}
          />
            <span>Early bird</span>
          </label>
  
          <label  className="radio-label" htmlFor="nightowl">
            <input
            type="radio"
            // name="petPreference"
            id="nightowl"
            value="night owl"
            checked={value === "night owl"}
            onChange={handleTimeChange}
          />
            <span>Night owl</span>
          </label>
  
          <label  className="radio-label" htmlFor="none">
            <input
            type="radio"
            id="none"
            value="none"
            checked={value === "none"}
            onChange={handleTimeChange}
          />
            <span>Neither</span>
          </label>
        </form>
        </div>         
      </div>
    );
  };
  
  /**
   * Summary:
   * This component provides an input field for the user's age and updates the form state through the handleAgeChange function as the user types.
   * The component receives both the current age value and the update function as props, making it a good example of controlled inputs and props usage in React.
   */
  