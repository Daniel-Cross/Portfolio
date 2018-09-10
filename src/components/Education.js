import React, { Component } from 'react';
import '../styles/Education.css';

class Education extends Component {
  state = {};

  handleClickEd = () => {
    this.setState({
      showContentEd: !this.state.showContentEd
    });
  };

  render() {
    return (
      <div className="education-box">
        {this.state.showContentEd ? (
          <div>
            <div className="education-header">Education:</div>
            <br />

            <div className="school">
              Manchester Codes Academy
              <div className="ed-date">May 2018 - November 2018</div>
            </div>
            <div className="education-body">
              Test-Driven Development and Object-Oriented Programming with focus
              on JavaScript. Technologies learned: JavaScript, HTML5, CSS3,
              Sass, Git, Node.js, npm, mongoDB, React.
            </div>
            <div className="school">
              University of Bolton
              <div className="ed-date">August 2010 - July 2011</div>
            </div>
            <div className="education-body">
              Post Graduate Certificate in Education {'(Teacher training)'}
            </div>
            <div className="school">
              University of Salford
              <div className="ed-date">August 2006 - July 2009</div>
            </div>
            <div className="education-body">Popular Music and Recording</div>
            <div className="school">
              Hopwood Hall College
              <div className="ed-date">August 2004 - July 2006</div>
            </div>
            <div className="education-body">Music and Technology</div>
            <div className="school">
              St Anne's Academy
              <div className="ed-date">September 1998 - July 2003</div>
            </div>
            <div className="education-body">Secondary School</div>

            <span onClick={this.handleClickEd} className="ed-see-more">
              Show Less <i className="fas fa-sort-up" />
            </span>
          </div>
        ) : (
          <div>
            <div className="education-header">Education</div>
            <br />

            <div className="school">
              Manchester Codes Academy
              <div className="ed-date">May 2018 - November 2018</div>
            </div>
            <div className="education-body">
              Test-Driven Development and Object-Oriented Programming with focus
              on JavaScript. Technologies learned: JavaScript, HTML5, CSS3,
              Sass, Git, Node.js, npm, mongoDB, React.
            </div>
            <div className="school">
              University of Bolton
              <div className="ed-date">August 2010 - July 2011</div>
            </div>
            <div className="education-body">
              Post Graduate Certificate in Education {'(Teacher training)'}
            </div>
            <span onClick={this.handleClickEd} className="ed-see-more">
              Show More <i className="fas fa-sort-down" />
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
