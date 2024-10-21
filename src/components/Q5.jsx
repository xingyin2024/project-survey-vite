export const FavoriteMusic = ({ updateFormData, value }) => {
  // Function to handle the user's selection and update the form's favoriteAlbum field
  const handleFavoriteMusicChange = (e) => {
    // Call updateFormData to update the "favoriteAlbum" field with the selected value
    updateFormData("favoriteMusic", e.target.value);
  };

  return (
    <div className="border-box-qa">
      <div className="qa-label flex-column">
        <p>5. </p>
        <p>What's your favorite Type of Music?</p>
      </div>

      <div className="qa-input flex-column">
      <label htmlFor="musictype"> Choose type of music:</label>
      <select 
      className="center-content-qa flex-column" 
      id="musictype"
      value={value} 
      onChange={handleFavoriteMusicChange}
      >
        <option value="">Select an Album</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="classic">Classic</option>
        <option value="indie">Indie</option>
      </select>
      </div>
    </div>
  );
};

/**
 * Summary:
 * This component provides a dropdown for selecting the user's favorite album and updates the form state when a selection is made.
 * The component demonstrates how to handle select inputs in React, using controlled components where the dropdown value is managed by the parent component's state.
 * It also shows how to pass values and functions between components using props, making it a practical example of controlled form handling in React.
 */
