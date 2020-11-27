import React from 'react';
import Button from '../Button/Button';
import './Announcement.css';

const Announcement = () => {
  return (
    <div className="announcement">
      <h3>Join 20 000+ developers & merchants. Testing is forever free, no credit card required.</h3>
      <Button to="/register" yel="true" text="SING UP FREE" classh="classh"/>
    </div>
  );
};

export default Announcement;