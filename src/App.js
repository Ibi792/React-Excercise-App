import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import './App.css';

function App() {
    const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="App">
      {selectedExercise === null? (
        // Menu Screen
        <div>
          <h1>Go Do Something!</h1>
          <p>Select an Exercise</p>
          <button onClick={() => setSelectedExercise("pushups")}>Push-Ups</button>
          <button onClick={() => setSelectedExercise("running")}>Running</button>
          <button onClick={() => setSelectedExercise("pullups")}>Pull-Ups</button>
          <button onClick={() => setSelectedExercise("biking")}>Biking</button>
        </div>
      ) : (
        //Exercise
        <div>
          <button onClick={() => setSelectedExercise(null)}>Back to Menu</button>
          {selectedExercise === "pushups" ? (
            <RepetitionExercise name="Push-ups" />
          ) : selectedExercise === "running" ? (
            <DurationExercise name="Running" />
          ) : selectedExercise === "pullups" ? (
            <RepetitionExercise name="Pull-ups" />
          ) : (
            <DurationExercise name="Biking" />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
