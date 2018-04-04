import React from 'react';
import SideBar from './SideBar';
import MainDetails from './Main-Details';
import '../App.css';

const Section=()=>(
  <div className="section container-fluid">
    <div className="row">
      <SideBar/>
      <MainDetails/>
    </div>
  </div>
)
export default Section;