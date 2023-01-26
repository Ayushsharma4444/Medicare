import React from "react";

function CWI() {
  return (
    <div style={{backgroundColor:'white'}}>
      <div className="clinic">
        <div className="left">
          <h1 className="heading">Clinic With Innovative</h1>
          <p className="para">
            We provide the most full medical services, so every person could
            heave the oppurtunity to receive qualitative medical help.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="right">
        <div className="right-div-1">
          <div className="doc-img">
            <img
              src="https://freesvg.org/img/Young-Male-Doctor.png"
              alt=""
              height="130px"
            />
            <div className="clinic-para">
              <p >Qualified Doctors</p>
            </div>
          </div>
          <div className="doc-img" id='service'>
            <img
              src="https://www.svgrepo.com/show/18991/ambulance.svg"
              alt=""
              height="130px"
            />
            <div className="clinic-para">
              <p>24 Hours Service</p>
            </div>
          </div>
        </div>
          <div className="doc-img" id='emergercy' style={{}}>
            <img
              src="https://freesvg.org/img/checkup.png"
              alt=""
              height="130px"
            />
            <div className="clinic-para">
              <p>Emergency Care</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CWI;