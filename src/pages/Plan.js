import React from 'react';
import Header from '../components/Header';
import SectionPlan from '../components/SectionPlan';
import '../styles.scss';
import '../styles/Plan.scss';

function Plan() {
  return (
    <div className='armaPlan'>
        <Header/>
        <SectionPlan/>
    </div>
  )
}

export default Plan;