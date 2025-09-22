import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ActivityIndicator } from 'react-native';
import theme from '../../styles/theme';

// Componentes locais
import LoginForm from './components/LoginForm';
import LoginHeader from './components/LoginHeader';
import LoginActions from './components/LoginActions';

// Hooks customizados
import { useLogin } from './hooks/useLogin';

// Estilos
import {
  Container,
  ScrollContainer,
  ContentContainer,
  ErrorText,
} from './styles';


const LoginScreen: React.FC = () => {
  const {
    email,
    password,
    loading,
    error,
    setEmail,
    setPassword,
    handleLogin,
    handleRegister,
  } = useLogin();

  return (
    <Container>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollContainer>
          <ContentContainer>
            {/* Cabeçalho da tela */}
            <LoginHeader />

            {/* Formulário de login */}
            <LoginForm
              email={email}
              password={password}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
              onSubmit={handleLogin}
              loading={loading}
            />

            {/* Mensagem de erro */}
            {error ? <ErrorText>{error}</ErrorText> : null}

            {/* Ações de registro */}
            <LoginActions
              onRegister={handleRegister}
              loading={loading}
            />
          </ContentContainer>
        </ScrollContainer>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default LoginScreen;