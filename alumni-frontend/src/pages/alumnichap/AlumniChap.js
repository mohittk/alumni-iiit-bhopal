import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import alumnichap from "../../assets/alumni-chap.jpg"

export default function AlumniChap() {
  return (
    <>
      <Navbar />
      <div class="msgDirectorBanner">
        <img
          src={alumnichap}
          style={{ filter: "blur(3px)", width: "100%"}}
        />
        <div class="centerMsgDirector font-opensans p-4 bg-[#2a004f] ">
          Alumni Chapters
        </div>
      </div>

      <div className="mentorship-data m-5 p-5">
        <h2 className="font-opensans font-bold text-[#2a004f] text-center text-[2.5rem]">
          Coming Soon.....
        </h2>
      </div>
      
      <Footer />
    </>
  );
}
