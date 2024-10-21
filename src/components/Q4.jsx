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
  