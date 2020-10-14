import React from "react";
import styled from "styled-components";

function ListItem({ children, className }) {
  return <li className={className}>{children}</li>;
}

export default ListItem;
