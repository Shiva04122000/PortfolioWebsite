import React, { Fragment, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import './Layout.css'

const Layout = () => {


  // useEffect(() => {
  //  var cursor = document.getElementById("cursor");
  //   document.body.addEventListener("mousemove", function (e) {
  //     return (
  //       (cursor.style.left = e.clientX + "px"),
  //       (cursor.style.top = e.clientY + "px")
  //     );
  //   });
  //  var cursorPointer = document.getElementById("cursor-pointer");
  //   document.body.addEventListener("mousemove", function (e) {
  //     return (
  //       (cursorPointer.style.left = e.clientX + "px"),
  //       (cursorPointer.style.top = e.clientY + "px")
  //     );
  //   });

  //   document.body.addEventListener("mousedown", function (e) {
  //     return (
  //       (cursor.style.height = "0.5rem"),
  //       (cursor.style.width = "0.5rem"),
  //       (cursorPointer.style.height = "3rem"),
  //       (cursorPointer.style.width = "3rem")
  //     );
  //   });

  //   document.body.addEventListener("mouseup", function (e) {
  //     return (
  //       (cursor.style.height = "0.3rem"),
  //       (cursor.style.width = "0.3rem"),
  //       (cursorPointer.style.height = "2rem"),
  //       (cursorPointer.style.width = "2rem")
  //     );
  //   });
  // }, []);

  return (
    <Fragment>
      {/* <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" /> */}
      <Navbar />
      <Outlet />
      <ScrollToTop />
    </Fragment>
  )
}

export default Layout
