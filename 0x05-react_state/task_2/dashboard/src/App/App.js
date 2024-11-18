import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { user,logOut, AppContext } from './AppContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);  // bind a method
    this.state = { displayDrawer: false,
                    user: user,
                    logOut: this.logOut.bind(this),
                  };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(email, password) {
    this.setState({user: {
      email,
      password,
      isLoggedIn: true,
    }
  })
  }

  logOut() {
    this.setState({ user });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }



  // e stands for event and its access is based on the event called e.g mouse, keyboard, wheel...
  handleKeyDown = (e)=> {
    if (e.ctrlKey && (e.key === "h")) {
      e.preventDefault(); // Prevent the default func of the combo
      alert("Logging you out");
      this.logOut();
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
                            {id:2, type: "urgent", value: "New resume available"},
                             {id:3, html: {__html: getLatestNotification()}, type: "default"},
                          ]
    const { isLoggedIn } = this.state.user;
    
    return (
            <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
             <div>
               <Notifications displayDrawer={this.state.displayDrawer}
                  handleDisplayDrawer={this.handleDisplayDrawer}
                  handleHideDrawer={this.handleHideDrawer}
                  listNotifications={listNotifications} />
             <div className={css(appStyle.app)}>
               <Header />
               <div className={css(appStyle.body)}>
               {isLoggedIn ?
                  <BodySectionWithMarginBottom title="Course list">
                      <CourseList listCourses={listCourses}/> 
                  </BodySectionWithMarginBottom>
                  : 
                  <BodySectionWithMarginBottom title="Log in to continue">
                    <Login logIn={this.logIn} />
                  </BodySectionWithMarginBottom>
                }
                  <BodySection title="News from the School">
                    <p>Students are learning React</p>
                  </BodySection>
                </div>
               <Footer className={css(appStyle.footerStyle)}/>
             </div>
             </div>
             </AppContext.Provider>
           ); 
      }
}



const appStyle = StyleSheet.create({
  app: {
    width: '100%',
    height: 'auto',
  },
  body: {
    position: 'absolute',
    top: '9rem',
    width: '100%',
    height: 'auto',
    '@media (max-width: 900px)': {
      top: '13rem',
    }
  },
  footerStyle: {
    borderTop: '3px solid  #d73953',
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default App;
