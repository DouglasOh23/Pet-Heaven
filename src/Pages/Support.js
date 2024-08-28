import React, { useState } from 'react';
import EventsList from '../Components/EventsList';
import "./Support.css";
import DonateForm from '../Components/DonateForm';

const Support = () => {
  return (
    <div className="support-page">
      <h1>Register as a Supporter of Pet Heaven</h1>
      <DonateForm/>
      <EventsList/>
    </div>
  );
};

export default Support;
