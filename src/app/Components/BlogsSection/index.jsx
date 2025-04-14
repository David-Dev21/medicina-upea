"use client"
import Slider from "react-slick";
import Button from "../Buttons";
import { FaAngleRight } from "react-icons/fa6";
import SectionHeading from "../SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const BlogSection = ({ data }) => {
  const [expandedPosts, setExpandedPosts] = useState({});

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    fade: false,
    swipeToSlide: true,
    rows: 1,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: "cs_pagination cs_style_2",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const truncateText = (text, limit = 100) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  const toggleExpand = (index) => {
    setExpandedPosts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <div className="container">
        <SectionHeading
          SectionSubtitle={data.sectionTitle}
          SectionTitle={data.sectionSubtitle}
          variant={"text-center"}
        />

        <div className="cs_height_50 cs_height_lg_50" />
        <div className="container">
          <div className="row">
            {data.postsData.map((post, index) => (
              <div key={index} className="col-md-4 mb-4">
                <article className="cs_post cs_style_1" style={{ position: 'relative' }}>
                  <img src={post.thumbnail} alt="img" className="img-fluid" style={{ cursor: 'pointer' }} onClick={() => window.open(post.thumbnail, '_blank')} />
                  <div className="cs_post_category position-absolute">
                    {post.category}
                  </div>
                  <div className="cs_post_content position-relative">
                    <div className="cs_post_meta_wrapper">
                      <div className="cs_posted_by cs_center position-absolute">
                        {post.date}
                      </div>
                      <div className="cs_post_meta_item">
                        <Image src={post.authorIcon} alt="img" width="15" height="14" />
                        <span>Por: {post.author || 'Direccion'}</span>
                      </div>
                      <div className="cs_post_meta_item">
                        <Image src={post.commentIcon} alt="img" width="14" height="13" />
                        <span>Tipo: {post.category}</span>
                      </div>
                    </div>
                    <h3 className="cs_post_title">
                      {post.title}
                    </h3>
                    <div>
                      <p
                        className="cs_post_subtitle"
                        dangerouslySetInnerHTML={{
                          __html: expandedPosts[index] ? post.subtitle : truncateText(post.subtitle),
                        }}
                      ></p>
                      {post.subtitle.length > 100 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="btn cs_post_btn"
                        >
                          {expandedPosts[index] ? 'Ver menos' : 'Ver más'}
                        </button>
                      )}
                    </div>
                    <div className="cs_post_shape position-absolute" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
