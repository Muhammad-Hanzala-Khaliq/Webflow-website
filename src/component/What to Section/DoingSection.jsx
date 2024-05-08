import React from 'react'
import './Doing.css'
import { IoSunnyOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaWebflow } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import img from '../../assets/Grid IMg.png';

const DoingSection = () => {
  return (
    <>
     <section className='doing-section' id="doing">
        <div className="container">
            <div className="doing-heading">
                <h2>What We do</h2>
            </div>

            <div className="doing-section-col">
                <div className="first-col"  data-aos="fade-up"
    data-aos-duration="1500">
                    <div className="icon">
                    <IoSunnyOutline className="sub_icon" />
                    </div>
                    <h4>Web Design</h4>
                    <p>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                </div>
                <div className="first-col"  data-aos="fade-down"
    data-aos-duration="1500">
                    <div className="icon">
                    <CiStar className="sub_icon" />
                    </div>
                    <h4>UI/UX Design</h4>
                    <p>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                </div>
                <div className="first-col"  data-aos="fade-up"
    data-aos-duration="1500">
                    <div className="icon">
                    <HiMiniComputerDesktop className="sub_icon" />
                    </div>
                    <h4>Responsive Design</h4>
                    <p>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                </div>
                <div className="first-col fourth-col" data-aos="fade-down"
    data-aos-duration="1500" >
                <div className="image-col">
                    <div className="icon">
                    <MdOutlineShoppingBag className="sub_icon" />
                    </div>
                    <h4>E-commerce Solutions:</h4>
                    <p>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                    </div>
                    <div className="image-2-col">
                    <img src={img} alt="" />
                    </div>
             
                </div>

                {/* new--grid */}
                <div className="first-col fifth-col" data-aos="fade-up"
    data-aos-duration="1500">
                <div className="sub__col">
                    <div className="icon">
                    <FaWebflow className="sub_icon" />
                    </div>
                    <h4>E-commerce Solutions:</h4>
                    <p>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                    </div>
                    <div className="sub__col-2">
                    <FaWebflow className='icon__sub-col' />
                    </div>
                </div>
                <div className="first-col" data-aos="fade-down"
    data-aos-duration="1500">
                    <div className="icon">
                    <IoImageOutline className="sub_icon" />
                    </div>
                    <h4>Custom Development</h4>
                    <p>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                </div>
            </div>
        </div>
     </section> 
    </>
  )
}

export default DoingSection
