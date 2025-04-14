import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaRegClock,
  FaGithub,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';

const Footer = () => {
  const data = {
    backgroundImage: '/assets/img/footer_bg.jpg',
    logo: '/assets/img/logo-medicina.png',
    contactText:
      'Horario de Atención: <br /> Lunes - Viernes: Turno Mañana: 8:00 AM - 12:00 PM <br /> Turno Tarde: 2:00 PM - 5:30 PM <br /> Sábados y Domingos: Cerrado',
    contactText2: 'Av. Sucre A, Villa Esperanza - El Alto',
    contactText3: '+591 2 2845236',
    facebookHref: 'https://www.facebook.com/p/Medicina-UPEA-Bolivia-La-Paz-El-Alto-100057259548064/?locale=es_LA',
    twitterHref: '/',
    instagramHref: 'https://www.instagram.com/explore/locations/1525411680951805/medicina-upea-bolivia-la-paz-el-alto/',
    youtubeHref: 'https://www.youtube.com/@CarreraMedicinaUpea',
    widgets: [
      {
        title: 'Enlaces Rápidos',
        links: [
          { href: '/', text: 'Inicio' },
          { href: '/sobre-nosotros', text: 'Nuestra Carrera' },
          { href: '/comunicados', text: 'Comunicados' },
          { href: '/capacitaciones', text: 'Capacitaciones' },
          { href: '/contactos', text: 'Contacto' },
        ],
      },
      {
        title: 'Enlaces Académicos',
        links: [
          { href: 'https://matriculacion.upea.bo/', text: 'Matriculación' },
          { href: 'https://inscripciones.upea.bo/', text: 'Inscripciones' },
          { href: 'https://virtualmedicina.upea.bo/', text: 'Aula Virtual' },
          { href: 'https://administracionpaginas.upea.edu.bo/login', text: 'Ingresar' },
          { href: 'https://www.upea.edu.bo/', text: 'UPEA' },
        ],
      },
    ],
    recentPosts: [
      {
        href: '/comunicados',
        image: '/assets/img/recent_post_1.png',
        date: '13 abr 2025',
        title: 'Últimos comunicados de la Carrera',
      },
      {
        href: '/capacitaciones',
        image: '/assets/img/recent_post_2.png',
        date: '13 abr 2025',
        title: 'Próximas capacitaciones médicas',
      },
    ],
    copyrightText: 'Copyright © 2025 Carrera de Medicina - UPEA, Todos los derechos reservados.',
  };

  return (
    <footer
      className="cs_footer cs_blue_bg cs_bg_filed cs_white_color"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_accent_bg">
              <div className="cs_footer_logo">
                <Image src={data.logo} alt="Logo Medicina UPEA" width={100} height={100} />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <FaRegClock />
                  </i>
                  <span dangerouslySetInnerHTML={{ __html: data.contactText }} />
                </li>
                <li>
                  <i style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <FaLocationDot />
                  </i>
                  <span dangerouslySetInnerHTML={{ __html: data.contactText2 }} />
                </li>
                <li>
                  <i style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <FaPhoneAlt />
                  </i>
                  <span dangerouslySetInnerHTML={{ __html: data.contactText3 }} />
                </li>
              </ul>
              <div className="cs_social_btns cs_style_1">
                <Link href={data.facebookHref} className="cs_center" target="_blank">
                  <i><FaFacebookF /></i>
                </Link>
                <Link href={data.instagramHref} className="cs_center" target="_blank">
                  <i><FaInstagram /></i>
                </Link>
                <Link href={data.youtubeHref} className="cs_center" target="_blank">
                  <i><FaYoutube /></i>
                </Link>
              </div>
            </div>
          </div>

          {data.widgets.map((widget, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title">{widget.title}</h2>
                <ul className="cs_footer_widget_nav_list cs_mp_0">
                  {widget.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cs_footer_bottom cs_primary_bg">
      <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between pb-0">
            <a href="#" id="scrollUp" className="scroll-icon">
              <i className="far fa-angle-double-up" />
            </a>
            <p className="mx-auto pt-2">
              <a href="https://utic.upea.bo/"
                target="_blank">
              ©U-TIC 2025  
              </a>
               {" "}| Desarrollado por
              <a
                href="https://www.linkedin.com/in/david-mamani-a3b745352/"
                target="_blank"
                className="ms-2"
              >
                {" "}
                RubenDavidMA
              </a>
              <a
                href="https://github.com/David-Dev21"
                target="_blank"
                className="ms-2"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/59179550230"
                target="_blank"
                className="ms-2"
              >
                <FaWhatsapp />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
