import "./Welcome.css"

export const Welcome = ({ startForm }) => {
  return (
    <>
      <header className="header-welcome-form">
        <div className="center-content-header">
          <h1>What is your personality type?</h1>
          <p>Are you ready for the Survey?</p>
          <button className="button-header" onClick={startForm}>Let go!</button>
        </div>
      </header>
    </>
  )  
}