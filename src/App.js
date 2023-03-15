import React from 'react';
import './App.css';
import Navbar from './Components/JS/Navbar.js'
import Home from './Components/JS/Home.js'
import Admin from './Components/JS/Admin.js'
import SimpleUser from './Components/JS/SimpleUser'
import CommanLogin from './Components/JS/CommanLogin'
import View from './RealtimeData/View'
import Notification from './Components/JS/Notification'
import ProfileService from './Components/JS/ProfileService'
import ProfileUser from './Components/JS/ProfileUser'
import Addroom from './Components/JS/Addroom'

import {Switch,Route} from 'react-router-dom'
import axios from 'axios'
import { RealtimeData } from './RealtimeData/View';
import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.withCredentials = true;

function App() {
  
  return (
    <div>
      
      <Navbar/>
      <Switch>
        
     <Route exact path="/"><Home/></Route> 
     <Route exact path="/SimpleUser"><SimpleUser/></Route>
     <Route exact path="/Admin"><Admin/></Route>
     <Route exact path="/CommanLogin"><CommanLogin/></Route>
     <Route exact path="/ProfileService"><ProfileService/></Route>
     <Route exact path="/ProfileUser"><ProfileUser/></Route>
     <Route exact path="/Addroom"><Addroom/></Route>
     <Route exact path="./RealtimeData/View"><View/></Route>
     <Route><RealtimeData/></Route>
     <Route exact path="/Notification"><Notification/></Route>
  
     
      </Switch>
    </div>
    
  );
  
}

export default App;