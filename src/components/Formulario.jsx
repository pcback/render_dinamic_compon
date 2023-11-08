import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import { Form, useForm } from "react-hook-form";

const Formulario = ({ setColaboradores, colaboradores }) => {
  console.log(colaboradores, "prueba de colaboradores");

  const [datos, setDatos] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleInputChangue = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
      id: colaboradores.length + 1,
    });
  };

  const handleMit = (e) => {
    e.preventDefault();
    setColaboradores([...colaboradores, datos]);
    insertar();
  };

  const {
    register,
    formState: { errors },
    reset,
  } = useForm();

  function insertar(data) {
    Swal.fire({
      icon: "success",
      title: "Formulario Exitoso",
      showConfirmButton: false,
      timer: 1500,
    });
    reset();
  }

  return (
    <Fragment>
      <form className="Formulario" onSubmit={(e) => handleMit(e)}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <input
              type="text"
              placeholder="Nombre del Colaborador"
              className="form-control"
              name="nombre"
              onChange={(e) => handleInputChangue(e)}
            />
            {errors.nombre?.type === "required" && (
              <div style={{ backgroundColor: "red" }}>Ingresa Nombre</div>
            )}
          </div>

          <div className="form-group col-md-12">
            <input
              type="text"
              placeholder="Correo Electronico"
              className="form-control"
              name="correo"
              onChange={(e) => handleInputChangue(e)}
            />

            {errors.correo?.type === "required" && (
              <div style={{ backgroundColor: "red" }}>Ingresa tu correo</div>
            )}
            {errors.correo?.type === "pattern" && (
              <div style={{ backgroundColor: "red" }}>Correo no valido</div>
            )}
          </div>

          <div className="form-group col-md-12">
            <input
              type="text"
              placeholder="Edad del Trabajador"
              className="form-control"
              name="edad"
              onChange={(e) => handleInputChangue(e)}
            />

            {errors.edad?.type === "required" && (
              <div style={{ backgroundColor: "red" }}>Ingresa Edad</div>
            )}
          </div>

          <div className="form-group col-md-12">
            <input
              type="text"
              placeholder="cargo del Colaborador"
              className="form-control"
              name="cargo"
              onChange={(e) => handleInputChangue(e)}
            />

            {errors.cargo?.type === "required" && (
              <div style={{ backgroundColor: "red" }}>Ingresa Cargo</div>
            )}
          </div>

          <div className="form-group col-md-12">
            <input
              type="number"
              placeholder="Telefono del Colaborador"
              className="form-control"
              name="telefono"
              onChange={(e) => handleInputChangue(e)}
            />

            {errors.telefono?.type === "required" && (
              <div style={{ backgroundColor: "red" }}>Ingresa Telefono</div>
            )}
          </div>

          <div className="form-group col-md-12">
            <button type="submit" className="form-control btn btn-seccess">
              Agregar Colaborador
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
