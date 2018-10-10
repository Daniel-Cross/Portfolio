import React, { Component } from 'react';
import '../styles/Portfolio.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 500
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.8
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
});

const examples = [
  {
    name: '5-3-1 Workout Tracker',
    description:
      'Currently under construction. App to track progress and development of your 5-3-1 workout plan. Front end created in React.js and back end created using Node.js, Express.js and MongoDB.',
    url: 'https://i.imgur.com/QCmrbo8.jpg',
    github: 'https://github.com/Daniel-Cross/react-531-website',
    live: null,
    width: '50%'
  },
  {
    name: 'Surreal Estate',
    description:
      'Property search engine similar to Right Move or Zoopla. Created using React.js, Node.js and Express.js.',
    url: 'https://i.imgur.com/qhjScDN.jpg',
    github: 'https://github.com/Daniel-Cross/surreal-estate',
    live: 'https://surreal-estate-front.herokuapp.com/',
    width: '50%'
  },
  {
    name: 'Weather App',
    description:
      'Dynamic weather app that gives weekly weather reports based on api. Created using React.js.',
    url: 'https://i.imgur.com/XIhXEzH.png',
    github: 'https://github.com/Daniel-Cross/react-weather-app',
    live: null,
    width: '50%'
  },
  {
    name: 'Cruise Ship',
    description:
      'Operational cruise ship with gui. Created using Vanilla JavaScript.',
    url: 'https://i.imgur.com/Rtacena.png',
    github: 'https://github.com/Daniel-Cross/cruise-ships',
    live: null,
    width: '50%'
  },
  {
    name: 'Portfolio',
    description: 'Single Page App Portfolio created using React.js.',
    url: 'https://i.imgur.com/4WzUkQy.png',
    github: 'https://github.com/Daniel-Cross/portfolio',
    live: null,
    width: '50%'
  },
  {
    name: 'Contact Manager',
    description:
      'Create Read Update Delete contacts database application. Created using React and Bootstrap.',
    url: 'https://i.imgur.com/0XQ35LH.png',
    github: 'https://github.com/Daniel-Cross/contact-manager',
    live: 'https://daniel-cross.github.io/contact-manager/#/',
    width: '50%'
  },
  {
    name: 'Song List',
    description:
      'Lightweight Vanilla JavaScript application that allows a user to add their favourite songs, artists and albums.',
    url: 'https://i.imgur.com/lQd16a2.png',
    github: 'https://github.com/Daniel-Cross/songlist',
    live: 'https://daniel-cross.github.io/songlist/',
    width: '50%'
  },
  {
    name: 'Github Search Engine',
    description:
      'Search the GitHub database for usernames and return their profiles.',
    url: 'https://i.imgur.com/GnLqYx0.png',
    github: 'https://github.com/Daniel-Cross/github-search',
    live: null,
    width: '50%'
  }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="Portfolio">
        {examples.map(example => (
          <ButtonBase
            focusRipple
            key={example.name}
            href={example.github}
            target="_blank"
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: example.width
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${example.url})`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subheading"
                color="inherit"
                className={classes.imageTitle}
              >
                <h4>{example.name}</h4>
                <span className={classes.imageMarked} />
                <p>{example.description}</p>
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

//       <div className="Portfolio">
//         {examples.map(example => (
//           <div className="card">
//             <img src={example.image} className="avatar" alt="Avatar" />
//             <div className="container">
//               <h4>
//                 <b>{example.name}</b>
//               </h4>
//               <p>{example.description}</p>
//             </div>
//             <div className="card-buttons">
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 className="work-button"
//                 href={example.github}
//                 target="_blank"
//               >
//                 GitHub
//               </Button>
//               {example.live ? (
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   className="work-button"
//                   href={example.live}
//                   target="_blank"
//                 >
//                   Live Demo
//                 </Button>
//               ) : null}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// Projects.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Projects);
