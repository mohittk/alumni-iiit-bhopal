import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mentorPoster from "../../assets/mentor-poster.jpg";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import SessionCard from "../../components/SessionCard";

export default function Mentorship() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <div className="h-screen flex items-center justify-center">
            <ThreeCircles
              height="200"
              width="200"
              color="#2a004f"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div class="msgDirectorBanner">
            <img
              src={mentorPoster}
              style={{ filter: "blur(3px)", width: "100%" }}
            />
            <div class="centerMsgDirector font-opensans p-4 bg-[#2a004f] ">
              Mentorship Programs
            </div>
          </div>

          <div className="mentorship-data m-5 p-5">
            <h2 className="font-opensans font-bold text-[#2a004f] text-center text-[2.5rem]">
              IIIT Bhopal Alumni - Student Mentorship Programs
            </h2>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <SessionCard name="Resume Review Session" presenter="Shubankar Sharma"/>
              </div>
              <div class="col-sm">
                <SessionCard name="Guidance on cracking Top companies" presenter="Pankaj Sharma"/>
              </div>
              <div class="col-sm">
                <SessionCard name="Placement in Core Electronics" presenter="Ashutosh Singh Parmar"/>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <Footer />
        </>
      )}
    </>
  );
}
