// ******** ->  ---- -- -

import React from "react";
const pic =
  "https://static.vecteezy.com/system/resources/previews/003/193/632/original/abstract-organic-square-shapes-random-hand-drawn-shapes-collage-free-free-vector.jpg";
// import '../styles/index.css'

const Meetup = () => {
  return (
    <>
      <div className="p-[50px]">
        <h1 className="text-center text-[#2a004f] font-bold font-opensans">
          Our Recent Meetup (2022)
        </h1>
        {/* <div className='flex flex-row'>
                <div width='100px' height='200px' style={{backgroundColor:'blue'}}>a</div>
                <div width='6px'></div>
                <div width='2px'></div>
            </div> */}
        <p className="text-center">
          The meet was held during 4th-6th Nov. 2022
        </p>
        <br />
        <br />
        <div
          class="container"
          style={{ paddingLeft: "150px", paddingRight: "150px" }}
        >
          <div class="row">
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
            <div class="col-sm">
              <img src={pic} height="100px" width="100px" alt="meetupImg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meetup;
