import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const Container = styled.View`
  margin-top: ${theme.spacing.large}px;
`;

export const RegisterButton = styled.TouchableOpacity<{ disabled: boolean }>`
  background-color: transparent;
  border: 2px solid ${theme.colors.secondary};
  padding: 14px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.large}px;
  opacity: ${(props) => props.disabled ? 0.6 : 1};
`;

export const RegisterButtonText = styled.Text`
  color: ${theme.colors.secondary};
  font-size: 16px;
  font-weight: 600;
`;

export const HintText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  opacity: 0.7;
  font-size: 14px;
  margin-bottom: ${theme.spacing.large}px;
`;

export const DemoCredentials = styled.View`
  background-color: ${theme.colors.surface};
  border-radius: 8px;
  padding: ${theme.spacing.medium}px;
  border: 1px solid ${theme.colors.border};
`;

export const DemoTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small}px;
  text-align: center;
`;

export const DemoItem = styled.View`
  padding: 4px 0;
`;

export const DemoText = styled.Text`
  font-size: 12px;
  color: ${theme.colors.text};
  text-align: center;
  opacity: 0.8;
`;