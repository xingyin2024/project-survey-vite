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
    <div className="flex-container">
      <h3>Do you think you are more of an introverted or extroverted person?</h3>
      
      <div>
        <label htmlFor="personality">
          Extrovert
          <input
            type="range"
            id="personality"
            min="0"
            max="100"
            value={value}
            onChange={handlePersonalityChange}          
          />
          Introvert
        </label>
        <p>Current value: {value}</p>
      </div>
    </div>
  );
};
