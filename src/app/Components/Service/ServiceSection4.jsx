import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const ServiceSection4 = ({ data }) => {
  return (
    <div className="cs_solution_content_wrapper cs_accent_bg cs_type_1 h-100">
      <h3 className="cs_service_heading">{data.serviceHeading}</h3>
      <ul className="cs_solution_links cs_style_2 cs_mp0">
        {data.services.map((service, index) => (
          <li key={index}>
            <Link href={service.url}>
              <span className="cs_tab_link_icon_left cs_center">
                {service.id}
              </span>
              <span>{service.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSection4;
