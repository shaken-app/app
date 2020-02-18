import React, { ReactChild } from "react";
import styled from "styled-components";

interface RadioItem {
  id: string;
  __typename?: string;
  name: string;
  children: ReactChild | string;
  onClick: () => void;
  className?: string;
  checked: boolean;
}

const Radio = styled.input`
  width: 100%;
`;

const RadioItem = ({
  id,
  children,
  onClick,
  __typename,
  className,
  checked,
  ...rest
}: RadioItem) => (
  <div>
    <label key={id} htmlFor={id}>
      <span>{children}</span>
    </label>
    <Radio
      type="radio"
      id={id}
      name={__typename}
      onClick={onClick}
      checked={checked}
      {...rest}
    />
  </div>
);

export default RadioItem;
