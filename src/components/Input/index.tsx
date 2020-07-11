import React, { useState, useCallback } from 'react';
import { Container, Error } from './styles';
import { IconType } from 'react-icons';
import { useFormContext } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  name: string,
  icon?: IconType;
}

export const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { register, errors } = useFormContext();

  const handleInputBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setIsFilled(!!e.target.value);
  }, []);

  const error = errors[rest.name]?.message;

  return (
    <>
      <Container isFocused={isFocused} isFilled={isFilled} hasError={!!error}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={handleInputBlur}
          ref={register}
          {...rest}
        />
        {error && <FiAlertCircle size={20} />}

      </Container>

      {/* \u200b https://stackoverflow.com/a/29355130/10247962 */}

      <Error>{error ? error : ''}</Error>
    </>
  );
};