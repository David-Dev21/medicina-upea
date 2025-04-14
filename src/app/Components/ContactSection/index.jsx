import Image from "next/image";
import SectionHeading from "../SectionHeading";

const ContactSection = ({ data, reverseOrder }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_30">
          {reverseOrder ? (
            <>
              <div className="col-lg-6">
                <div className="cs_contact_thumbnail cs_pl-40">
                  <div className="cs_teeth_shape">
                    <Image src={data.teethShapeImg} className="cs_spinner_img" alt="img" width={167} height={143} />
                  </div>
                  <div className="cs_contact_img">
                    <Image src={data.contactImg} alt="img" width={319} height={497} />
                  </div>
                  <div className="cs_contact_bg_shape">
                    <div className="cs_white_bg_shape" />
                    <div className={`cs_iconbox ${data.iconBox.style}`}>
                      <div className="cs_iconbox_icon cs_center">
                        <Image src={data.iconBox.icon} alt="img" width={62} height={62} />
                      </div>
                      <div className="cs_iconbox_right">
                        <h3 className="cs_iconbox_title">{data.iconBox.title}</h3>
                        <p className="cs_iconbox_subtitle mb-0">{data.iconBox.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <SectionHeading
                  SectionSubtitle={data.sectionSubtitle}
                  SectionTitle={data.SectionTitle}
                />
                <div className="cs_height_25 cs_height_lg_25" />
                <div className="cs_contact_info">
                  <div className="cs_contact_info_section mb-4">
                    <h3 className="cs_contact_info_title h4 mb-3">{data.horarios.titulo}</h3>
                    <ul className="cs_contact_info_list">
                      {data.horarios.dias.map((dia, index) => (
                        <li key={index} className="mb-2">{dia}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="cs_contact_info_section">
                    <h3 className="cs_contact_info_title h4 mb-3">{data.contactInfo.titulo}</h3>
                    <ul className="cs_contact_info_list">
                      <li className="mb-2">
                        <strong>Teléfono:</strong> {data.contactInfo.telefono}
                      </li>
                      <li className="mb-2">
                        <strong>Celular:</strong> {data.contactInfo.celular}
                      </li>
                      <li className="mb-2">
                        <strong>Email:</strong> {data.contactInfo.email}
                      </li>
                      <li className="mb-2">
                        <strong>Dirección:</strong> {data.contactInfo.direccion}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6">
                <SectionHeading
                  SectionSubtitle={data.sectionSubtitle}
                  SectionTitle={data.SectionTitle}
                />
                <div className="cs_height_25 cs_height_lg_25" />
                <div className="cs_contact_info">
                  <div className="cs_contact_info_section mb-4">
                    <h3 className="cs_contact_info_title h4 mb-3">{data.horarios.titulo}</h3>
                    <ul className="cs_contact_info_list">
                      {data.horarios.dias.map((dia, index) => (
                        <li key={index} className="mb-2">{dia}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="cs_contact_info_section">
                    <h3 className="cs_contact_info_title h4 mb-3">{data.contactInfo.titulo}</h3>
                    <ul className="cs_contact_info_list">
                      <li className="mb-2">
                        <strong>Teléfono:</strong> {data.contactInfo.telefono}
                      </li>
                      <li className="mb-2">
                        <strong>Celular:</strong> {data.contactInfo.celular}
                      </li>
                      <li className="mb-2">
                        <strong>Email:</strong> {data.contactInfo.email}
                      </li>
                      <li className="mb-2">
                        <strong>Dirección:</strong> {data.contactInfo.direccion}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_contact_thumbnail cs_pl-40">
                  <div className="cs_teeth_shape">
                    <Image src={data.teethShapeImg} className="cs_spinner_img" alt="img" width={167} height={143} />
                  </div>
                  <div className="cs_contact_img">
                    <Image src={data.contactImg} alt="img" width={319} height={497} />
                  </div>
                  <div className="cs_contact_bg_shape">
                    <div className="cs_white_bg_shape" />
                    <div className={`cs_iconbox ${data.iconBox.style}`}>
                      <div className="cs_iconbox_icon cs_center">
                        <Image src={data.iconBox.icon} alt="img" width={62} height={62} />
                      </div>
                      <div className="cs_iconbox_right">
                        <h3 className="cs_iconbox_title">{data.iconBox.title}</h3>
                        <p className="cs_iconbox_subtitle mb-0">{data.iconBox.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactSection;
