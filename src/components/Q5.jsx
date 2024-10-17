/**
 * This component is used to collect and update the user's favorite album in a multi-step form.
 * It demonstrates how to handle select dropdowns in React using the useState hook indirectly (from a parent component).
 * The Album component receives the current favorite album value and an update function as props, and updates the form data when the user selects an album.
 * This file helps students understand how to manage dropdowns and controlled components using props in React.
 */


 export const FavoriteMusic = ({ updateFormData, value }) => {
  // Function to handle the user's selection and update the form's favoriteAlbum field
  const handleFavoriteMusicChange = (e) => {
    // Call updateFormData to update the "favoriteAlbum" field with the selected value
    updateFormData("favoriteMusic", e.target.value);
  };

  return (
    <div className="border-box-qa">
      <label className="qa-label flex-column">Favorite Type of Music:</label>

      <select className="center-content-qa flex-column" value={value} onChange={handleFavoriteMusicChange}>
        <option value="">Select an Album</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="classic">Classic</option>
        <option value="indie">Indie</option>
      </select>
    </div>
  );
};

/**
 * Summary:
 * This component provides a dropdown for selecting the user's favorite album and updates the form state when a selection is made.
 * The component demonstrates how to handle select inputs in React, using controlled components where the dropdown value is managed by the parent component's state.
 * It also shows how to pass values and functions between components using props, making it a practical example of controlled form handling in React.
 */
