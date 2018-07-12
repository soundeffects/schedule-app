import React from 'react';

class Course extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      scheduled: false,
      expanded: false
    };
  }
  
  render() {
    const details = this.props.details;
    if (this.state.scheduled) {
      return (
        <article className="scheduled">
          <h2>{details.name}</h2>
        </article>
      );
    } else if (this.state.expanded) {
      return <article className="expanded">{details.name}</article>
    }
    return (
      <article className="list">
        <h2>{details.name}</h2>
        <button>+</button>
      </article>
    );
  }
}

export default Course;