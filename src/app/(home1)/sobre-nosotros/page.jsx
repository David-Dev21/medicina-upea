"use client";
import About from "../../Components/About";
import Section from "../../Components/Section";
import TeamSection from "../../Components/TeamSection";
import ServiceSection4 from "../../Components/Service/ServiceSection4";
import React, { useEffect, useState } from "react";
import ciclosData from "../../../data/ciclosData.json";
import CtaSection from "../../Components/CtaSection";

const Page = () => {
  const [institucionData, setInstitucionData] = useState(null);
  const [fetchedTeamData, setFetchedTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://serviciopagina.upea.bo/api/InstitucionUPEA/9"
        );
        const data = await response.json();
        setInstitucionData(data.Descripcion); // Access the "Descripcion" key
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(
          "https://serviciopagina.upea.bo/api/AutoridadAll/9"
        );
        const data = await response.json();
        setFetchedTeamData(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const aboutData = {
    sectionSubtitle: "SOBRE NOSOTROS",
    sectionTitle: "Carrera de Medicina UPEA",
    aboutText: institucionData?.institucion_sobre_ins || "",
    experienceYears: "20+",
    sectionImgUrl: "/assets/img/medicina-edificio-3.jpg",
    experienceTitle: "Años de vida institucional",
    videoUrl: "https://www.youtube.com/embed/brPBYiZqixQ",
    videoText: "Conoce Nuestra Historia",
    iconboxes: [
      {
        imgUrl: "/assets/img/icons/about_icon_1.png",
        title: "Misión",
        subtitle: institucionData?.institucion_mision || "",
      },
      {
        imgUrl: "/assets/img/icons/about_icon_2.png",
        title: "Visión",
        subtitle: institucionData?.institucion_vision || "",
      },
    ],
  };

  const teamData = {
    subtitle: "Autoridades",
    title: "Autoridades de la Carrera de Medicina",
    sliderData: fetchedTeamData.map((item) => ({
      name: item.nombre_autoridad,
      profession: item.cargo_autoridad,
      imageUrl: item.foto_autoridad,
      facebook: item.facebook_autoridad || "#", // Default to '#' if undefined
      twitter: item.twiter_autoridad || "#", // Default to '#' if undefined
      instagram: "#", // Assuming no Instagram data is provided
      link: "#", // Default to '#' if no specific link is provided
    })),
  };  
  
  const ctaData = {
    imageUrl: "/assets/img/logo-medicina.png",
    title: "PLAN DE ESTUDIOS DE LA CARRERA DE MEDICINA",
    subtitle: "La carrera de medicina tiene una duración de 6 años",
    buttonUrl: "/assets/doc/PLAN DE ESTUDIOS.pdf",
    buttonText: "Descargar",
  };  const ctaData1 = {
    imageUrl: "/assets/img/logo-medicina.png",
    title: "CUADRO DE REQUISITOS Y PRE REQUISITOS",
    subtitle: "Estructura académica completa de la carrera",
    buttonUrl: "/assets/img/requisitos_y_prerequisitos.png",
    buttonText: "Ver Requisitos",
  };

  // Crear un serviceData para cada ciclo
  const serviciosData = ciclosData.ciclos.map((ciclo) => ({
    serviceHeading: ciclo.nombre,
    services: ciclo.materias.map((materia) => ({
      id: materia.id,
      title: materia.nombre,
      url: `/materias/${materia.id}`,
    })),
  }));

  return (
    <div className="about-page-area">
      {/* Start About Section */}
      <Section
        topSpaceLg="10"
        topSpaceMd="20"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_about cs_style_1 position-relative"}
      >
        <About data={aboutData} />
      </Section>      {/* End About Section */}
      {/* Start CTA Section - Plan de Estudios */}
      <Section
        className={
          "cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden"
        }
      >
        <CtaSection data={ctaData} />
      
      </Section>
      {/* End CTA Section */}

      {/* Multiple Service Sections - One for each ciclo */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <h2 className="text-center">Ciclos de la Carrera de Medicina</h2>
        <div className="container-fluid bg-light py-4">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {serviciosData.map((serviceData, index) => (
                <div key={index} className="col">
                  <ServiceSection4 data={serviceData} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      {/* End Service Section */}

      {/* Start CTA Section - Requisitos y Pre-requisitos */}
      <Section
        className={
          "cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden"
        }
      >
        <CtaSection data={ctaData1} />
      </Section>
      {/* End CTA Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="0"
      >
        <TeamSection
          hr={true}
          variant={"cs_pagination cs_style_2"}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}
    </div>
  );
};

export default Page;
