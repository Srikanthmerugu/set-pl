import React from "react";
import "./CustomizedConepy.css";
import { FaHandPointRight } from "react-icons/fa";
import Logo from '../../images/logo.png'


const CustomizedConepy = () => {
  return (
    <div>
      <div className="conepy-container">
        <div className="sub-container">
          <div className="header-container">
        
              <header className="conephy-logo-con">
                <img src={Logo} alt="SET Logo" className="conepy-logo" />
                <h2>Customized<br/> Light Canopy & Shelf</h2>
                <span className="right-thum-show"><FaHandPointRight />
                </span>
              </header>
           

            <div className="content">
              <div className="conephy-image-container">
                <div className="image-box">
                <p>LED</p>
                  <img src="https://img.freepik.com/free-photo/male-farmer-with-beard-check-tea-farm_1150-14747.jpg?t=st=1723225160~exp=1723228760~hmac=df5319efeae815f2d7df59755b7d72018ca3ff9fd01ba95c87f2adacd420f87b&w=1060" alt="LED" />
               
                </div>

                <div className="image-box">
                <p>Fluorescent</p>
                  <img src="https://img.freepik.com/free-photo/male-farmer-with-beard-check-tea-farm_1150-14747.jpg?t=st=1723225160~exp=1723228760~hmac=df5319efeae815f2d7df59755b7d72018ca3ff9fd01ba95c87f2adacd420f87b&w=1060" alt="Fluorescent" />
              
                </div>
                <div className="image-box">
                <p>Canopy With Shelf</p>
                  <img src="https://img.freepik.com/free-photo/male-farmer-with-beard-check-tea-farm_1150-14747.jpg?t=st=1723225160~exp=1723228760~hmac=df5319efeae815f2d7df59755b7d72018ca3ff9fd01ba95c87f2adacd420f87b&w=1060" alt="Canopy With Shelf" />
               
                </div>
              </div>
            </div>
          </div>
          </div>

          <div class="conephy-info-container">
            <div class="conephy-info-box">
                <h3>🌿 Touch Screen Controller With Redundant Facility:</h3>
                <p>Touch Screen Controller which can control temperature (Compressor & Heater - PID & ON/OFF Mode) & Humidity (Humidifier) with Outputs like alarm, water level, door open/close. Optional features - GSM based alarm monitoring, data recording with multiple channels, data extract through USB.</p>
            </div>
            
            <div class="conephy-info-box">
                <h3>🌿 Control Panel including Touch Screen Controller:</h3>
                <p>Three phase with single phase preventer/single phase power supply unit with necessary components like MCB, contactor, fuse, relay, amps indicator, on/off switch and easy termination point. Complete wiring for main system and redundant system in the control panel will be provided with indications and user/maintenance manual.</p>
            </div>

            <div class="conephy-info-box">
                <h3>🌿 Basic LED Control:</h3>
                <p>Basic controller which can control temperature (Compressor & Heater - PID & ON/OFF Mode) & Humidity (Humidifier) with output like alarm, water level, door open/close. Optional features - GSM based alarm monitoring, data recording with multiple channels, data extract through USB.</p>
            </div>

            <div class="conephy-core-strength">
                <h2>Core Strength is to Provide innovative Solution For Creating New Products (MAKE IN INDIA)</h2>
            </div>

            <div class="conephy-features">
                <ul>
                    <li>🌿 Design and interface electro-mechanical devices with indigenous components from different sources/modify with an equivalent.</li>
                    <li>🌿 Design electric power panels including component layout assembly for single phase and three phase (different equipment).</li>
                    <li>🌿 Design electronic circuits with photos sensors, pneumatics sensors, limit sensors, flow sensors, and movement sensors.</li>
                    <li>🌿 Innovative solutions for converting the regular human operations to automated non-human operation.</li>
                    <li>🌿 Temperature, humidity, CO2 control chambers - monitor, operate, vary from various circuits.</li>
                    <li>🌿 Convert normal humid lab to dry lab with the necessary dehumidifiers and control system.</li>
                    <li>🌿 Data logging and app-based controllers for monitoring the parameters and alarm systems.</li>
                </ul>
            </div>
        </div>
        {/* <footer>
            <div class="contact-info">
                <p><strong>Email:</strong> customersupport@set-pl.com</p>
                <p><strong>web:</strong> www.set-pl.com</p>
                <p><strong>Phone:</strong> +91-9959616199 </p>
                <p><strong>Phone:</strong> +91-040-40149561</p>
                <p><strong>Address:</strong> Sri Srinivasa Nivas, Old Bowenpally, Secunderabad-11</p>
            </div>
            <div class="website">
                <a href="http://www.set-pl.com" target="_blank">www.set-pl.com</a>
            </div>
        </footer> */}





        
      </div>
    </div>
  );
};

export default CustomizedConepy;
