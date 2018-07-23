import React from 'react';

import AnimateHeight from 'react-animate-height';

class Course extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      scheduled: false,
      expanded: false
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.expand = this.expand.bind(this);
  }
  
  handleClick() {
    this.props.select(this.props.details.name, !this.state.scheduled);
    this.setState({ scheduled: !this.state.scheduled });
  }
  
  expand() {
    this.setState({ expanded: !this.state.expanded });
  }
  
  renderButton() {
    if(this.state.scheduled || this.props.selectedCourses.length < 6) {
      if (this.state.scheduled) {
        return <button onClick={this.handleClick}><i className="far fa-minus-square"></i></button>;
      } else {
        return <button onClick={this.handleClick}><i className="far fa-plus-square"></i></button>;
      }
    }
  }
  
  render() {
    return <article>
        <AnimateHeight duration={200} height={this.state.expanded ? 'auto' : 30}>
          <header>
            <h2 onClick={this.expand}>{this.props.details.name}</h2>
            { this.renderButton() }
          </header>
          { this.state.expanded ? <p>{ this.props.details.description }</p> : null }
        </AnimateHeight>
      </article>;
  }
}

export default Course;