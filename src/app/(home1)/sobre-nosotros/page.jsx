'use client';
import About from '../../Components/About';
import Section from '../../Components/Section';
import TeamSection from '../../Components/TeamSection';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [institucionData, setInstitucionData] = useState(null);
  const [fetchedTeamData, setFetchedTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://serviciopagina.upea.bo/api/InstitucionUPEA/9');
        const data = await response.json();
        setInstitucionData(data.Descripcion); // Access the "Descripcion" key
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('https://serviciopagina.upea.bo/api/AutoridadAll/9');
        const data = await response.json();
        setFetchedTeamData(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  const aboutData = {
    sectionSubtitle: 'SOBRE NOSOTROS',
    sectionTitle: 'Carrera de Medicina UPEA',
    aboutText: institucionData?.institucion_sobre_ins || '',
    experienceYears: '20+',
    sectionImgUrl: '/assets/img/medicina-edificio-3.jpg',
    experienceTitle: 'Años de vida institucional',
    videoUrl: 'https://www.youtube.com/embed/brPBYiZqixQ',
    videoText: 'Conoce Nuestra Historia',
    iconboxes: [
      {
        imgUrl: '/assets/img/icons/about_icon_1.png',
        title: 'Misión',
        subtitle: institucionData?.institucion_mision || '',
      },
      {
        imgUrl: '/assets/img/icons/about_icon_2.png',
        title: 'Visión',
        subtitle: institucionData?.institucion_vision || '',
      },
    ],
  };

  const teamData = {
    subtitle: 'Autoridades',
    title: 'Autoridades de la Carrera de Medicina',
    sliderData: fetchedTeamData.map((item) => ({
      name: item.nombre_autoridad,
      profession: item.cargo_autoridad,
      imageUrl: item.foto_autoridad,
      facebook: item.facebook_autoridad || '#', // Default to '#' if undefined
      twitter: item.twiter_autoridad || '#', // Default to '#' if undefined
      instagram: '#', // Assuming no Instagram data is provided
      link: '#', // Default to '#' if no specific link is provided
    })),
  };


  return (
    <div className="about-page-area">
      {/* Start About Section */}
      <Section
        topSpaceLg="10"
        topSpaceMd="20"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_about cs_style_1 position-relative'}
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="0"
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}
    </div>
  );
};

export default Page;