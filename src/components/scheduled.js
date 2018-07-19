import React from 'react';

class Scheduled extends React.Component {
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
  
  conditionalItems() {
    if (this.props.courses.length === 6) {
      return <form>
          <button type="submit">Confirm Schedule</button>
        </form>;
    }
  }
  
  render() {
    return <section>
      <div className="schedule-wrapper">
        <h3>Scheduled Courses</h3>
        { this.props.courses.map((course, index) => <h4 key={index}>{ course }</h4>) }
        { this.renderEmpty() }
        { this.conditionalItems() }
      </div>
    </section>;
  }
}

export default Scheduled;