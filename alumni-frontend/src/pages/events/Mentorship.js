import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import mentorPoster from "../../assets/mentor-poster.jpg"

export default function About() {
  return (
    <>
      <Navbar />
      <div class="msgDirectorBanner">
        <img
          src={mentorPoster}
          style={{ filter: "blur(3px)", width: "100%"}}
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
      
      <Footer />
    </>
  );
}
