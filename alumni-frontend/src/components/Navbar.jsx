import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import image from "../assets/iiitb-full.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Navbar() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex bg-[#303038] justify-between w-[100%] px-[150px] py-[10px] items-center">
          <div className="flex gap-[5px] text-[28px] text-white justify-center items-center">
            <FaHandshake />
            <span className="text-[22px] font-opensans">
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
          <h1 className="font-opensans text-[4rem] text-[#2a004f] font-bold w-[40%]">
            {" "}
            Alumni IIIT Bhopal
          </h1>
          <span className="w-[50%] flex items-center justify-center">
            <LazyLoadImage src={image} alt="logo-iiitb" />
          </span>
          <span className="flex w-[50%] gap-[15px]  items-center justify-center">
            <ImLocation className="text-[60px] text-[#0a6db7]" />
            <span className="flex flex-col w-[90%]">
              <h1 className="text-[25px] font-bold font-opensans">
                IIIT Bhopal
              </h1>
              <h1 className="text-[20px] text-[#6331c0] font-semibold font-opensans">
                C/O Maulana Azad National Institute of Technology (MANIT),
                Bhopal<br></br>Room No TC-105, New Teaching Block, MANIT,
                Bhopal, MP, India
              </h1>
              <h1 className="text-[20px] text-[#6734c5] font-semibold font-opensans">
                Pin code : 462003 Phone : 0755-4051950 Email:
                info@iiitbhopal.ac.in
              </h1>
            </span>
          </span>
        </div>
        <div className="flex gap-[10px] text-[21px] font-opensans text-white bg-[#2a004f] justify-evenly items-center z-[10] px-[15px] h-[78px] w-full">
          <Link
            to="/"
            className="hover:border-t-2 hover:no-underline hover:z-[10px] py-[10px] text-white font-semibold no-underline"
          >
            Home
          </Link>
          <div className="relative group m-[5px] font-opensans">
            <Link className="hover:border-t-2 hover:z-[10px] text-white py-[10px] font-semibold no-underline hover:no-underline">
              About Us
            </Link>
            <div className="hidden group-hover:block border-t-4 top-[38px] border-t-[#0a6db7] text-[21px] left-[-60px] absolute">
              <ul className=" z-[1000]  w-[300px] text-white bg-[#2a004f] shadow ">
                <li className="p-[5px]">
                  <Link
                    to="/about"
                    className=" hover:z-[10px] text-white py-[10px] no-underline"
                  >
                    About the Institute
                  </Link>
                </li>
                <li className="p-[5px]">
                  <Link
                    to="/message-from-director"
                    className="hover:z-[10px] text-white py-[10px] no-underline"
                  >
                    Message From Director
                  </Link>
                </li>
                <li className="p-[5px]">
                  <Link
                    to="/commitees"
                    className=" hover:z-[10px] text-white py-[10px] no-underline"
                  >
                    Committees
                  </Link>
                </li>
                <li className="p-[5px]">
                  <Link
                    to="/contactus"
                    className=" hover:z-[10px] text-white py-[10px] no-underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group m-[5px]">
            <Link
              to="/"
              className="hover:border-t-2 hover:z-[10px] text-white py-[10px] font-semibold no-underline hover:no-underline"
            >
              Alumni
            </Link>
            <div className="hidden group-hover:block border-t-4 top-[38px] border-t-[#0a6db7]  text-[21px] left-[-60px] absolute">
              <ul className=" z-[1000] w-[200px] text-white bg-[#2a004f] shadow ">
                <li className="p-[5px]">
                  <Link
                    to="/alumni-profile"
                    className=" hover:z-[10px] text-white py-[10px] no-underline"
                  >
                    Alumni Profile
                  </Link>
                </li>
                <li className="p-[5px]">
                  <Link
                    to="/alumni-directory"
                    className=" hover:z-[10px] text-white py-[10px] no-underline"
                  >
                    Alumni Directory
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group m-[5px]">
            <Link
              to="/"
              className="hover:border-t-2 hover:z-[10px] text-white py-[10px] font-semibold no-underline hover:no-underline"
            >
              Events
            </Link>
            <div className="hidden group-hover:block border-t-4 top-[38px] border-t-[#0a6db7]  text-[21px] left-[-60px] absolute">
              <ul className=" z-[1000]  w-[300px] text-white bg-[#2a004f] shadow ">
                <li className="p-[5px]">
                  <Link
                    to="/alumni-meet"
                    className=" hover:z-[10px] text-white py-[10px] no-underline"
                  >
                    Alumni Meet
                  </Link>
                </li>
                <li className="p-[5px]">
                  <Link
                    to="/mentorship"
                    className=" hover:z-[10px] text-white no-underline"
                  >
                    <div className="flex gap-[5px]">
                      Mentorship Programs
                      <span className="flex px-[3px] py-[2px] text-[16px] animate-bounce bg-[#e03574] rounded-md">
                        New
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group ">
            <Link
              to="/"
              className="hover:border-t-2 text-white hover:z-[10px] py-[10px] font-semibold no-underline hover:no-underline"
            >
              Donation/Give Back
            </Link>
            <div className="hidden group-hover:block border-t-4 top-[38px] border-t-[#0a6db7] text-[21px] left-[-60px] absolute">
              <ul className=" z-[1000]  w-[300px] text-white bg-[#2a004f] shadow ">
                <li className="p-[5px]">
                  <Link
                    to="/donation-utility"
                    className=" hover:z-[10px] text-white py-[10px] no-underline"
                  >
                    Donation Utilization
                  </Link>
                </li>
                <li className="p-[5px]">
                  <Link
                    to="/donation-gateway"
                    className=" hover:z-[10px] text-white py-[10px] no-underline"
                  >
                    Donate Now
                  </Link>
                </li>
                <li className="p-[5px]">
                  <Link
                    to="/donation-wall"
                    className=" hover:z-[10px] text-white py-[10px] no-underline"
                  >
                    Donar Wall Recognization
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            to="/alumni-chapters"
            className="hover:border-t-2 hover:no-underline text-white hover:z-[10px] py-[10px] font-semibold no-underline"
          >
            Alumni Chapters
          </Link>
          <Link
            to="/convocation"
            className="flex hover:no-underline text-white items-center hover:border-t-2 py-[10px] justify-center gap-[5px] font-semibold no-underline"
          >
            Convocation
            <span className="flex px-[3px] py-[2px] text-[16px] animate-bounce bg-[#e03574] rounded-md">
              New
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
