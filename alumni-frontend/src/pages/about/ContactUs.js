import React, { useState }  from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LocationOnIcon from '@mui/icons-material/LocationOn';
const borderField = {
  border: "1px solid black",
  width: "253px",
  height: "40px",
};
export default function ContactUs() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    pno: "",
    msg: "",
  });
  const [finalDetails, setFinalDetails] = useState({
    name: "",
    email: "",
    pno: "",
    msg: "",
  });
  const submitEvent = (event) => {
    event.preventDefault();
    setFinalDetails({ ...details });
  };
  const inputEvent = (event) => {
    const currname = event.target.name;
    const val = event.target.value;
    setDetails((preVal) => {
      if (currname === "fullname") {
        return {
          name: val,
          email: preVal.email,
          pno: preVal.pno,
          msg: preVal.msg,
        };
      } else if (currname === "emailid") {
        return {
          name: preVal.name,
          email: val,
          pno: preVal.pno,
          msg: preVal.msg,
        };
      } else if (currname === "phoneno") {
        return {
          name: preVal.name,
          email: preVal.email,
          pno: val,
          msg: preVal.msg,
        };
      } else {
        return {
          name: preVal.name,
          email: preVal.email,
          pno: preVal.pno,
          msg: val,
        };
      }
    });
  };
  return (<>
    <div>
      <Navbar />
      <div class="msgDirectorBanner">
          <img
            src="https://images.shiksha.com/mediadata/images/1550718239phpVMfSEn.jpeg"
            style={{ filter: "blur(3px)", width: "100%" }}
          />
          <div class="centerMsgDirector">Contact Us</div>
      </div>
      <br />
      <br />
      <div style={{backgroundColor: 'whitesmoke', padding: '100px'}}>
      <div class="container">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-5">
            <div style={{width: '90%', height: '100%', backgroundColor: '#000000'}}>
              <div>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <LocationOnIcon style={{color: '#107CAF'}}/>
                  </div>
                  <div class="col-sm">
                    <h1>Address:</h1>
                    <h1>Office of Alumni Affairs</h1>
                    <h1>Admin Extension-1,</h1>
                    <h1>IIIT Bhopal, MP</h1>
                  </div>
                </div>
              </div>
              </div><hr/>
              <div></div><hr/>
              <div></div>
            </div>
            </div>
            <div class="col-6">
              <div class="bg-img">
                <form action="/" class="container" onSubmit={submitEvent}>
                  <div>
                    <input
                      type="text"
                      placeholder="  Name"
                      onChange={inputEvent}
                      value={details.name}
                      name="fullname"
                      required
                      style={{ ...borderField, marginRight: "25px" }}
                      className="rounded-lg p-[10px]"
                    />
                    <input
                      type="email"
                      placeholder="  Email"
                      onChange={inputEvent}
                      value={details.email}
                      name="emailid"
                      required
                      style={borderField}
                      className="rounded-lg p-[10px]"
                    />
                  </div>
                  <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <input
                      type="text"
                      placeholder="  Phone Number"
                      onChange={inputEvent}
                      value={details.pno}
                      name="phoneno"
                      required
                      style={{
                        border: "1px solid black",
                        width: "533px",
                        height: "40px",
                      }}
                      className="rounded-lg p-[10px]"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="  Message"
                      rows="6"
                      cols="67"
                      onChange={inputEvent}
                      value={details.msg}
                      name="message"
                      style={{ border: "1px solid black" }}
                      className="rounded-lg p-[10px]"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      style={{ marginTop: "8px", width: '150px'}}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div></div>
        </div>
      <Footer/>
    </div></>
  );
}
