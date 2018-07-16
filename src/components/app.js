import React from 'react';
import _ from 'lodash';
import courses from '../courses';
import Course from './course'


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedCourses: []
    }
    
    this.select = this.select.bind(this);
  }
  
  select(course, add) {
    const selectedCourses = this.state.selectedCourses;
    if (add) {
      selectedCourses.push(course);
    } else {
      _.pull(selectedCourses, course);
    }
    this.setState({ selectedCourses });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Scheduler</h1>
        <main>
          {courses.map(course => 
            <Course details={course} select={this.select} selectedCourses={this.state.selectedCourses}/> 
          )}
        </main>
      </div>
    );
  }
}

export default App;