import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
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

    window.location = '/Datos';
  }

  render() {
    return (
        <div className="curp-div">
            <div className="curp-container">
                <div className="local-header">
                    <p className="text-local-header">Tengo 60 años cumplidos y me quiero vacunar</p>
                </div>

                <div className="local-body">
                    <form className="curp-form" onSubmit={this.onSubmit}>
                        <div className="form-group"> 
                            <input  type="text" placeholder="Introducir CURP"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Confirmar CURP" className="btn btn-primary"/>
                        </div>
                        <div>
                            <a target='_blank' rel="noreferrer" href="https://www.gob.mx/curp/">¿No conoces tu CRUP?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}