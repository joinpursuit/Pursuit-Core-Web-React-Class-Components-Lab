import React from "react";

const Contact = (props) => {
  console.log(props.name);
  return <li>{props.name}</li>;
};

export default Contact;
