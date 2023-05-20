import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import blue from "@material-ui/core/colors/blue";
import InfoIcon from '@mui/icons-material/Info';
export default function DonationUtility() {
  return (
    <div>
      <Navbar />
      <div class="msgDirectorBanner">
          <img
            src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700360717.jpg"
            style={{ filter: "blur(3px)", width: "100%", height:'400px'}}
          />
          <div class="centerMsgDirector">Donation Utilization</div>
      </div>
      <br />
      <br />

      <div className="p-[100px]">
      <h2 className="text-center">Why IIIT-B needs your support?</h2><br/>
      <p>From access to higher education, to broader career possibilities, to better resources on campus – your gifts are the gateway to making a difference in the lives of our students and the communities we live in.</p>
      <h5>No matter the size of your gift, every rupee counts because collectively, with your classmates, your gift to IIIT Allahabad helps change lives directly/indirectly.</h5>
      <h6 className="text-[#2D5869]">The Alumni Donations will primarily be part of the “Endowment (Corpus) fund” where a part of the collected fund may be spent on a designated category/ head/ activity (out of the four categories namely A. Infrastructure, B. Students Support, C. Academics D. Others)</h6>
      <p>Gifts from you help to buy books, assist students in presenting their award-winning papers at conferences, provide scholarships, purchase library resources and provide emergency support to struggling students. All of these improve the IIITA student experience and create opportunity.</p>
      <p>This is to inform you that any amount of donation made to your alma mater individually (taxpayer of India) is eligible for  tax benefits under section 80G in India. In order to avail the tax deduction providing PAN number at the time of payment is mandatory.</p>
      <p>Sustaining high quality of education and research — with a major impact on the society at large — is pivotal in the growth of an academic institution. Good groundwork support (buildings, equipment, networks, etc,) and high quality human resources (faculty, staff, etc.) are critical to a quality institution. IIIT  Allahabad is a unique institution in its structure. We have 7000 approx. alumni of the institute in 20 years. This means not just more students, but also research across more domains and hence more impact. This requires a delicate balance between quality and affordability of education which can be achieved largely through philanthropic gestures from multiple sources, of which alumni can play a key role.</p>
      </div>

      <div className="py-[20px] px-[100px]" style={{backgroundColor: 'whitesmoke'}}>
        <h2 className="text-[#234144] text-center font-bold mb-[60px]" style={{backgroundColor: '#F1F0C5', borderRadius: '50%', padding: '15px'}}>WHERE YOU CAN DONATE (Proposed)</h2>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img src='https://alumni.iiita.ac.in/wp-content/uploads/2021/02/infrastructure.jpg' style={{boxShadow: '10px 10px 3px 2px rgba(0,0.2,0.2, 0.2', borderRadius: '5%'}} width= '80%'  />
            </div>
            <div class="col-sm">
              <h1 className="font-bold text-[#107CAF] mb-[30px]">1. Infrastructure</h1>
              <h6>Strong infrastructure (classrooms, labs, hostels, sports facilities, etc) is the hallmark of any good institution which is why it forms an important parameter used in all popular rankings of educational institutions. Possible categories under infrastructure are :</h6>
              <ol>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="container" style={{marginTop: '100px', marginBottom: '100px'}}>
          <div class="row">
            
            <div class="col-sm">
              <h1 className="font-bold text-[#107CAF] mb-[30px]">2. Student Support</h1>
              <h6>This is intended to  provide access to meritorious students for their education in IIIT-A despite having inadequate financial resources. Possible categories under Students Support are:</h6>
              <ol>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
              </ol>
            </div>
            <div class="col-sm">
              <img src='https://pbs.twimg.com/media/ECmCvGiWwAEY_Ql.jpg' style={{boxShadow: '10px 10px 3px 2px rgba(0,0.2,0.2, 0.2', borderRadius: '5%'}} width= '75%'  />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img src='https://alumni.iiita.ac.in/wp-content/uploads/2021/02/infrastructure.jpg' style={{boxShadow: '10px 10px 3px 2px rgba(0,0.2,0.2, 0.2', borderRadius: '5%'}} width= '80%'  />
            </div>
            <div class="col-sm">
              <h1 className="font-bold text-[#107CAF] mb-[30px]">3. Academics</h1>
              <h6>To strengthen the Acammics  power of IIITA we create this category in donation purpose.Possible categories under Academics are:</h6>
              <ol>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="container" style={{marginTop: '100px', marginBottom: '100px'}}>
          <div class="row">
            
            <div class="col-sm">
              <h1 className="font-bold text-[#107CAF] mb-[30px]">4. Others</h1>
              <h6>The others contains the two major issue which is given below.</h6>
              <ol>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
              </ol>
            </div>
            <div class="col-sm">
              <img src='https://alumni.iiita.ac.in/wp-content/uploads/2021/02/infrastructure.jpg' style={{boxShadow: '10px 10px 3px 2px rgba(0,0.2,0.2, 0.2', borderRadius: '5%'}} width= '80%'  />
            </div>
          </div>
        </div>
      </div>

      {/* donor wall */}
      <div className="mt-[100px] py-[20px] px-[100px]">
        <h1 className="text-center text-[50px] overline mb-[80px]" style={{fontFamily: "'Roboto Slab', serif"}}>Donor Wall Description</h1>
        <div>
          <div className="flex flex-row items-center justify-center">
            <div style={{backgroundColor: '#8BC13D', width:'42%', height: '3px', marginLeft: '0px'}}></div>
            <div className="p-[10px] w-[180px] flex flex-row justify-center items-center">
              <AcUnitIcon style={{ color: "blue", transform: 'scale(1.5)'}}/>
              <p className="font-bold ml-[10px] text-[19px] mt-[10px]">Platinum Wall</p>
            </div>
            <div style={{backgroundColor: '#8BC13D', width:'40%', height: '3px'}}></div>
          </div><br/>
          <div>
          <h3 style={{fontFamily: "'Courier Prime', monospace", color: 'brown'}}>This wall recognizes those alumni who have made a cumulative contribution equal or above of Rs 50,000/-  to our annual giving campaigns.</h3>
          </div>

          <div className="flex flex-row items-center justify-center">
            <div style={{backgroundColor: '#8BC13D', width:'42%', height: '3px', marginLeft: '0px'}}></div>
            <div className="p-[10px] w-[180px] flex flex-row justify-center items-center">
              <FavoriteIcon style={{ color: "blue", transform: 'scale(1.5)'}}/>
              <p className="font-bold ml-[10px] text-[19px] mt-[10px]">Gold Wall</p>
            </div>
            <div style={{backgroundColor: '#8BC13D', width:'40%', height: '3px'}}></div>
          </div><br/>
          <div>
          <h3 style={{fontFamily: "'Courier Prime', monospace", color: 'brown'}}>This wall recognizes those alumni who have made a cumulative contribution equal or above of Rs 20,000/-  to our annual giving campaigns.</h3>
          </div>

          <div className="flex flex-row items-center justify-center">
            <div style={{backgroundColor: '#8BC13D', width:'42%', height: '3px', marginLeft: '0px'}}></div>
            <div className="p-[10px] w-[180px] flex flex-row justify-center items-center">
              <StarIcon style={{ color: "blue", transform: 'scale(1.5)'}}/>
              <p className="font-bold ml-[10px] text-[19px] mt-[10px]">Sliver Wall</p>
            </div>
            <div style={{backgroundColor: '#8BC13D', width:'40%', height: '3px'}}></div>
          </div><br/>
          <div>
          <h3 style={{fontFamily: "'Courier Prime', monospace", color: 'brown'}}>This wall recognizes those alumni who have made a cumulative contribution equal or above of Rs 5,000/-  to our annual giving campaigns.</h3>
          </div>

          <div className="flex flex-row items-center justify-center">
            <div style={{backgroundColor: '#8BC13D', width:'42%', height: '3px', marginLeft: '0px'}}></div>
            <div className="p-[10px] w-[180px] flex flex-row justify-center items-center">
              <WorkspacePremiumIcon style={{ color: "blue", transform: 'scale(1.5)'}}/>
              <p className="font-bold ml-[10px] text-[19px] mt-[10px]">Bronze Wall</p>
            </div>
            <div style={{backgroundColor: '#8BC13D', width:'40%', height: '3px'}}></div>
          </div><br/>
          <div>
          <h3 style={{fontFamily: "'Courier Prime', monospace", color: 'brown'}}>This wall recognizes those alumni who have made a cumulative contribution equal or above of Rs 1,000/-  to our annual giving campaigns.</h3>
          </div><br/><br/>

          <div style={{backgroundColor: '#C7F1EA', padding: '30px'}} className="flex flex-row justify-center items-center">
            <InfoIcon style={{ color: "blue", transform: 'scale(1.5)'}}/><pre>  </pre>
            <h4>Donor names contributing >= Rs. 1000/- will be displayed on the Alumni Website</h4>
          </div><br/><br/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
