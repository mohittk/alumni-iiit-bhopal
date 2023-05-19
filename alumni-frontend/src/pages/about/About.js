import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fullimg from "../../assets/iiitb-full.png"

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-4 p-4 about-us-section flex flex-col justify-center items-center">
      <img className="" src={fullimg} />
      <h3 className="text-[1.5rem]">INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHOPAL (IIIT-Bhopal), is one of the Indian Institutes of Information Technology (PPP) of National Importance in the country, set up with the objective of making available facilities for higher education, research and training in various fields of Information Technology. To address the challenges faced by the Indian IT industry and growth of the domestic IT market, the Ministry of Education (MoE), Government of India intends to establish twenty Indian Institutes of Information Technology (IIIT), on a Not-for-profit Public Private Partnership (N-PPP) basis. The partners in setting up the IIITs would be the MoE, Governments of the respective States where each IIIT will be established, and the industry. 
      </h3>
      <h3 className="text-[1.5rem]">On the same line INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHOPAL (IIIT-Bhopal) is newly established Educational Institute by the Ministry of Education, Government of India and few industry partners as Not-for-profit Public Private Partnership (N-PPP) Institution. The industry Partner of IIIT Bhopal is, Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV, Bhopal M.P.). The capital cost of IIIT Bhopal to be contributed in the ratio of 50:35:15 by the Government of India, Government of Madhya Pradesh and third partners respectively. Approximately 50 acres Land has been identified at Bhopal for setting up the institute.
At present, IIIT-Bhopal is operating from its make shift campus at Maulana Azad National Institute of Technology (MANIT), Bhopal, till the time its new campus is made operational at Bhopal, Madhya Pradesh. Governing Council consisting of distinguished people from academia, industry and government preside over the governance of the Institute. </h3>
      
      </div>
      <Footer />
    </div>
  );
}
