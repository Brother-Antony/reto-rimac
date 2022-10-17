import React from 'react';
import Header from '../components/Header';
import SectionGracias from '../components/SectionGracias';
import '../Styles.scss';
import '../styles/Gracias.scss';

const Gracias = () => {
  return (
    <div className="gracias">
      <Header/>
      <SectionGracias/>
      <div className='gracias__footer container hide-for-desktop'>
        <div className='paragraph lig-12 gray3'>&copy; 2022 RIMAC Seguros y Reaseguros.</div>
      </div>
    </div>
  )
}

export default Gracias;