import React from 'react';
import courses from '../courses';
import Course from './course'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: 0
    }
    
    this.select = this.select.bind(this);
  }
  
  select(increment) {
    this.setState({ selected: this.state.selected + increment });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Scheduler</h1>
        <main>
          { courses.map(course => <Course details={course} select={this.select} selected={this.state.selected}/> ) }
        </main>
        <h1>{this.state.selected}</h1>
      </div>
    );
  }
}

export default App;