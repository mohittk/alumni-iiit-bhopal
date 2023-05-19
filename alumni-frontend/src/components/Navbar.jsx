import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import image from "../assets/iiitb.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex bg-[#303038] justify-between w-[100%] px-[150px] py-[10px] items-center">
          <div className="flex gap-[5px] text-[28px] text-white justify-center items-center">
            <FaHandshake />
            <span className="font-[Inter] text-[22px]">
              "Once an alumnus, forever a part of our legacy."
            </span>
          </div>
          <div className="flex flex-row gap-[15px] text-[28px]">
            <Link to="#" className="text-[#eded04]">
              <FaFacebookSquare />
            </Link>
            <Link to="#" className="text-[#eded04]">
              <BsTwitter />
            </Link>
            <Link to="#" className="text-[#eded04]">
              <RiLinkedinFill />
            </Link>
            <Link to="#" className="text-[#eded04]">
              <AiFillInstagram />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-between px-[60px] py-[5px] w-full items-center">
          <span className="w-[20%] flex items-center justify-center">
            <img src={image} alt="logo-iiitb" width={120} height={120} />
          </span>
          <span className="flex w-[50%] gap-[15px]  items-center justify-center">
            <ImLocation className="text-[60px] text-[#0a6db7]" />
            <span className="flex flex-col w-[90%]">
              <h1 className="text-[20px] font-bold ">IIIT Bhopal</h1>
              <h1 className="text-[15px] text-[#6f42c1] font-semibold">
                C/O Maulana Azad National Institute of Technology (MANIT),
                Bhopal<br></br>Room No TC-105, New Teaching Block, MANIT,
                Bhopal, MP, India
              </h1>
              <h1 className="text-[15px] text-[#6f42c1] font-semibold">
                Pin code : 462003 Phone : 0755-4051950 Email:
                info@iiitbhopal.ac.in
              </h1>
            </span>
          </span>
        </div>
        <div className="flex gap-[10px] text-[21px] font-[sans-serif] font-normal text-white bg-[#2a004f] justify-evenly items-center z-[10] px-[15px] h-[78px] w-full">
          <Link
            to="/"
            className="hover:border-t-2 hover:z-[10px] py-[10px] text-white font-semibold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:border-t-2 hover:z-[10px] text-white py-[10px] font-semibold"
          >
            About Us
          </Link>
          <Link
            to="/"
            className="hover:border-t-2 hover:z-[10px] text-white py-[10px] font-semibold"
          >
            Alumni
          </Link>
          <Link
            to="/"
            className="hover:border-t-2 hover:z-[10px] text-white py-[10px] font-semibold"
          >
            Events
          </Link>
          <Link
            to="/"
            className="hover:border-t-2 text-white hover:z-[10px] py-[10px] font-semibold"
          >
            Donation/Give Back
          </Link>
          <Link
            to="/"
            className="hover:border-t-2 text-white hover:z-[10px] py-[10px] font-semibold"
          >
            Alumni Chapters
          </Link>
          <div className="flex items-center hover:border-t-2 py-[10px] justify-center gap-[5px] font-semibold">
            Convocation
            <span className="flex px-[3px] py-[2px] text-[16px] animate-bounce bg-[#e03574] rounded-md">
              New
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
