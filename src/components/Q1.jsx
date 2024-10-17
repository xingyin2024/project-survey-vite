 /**
 * This component is used to collect and update the user's pet preference in a multi-step form.
 * The selected option is stored in formData.petPreference. 
 * It demonstrates how to handle input type Radio in React using the useState hook indirectly (from a parent component).
 * The PetPreference component receives the current petPreference value and an update function as props, 
 * and updates the form data using radio buttons to let the user choose between "Dog" and "Cat."
 * Each radio button is associated with a unique id and has proper labels for accessibility.
 * Both radio buttons use the same name ("petPreference"), which groups them together, 
 * ensuring only one radio button can be selected at a time.
 */

export const PetPreference = ({ updateFormData, value }) => {
  // Function to handle user input and update the form's petPreference field
  const handlePetChange = (e) => {
    // Call updateFormData to update the "petPreference" field with the input's current value
    updateFormData("petPreference", e.target.value);
  };

  return (
    <div className="border-box-qa">
      <div className="qa-label flex-column">
        <p>1. </p>
        <p>Are you a dog or a cat person?</p>
      </div>
            
      <div className="qa-input flex-row">
      <form>
        {/* Radio button for Dog */}
        <label htmlFor="dog">
          <input
          type="radio"
          // name="petPreference"
          id="dog"
          value="dog"
          checked={value === "dog"}
          onChange={handlePetChange}
        />
          Dog
        </label>

        <label htmlFor="cat">
          <input
          type="radio"
          // name="petPreference"
          id="cat"
          value="cat"
          checked={value === "cat"}
          onChange={handlePetChange}
        />
          Cat
        </label>

        <label htmlFor="none">
          <input
          type="radio"
          // name="petPreference"
          id="none"
          value="none"
          checked={value === "none"}
          onChange={handlePetChange}
        />
          Neither
        </label>
      </form>
      </div>         
    </div>
  );
};
