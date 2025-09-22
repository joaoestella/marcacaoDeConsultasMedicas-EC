import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const Container = styled.View`
  margin-bottom: ${theme.spacing.large}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PrimaryButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.primary};
  padding: 14px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing.small}px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary};
  padding: 14px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const RefreshButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${theme.colors.primary + '20'};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;