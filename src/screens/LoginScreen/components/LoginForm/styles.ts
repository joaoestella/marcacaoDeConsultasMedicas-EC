import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const Container = styled.View`
  margin-bottom: ${theme.spacing.large}px;
`;

export const FormField = styled.View`
  margin-bottom: ${theme.spacing.small}px;
`;

export const SubmitButton = styled.TouchableOpacity<{ disabled: boolean; loading: boolean }>`
  background-color: ${(props) => 
    props.disabled ? theme.colors.border : theme.colors.primary
  };
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${theme.spacing.medium}px;
  opacity: ${(props) => props.disabled ? 0.6 : 1};
`;

export const SubmitButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;