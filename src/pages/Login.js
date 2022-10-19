import React from 'react';
import Header from '../components/Header';
import SectionLogin from '../components/SectionLogin';
import '../styles.scss';
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className='account'>
      <Header/>
      <SectionLogin/>
    </div>
  )
}

export default Login;