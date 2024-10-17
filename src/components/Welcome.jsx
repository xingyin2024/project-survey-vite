import "./Welcome.css"

/**
 * OBS! The content needs to be update! 
 **/


export const Welcome = ({ startForm }) => {
  console.log("Welcome ok")

  return (
    <>
      <header className="header-welcome-form">
        <div className="center-content-header">
          <h1>What's your personality type?</h1>
          <h2>Are you ready for the Survey?</h2>
          <button className="button-header" onClick={startForm}>Let go!</button>
        </div>
      </header>
    </>
  )  
}