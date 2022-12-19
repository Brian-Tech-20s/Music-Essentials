import React, { useEffect, useState } from "react";
import Tabs3 from './Tabs3';
import LayoutOne from '/src/components/LayoutOne'

const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;

export default function Rock() {
  return (
    <div>
      <LayoutOne />
      <Tabs3 /> 

  <footer className="footer" style={{  marginTop: "1 rem",  padding: "1 rem",  textAlign:'center', color: "white", backgroundColor: "black",  position: "fixed",  bottom: "0",  left: "0",  width: "100%" 
          }}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>	
    </div>
  )
}
