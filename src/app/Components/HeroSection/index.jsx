"use client"
import { useEffect, useRef, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Slider from "react-slick";
import Button from "../Buttons";
import Image from "next/image";

const HeroSection = ({ data }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  };

  return (
    <section className="position-relative">
      <div className="cs_hero_slider">
        <Slider
          asNavFor={nav2}
          ref={slider1}
          {...settings}
        >
          {data?.primarySlider.map((item, index) => (
            <div key={index}>
              <div
                className="cs_hero cs_style_1 cs_center cs_bg_filed"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.bgImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="container">
                  <div className="cs_hero_text">
                    <div className="cs_hero_text_in">
                      <h1
                        className="cs_hero_title"
                        style={{
                          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                          color: '#ffffff'
                        }}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <p
                        className="cs_hero_subtitle text-white"
                        style={{
                          textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                          fontWeight: '500',
                          fontSize: '1.1rem',
                          maxWidth: '800px',
                          margin: '0 auto',
                          lineHeight: '1.6'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: item.contactSubtitle,
                        }}
                      />
                      <div className="cs_hero_btns mt-4">
                        <Button
                          btnText={item.btnText1}
                          variant="cs_btn cs_style_1 cs_color_1"
                          btnIcons={<FaAnglesRight />}
                          btnUrl={item.link}
                        />
                        <Button
                          btnText={item.btnText2}
                          variant="cs_btn cs_style_1 cs_color_2"
                          btnIcons={<FaAnglesRight />}
                          btnUrl={item.link2}
                        />
                      </div>
                    </div>
                    <div className="cs_hero_shape">
                      <Image 
                        src={item.iconImgUrl} 
                        className="cs_spinner_img" 
                        alt="img" 
                        width={142} 
                        height={190} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {data?.secondarySlider && (
        <div className="cs_hero_slider_nav">
          <Slider
            asNavFor={nav1}
            ref={slider2}
            {...settings2}
          >
            {data.secondarySlider.map((item, index) => (
              <div className="cs_hero_slider_thumb_mini" key={index}>
                <Image 
                  src={item} 
                  alt="Thumbnail" 
                  width={90} 
                  height={92} 
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
