import styled from 'styled-components';
import signInBgImg from '../../assets/sign-in-background.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  width: 100%;
  max-width: 650px;

  margin: 20px 0;

  img {
    min-width: 30%;
    max-width: 100%;
  }
  form {
    margin-top: 60px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      transition: 0.12s;
      text-decoration: underline;
      text-decoration-color: transparent;

      &:hover {
        text-decoration-color: ${shade(0.2, '#F4EDE8')};
        color: ${shade(0.15, '#F4EDE8')};
      }
    }
  }

  /* Criar conta */
  > a {
    margin-top: 60px;
    margin-right: 1px;
    color: #FF9000;
    display: flex;
    justify-content: center;
    text-decoration: none;

    transition: 0.12s;
    text-decoration: underline;
    text-decoration-color: transparent;

    &:hover {
      text-decoration-color: ${shade(0.2, '#FF9000')};
      color: ${shade(0.1, '#FF9000')};
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBgImg}) no-repeat center;
  background-size: cover;
`;