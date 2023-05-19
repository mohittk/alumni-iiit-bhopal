import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/index.css";
import Footer from '../../components/Footer';
export default function MsgDirector() {
  return (<>
      <div>
        <Navbar />
        <div class="msgDirectorBanner">
          <img
            src="https://images.shiksha.com/mediadata/images/1550718239phpVMfSEn.jpeg"
            style={{ filter: "blur(3px)", width: "100%" }}
          />
          <div class="centerMsgDirector">Message From Director</div>
        </div>
        <br />
        <br />

        <div class="directorInfo">
          <div class="container" style={{ padding: "70px" }}>
            <div class="row">
              <div class="col-sm" style={{ marginRight: "60px" }}>
                <h1 className="text-[#107CAF] font-bold">
                  Message from the Director
                </h1>
                <div style={{marginTop: '30px', lineHeight: '1.8'}}>
                  <p>
                    Alumni are our ambassadors to effectively portray the image
                    and vision of your great Institute, IIIT Bhopal, MP.
                  </p>
                  <p>
                    Just your expression that ‘I am from IIIT Bhopal’ makes us
                    feel proud and enriches us with a vigour to get that
                    expression echoed, from your juniors of the next batch and the
                    next batch and so on. Now that you are alumni, we are very
                    sure that you will have the concern to know how your alma
                    mater is doing, and we are equally confident that you will
                    stand by us, with us and for us.
                  </p>
                  <p>
                    With the social networking framework, I wish that all of you
                    remain connected amongst yourselves and as well with your alma
                    mater. IIITB remains a part of every one of you, at
                    any time and all the time.
                  </p>
                  <p>With my best wishes,</p>
                  <div style={{textAlign: 'right'}}>
                    <h6>Dr. Ashutosh Kumar Singh</h6><h6>Director</h6><h6>IIIT Bhopal</h6>
                  </div>
                </div>
              </div>
              <div
                class="col-sm"
                style={{ border: "3px solid black", borderRadius: "12%" }}
              >
                <img
                  src="https://iiitbhopal.ac.in/Document/Director/Director1.png?12:51:01.6921757"
                  width="1000px"
                  style={{borderRadius: "10%"}}
                />
              </div>
            </div>
          </div>
          <div> 
          </div>
        </div><br/><br/><br/><br/>
        <Footer/>
      </div>
    </>
  );
}
