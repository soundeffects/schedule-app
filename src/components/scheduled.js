import React from 'react';

class Scheduled extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    if (!(this.props.courses.length === 6)) {
      event.preventDefault();
    }
  }
  
  renderEmpty() {
    const emptySlots = 6 - this.props.courses.length;
    const emptyElements = [];
    const times = x => f => {
      if (x > 0) {
        f();
        times (x - 1) (f);
      }
    };
    
    times (emptySlots) (() => emptyElements.push(<h4 className="empty">Empty Slot</h4>));
    return emptyElements;
  }
  
  render() {
    return <div className="schedule-wrapper">
      <h3>Scheduled Courses</h3>
      { this.props.courses.map((course, index) => <h4 key={index}>{ course }</h4>) }
      { this.renderEmpty() }
      <form onSubmit={this.handleSubmit}>
        <button className={this.props.courses.length === 6 ? 'shown-button' : 'hidden-button'} type="submit">
          Confirm Schedule
        </button>
      </form>
    </div>;
  }
}

export default Scheduled;