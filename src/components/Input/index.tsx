import React from 'react';
import * as Styled from './styled';
import { PropsInputMask } from './types';

const Input: React.FC<PropsInputMask> = ({
  required, placeholder, type, italic, label, dimension, error, ...rest
}) => (
  <Styled.ContainerInput>
    <Styled.CustomLabel italic={italic}>
      {label}
      {required ? <Styled.Asterisk>*</Styled.Asterisk> : ''}
    </Styled.CustomLabel>
    <Styled.CustomInput type={type} placeholder={placeholder} error={error} italic={italic} dimension={dimension} {...rest} />
  </Styled.ContainerInput>
);

export default Input;