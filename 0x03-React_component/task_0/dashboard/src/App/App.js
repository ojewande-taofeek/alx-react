import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  listCourses = [{id: 1, name: 'ES6', credit: 60}, 
                        {id: 2, name: 'Webpack', credit: 20},
                        {id: 3, name: 'React', credit: 40},
                    ]

  listNotifications = [{id:1, type: "default", value: "New course available"},
                            {id:2, type: "top", value: "New resume available"},
                             {id:3, html: {__html: getLatestNotification()}, type: "default"},
                          ]
  
  render() {
    const { isLoggedIn } = this.props;
    return (
             <div>
               <Notifications displayDrawer={true} listNotifications={this.listNotifications} />
             <div className="App">
               <Header />
               {isLoggedIn ? <CourseList listCourses={this.listCourses}/> : <Login />}
               <Footer />
             </div>
             </div>
           ); 
      }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
