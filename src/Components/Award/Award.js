import React from "react";
import "./Award.scss";

const Award = (props) => {
    const data = props.award
  return <div className="award__container">
    <h3>{data.title}</h3>
    <img src={data.image} alt={data.title} />
    <div>
        <h4>{data.issuer}</h4>
        <p>{data.date}</p>
    </div>
    <p>{data.desc}</p>
  </div>;
};

export default Award;
