import React from 'react';

import { Container } from './styles';

// https://stackoverflow.com/a/57425368/10247962
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {

}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);