import styled from 'styled-components';
import signUpBgImg from '../../assets/sign-up-background.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */


  /* min-width: 500px; */
  width: 100%;
  max-width: 600px;

  margin: 20px 0;

  img {
    min-width: 30%;
    max-width: 100%;
  }

  form {
    margin-top: 70px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  /* Voltar */
  > a {
    margin-top: 60px;
    margin-right: 1px;
    color: #F4EDE8;
    display: flex;
    justify-content: center;
    text-decoration: none;

    transition: 0.12s;
    text-decoration: underline;
    text-decoration-color: transparent;

    &:hover {
      text-decoration-color: ${shade(0.2, '#F4EDE8')};
      color: ${shade(0.1, '#F4EDE8')};
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBgImg}) no-repeat center;
  background-size: cover;
`;