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
        <section></section>
        <main>
          <div className="positioning-wrapper">
            <div className="courses-wrapper">
              <header>
                <h1>Scheduler</h1>
                <a href="https://github.com/soundeffects/schedule-app"><img src="https://image.flaticon.com/icons/svg/25/25231.svg"/></a>
              </header>
              {this.props.courses.map((course, index) => 
                <Course key={index} details={course} select={this.select} selectedCourses={this.state.selectedCourses}/> 
              )}
            </div>
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