import React, { useState } from 'react';
import './App.css'; // You can define your own CSS for styling

function App() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement your logic to handle the submitted feedback
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Feedback Form</h1>
        {submitted ? (
          <p>Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              rows="4"
              cols="50"
              placeholder="Type your feedback here..."
              value={feedback}
              onChange={handleFeedbackChange}
            />
            <br />
            <button type="submit">Submit Feedback</button>
          </form>
        )}
      </header>
    </div>
  );
}

export default App;
