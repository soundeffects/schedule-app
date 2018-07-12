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
    this.props.select(1);
    this.setState({ scheduled: true });
    
  }
  
  render() {
    return (
      <article>
        <h2>{this.props.details.name}</h2>
        { (this.props.selected < 6) ? <button onClick={this.handleClick}>+</button> : null }
      </article>
    );
  }
}

export default Course;