import React from 'react';
import { Icon } from 'react-native-elements';
import theme from '../../../../styles/theme';
import {
  Container,
  ErrorText,
  DismissButton,
} from './styles';

interface ErrorMessageProps {
  message: string;
  onDismiss: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onDismiss }) => {
  return (
    <Container>
      <Icon
        name="error-outline"
        type="material"
        size={18}
        color={theme.colors.error}
        style={{ marginRight: 8 }}
      />
      <ErrorText>{message}</ErrorText>
      <DismissButton onPress={onDismiss}>
        <Icon
          name="close"
          type="material"
          size={16}
          color={theme.colors.error}
        />
      </DismissButton>
    </Container>
  );
};

export default ErrorMessage;