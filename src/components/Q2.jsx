/**
 * This component is used to collect and update the user's favorite season in a multi-step form.
 * It demonstrates how to handle select dropdowns in React using the useState hook indirectly (from a parent component).
 * The SeasonPreference component receives the current favorite season value and an update function as props, and updates the form data when the user selects an artist.
 */

export const SeasonPreference = ({ updateFormData, value }) => {
  // Function to handle user input and update the form's age field
  const handleSeasonChange = (e) => {
    // Call updateFormData to update the "age" field with the input's current value
    updateFormData("seasonPreference", e.target.value);
  };

  return (
    <div className="flex-container">
      <h3>Which season do you like most?</h3>
      
      <div>
        <label htmlFor="season"> Choose a season:</label>
        <select
          id="season"
          value={value}
          onChange={handleSeasonChange}
        >
          <option value="">Select a season</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
        </select>
      </div>
    </div>
  );
};
