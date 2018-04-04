import React from 'react';
import SideBar from './SideBar';
import MainDetails from './Main-Details';

const Section=()=>(
  <div className="container">
    <div className="row">
      <SideBar/>
      <MainDetails/>
    </div>
  </div>
)
export default Section;