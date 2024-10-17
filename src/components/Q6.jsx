/**
 * This component is used to collect and update the user's favorite artist in a multi-step form.
 * It demonstrates how to handle select dropdowns in React using the useState hook indirectly (from a parent component).
 * The Artist component receives the current favorite artist value and an update function as props, and updates the form data when the user selects an artist.
 * This file helps students understand how to manage dropdowns and controlled components using props in React.
 */

import "./Questions.css"


export const Artist = ({ updateFormData, value }) => {
  // Function to handle the user's selection and update the form's favoriteArtist field
  const handleFavoriteArtistChange = (e) => {
    // Call updateFormData to update the "favoriteArtist" field with the selected value
    updateFormData("favoriteArtist", e.target.value);
  };

  return (
    <div className="border-box-qa">
      <div className="qa-label flex-column">
        <p>6. </p>
        <p>What's your favorite Type of Music?</p>
      </div>

      <div className="qa-input flex-column">
        <label htmlFor="artist">Artist of the year:</label>
        <select 
        className="center-content-qa" 
        id="artist" 
        value={value} 
        onChange={handleFavoriteArtistChange}>
          <option>Select an Artist</option>
          <option value="beyonce">Beyonce</option>
          <option value="taylor-swift">Taylor Swift</option>
          <option value="shakira">Shakira</option>
          <option value="bad-bunny">Bad Bunny</option>
        </select>
      </div>
    </div>
  );
};

/**
 * Summary:
 * This component provides a dropdown for selecting the user's favorite artist and updates the form state when a selection is made.
 * The component demonstrates how to handle select inputs in React, using controlled components where the dropdown value is managed by the parent component's state.
 * It shows how to pass values and functions between components using props, making it a useful example of controlled form handling in React.
 */
