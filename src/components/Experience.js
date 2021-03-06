import React, { Component } from 'react';
import '../styles/Experience.css';
import Button from '@material-ui/core/Button';

class Experience extends Component {
  state = {};

  handleClickEx = () => {
    this.setState({
      showContentEx: !this.state.showContentEx
    });
  };

  render() {
    return (
      <div className="experience-box">
        <div className="experience-header">Experience</div>

        {this.state.showContentEx ? (
          <div className="experience-body">
            <div className="booking">
              <span className="job-title">Software Engineer</span>
              <br />
              <span className="job-address">Booking.com, Manchester, UK</span>
              <br />
              <span className="job-date">January 2019 - Present</span>
            </div>
            <br />

            <div className="mcrcodes">
              <span className="job-title">Mentor</span>
              <br />
              <span className="job-address">Manchester Codes, Manchester, UK</span>
              <br />
              <span className="job-date">January 2019 - Present</span>
            </div>
            <br />

            <div className="degree53">
              <span className="job-title">
                Junior Front-End React Developer
              </span>
              <br />
              <span className="job-address">Degree 53, Manchester, UK</span>
              <br />
              <span className="job-date">November 2018 - January 2019</span>
            </div>
            <br />

            <div className="cdl">
              <span className="job-title">Junior Product Developer</span>
              <br />
              <span className="job-address">CDL, Stockport, UK</span>
              <br />
              <span className="job-date">March 2018 - August 2018</span>
            </div>
            <div className="ies">
              <span className="job-title">Vice Principal</span>
              <br />
              <span className="job-address">
                Internationella Engelska Skolan, Stockholm, Sweden
              </span>
              <br />
              <span className="job-date">June 2017 - March 2018</span>
            </div>

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
                <span className="job-date">September 2010 - August 2012</span>
              </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleClickEx}
              >
                <span className="ex-see-more">
                  Show Less
                  <i className="fas fa-sort-up" />
                </span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="experience-body">
            <div className="booking">
              <span className="job-title">Software Engineer</span>
              <br />
              <span className="job-address">Booking.com, Manchester, UK</span>
              <br />
              <span className="job-date">January 2019 - Present</span>
            </div>
            <br />

            <div className="mcrcodes">
              <span className="job-title">Mentor</span>
              <br />
              <span className="job-address">Manchester Codes, Manchester, UK</span>
              <br />
              <span className="job-date">January 2019 - Present</span>
            </div>
            <br />

            <div className="degree53">
              <span className="job-title">
                Junior Front-End React Developer
              </span>
              <br />
              <span className="job-address">Degree 53, Manchester, UK</span>
              <br />
              <span className="job-date">November 2018 - January 2019</span>
            </div>
            <br />
            <div className="cdl">
              <span className="job-title">Junior Product Developer</span>
              <br />
              <span className="job-address">CDL, Stockport, UK</span>
              <br />
              <span className="job-date">March 2018 - August 2018</span>
            </div>

            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClickEx}
            >
              <span className="ex-see-more">
                Show More
                <i className="fas fa-sort-down" />
              </span>
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
