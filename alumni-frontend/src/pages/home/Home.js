import Card from "../../components/Card";
import QueryForm from "../../components/QueryForm";
import Meetup from "../../components/Meetup";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Navbar from "../../components/Navbar";
import Corousel from "../../components/Corousel";
import Footer from "../../components/Footer";
import MsgDirector from "../about/MsgDirector";
import ContactUs from "../about/ContactUs";

export default function App() {
  return (
    <>
      <Navbar />
      <Corousel />
      <div className="p-[100px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
      <Meetup />

      <QueryForm />
      <Footer />
    </>
  );
}
