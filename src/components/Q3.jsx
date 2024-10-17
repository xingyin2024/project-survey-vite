/**
 * This component is used to collect and update the user's personality in a multi-step form.
 * It demonstrates how to handle range inputs in React using the useState hook indirectly (from a parent component).
 * The Personality component receives the current value and an update function as props, and updates the form data whenever the user inputs a number.
 * This file helps students understand how controlled components work and how to pass down state and functions between components in React.
 */

export const Personality = ({ updateFormData, value }) => {
  // Function to handle user input and update the form's age field
  const handlePersonalityChange = (e) => {
    // Call updateFormData to update the "age" field with the input's current value
    updateFormData("personality", e.target.value);
  };

  return (
    <div className="border-box-qa">
      <div className="qa-label  flex-column">
        <p>3. </p>
        <p>Do you think you are more of an introverted or extroverted person?</p>
      </div>
      
      <div className="qa-input flex-column">
        <p>Current value: {value}</p>
        <label className="flex-row" htmlFor="personality">
          <p><b>Extrovert</b>😁</p>
          <input
            type="range"
            id="personality"
            min="0"
            max="100"
            value={value}
            onChange={handlePersonalityChange}          
          />
          <p><b>Introvert</b>😉</p>
        </label>
      </div>
    </div>
  );
};
