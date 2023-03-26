import React from 'react';

import './App.css';
import LandingPage from './containers/LandinPage/LandingPage';
import SubmissionForm from './containers/hackathonSubmissionPage/formPage';
import HackcathonDetails from './containers/hackathonDetailsPage/hackcathonDetails';
import EditForm from './containers/hackathonEditpage/editPage';
import { Route,Routes,Switch } from 'react-router-dom';
function App() {
  return (
    // <div className="App">
    //    {/* <LandingPage/>
    //    <SubmissionForm/>
    //    <HackcathonDetails id ={2} />
    //    <EditForm id={3}/> */}
    // </div>
     <Routes> 
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/submit" element={<SubmissionForm/>}/>
      <Route path="/description/:id" element={ <HackcathonDetails />}/>
      <Route path="/edit/:id" element={ <EditForm />}/>
    </Routes>
    
  );
}

export default App;
