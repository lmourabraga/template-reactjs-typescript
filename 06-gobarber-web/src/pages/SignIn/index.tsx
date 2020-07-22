import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Enter to login</h1>

          <input placeholder="Email" />

          <input type="password" placeholder="Password" />

          <button type="submit">Sign in</button>

          <a href="forgot">Forget the password?</a>
        </form>

        <a href="signUp">
          <FiLogIn />
          Create account
        </a>
      </Content>

      <Background />
    </Container>
  </>
);

export default SignIn;
