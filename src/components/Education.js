import React, { Component } from 'react';
import '../styles/Education.css';
import Button from '@material-ui/core/Button';

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
            <div className="education-header">Education</div>
            <br />

            <div className="school">
              Manchester Codes Academy
              <div className="ed-date">May 2018 - November 2018</div>
            </div>
            <div className="education-body">
              Test-Driven Development and Object-Oriented Programming with focus
              on JavaScript. Technologies learned: JavaScript, React, HTML5,
              CSS3, Sass/Scss, Node.js, MongoDB.
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

            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClickEd}
            >
              <span className="ed-see-more">
                Show Less <i className="fas fa-sort-up" />
              </span>
            </Button>
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
              on JavaScript. Technologies learned: JavaScript, React, HTML5,
              CSS3, Sass/Scss, Node.js, MongoDB.
            </div>
            <div className="school">
              University of Bolton
              <div className="ed-date">August 2010 - July 2011</div>
            </div>
            <div className="education-body">
              Post Graduate Certificate in Education {'(Teacher training)'}
            </div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClickEd}
            >
              <span className="ed-see-more">
                Show More <i className="fas fa-sort-down" />
              </span>
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
