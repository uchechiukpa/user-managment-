import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import GetThem from './GetUsers.js/GetThem';
import UsersProfile from './UserProfile.js/UsersProfile';
import Forms from './CreateForm.js/Forms.js'
import OneUserProfile from './OneUser.js/OneUserProfile';
import EditUser from './OneUser.js/EditUser'

// import Background from './CreateForm.js/Background';
// import MainForm from './CreateForm.js/MainForm';


function App() {
  return (
    // <div>
    /* <GetThem /> */
     /* <UsersProfile />
  </div> */
    // < div className = 'row ml-5 mr-3' >
    //   <Background />
    //   <MainForm />
    //     </div >

    < Router >
     <div className = 'App'>
        <Switch>
          {/* <Route exact path render={() => (<Redirect to= {GetThem}  />)} /> */}
          <Route path='/Getusers' exact component={GetThem} />
          <Route path='/' exact component={Forms} />
          <Route path= '/user' component={OneUserProfile} />
          <Route path='/UserProfile' component={UsersProfile} />
          <Route path='/UsersProfile/:id' component={UsersProfile} /> 
          <Route path='/OneUserProfile/:id' component={OneUserProfile} /> 
          <Route path='/EditUser/:id' component={EditUser}/>
        </Switch>
      </div>
     
    </Router >
  );
}

export default App;
