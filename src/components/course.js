import React from 'react';

class Course extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      scheduled: false,
      expanded: false
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    this.props.select(this.props.details.name, !this.state.scheduled);
    this.setState({ scheduled: !this.state.scheduled });
  }
  
  conditionalItems() {
    if(this.state.scheduled || this.props.selectedCourses.length < 6) {
      if (this.state.scheduled) {
        return <button className="remove-course" onClick={this.handleClick}>-</button>;
      } else {
        return <button className="add-course" onClick={this.handleClick}>+</button>;
      }
      
    }
  }
  
  render() {
    return (
      <article>
        <h2>{this.props.details.name}</h2>
        { this.conditionalItems() }
      </article>
    );
  }
}

export default Course;