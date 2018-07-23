import React from 'react';
import _ from 'lodash';
import Course from './course';
import Scheduled from './scheduled';

import * as actions from '../actions';
import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedCourses: []
    };
    
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
  
  componentWillMount() {
    this.props.fetchCourses();
  }
  
  render() {
    return (
      <div className="App">
        <h1>Scheduler</h1>
        <main>
          <section></section>
          <div className="courses-wrapper">
            {this.props.courses.map((course, index) => 
              <Course key={index} details={course} select={this.select} selectedCourses={this.state.selectedCourses}/> 
            )}
          </div>
          <Scheduled courses={this.state.selectedCourses}/>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { courses: state };
}

export default connect(mapStateToProps, actions)(App);