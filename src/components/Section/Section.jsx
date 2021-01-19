import React from "react";
import './Section.scss';

const Section = ({ title, children }) => {
  return (
    <section className="container section-main">
      <h1 className="title-main"> {title} </h1>
      {children}
    </section>
  );
};

export default Section;
