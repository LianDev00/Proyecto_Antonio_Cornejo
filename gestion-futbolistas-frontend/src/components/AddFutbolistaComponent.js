import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import FutbolistaService from '../Service/FutbolistaService.js'

const AddFutbolistaComponent = () => {
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [caracteristicas, setCaracteristicas] = useState('')
  const [posicion, setPosicion] = useState('ARQUERO')

  const navigate = useNavigate()
  const { id } = useParams()

  const saveOrUpdateFutbolista = (e) => {
    e.preventDefault()
    const futbolista = {
      nombres,
      apellidos,
      fechaNacimiento,
      caracteristicas,
      posicion,
    }

    if (id) {
      FutbolistaService.updateFutbolista(id, futbolista)
        .then((response) => {
          console.log(response.data)
          navigate('/futbolistas')
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      FutbolistaService.createFutbolista(futbolista)
        .then((response) => {
          console.log(response.data)
          navigate('/futbolistas')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  useEffect(() => {
    if (id) {
      FutbolistaService.getFutbolistaById(id)
        .then((response) => {
          setNombres(response.data.nombres)
          setApellidos(response.data.apellidos)
          setFechaNacimiento(response.data.fechaNacimiento)
          setCaracteristicas(response.data.caracteristicas)
          setPosicion(response.data.posicion)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [id])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">
              {id ? 'Editar Futbolista' : 'Agregar Futbolista'}
            </h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Nombres</label>
                  <input
                    type="text"
                    placeholder="Nombres"
                    name="nombres"
                    className="form-control"
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Apellidos</label>
                  <input
                    type="text"
                    placeholder="Apellidos"
                    name="apellidos"
                    className="form-control"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Fecha de Nacimiento</label>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    className="form-control"
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Características</label>
                  <input
                    type="text"
                    placeholder="Características"
                    name="caracteristicas"
                    className="form-control"
                    value={caracteristicas}
                    onChange={(e) => setCaracteristicas(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Posición</label>
                  <select
                    name="posicion"
                    className="form-control"
                    value={posicion}
                    onChange={(e) => setPosicion(e.target.value)}
                  >
                    <option value="Arquero">Arquero</option>
                    <option value="Defensa">Defensa</option>
                    <option value="Mediocampista">Mediocampista</option>
                    <option value="Delantero">Delantero</option>
                  </select>
                </div>
                <button
                  className="btn btn-success"
                  onClick={saveOrUpdateFutbolista}
                >
                  Guardar
                </button>
                &nbsp;
                <Link to="/futbolistas" className="btn btn-danger">
                  Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFutbolistaComponent
