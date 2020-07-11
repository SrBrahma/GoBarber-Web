import React, { useCallback } from 'react';
import logoImg from '../../assets/logo.svg';
import { useForm, FormContext } from 'react-hook-form';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import * as yup from 'yup';


const SignupSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().min(6, 'Mínimo de 6 caracteres')
});

export const SignUp: React.FC = () => {

  const methods = useForm({
    validationSchema: SignupSchema,
  });

  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        {/* https://github.com/react-hook-form/react-hook-form/discussions/1864#discussioncomment-25958 */}
        <FormContext {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <h1> Faça seu cadastro </h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} placeholder="Senha" type="password" />
            <Button type="submit"> Cadastrar </Button>
          </form>
        </FormContext>

        <a href="login">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>

    </Container>
  );
};