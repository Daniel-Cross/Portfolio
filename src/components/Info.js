import React, { Component } from 'react';
import '../styles/Info.css';
import Header from './Header';

class Info extends Component {
  constructor() {
    super();
    this.state = {
      showContentEx: false,
      showContentEd: false
    };
    this.handleClickEx = this.handleClickEx.bind(this);
    this.handleClickEd = this.handleClickEd.bind(this);
  }

  handleClickEx() {
    this.setState({
      showContentEx: !this.state.showContentEx
    });
  }

  handleClickEd() {
    this.setState({
      showContentEd: !this.state.showContentEd
    });
  }

  render() {
    return (
      <div className="Info">
        <div className="current-box">
          <div className="current-header">Current Status:</div>
          <br />
          <span className="current-body">
            Actively seeking position of Junior Web Developer/Junior Software
            Engineer with focus on front end JavaScript and React. Looking to
            develop and grow my skill-set to become a better developer.
            <br />
          </span>
        </div>
        <div className="boxes-row">
          <div className="languages-box">
            <div className="languages-header">Languages &amp; Frameworks:</div>
            <div className="languages-body">
              JavaScript
              <br />
              HTML
              <br />
              CSS
              <br />
              React
              <br />
              Sass
              <br />
              Node.js
              <br />
            </div>
          </div>
          <div className="experience-box">
            <div className="experience-header">Experience:</div>
            <div className="experience-body">
              <div className="cdl">
                <span className="job-title">Product Developer</span>
                <br />
                <span className="job-address">CDL, Stockport, UK</span>
                <br />
                <span className="job-date">June 2018 - Present</span>
              </div>
              <div className="ies">
                <span className="job-title">Vice Principal</span>
                <br />
                <span className="job-address">
                  Internationella Engelska Skolan, Stockholm, Sweden
                </span>
                <br />
                <span className="job-date">June 2017 - June 2018</span>
              </div>

              {this.state.showContentEx ? (
                <div className="work-section">
                  <div className="ies">
                    <span className="job-title">
                      Head of Behaviour/Head of Department/Head of IT
                    </span>
                    <br />
                    <span className="job-address">
                      Internationella Engelska Skolan, Stockholm, Sweden
                    </span>
                    <br />
                    <span className="job-date">June 2015 - June 2017</span>
                  </div>
                  <div className="ies">
                    <span className="job-title">Admin Manager/Head of IT</span>
                    <br />
                    <span className="job-address">
                      Internationella Engelska Skolan, Stockholm, Sweden
                    </span>
                    <br />
                    <span className="job-date">June 2014 - June 2015</span>
                  </div>
                  <div className="ies">
                    <span className="job-title">
                      Music Teacher/Head of Department/Head of IT
                    </span>
                    <br />
                    <span className="job-address">
                      Internationella Engelska Skolan, Stockholm, Sweden
                    </span>
                    <br />
                    <span className="job-date">August 2012 - June 2014</span>
                  </div>
                  <div className="ies">
                    <span className="job-title">Music Tutor</span>
                    <br />
                    <span className="job-address">
                      Music Base, Trafford College, Manchester, UK
                    </span>
                    <br />
                    <span className="job-date">
                      September 2010 - August 2012
                    </span>
                  </div>
                </div>
              ) : null}

              <span onClick={this.handleClickEx} className="ex-see-more">
                See More
                <i className="fas fa-sort-down" />
              </span>
            </div>
          </div>
          <div className="hobbies-box">
            <div className="hobbies-header">Personal Statement:</div>
            <div className="hobbies-body">
              Determined self-learner with previous experience in dynamic and
              fast paced environments. Highly motivated and enjoy working to
              deadlines.
            </div>
            <div>
              Interests include coding, technology, sports, music, going to the
              gym and learning Swedish.
            </div>
          </div>
        </div>
        <div className="education-box">
          <div className="education-header">Education:</div>
          <br />

          <div className="school">
            Manchester Codes Academy
            <div className="ed-date">May 2018 - November 2018</div>
          </div>
          <div className="education-body">
            Test-Driven Development and Object-Oriented Programming with focus
            on JavaScript. Technologies learned: JavaScript, HTML5, CSS3, Sass,
            Git, Node.js, npm, mongoDB, React.
          </div>
          <div className="school">
            University of Bolton
            <div className="ed-date">August 2010 - July 2011</div>
          </div>
          <div className="education-body">
            Post Graduate Certificate in Education {'(Teacher training)'}
          </div>

          {this.state.showContentEd ? (
            <div>
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
            </div>
          ) : null}
          <span onClick={this.handleClickEd} className="ed-see-more">
            See More <i className="fas fa-sort-down" />
          </span>
        </div>
      </div>
    );
  }
}

export default Info;
