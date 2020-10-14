import styled from "styled-components";
import React from "react";

function List({ component, children, className }) {
  return (
    <ListElement className={className} as={component}>
      {children}
    </ListElement>
  );
}

export default List;

const ListElement = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
