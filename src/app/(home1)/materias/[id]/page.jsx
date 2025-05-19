"use client";
import { useEffect, useState } from "react";
import Section from "../../../Components/Section";
import PageHeading from "../../../Components/PageHeading";
import ciclosData from "../../../../data/ciclosData.json";

const MateriaPage = ({ params }) => {
  const [materia, setMateria] = useState(null);

  useEffect(() => {
    let materiaEncontrada = null;
    ciclosData.ciclos.forEach((ciclo) => {
      const found = ciclo.materias.find((m) => m.id.toString() === params.id);
      if (found) {
        materiaEncontrada = {
          ...found,
          ciclo: ciclo.nombre,
        };
      }
    });

    setMateria(materiaEncontrada);
  }, [params.id]);

  if (!materia) {
    return (
      <div className="container py-5">
        <h1 className="text-center">Materia no encontrada</h1>
      </div>
    );
  }

  const pageData = {
    title: materia.nombre,
  };

  return (
    <Section
      topSpaceLg="10"
      topSpaceMd="30"
      bottomSpaceLg="80"
      bottomSpaceMd="120"
    >
      <div className="container mt-5">
        <div className="cs_service_details">
          <h2 className="cs_service_heading mb-4">{materia.nombre}</h2>
          <div className="cs_service_details_text">
            <p>
              <strong>Ciclo:</strong> {materia.ciclo}
            </p>
            <p>
              <strong>Sigla:</strong> {materia.sigla || "No disponible"}
            </p>
            <p>
              <strong>Carga Horaria:</strong>{" "}
              {materia.carga_horaria || "No disponible"}
            </p>
            {materia.teoria && (
              <p>
                <strong>Teoría:</strong> {materia.teoria}
              </p>
            )}
            {materia.practica && (
              <p>
                <strong>Práctica:</strong> {materia.practica}
              </p>
            )}
            {materia.prerequisitos && (
              <p>
                <strong>Prerequisitos:</strong> {materia.prerequisitos}
              </p>
            )}

            {materia.marco_refencial && (
              <>
                <h3 className="cs_iconbox_title h4 mb-4">Marco Referencial</h3>
                <p className="cs_service_subtitle">{materia.marco_refencial}</p>
              </>
            )}

            {materia.unidades && materia.unidades.length > 0 && (
              <>
                <div className="cs_height_47 cs_height_lg_40" />
                <h3 className="cs_iconbox_title h4 mb-4">
                  Contenido del Curso
                </h3>
                <div className="row g-5">
                  {materia.unidades.map((unidad, index) => (
                    <div key={index} className="col-xl-6">
                      <div className="cs_iconbox cs_style_4 cs_radius_15">
                        <div className="cs_iconbox_text">
                          <div className="d-flex align-items-center mb-3">
                            <span
                              className="cs_iconbox_icon cs_center cs_accent_bg me-3 text-white"
                              style={{ width: "40px", height: "40px" }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <h4 className="cs_iconbox_title mb-0">
                              {unidad.nombre_unidad}
                            </h4>
                          </div>
                          <ul className="cs_list cs_style_1 cs_mp0">
                            {unidad.capitulos.map((capitulo, idx) => (
                              <li key={idx}>
                                <i className="cs_accent_color">•</i>
                                {capitulo}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {materia.modulos && materia.modulos.length > 0 && (
              <>
                <div className="cs_height_47 cs_height_lg_40" />
                <div className="cs_iconbox cs_style_4">
                  <div className="cs_iconbox_text">
                    <h3 className="cs_iconbox_title h4 mb-3">Módulos</h3>
                    <ul className="cs_list cs_style_1 cs_mp0">
                      {materia.modulos.map((modulo, index) => (
                        <li key={index}>
                          <i className="cs_accent_color">•</i>
                          {modulo}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MateriaPage;
