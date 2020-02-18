import React from "react";
import styled from "styled-components";
import { InputElement } from "../interfaces";

const Label = styled.label`
  display: grid;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: 0 none;
  box-shadow: 0 6px 6px -4px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-weight: 100;
  background: linear-gradient(#ffffff24, #ffffff40);
`;

export default ({ label, textarea, id, ...rest }: InputElement) => {
  const props = {
    placeholder: label,
    ...rest
  };

  return (
    <Label htmlFor={id}>
      <h3>{label}</h3>
      {textarea ? <textarea {...props} /> : <Input {...props} />}
    </Label>
  );
};
