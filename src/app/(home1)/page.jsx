"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../Components/HeroSection";
import Section from "../Components/Section";
import CtaSection from "../Components/CtaSection";
import Service from "../Components/Service";
import CtaSection1 from "../Components/CtaSection/CtaSection1";
import BlogSection from "../Components/BlogsSection";

const heroData = {
  primarySlider: [
    {
      bgImageUrl: "/assets/img/medicina-edificio-1.jpeg",
      title: "Carrera de Medicina <span>UPEA</span>",
      contactSubtitle:
        "Formamos profesionales médicos con excelencia académica y compromiso social, preparados para servir a la comunidad con los más altos estándares de calidad en salud.",
      btnText1: "Contactar",
      link: "/contactos",
      btnText2: "Conocer más",
      link2: "/sobre-nosotros",
      iconImgUrl: "/assets/img/logo-medicina.png",
    },
    {
      bgImageUrl: "/assets/img/upea1.jpg",
      title: "Excelencia en <span>Educación Médica</span>",
      contactSubtitle:
        "Contamos con docentes altamente calificados y modernos laboratorios para garantizar una formación integral en ciencias de la salud.",
      btnText1: "Inscripciones",
      link: "https://inscripciones.upea.bo/",
      btnText2: "Plan de Estudios",
      link2: "/sobre-nosotros",
      iconImgUrl: "/assets/img/logo-medicina.png",
    },
    {
      bgImageUrl: "/assets/img/medicina-edificio-3.jpg",
      title: "Compromiso con la <span>Salud</span>",
      contactSubtitle:
        "Nuestros estudiantes realizan prácticas en hospitales y centros de salud, contribuyendo al bienestar de la población alteña y boliviana.",
      btnText1: "Servicios",
      link: "/servicios",
      btnText2: "Ver Capacitaciones",
      link2: "/capacitaciones",
      iconImgUrl: "/assets/img/logo-medicina.png",
    },
  ],
  secondarySlider: [
    "/assets/img/medicina-edificio-1.jpeg",
    "/assets/img/upea1.jpg",
    "/assets/img/medicina-edificio-3.jpg",
  ],
};

// Moveremos ctaData al componente para usarlo con datos dinámicos de la API

const serviceData = {
  subtitle: "NUESTROS MEJORES SERVICIOS",
  title: "Servicios Médicos de Alta Calidad",
  description:
    "La Carrera de Medicina de la UPEA ofrece servicios médicos especializados a través de nuestros docentes y estudiantes,<br> brindando atención de calidad en diferentes áreas de la medicina,<br> contribuyendo al bienestar de nuestra comunidad.",
  services: [
    {
      backgroundImage: "/assets/img/service_bg_3.jpg",
      iconUrl: "/assets/img/icons/service_icon_1.png",
      index: "01",
      title: "Farmacología",
      subtitle: "Investigación médica y desarrollo farmacéutico",
      link: "#",
    },
    {
      backgroundImage: "/assets/img/service_bg_3.jpg",
      iconUrl: "/assets/img/icons/service_icon_2.png",
      index: "02",
      title: "Ortopedia",
      subtitle: "Tratamiento especializado en sistema músculo-esquelético",
      link: "#",
    },
    {
      backgroundImage: "/assets/img/service_bg_3.jpg",
      iconUrl: "/assets/img/icons/service_icon_3.png",
      index: "03",
      title: "Hematología",
      subtitle: "Diagnóstico y tratamiento de enfermedades de la sangre",
      link: "#",
    },
    {
      backgroundImage: "/assets/img/service_bg_3.jpg",
      iconUrl: "/assets/img/icons/service_icon_4.png",
      index: "04",
      title: "Cirugía Plástica",
      subtitle: "Procedimientos reconstructivos y estéticos",
      link: "#",
    },
    {
      backgroundImage: "/assets/img/service_bg_3.jpg",
      iconUrl: "/assets/img/icons/service_icon_5.png",
      index: "05",
      title: "Neurología",
      subtitle: "Atención especializada en sistema nervioso",
      link: "#",
    },
    {
      backgroundImage: "/assets/img/service_bg_3.jpg",
      iconUrl: "/assets/img/icons/service_icon_6.png",
      index: "06",
      title: "Oftalmología",
      subtitle: "Cuidado integral de la salud visual",
      link: "#",
    },
    {
      backgroundImage: "/assets/img/service_bg_3.jpg",
      iconUrl: "/assets/img/icons/service_icon_8.png",
      index: "08",
      title: "Cardiología",
      subtitle: "Diagnóstico y tratamiento de enfermedades cardíacas",
      link: "#",
    },
  ],
};

const Page = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [firstVideo, setFirstVideo] = useState(null);
  const [institucionData, setInstitucionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch blog posts
        const blogResponse = await fetch(
          "https://serviciopagina.upea.bo/api/publicacionesAll/9"
        );
        const blogData = await blogResponse.json();
        setBlogPosts(blogData);

        // Fetch videos
        const videoResponse = await fetch(
          "https://serviciopagina.upea.bo/api/VideosAll/9"
        );
        const videoData = await videoResponse.json();
        if (videoData && videoData.length > 0) {
          setFirstVideo(videoData[0]);
        }
        
        // Fetch institution data
        const institucionResponse = await fetch(
          "https://serviciopagina.upea.bo/api/InstitucionUPEA/9"
        );
        const institucionData = await institucionResponse.json();
        setInstitucionData(institucionData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);  
  const ctaData = {
    imageUrl: "/assets/img/logo-medicina.png",
    title: "ESTRUCTURA ORGÁNICA DE LA CARRERA DE MEDICINA",
    subtitle: "Descarga el organigrama de la carrera de medicina",
    buttonUrl: institucionData?.Descripcion ? `https://serviciopagina.upea.bo/InstitucionUpea/${institucionData.Descripcion.institucion_organigrama}` : "#",
    buttonText: "Descargar",
  };
  
  const ctaData1 = {
    videoLink: firstVideo
      ? firstVideo.video_enlace
      : "https://www.youtube.com/embed/ngK0tRPhm-A",
    videoButtonText: "VER VIDEO",
    subtitle: "NUESTROS VIDEOS",
    title: firstVideo ? firstVideo.video_titulo : "CARRERA DE MEDICINA",
    description: firstVideo
      ? firstVideo.video_breve_descripcion
      : "Descubre más sobre nuestra carrera de medicina",
    buttonLink: "https://www.youtube.com/@CarreraMedicinaUpea",
    buttonText: "Ver más",
    brandImage: "/assets/img/medical_brand.png",
  };

  const blogsData = {
    sectionTitle: "NOTICIAS Y PUBLICACIONES",
    sectionSubtitle: "Últimas Noticias",
    postsData: blogPosts.map((post) => ({
      title: post.publicaciones_titulo,
      subtitle: post.publicaciones_descripcion.replace(/<[^>]*>/g, ""),
      date: new Date(post.publicaciones_fecha).toLocaleDateString(),
      category: post.publicaciones_tipo,
      author: post.publicaciones_autor,
      thumbnail: `https://serviciopagina.upea.bo/Publicaciones/${post.publicaciones_imagen}`,
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    })),
  };

  return (
    <div>
      {/* Start Hero Section */}
      <HeroSection data={heroData} />
      {/* End Hero Section */}

      {/* Start CTA Section */}
      <Section
        className={
          "cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden"
        }
      >
        <CtaSection data={ctaData} />
      </Section>
      {/* End CTA Section */}

      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_white_bg"}
      >
        <Service cardBg={"cs_white_bg"} data={serviceData} />
      </Section>
      {/* End Service Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>
      {/* End CTA Section */}

      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section>
      {/* End Blog Solution */}
    </div>
  );
};

export default Page;
