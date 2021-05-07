import React, { Component } from 'react';
import axios from 'axios';

export default class Registrado extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
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

    window.location = '/';
  }

  render() {
    return (
        <div className="curp-div">
            <div className="curp-container">
                <div className="local-header exitoso">
                    <p className="text-local-header">¡Registro exitoso!</p>
                </div>

                <div className="local-body mensaje-exito">
                    <p>Cuando sea tu turno, recibirás un correo con tu número de 
                      folio, hora, fecha y lugar de aplicación de la vacuna. 
                      <br/> 
                      <br/> 
                      Si tienes alguna duda, envía un correo a dudas_vacunas@gob.mx 
                      o llama al 55 5464 7890.  
                    </p>
                </div>
            </div>
        </div>
    )
  }
}