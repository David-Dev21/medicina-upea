import ContactSection from '../../Components/ContactSection';
import LocationMap from '../../Components/LocationMap/Index';
import Section from '../../Components/Section';
import React from 'react';

const contactData = {
  sectionSubtitle: 'CONTÁCTANOS',
  SectionTitle: 'Información de Contacto',
  teethShapeImg: '/assets/img/icons/hero_shape_3.png',
  contactImg: '/assets/img/medicina-edificio-1.jpeg',
  iconBox: {
    style: 'cs_style_4',
    icon: '/assets/img/icons/call_icon_1.png',
    title: 'Llamadas de Emergencia',
    subtitle: 'Atención 24/7',
  },
  horarios: {
    titulo: 'Horarios de Atención',
    dias: [
      'Lunes a Viernes: Turno Mañana: 8:00 AM - 12:00 PM',
      'Lunes a Viernes: Turno Tarde: 2:00 PM - 5:30 PM',
      'Sábados y Domingos: Cerrado'
    ]
  },
  contactInfo: {
    titulo: 'Información de Contacto',
    telefono: '+591 63120117',
    celular: '+591 22845800',
    email: 'medicina@upea.edu.bo',
    direccion: 'Av. Sucre A, Villa Esperanza - El Alto'
  }
};
  
const mapData = {
  mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.8675128543754!2d-68.19267309999999!3d-16.4892724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ede32e2021e0b%3A0xeed0066107fb7216!2sCarrera%20de%20Medicina%20-%20UPEA!5e0!3m2!1ses!2sbo!4v1681433456789!5m2!1ses!2sbo'
};

const page = () => {
  return (
    <div>
      <Section
        topSpaceLg="10"
        topSpaceMd="30"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <ContactSection reverseOrder={true} data={contactData} />
      </Section>

      <Section bottomSpaceLg="0" bottomSpaceMd="0">
        <LocationMap mapSrc={mapData.mapSrc} />
      </Section>
    </div>
  );
};

export default page;