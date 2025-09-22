import React from 'react';
import { Button, Text } from 'react-native-elements';
import { ViewStyle } from 'react-native';
import theme from '../../../../styles/theme';

interface LoginActionsProps {
  onRegister: () => void;
  loading: boolean;
}

const styles = {
  registerButton: {
    marginTop: 10,
    width: '100%',
  },
  registerButtonStyle: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
  },
  hint: {
    marginTop: 20,
    textAlign: 'center' as const,
    color: theme.colors.text,
  },
};

const LoginActions: React.FC<LoginActionsProps> = ({ 
  onRegister, 
  loading 
}) => {
  return (
    <>
      <Button
        title="Cadastrar Novo Usuário"
        onPress={onRegister}
        containerStyle={styles.registerButton as ViewStyle}
        buttonStyle={styles.registerButtonStyle}
      />

      <Text style={styles.hint}>
        Primeiro acesso? Cadastre-se como Admin ou Paciente.
      </Text>
    </>
  );
};

export default LoginActions;