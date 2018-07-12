import React from 'react';
import courses from '../courses';
import Course from './course'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Scheduler</h1>
        <main>
          { courses.map(course => <Course details={course}/> ) }
        </main>
      </div>
    );
  }
}

export default App;