import React, { Component } from 'react';
import './Staff.css';


class Staff extends Component {
  render() {
    return (
      <div className="staff-cont">

        <h1 className="h1-staff">Meet the Team</h1>

        <div className="staff-boxes">

          <div className="staff-box">
            <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
            <div className="name">Buck Strickland</div>
            <h4 className="title">Owner</h4>
          </div>

          <div className="staff-box">
            <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
            <div className="name">Hank Hill</div>
            <h4 className="title">Assistant Manager</h4>
          </div>

          <div className="staff-box">
            <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
            <div className="name">Joe Jack</div>
            <h4 className="title">Grill Associate</h4>
          </div>

          <div className="staff-box">
          <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
          <div className="name">Roger "Booda" Sack</div>
          <h4 className="title">Grill Associate</h4>
          </div>

          <div className="staff-box">
          <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
          <div className="name">Maria Montalvo</div>
          <h4 className="title">Accessories Associate</h4>
          </div>

          <div className="staff-box">
            <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
            <div className="name">Donna</div>
            <h4 className="title">Accountant</h4>
          </div>

          <div className="staff-box">
            <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
            <div className="name">Melinda</div>
            <h4 className="title">Account Executive</h4>
          </div>

          <div className="staff-box">
            <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
            <div className="name">Jason Adderly</div>
            <h4 className="title">Account Executive</h4>

          <div className="staff-box">
            <img src="https://picsum.photos/200/200/?random" alt="box-img" className="box-img"></img>
            <div className="name">Enrique</div>
            <h4 className="title">Driver</h4>
          </div>

          </div>

        </div>

      </div>

    );
  }
}

export default Staff;
