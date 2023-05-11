import "./styles.scss";
import styled from "styled-components";
import React from "react";

function Button({ text, action, color }) {
  return (
    <a
      className="coco-button"
      href={action}
      target="_blank"
      rel="nofollow"
      style={{ color: color }}
    >
      <span>{text}</span>
    </a>
  );
}

export default Button;
