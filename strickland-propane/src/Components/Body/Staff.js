import React, { Component } from 'react';
import './Staff.css';


class Staff extends Component {
  render() {
    return (
      <div className="staff-cont">

        <h1 className="h1-staff">Meet the Team</h1>

        <div className="staff-boxes">

          <div className="staff-box">
            <img src="https://vignette.wikia.nocookie.net/fictionalcharacters/images/6/63/Buck_Strickland.png/revision/latest?cb=20131214111907" alt="box-img" className="box-img"></img>
            <div className="name">Buck Strickland</div>
            <h4 className="title">Owner</h4>
          </div>

          <div className="staff-box">
          <img src="https://vignette.wikia.nocookie.net/fictionalcharacters/images/a/a6/Booda_Sack.png/revision/latest?cb=20131214111937" alt="box-img" className="box-img"></img>
          <div className="name">Roger "Booda" Sack</div>
          <h4 className="title">Grill Associate</h4>
          </div>

          <div className="staff-box">
            <img src="https://static.tvtropes.org/pmwiki/pub/images/180px-char_11514_6261.jpg" alt="box-img" className="box-img"></img>
            <div className="name">Joe Jack</div>
            <h4 className="title">Grill Associate</h4>
          </div>

          <div className="staff-box">
            <img src="https://pbs.twimg.com/profile_images/1718704537/hank-hill_400x400.jpeg" alt="box-img" className="box-img"></img>
            <div className="name">Hank Hill</div>
            <h4 className="title">Assistant Manager</h4>
          </div>

          <div className="staff-box">
          <img src="https://vignette.wikia.nocookie.net/kingofthehill/images/9/99/Vlcsnap-00187.png/revision/latest?cb=20170829040216" alt="box-img" className="box-img"></img>
          <div className="name">Maria Montalvo</div>
          <h4 className="title">Accessories Associate</h4>
          </div>

          <div className="staff-box">
            <img src="https://static.tvtropes.org/pmwiki/pub/images/180px-donna2_6149.jpg" alt="box-img" className="box-img"></img>
            <div className="name">Donna</div>
            <h4 className="title">Accountant</h4>
          </div>

          <div className="staff-box">
            <img src="https://vignette.wikia.nocookie.net/animatedmusclewomen/images/9/91/Melinda.png/revision/latest?cb=20150630135716" alt="box-img" className="box-img"></img>
            <div className="name">Melinda</div>
            <h4 className="title">Account Executive</h4>
          </div>

          <div className="staff-box">
            <img src="https://vignette.wikia.nocookie.net/kingofthehill/images/9/95/Jason_Adderly.PNG/revision/latest?cb=20180217234434" alt="box-img" className="box-img"></img>
            <div className="name">Jason Adderly</div>
            <h4 className="title">Account Executive</h4>

          <div className="staff-box">
            <img src="https://static.tvtropes.org/pmwiki/pub/images/char_11515.jpg" alt="box-img" className="box-img"></img>
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
