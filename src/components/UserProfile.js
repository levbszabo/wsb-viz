import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import face3 from "../assets/img/faces/face-me.jpg"

class UserProfile extends Component {
    render() {
	let linkedIn = "https://www.linkedin.com/in/levente1szabo";
	let portfolio = "https://levbszabo.github.io";
	let linkedInElem = <a href = {linkedIn} target="_blank"> Levente Szabo </a>;
	let portfolioElem = <a href = {portfolio} target="_blank"> levbszabo.github.io </a>; 
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-user">
                <div className="card-image">
                  <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..." />
                </div>
                <div className="card-body">
                  <div className="author">
                      <img className="avatar border-gray" src={face3} alt="..." />
            <h5 className="title">{linkedInElem}</h5>
                    
                  </div>
                  <p className="description text-center">
                    MS Computer Science NYU
                    <br /> Email: levbszabo@gmail.com
            <br/> Portfolio: {portfolioElem} 
                  </p>
                </div>
                <hr />
                <div className="button-container mr-auto ml-auto">
                  <button className="btn btn-simple btn-link btn-icon">
                    <i className="fa fa-linkedin"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile
