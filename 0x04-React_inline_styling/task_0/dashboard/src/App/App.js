import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);  // bind a method
  }

  // e stands for event and its access is based on the event called e.g mouse, keyboard, wheel...
  handleKeyDown = (e)=> {
    if (e.ctrlKey && (e.key === "h")) {
      e.preventDefault(); // Prevent the default func of the combo
      alert("Logging you out");
      this.props.logOut();
    }
  } 

  componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }

  
  render() {
    const listCourses = [{id: 1, name: 'ES6', credit: 60}, 
                        {id: 2, name: 'Webpack', credit: 20},
                        {id: 3, name: 'React', credit: 40},
                    ]

    const listNotifications = [{id:1, type: "default", value: "New course available"},
                            {id:2, type: "top", value: "New resume available"},
                             {id:3, html: {__html: getLatestNotification()}, type: "default"},
                          ]
    const { isLoggedIn } = this.props;
    
    return (
             <div>
               <Notifications displayDrawer={true} listNotifications={listNotifications} />
             <div className="App">
               <Header />
               {isLoggedIn ?
                  <BodySectionWithMarginBottom title="Course list">
                      <CourseList listCourses={listCourses}/> 
                  </BodySectionWithMarginBottom>
                  : 
                  <BodySectionWithMarginBottom title="Log in to continue">
                    <Login />
                  </BodySectionWithMarginBottom>
                }
                  <BodySection title="News from the School">
                    <p>Students are learning React</p>
                  </BodySection>
               <Footer />
             </div>
             </div>
           ); 
      }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: ()=> {},
}

export default App;
