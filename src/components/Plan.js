import React from 'react';
import Header from '../components/Header';
import SectionPlan from '../components/SectionPlan';
import '../Styles.scss';
import '../styles/Plan.scss';

function Plan() {
  return (
    <div className='plan'>
        <Header/>
        <SectionPlan/>
    </div>
  )
}

export default Plan;