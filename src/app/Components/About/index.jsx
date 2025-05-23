"use client"
import { useState } from "react";
import { FaAnglesRight, FaRegCircleCheck } from "react-icons/fa6";
import Button from "../Buttons";
import SectionHeading from "../SectionHeading";
import VideoModal from "../VideoSection/Modal";
import Image from "next/image";

const About = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [isExpanded, setIsExpanded] = useState(false);

  const handelClick = () => {
    setIframeSrc(`${data.videoUrl}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 500; // Set the character limit
  const aboutText = isExpanded
    ? data.aboutText
    : data.aboutText.slice(0, maxLength) + (data.aboutText.length > maxLength ? "..." : "");

  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_about_thumb">
              <div className="cs_about_thumb_1">
              <Image src="/assets/img/upea1.jpg" alt="img" width={444} height={505}   />
                <a
                  className="cs_about_player_btn cs_video_open"
                  onClick={handelClick}
                >
                  <span className="cs_player_btn cs_center">
                    <span />
                  </span>
                  <span className="cs_about_play_btn_text">
                    {data.videoText}
                  </span>
                </a>
              </div>
              <div className="cs_about_thumb_2">
              <Image src="/assets/img/medicina-edificio-1.jpeg" alt="img" width={372} height={289}   />
              <Image src="/assets/img/icons/about_shape_1.png" className="cs_about_thumb_shape_2" alt="img" width={129} height={128}   />
              </div>
              <div className="cs_experience_box cs_center" data-aos="zoom-in">
                <p className="cs_experience_box_number">
                  {data.experienceYears}
                </p>
                <p className="cs_experience_box_title">
                  {data.experienceTitle}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="cs_about_content">
              <SectionHeading
                SectionSubtitle={data.sectionSubtitle}
                SectionTitle={data.sectionTitle}
              />
              <p
                className="cs_about_text"
                dangerouslySetInnerHTML={{
                  __html: aboutText,
                }}
              />
              {data.aboutText.length > maxLength && (
                <button onClick={toggleExpand} className="btn cs_post_btn">
                  {isExpanded ? "Ver menos" : "Ver más"}
                </button>
              )}
              <div className="row cs_gap_y_30 mt-5">
                {data.iconboxes.map((box, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="cs_iconbox cs_style_1">
                      <div className="cs_iconbox_head">
                        <div className="cs_iconbox_icon cs_center">
                        <Image src={box.imgUrl} alt="img" width={26} height={26}   />
                        </div>
                        <h3 className="cs_iconbox_title m-0">{box.title}</h3>
                      </div>
                      <p className="cs_iconbox_subtitle mb-0" dangerouslySetInnerHTML={{ __html: box.subtitle }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_section_img">
      <Image src={data.sectionImgUrl} alt="img" width={228} height={494}   />
      </div>
      {/* Video Modal  */}
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default About;
