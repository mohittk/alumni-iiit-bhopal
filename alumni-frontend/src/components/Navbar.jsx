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
              Strong Roots, Wide Reach.
            </span>
          </div>
          <div className="flex flex-row gap-[15px] text-[28px] text-[#eded04]">
            <Link to="#">
              <FaFacebookSquare />
            </Link>
            <Link to="#">
              <BsTwitter />
            </Link>
            <Link to="#">
              <RiLinkedinFill />
            </Link>
            <Link to="#">
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
              <h1 className="text-[15px] text-[#6f42c1]">
                C/O Maulana Azad National Institute of Technology (MANIT),
                Bhopal Room No TC-105, New Teaching Block, MANIT, Bhopal, MP,
                India
              </h1>
              <h1 className="text-[15px] text-[#6f42c1]">
                Pin code : 462003 Phone : 0755-4051950 Email:
                info@iiitbhopal.ac.in
              </h1>
            </span>
          </span>
        </div>
        <div className="flex gap-[10px] text-[21px] font-[sans-serif] font-normal text-white bg-[#2a004f] justify-evenly items-center z-[10] px-[15px] h-[78px] w-full">
          <div className="hover:border-t-2 hover:z-[10px] py-[10px]">Home</div>
          <div className="hover:border-t-2 hover:z-[10px] py-[10px]">
            About Us
          </div>
          <div className="hover:border-t-2 hover:z-[10px] py-[10px]">
            Alumni
          </div>
          <div className="hover:border-t-2 hover:z-[10px] py-[10px]">
            Events
          </div>
          <div className="hover:border-t-2 hover:z-[10px] py-[10px]">
            Donation/Give Back
          </div>
          <div className="hover:border-t-2 hover:z-[10px] py-[10px]">
            Alumni Chapters
          </div>
          <div className="hover:border-t-2 hover:z-[10px] py-[10px]">
            Newsletters
          </div>
          <div className="flex items-center hover:border-t-2 py-[10px] justify-center gap-[5px]">
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
