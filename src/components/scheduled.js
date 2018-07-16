import React from 'react';

class Scheduled extends React.Component {
  render() {
    return <section>
      <div className="schedule-wrapper">
        <h3>Scheduled Courses</h3>
        { this.props.courses.map(course => <h4>{ course }</h4>) }
        </div>
    </section>;
  }
}

export default Scheduled;