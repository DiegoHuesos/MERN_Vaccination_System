import React, { Component } from 'react';
import axios from 'axios';

export default class Datos extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeApellidoPaterno = this.onChangeApellidoPaterno.bind(this);
    this.onChangeApellidoMaterno = this.onChangeApellidoMaterno.bind(this);
    this.onChangeCorreo = this.onChangeCorreo.bind(this);
    this.onChangeEstadoResidencia = this.onChangeEstadoResidencia.bind(this);
    this.onChangeAlcaldiaResidencia = this.onChangeAlcaldiaResidencia.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      correo: '',
      estadorResidencia: '',
      alcaldiaResidencia: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeApellidoPaterno(e) {
    this.setState({
      apellidoPaterno: e.target.value
    })
  }
  onChangeApellidoMaterno(e) {
    this.setState({
      apellidoMaterno: e.target.value
    })
  }
  onChangeCorreo(e) {
    this.setState({
      correo: e.target.value
    })
  }
  onChangeEstadoResidencia(e) {
    this.setState({
      estadorResidencia: e.target.value
    })
  }
  onChangeAlcaldiaResidencia(e) {
    this.setState({
      alcaldiaResidencia: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);
    const PORT = process.env.PORT || 5000;
    //axios.post('http://localhost:'+PORT+'/users/add', user)
      //.then(res => console.log(res.data));

    this.setState({
      username: ''
    })

    window.location = '/Registrado';
  }

  render() {
    return (
        <div className="curp-div">
            <div className="curp-container div-container ">
                <div className="local-header">
                    <p className="text-local-header">Continúa con tu registro</p>
                </div>

                <div className="local-body body-datos">
                    <form className="curp-form" onSubmit={this.onSubmit}>
                        <div className="form-group row"> 
                          <div className="column">
                            <input  type="text" placeholder="Nombre(s)"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                            <br/>
                            <input  type="text" placeholder="Apellido paterno"
                                required
                                className="form-control"
                                value={this.state.apellidoPaterno}
                                onChange={this.onChangeApellidoPaterno}
                            />
                            <br/>
                              <input  type="text" placeholder="Apellido Materno"
                                  required
                                  className="form-control"
                                  value={this.state.apellidoMaterno}
                                  onChange={this.onChangeApellidoMaterno}
                              />
                              <br/>
                          </div>
                          <div className="column">
                            <input  type="text" placeholder="Correo electrónico"
                                required
                                className="form-control"
                                value={this.state.correo}
                                onChange={this.onChangeCorreo}
                            />
                            <br/>
                            <input  type="text" placeholder="Estado de residencia"
                                required
                                className="form-control"
                                value={this.state.estadorResidencia}
                                onChange={this.onChangeEstadoResidencia}
                            />
                            <br/>
                            <input  type="text" placeholder="Alcaldía de residencia"
                                required
                                className="form-control"
                                value={this.state.alcaldiaResidencia}
                                onChange={this.onChangeAlcaldiaResidencia}
                            />
                            <br/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Registrar" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}