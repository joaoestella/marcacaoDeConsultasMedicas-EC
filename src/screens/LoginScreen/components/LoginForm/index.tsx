import React from 'react';
import { Input, Button } from 'react-native-elements';
import { ViewStyle } from 'react-native';
import theme from '../../../../styles/theme';

interface LoginFormProps {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
}

const styles = {
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
};

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading,
}) => {
  return (
    <>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={onEmailChange}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={styles.input}
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry
        containerStyle={styles.input}
      />

      <Button
        title="Entrar"
        onPress={onSubmit}
        loading={loading}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />
    </>
  );
};

export default LoginForm;
