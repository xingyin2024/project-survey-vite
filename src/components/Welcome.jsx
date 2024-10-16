import "./Welcome.css"

/**
 * OBS! The content needs to be update! 
 **/


export const Welcome = ({ }) => {
  console.log("Welcome ok")
  const startForm = () => {  }

  return (
    <>
      <header className="header-welcome-form">
        <div className="center-content-header">
          <h1>The Science of Happiness</h1>
          <h2>Everday Joy Bossters Survey</h2>
          <button className="button-header" onClick={startForm}>Let us go!</button>
        </div>
      </header>
    </>
  )  
}