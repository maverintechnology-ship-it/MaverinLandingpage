import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
        <div className="icon-wrapper">
            {icon}
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
    </div>
  );
};

export default ServiceCard;
