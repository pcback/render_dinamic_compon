import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Lista = ({ colaboradores }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Container>
        <Form class="form-inline my-2 my-log-0">
          <InputGroup>
            <FormControl
              onChange={(e) => setSearch(e.targetrt.value)}
              placeholder="Busca un colaborador"
            />
          </InputGroup>
        </Form>
      </Container>
      <Table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores
            .filter((elemento) => {
              if (search.trim() === "") return true;
              const searchLower = search.toLowerCase();
              for (const key in elemento) {
                if (
                  elemento[key].toString().toLowerCase().includes(searchLower)
                ) {
                  return true;
                }
              }
              return false;
            })
            .map((elemento, id) => (
              <tr key={id}>
                <td>{elemento.nombre}</td>
                <td>{elemento.correo}</td>
                <td>{elemento.edad}</td>
                <td>{elemento.cargo}</td>
                <td>{elemento.telefono}</td>
                <td>
                  <button id={elemento.id} className="btn btn-primary">
                    Editar
                  </button>
                  <button
                    id={elemento.id}
                    className="btn btn-danger"
                    onClick={() => seleccionarPais(elemento, "Eliminar")}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Lista;
