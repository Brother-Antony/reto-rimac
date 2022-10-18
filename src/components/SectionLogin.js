import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import avatar from '../assets/avatar-login.svg';
import avatarMobile from '../assets/avatar-login2.svg';
import checkBox from '../assets/check.svg';
import '../styles/Login.scss';
import axios from 'axios';
import Cookies from 'universal-cookie';

const url = "https://jsonplaceholder.typicode.com/users";
const cookies = new Cookies();

class SectionLogin extends Component {
  state = {
    form: {
      dni: '',
      phone: '',
      placa: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });

    // console.log(this.state.form);
  }

  cotizar = async () => {
    await axios.get(url, {params: {phone: this.state.form.phone, placa: this.state.form.placa}})
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response.length > 0) {
        var respuesta = response[0];

        cookies.set('id', respuesta.id, {path: "/"});
        cookies.set('name', respuesta.name, {path: "/"});

        // alert(`Bienvenid@ ${respuesta.name}`);
        window.location.href = "../Plan";
      } else {
        alert("No es correcto!");
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    if (cookies.get('name')) {
      window.location.href = "../plan";
    }
  }

  render() {
    return (
      <section className='login'>
        <div className='container full-screen'>
            <div className='login__content'>
              <div className='login__content--left'>
                <div className='block-img hide-for-mobile'>
                  <img src={avatar} />
                </div>

                <div className='block-info'>
                    <div className='paragraph gray1 bold-12'>¡NUEVO!</div>
                    <div className='title reg-36 gray-1'>Seguro <span className='red'>Vehicular Tracking</span></div>
                    <div className='paragraph reg-14'>Cuentanos donde le haras seguimiento a tu seguro</div>
                </div>

                <img src={avatarMobile} className='avatar-mobile hide-for-desktop' />
              </div>

              <div className='login__content--right'>
                <div className='block-form'>
                  <div className='title reg-28 gray-1'>Déjanos tus datos</div>

                  <div className='flex-input'>
                    <div className='input__select'>
                      <div className='input__select--select'>
                        <select>
                          <option value="dni">DNI</option>
                          <option value="ruc">RUC</option>
                        </select>

                        <FontAwesomeIcon icon={faAngleDown} className='i' />
                      </div>

                      <input type='number' placeholder='Nro. de doc' className='input__select--input' name='dni' onChange={this.handleChange} />
                    </div>

                    <input type='text' placeholder='Celular' className='input' name='phone' onChange={this.handleChange} />
                    <input type='text' placeholder='Placa' className='input' name='placa' onChange={this.handleChange} />
                  </div>

                  <label className='block-flex check__label'>
                    <input type='checkbox' hidden />
                    <span className="check__label--box green">
                        <img src={checkBox} className='i' />
                    </span>

                    <div className='paragraph reg-12 f-reboto'>Acepto la <Link to='/'>Política de Protección de Datos Personales</Link> y los <Link to='/'>Términos y Condiciones.</Link></div>
                  </label>

                  <div className='block-btn'>
                    <button type='submit' className='btn red' onClick={() => this.cotizar()}>COTÍZALO</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='paragraph lig-12 gray3 text-copy hide-for-mobile'>&copy; 2022 RIMAC Seguros y Reaseguros.</div>
        </div>
      </section>
    )
  }
}

export default SectionLogin;