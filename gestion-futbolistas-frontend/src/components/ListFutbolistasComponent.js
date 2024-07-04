import React, { useEffect, useState } from 'react';
import FutbolistaService from '../Service/FutbolistaService.js'
import { Link } from 'react-router-dom';

export const ListFutbolistasComponent = () => {
  const [futbolistas, setFutbolistas] = useState([]);

  useEffect(() => {
    listarFutbolistas();
  }, []);

  const listarFutbolistas = () => {
    FutbolistaService.getAllFutbolistas()
      .then((response) => {
        setFutbolistas(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteFutbolista = (futbolistaId) => {
    FutbolistaService.deleteFutbolista(futbolistaId)
      .then((response) => {
        listarFutbolistas();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Lista de Futbolistas</h2>
      <Link to="/add-futbolista" className="btn btn-primary mb-2">
        Agregar Futbolista
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Fecha de Nacimiento</th>
            <th>Características</th>
            <th>Posición</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {futbolistas.map((futbolista) => (
            <tr key={futbolista.id}>
              <td>{futbolista.id}</td>
              <td>{futbolista.nombres}</td>
              <td>{futbolista.apellidos}</td>
              <td>{futbolista.fechaNacimiento}</td>
              <td>{futbolista.caracteristicas}</td>
              <td>{futbolista.posicion}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-futbolista/${futbolista.id}`}>
                  Editar
                </Link>
                <button
                  style={{ marginLeft: '10px' }}
                  className="btn btn-danger"
                  onClick={() => deleteFutbolista(futbolista.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListFutbolistasComponent;
